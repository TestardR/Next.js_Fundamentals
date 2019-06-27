import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div>
      <Link href="/">
        <a title="Our API">Home</a>
      </Link>
      <Link href="/about">
        <a title="About NextJS">About Next JS</a>
      </Link>
      <style jsx>{`
        a {
          padding: 10px;
          text-decoration: none;
        }
      `}</style>
    </div>
  );
};

export default Navbar;
