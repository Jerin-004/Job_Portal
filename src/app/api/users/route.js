import { NextResponse } from "next/server";

const API_BASE_URL =
  "https://job-portal-backend-fgkc.onrender.com/api" || "http://localhost:5000/api";

export async function POST(request) {
  try {
    const body = await request.json();

    const response = await fetch(`${API_BASE_URL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const user = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { error: user.message || "Failed to create/update user" },
        { status: response.status }
      );
    }

    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create/update user" },
      { status: 500 }
    );
  }
}
