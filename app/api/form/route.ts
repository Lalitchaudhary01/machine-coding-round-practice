import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { name, email, password } = await request.json();

  //name validation
  if (!name || name.length < 2) {
    return NextResponse.json(
      { error: "Name must be at least 2 characters long." },
      { status: 400 }
    );
  }
  //email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    return NextResponse.json(
      { error: "Invalid email address." },
      { status: 400 }
    );
  }
  //password validation
  if (!password || password.length < 6) {
    return NextResponse.json(
      { error: "Password must be at least 6 characters long." },
      { status: 400 }
    );
  }
  return NextResponse.json(
    { message: "Form submitted successfully!" },
    { status: 200 }
  );
}
