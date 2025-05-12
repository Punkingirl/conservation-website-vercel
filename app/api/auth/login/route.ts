import { NextResponse } from "next/server"

// This is a simplified example - in a real app, you would:
// 1. Validate the credentials against a database
// 2. Use proper password hashing
// 3. Create a session or JWT token
// 4. Set cookies for authentication

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json()

    // IMPORTANT: This is just for demonstration
    // In a real app, NEVER hardcode credentials
    // Use a database and proper authentication
    if (email === "admin@example.com" && password === "password123") {
      // Success - in a real app, you would:
      // 1. Generate a JWT token or session
      // 2. Set cookies for authentication

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
