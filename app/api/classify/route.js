import { NextResponse } from "next/server";

export async function POST(req) {
  const { image } = await req.json();

  try {
    // Extract base64 data (remove data URL prefix)
    const base64Data = image.replace(/^data:image\/\w+;base64,/, "");

    const response = await fetch(
      "https://router.huggingface.co/models/yangy50/garbage-classification",
      {
        headers: {
          Authorization: `Bearer ${process.env.TOKEN_AI}`,
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ inputs: base64Data }),
      }
    );

    // Handle model loading wait time
    if (response.status === 503) {
      // Model is loading, get estimated time
      const result = await response.json();
      return NextResponse.json(
        { 
          error: "Model is loading", 
          estimated_time: result.estimated_time 
        },
        { status: 503 }
      );
    }

    if (!response.ok) {
      const error = await response.json();
      return NextResponse.json(
        { error: error.error || "Classification failed" },
        { status: response.status }
      );
    }

    const result = await response.json();
    return NextResponse.json(result);

  } catch (error) {
    console.error("Classification error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}