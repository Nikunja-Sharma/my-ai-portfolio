import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="sticky top-0 bg-background ">
      <div className="mx-auto flex max-w-3xl flex-wrap justify-between px-3 py-4">
        <nav className="space-x-4 font-medium ">
            <Link href={"/"}>Home</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
