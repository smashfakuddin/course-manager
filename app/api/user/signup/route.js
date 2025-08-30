import User from "@/models/user";
import { dbConnect } from "@/db/dbconnect.js";
import bcrypt from "bcryptjs";

export async function POST(request) {
  try {
    await dbConnect();

    const { name, email, password, role } = await request.json();

    if (!name || !email || !password || !role) {
      return Response.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Check if email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return Response.json({ error: "Email already exists" }, { status: 409 });
    }

    const hashedPassword = await bcrypt.hash(password, 10); 
    // Create new user
    const user = new User({
      name,
      email,
      password:hashedPassword, // ⚠️ should hash before saving!
      role,
    });

    await user.save();

    return Response.json(
      {
        message: "User created successfully",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("POST /api/users error:", error);
    return Response.json({ error: error?.message }, { status: 500 });
  }
}
