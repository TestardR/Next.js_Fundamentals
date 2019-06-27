import Document, { Head, Main, NextScript } from 'next/document';

import React from 'react';

class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <link rel="stylesheet" href="/_next/static/style.css" />
        </Head>
        <Main />
        <NextScript />
      </html>
    );
  }
}

export default MyDocument;
