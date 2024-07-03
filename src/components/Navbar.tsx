import Link from "next/link";
import React from "react";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <header className="sticky top-0 bg-background ">
      <div className="mx-auto flex max-w-3xl flex-wrap justify-between px-3 py-4">
        <nav className="space-x-4 font-medium ">
          <Link href={"/"}>Home</Link>
          <Link href={"/about"}>About me</Link>
<Link href={"/social"}>Social</Link>
        </nav>
        <ThemeToggle/>
      </div>
    </header>
  );
};

export default Navbar;
