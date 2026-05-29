import { useState } from "react";
import "./LoginSection.css";

function LoginSection({ login }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function onSubmitHandler(e) {
    e.preventDefault();

    if (
      !email.trim() ||
      !password.trim()
    ) {
      alert(
        "Email and Password must be filled!"
      );

      return;
    }

    // ambil user yang sudah tersimpan
    const storedUser = JSON.parse(
      localStorage.getItem("user")
    );

    // validasi sederhana
    if (
      storedUser &&
      storedUser.email === email
    ) {
      login({ email, password });
    } else {
      alert("User tidak ditemukan!");
    }
  }

  return (
    <form onSubmit={onSubmitHandler} className='login-input'>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit">
        Login
      </button>

    </form>
  );
}

export default LoginSection;