import bcrypt from "bcryptjs";
import User from "@/models/user";
import { dbConnect } from "@/db/dbconnect.js"; // make sure you have DB connection

export async function POST(request) {
  try {
    await dbConnect(); // connect to MongoDB

    const { email, password } = await request.json();

    if (!email || !password) {
      return new Response(
        JSON.stringify({ message: "Enter Email And Password" }),
        { status: 400 }
      );
    }

    // Find user by email
    const user = await User.findOne({ email }).lean();
    if (!user) {
      return new Response(
        JSON.stringify({ message: "Invalid Email or Password" }),
        { status: 401 }
      );
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return new Response(
        JSON.stringify({ message: "Invalid Email or Password" }),
        { status: 401 }
      );
    }

    const { password: pass, ...rest } = user;

    // Successful login
    return Response.json(
      {
        message: "Login Successful",
        data: rest,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: "Something went wrong" }), {
      status: 500,
    });
  }
}
