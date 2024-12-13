// import { NextResponse } from "next/server";
// import { connectToDB } from "../../../../lib/dbConnect";
// import Blogs from "../../../../models/Blogs";
// // GET BLOG
// export async function GET(request, response) {
//     // Wait for DB connection before processing the request
//     await connectToDB();
    
//     return new Response(JSON.stringify({ message: 'Hello from Next.js GET!' }));
// }


// // ENDPOINT TO ADD BLOG
// export async function POST(req, res) {
//     // Wait for DB connection before processing the request
//     await connectToDB();
    
//     const { title, content, author } = await req.json();
//     const newBlog = await Blogs.create({
//         title, content, author
//     })

//     return NextResponse.json({message: "blog added", newBlog});
    
//     // return new Response(JSON.stringify({ message: 'Hello from Next.js POST!' }));
// }


// // ENDPOINT TO EDIT BLOG
