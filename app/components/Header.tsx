import Link from "next/link";
import { FaUser, FaSignInAlt } from "react-icons/fa";

export default function Header() {
  return (
    <div className="bg-primary font-serif">
  {/* Header Section */}
  <div className="flex items-center justify-between bg-primary text-white px-4 py-2">
    {/* Logo and Search */}
    <div className="flex items-center gap-4">
      <div className="flex items-center">
        <p className="text-xl font-bold">Logo</p>
      </div>
      <div className="flex items-center">
        {/* <input
          type="text"
          placeholder="Search"
          className="px-2 py-1 rounded-md text-black placeholder-gray-500 focus:outline-none"
        /> */}
      </div>
    </div>

    {/* Signup and Login */}
    <div className="flex items-center gap-4 text-black">
      <Link href="/signup" className="flex items-center gap-2 bg-transparent text-black px-3 py-1 rounded-md">
        <FaUser className="text-black" />
        <span>Signup</span>
      </Link>
      <Link href="/login" className="flex items-center gap-2 bg-transparent text-black px-3 py-1 rounded-md hover:bg-gray-800">
        <FaSignInAlt className="text-black" />
        <span>Login</span>
      </Link >
    </div>
  </div>

  {/* Hero Section */}
  <div className="text-center py-6">
    <h1 className="text-3xl font-bold">Pen & Papers</h1>
    <p className="max-w-[350px] mx-auto mt-4">
      Empowering creativity and imagination with exceptional books, stationery,
      and art supplies for everyone.
    </p>
  </div>
</div>

  );
}
