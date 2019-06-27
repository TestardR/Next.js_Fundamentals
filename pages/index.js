import React from 'react';
import Link from 'next/link';

const index = () => {
  return (
    <div>
      <h1>Hello World From Next JS</h1>
      <Link title="About NextJS" href="/about">
        About this project
      </Link>
    </div>
  );
};

export default index;
