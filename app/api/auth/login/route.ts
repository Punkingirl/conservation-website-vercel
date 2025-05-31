import { NextResponse } from "next/server"


export async function POST(request: Request) {
  try {
    const { email, password } = await request.json()


    if (email === "admin@example.com" && password === "password123") {


      return NextResponse.json({
        success: true,
        message: "Login successful",
      })
    }

    // Invalid credentials
    return NextResponse.json({ success: false, message: "Invalid email or password" }, { status: 401 })
  } catch (error) {
    console.error("Login error:", error)
    return NextResponse.json({ success: false, message: "An error occurred during login" }, { status: 500 })
  }
}
