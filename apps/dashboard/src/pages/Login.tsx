import { FormEvent, useState } from "react";
import { api } from "../services/api";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("owner8@daoalpha.com");
  const [password, setPassword] = useState("StrongPass123");
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");

    try {
      const response = await api.post("/auth/login", { email, password });
      login(response.data.data.token);
      navigate("/");
    } catch (err: any) {
      console.error("Login error:", err);
      console.error("Login error response:", err?.response?.data);
      setError(
        err?.response?.data?.message ||
          err?.message ||
          "Login failed"
      );
    }
  }

  return (
    <div style={{ maxWidth: 400, margin: "80px auto", fontFamily: "Arial" }}>
      <h1>DAO Treasury Risk Guardian</h1>
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 12 }}>
          <input
            style={{ width: "100%", padding: 10 }}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        </div>

        <div style={{ marginBottom: 12 }}>
          <input
            style={{ width: "100%", padding: 10 }}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </div>

        <button style={{ width: "100%", padding: 10 }} type="submit">
          Login
        </button>
      </form>

      {error ? <p style={{ color: "red" }}>{error}</p> : null}
    </div>
  );
}