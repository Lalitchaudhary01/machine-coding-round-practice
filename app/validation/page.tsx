"use client";
import React from "react";

const FormValidation = () => {
  const [mode, setMode] = React.useState<"login" | "signup">("signup");

  const [form, setForm] = React.useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = React.useState({
    name: "",
    email: "",
    password: "",
  });

  // 🔐 Show / Hide password
  const [show, setShow] = React.useState(false);
  const toggleShow = () => setShow((prev) => !prev);
  //password strength
  const getStrength = (pass: string) => {
    if (!pass) return "";

    let score = 0;
    if (pass.length >= 8) score++;
    if (/[A-Z]/.test(pass)) score++;
    if (/[0-9]/.test(pass)) score++;
    if (/[^A-Za-z0-9]/.test(pass)) score++;

    if (score <= 1) return "Weak";
    if (score === 2) return "Medium";
    return "Strong";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({ name: "", email: "", password: "" });

    const response = await fetch(`/api/${mode}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await response.json();

    if (!response.ok) {
      alert(data.error || "Something went wrong");
    } else {
      alert(data.message);
      setForm({ name: "", email: "", password: "" });
    }
  };

  // ✅ Disable submit when form invalid
  const isValid =
    mode === "signup"
      ? form.name && form.email && form.password
      : form.email && form.password;

  return (
    <div>
      {/* Toggle mode */}
      <div>
        <button onClick={() => setMode("signup")} disabled={mode === "signup"}>
          Signup
        </button>
        <button onClick={() => setMode("login")} disabled={mode === "login"}>
          Login
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        {/* name only visible on signup */}
        {mode === "signup" && (
          <div>
            <label>Name:</label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            {errors.name && <p>{errors.name}</p>}
          </div>
        )}

        <div>
          <label>Email:</label>
          <input
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>

        <div>
          <label>Password:</label>

          <input
            type={show ? "text" : "password"}
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />

          <button type="button" onClick={toggleShow}>
            {show ? "Hide" : "Show"}
          </button>

          {/* strength text */}
          <p>Password strength: {getStrength(form.password)}</p>

          {errors.password && <p>{errors.password}</p>}
        </div>

        {/* 🚫 Disabled until valid */}
        <button type="submit" disabled={!isValid}>
          {mode === "signup" ? "Create account" : "Login"}
        </button>
      </form>
    </div>
  );
};

export default FormValidation;
