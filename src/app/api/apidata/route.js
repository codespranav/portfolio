import path from "path";
import { promises as fs } from "fs";
import { NextResponse } from "next/server";

// Named export for the GET method
export async function GET() {
    // Resolve the path to the 'json' folder in the root of the project
    const jsonDirectory = path.join(process.cwd(), 'src');
    console.log(jsonDirectory);
    
    // Read the JSON file (e.g., 'data.json') from the directory
    const fileContents = await fs.readFile(jsonDirectory + '/blogs.json', 'utf8');
    
    // Parse the JSON content
    const data = JSON.parse(fileContents);
    
    // Return the data as a JSON response
    return NextResponse.json(data);
}
