export async function GET(request) {
    // Handle GET request
    return new Response(JSON.stringify({ message: "Hello from GET!" }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
    });
}

export async function POST(request) {
    // Handle POST request
    const data = await request.json();
    return new Response(JSON.stringify({ message: "Hello from POST!", data }), {
        status: 201,
        headers: { "Content-Type": "application/json" },
    });
}