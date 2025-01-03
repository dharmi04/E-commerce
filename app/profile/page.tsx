"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/app/firebase/config";

export default function Profile() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        // Redirect to login if no user is logged in
        router.push("/login");
      }
    });

    return () => unsubscribe();
  }, [router]);

  if (!user) {
    return (
      <div className="flex h-screen justify-center items-center">
        <h1 className="text-xl">Loading...</h1>
      </div>
    );
  }

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="max-w-md w-full bg-white shadow-md rounded-lg p-8">
        <h1 className="text-2xl font-bold mb-4">User Profile</h1>
        <p className="text-lg mb-2">
          <strong>Email:</strong> {user.email}
        </p>
        <p className="text-lg mb-4">
          <strong>UID:</strong> {user.uid}
        </p>
        <button
          className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary-dark transition"
          onClick={() => {
            auth.signOut();
            router.push("/login");
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}
