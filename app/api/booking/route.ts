import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import * as XLSX from "xlsx";

const EXCEL_FILE_PATH = path.join(process.cwd(), "public", "registrations.xlsx");

interface BookingPayload {
  timestamp: string;
  dateFormatted: string;
  timeFormatted: string;
  name: string;
  phone: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
}

function updateExcelSheet(payload: BookingPayload) {
  try {
    const sheetName = "Registrations";
    const newRow = {
      Timestamp: payload.timestamp,
      Date: payload.dateFormatted,
      Time: payload.timeFormatted,
      "Patient Name": payload.name,
      "Phone Number": payload.phone,
      "Service Requested": payload.service,
      "Preferred Date": payload.preferredDate,
      "Preferred Time": payload.preferredTime,
      "Additional Message": payload.message,
      Status: "New Registration",
    };

    let workbook: XLSX.WorkBook;
    let existingRows: Record<string, unknown>[] = [];

    if (fs.existsSync(EXCEL_FILE_PATH)) {
      const fileBuffer = fs.readFileSync(EXCEL_FILE_PATH);
      workbook = XLSX.read(fileBuffer, { type: "buffer" });
      const targetSheet = workbook.Sheets[sheetName] || workbook.Sheets[workbook.SheetNames[0]];
      if (targetSheet) {
        existingRows = XLSX.utils.sheet_to_json(targetSheet);
      }
    } else {
      workbook = XLSX.utils.book_new();
    }

    existingRows.push(newRow);
    const updatedWorksheet = XLSX.utils.json_to_sheet(existingRows);

    // Replace or add worksheet
    workbook.Sheets[sheetName] = updatedWorksheet;
    if (!workbook.SheetNames.includes(sheetName)) {
      workbook.SheetNames.push(sheetName);
    }

    const publicDir = path.join(process.cwd(), "public");
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }

    const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "buffer" });
    fs.writeFileSync(EXCEL_FILE_PATH, excelBuffer);
  } catch (err) {
    console.error("Excel update error:", err);
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, service, date, time, message } = body;

    if (!name || !phone || !service) {
      return NextResponse.json(
        { success: false, error: "Name, phone, and service are required." },
        { status: 400 }
      );
    }

    const payload: BookingPayload = {
      timestamp: new Date().toISOString(),
      dateFormatted: new Date().toLocaleDateString("en-IN", {
        timeZone: "Asia/Kolkata",
        dateStyle: "medium",
      }),
      timeFormatted: new Date().toLocaleTimeString("en-IN", {
        timeZone: "Asia/Kolkata",
        timeStyle: "short",
      }),
      name: name.trim(),
      phone: phone.trim(),
      service: service.trim(),
      preferredDate: date || "Flexible",
      preferredTime: time || "Flexible",
      message: message ? message.trim() : "None",
    };

    // 1. Auto-append to local Excel spreadsheet (.xlsx)
    updateExcelSheet(payload);

    // 2. Google Sheets / Excel Cloud Webhook Integration
    const webhookUrl =
      process.env.GOOGLE_SHEET_WEBHOOK_URL ||
      process.env.EXCEL_WEBHOOK_URL ||
      process.env.NEXT_PUBLIC_GOOGLE_SHEET_WEBHOOK_URL;

    if (webhookUrl) {
      try {
        const response = await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
          redirect: "follow",
        });
        console.log("Google Sheets Webhook Sync Status:", response.status);
      } catch (err) {
        console.error("Google Sheets Webhook submission error:", err);
      }
    } else {
      console.log("No GOOGLE_SHEET_WEBHOOK_URL set. Storing locally in registrations.xlsx");
    }

    return NextResponse.json({
      success: true,
      message: "Consultation request recorded and synced to Excel successfully.",
      excelUrl: "/api/booking/excel",
      data: payload,
    });
  } catch (error) {
    console.error("Booking API error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error." },
      { status: 500 }
    );
  }
}

