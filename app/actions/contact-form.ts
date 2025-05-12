"use server"

import { Resend } from "resend"

// Initialize Resend with the API key
const resend = new Resend(process.env.RESEND_API_KEY)

export async function submitContactForm(formData: FormData) {
  try {
    // Extract form data
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const message = formData.get("message") as string

    // Validate required fields
    if (!name || !email || !message) {
      console.log("Form validation failed: Missing required fields")
      return {
        success: false,
        message: "Please fill in all required fields",
      }
    }

    console.log("Attempting to send email with Resend...")
    console.log(`API Key defined: ${Boolean(process.env.RESEND_API_KEY)}`)

    // Send email via Resend
    const result = await resend.emails.send({
      from: "Conservation Website <onboarding@resend.dev>", // Use Resend's verified sender
      to: "sophiathegrandm@gmail.com",
      subject: `New contact form submission from ${name}`,
      text: `
Name: ${name}
Email: ${email}

Message:
${message}
      `,
    })

    console.log("Resend API response:", JSON.stringify(result))

    if (result.error) {
      throw new Error(`Resend API error: ${result.error.message}`)
    }

    return {
      success: true,
      message: "Thank you for your message! We will get back to you soon.",
    }
  } catch (error) {
    console.error("Error sending email:", error)
    return {
      success: false,
      message: `There was an error submitting your message: ${error instanceof Error ? error.message : "Unknown error"}`,
    }
  }
}
