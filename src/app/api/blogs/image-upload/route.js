import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from "path";

export async function POST(request) {
    try {
        const formData = await request.formData(); // Fix variable name
        const file = formData.get("file");

        if (!file) {
            return NextResponse.json({ message: "No file received" }, { status: 400 });
        }

        const buffer = Buffer.from(await file.arrayBuffer());
        const filename = file.name.replace(/\s+/g, "_"); // Ensure file name is safe

        const filePath = path.join(process.cwd(), "public/assets", filename);
        await writeFile(filePath, buffer);

        console.log("File uploaded:", filename);
        return NextResponse.json({ message: "Success", filename }, { status: 201 });

    } catch (error) {
        console.error("Error occurred:", error);
        return NextResponse.json({ message: "Failed to upload file", error: error.message }, { status: 500 });
    }
}
