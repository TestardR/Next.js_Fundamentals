import React from 'react';
import Link from 'next/link';
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav>
      <div>
        <Link href="/">
          <a title="Our API">Home</a>
        </Link>
        <Link href="/about">
          <a title="About NextJS">About Next JS</a>
        </Link>
        <mark className="badge">Hello !</mark>
      </div>
    </nav>
  );
};

export default Navbar;
