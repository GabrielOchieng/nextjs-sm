import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <div>Logo</div>
      <div>
        <Link href="/about">About</Link>
      </div>
    </div>
  );
};

export default Navbar;
