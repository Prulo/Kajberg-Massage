"use server";

export async function loginUser(formData) {
  const email = formData.get("email");
  const password = formData.get("password");

  if (email === "prulo@hotmail.com" && password === "123") {
    return {
      success: true,
      message: "Login successful",
      user: {
        email: "prulo@hotmail.com",
        name: "Prulo", // You can return name or username
      },
    };
  }

  return { success: false, message: "Invalid credentials" };
}
