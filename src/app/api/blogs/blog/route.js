import { NextResponse } from "next/server";
import { connectToDB } from "../../../../lib/dbConnect";
import Blogs from "../../../../models/Blogs";

export async function GET(request, response) {
    await connectToDB();

    const blogs = await Blogs.find().exec();
    return new Response(JSON.stringify(blogs));
}

export async function POST(request, response) {
    try {
        await connectToDB();

        const data = await request.json();

        if (!data.title || !data.content || !data.author) {
            throw new Error("Title, content, and author are required.");
        }

        data.title = data.title.trim();
        data.content = data.content.trim();
        data.author = data.author.trim();

        const blog = await Blogs.create(data);

        return NextResponse.json({
            status: 201,
            message: "Blog created successfully.",
            data: blog,
        });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ message: error.message }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}

export async function PUT(request, response) {
    try {
        await connectToDB();

        const data = await request.json();

        if (!data.title || !data.content || !data.author || !data.id) {
            throw new Error("Title, content, author, and id are required.");
        }

        data.title = data.title.trim();
        data.content = data.content.trim();
        data.author = data.author.trim();

        const updatedBlog = await Blogs.findByIdAndUpdate(data.id, data, { new: true })
            .exec();

        if (!updatedBlog) {
            throw new Error("Blog not found.");
        }

        return NextResponse.json({
            status: 200,
            message: "Blog updated successfully.",
            data: updatedBlog,
        });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ message: error.message }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}

export async function DELETE(request, response) {
    try {
        await connectToDB();

        const data = await request.json();

        if (!data.id) {
            throw new Error("ID is required.");
        }

        const deletedBlog = await Blogs.findByIdAndRemove(data.id).exec();

        if (!deletedBlog) {
            throw new Error("Blog not found.");
        }

        return NextResponse.json({
            status: 200,
            message: "Blog deleted successfully.",
        });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ message: error.message }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}