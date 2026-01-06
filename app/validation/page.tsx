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

  return (
    <div>
      {/* Toggle */}
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
            type="password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>

        <button type="submit">
          {mode === "signup" ? "Create account" : "Login"}
        </button>
      </form>
    </div>
  );
};

export default FormValidation;
