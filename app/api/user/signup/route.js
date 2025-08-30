import User from "@/models/user";
import { dbConnect } from "@/db/dbconnect.js";
import bcrypt from "bcryptjs";

export async function POST(request) {
  try {
    await dbConnect();

    const { name, email, password, role, semester } = await request.json();

    if (!name || !email || !password || !role || !semester) {
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
      password: hashedPassword, // ⚠️ should hash before saving!
      role,
      semester
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

export async function PUT(request) {
  try {
    await dbConnect();

    const { name, email, role, semester, oldPassword, newPassword ,userId} =
      await request.json();

    // 1️⃣ Find the user
    const user = await User.findById(userId);
    if (!user) {
      return Response.json({ error: "User not found" }, { status: 404 });
    }

    // 2️⃣ Update non-password fields
    if (name) user.name = name;
    if (email) user.email = email;
    if (role) user.role = role;
    if (semester) user.semester = semester;

    // 3️⃣ If password update requested
    if (oldPassword && newPassword) {
      const isMatch = await bcrypt.compare(oldPassword, user.password);
      if (!isMatch) {
        return Response.json(
          { error: "Old password is incorrect" },
          { status: 400 }
        );
      }

      // Hash new password
      user.password = await bcrypt.hash(newPassword, 10);
    }

    await user.save();

    return Response.json(
      { message: "User updated successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("PUT /api/users error:", error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}
