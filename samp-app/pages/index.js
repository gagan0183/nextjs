import Head from 'next/head'
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <p>Home</p>
      <Link href="/blog">
        <a>Blog</a>
      </Link>
      <style jsx>
        {`
          p {
            font-size: 2rem;
          }
        `}
      </style>
    </div>
  );
}
