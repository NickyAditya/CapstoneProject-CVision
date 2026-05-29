import React, { useState } from 'react';
import "./RegisterSection.css";

function RegisterInput({ register }) {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  function onSubmitHandler(event) {
    event.preventDefault();

    if (
      !name.trim() ||
      !email.trim() ||
      !password.trim() ||
      !confirmPassword.trim()
    ) {
      alert("All fields must be filled!");
      return;
    }

    if (password !== confirmPassword) {
      alert("Password dan Confirm Password tidak sama!");
      return;
    }

    // 🔥 ambil semua user (ARRAY)
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // cek email sudah dipakai atau belum
    const userExists = users.find(
      (u) => u.email === email
    );

    if (userExists) {
      alert("Email sudah terdaftar!");
      return;
    }

    const userData = {
      name,
      email,
      password,
    };

    // 🔥 simpan ke array users
    users.push(userData);
    localStorage.setItem("users", JSON.stringify(users));

    // login otomatis user baru
    localStorage.setItem("user", JSON.stringify({
      name,
      email
    }));

    localStorage.setItem("token", "true");

    window.dispatchEvent(new Event("authChange"));

    register({
      name,
      email,
      password,
    });
  }

  return (
    <form onSubmit={onSubmitHandler} className='register-input'>

      <input
        type="text"
        placeholder="Nama"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        autoComplete="new-password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <input
        type="password"
        placeholder="Confirm Password"
        autoComplete="new-password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />

      <button type="submit">
        Register
      </button>

    </form>
  );
}

export default RegisterInput;