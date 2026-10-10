import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  const filePath = path.join(process.cwd(), "public", "registrations.xlsx");

  if (!fs.existsSync(filePath)) {
    return NextResponse.json(
      { error: "No registrations Excel file found yet. Submit a booking form first!" },
      { status: 404 }
    );
  }

  const fileBuffer = fs.readFileSync(filePath);

  return new NextResponse(fileBuffer, {
    headers: {
      "Content-Type":
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "Content-Disposition": 'attachment; filename="Dr_Arora_Registrations.xlsx"',
    },
  });
}
