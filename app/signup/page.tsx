"use client";

import { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";
import { useRouter } from "next/navigation"; 

export default function Signup() {
  // State for each input field
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
    const router = useRouter();


   const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await createUserWithEmailAndPassword(email, password);
    if (result) {
      router.push("/home"); // Redirect to home after successful signup
    }
  };

  return (
    <div className="flex h-screen">
      {/* Left Side: App Info */}
      <div className="w-1/2 bg-primary text-white flex flex-col justify-center items-center p-8">
        <h1 className="text-4xl font-bold mb-4">Pen & Papers</h1>
        <p className="text-lg text-gray-200">
          Unleash your creativity. Join us today!
        </p>
      </div>

      {/* Right Side: Signup Form */}
      <div className="w-1/2 flex flex-col justify-center items-center p-8">
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Signup</h2>
          <form className="flex flex-col gap-4" onSubmit={handleSignUp}>
            {/* Name Input */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            {/* Email Input */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            {/* Password Input */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary-dark transition"
              disabled={loading}
            >
              {loading ? "Signing up..." : "Signup"}
            </button>
            {error && <p className="text-red-500">{error.message}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}
