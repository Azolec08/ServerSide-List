import Link from "next/link";
import React from "react";

export default function notfound() {
  return (
    <main className="h-screen w-full flex flex-col items-center justify-center ">
      <h2 className="text-3xl">There was a problem</h2>
      <p>We could not found the page you were looking for</p>
      <p>
        Go back to the{" "}
        <Link href="/" className="text-blue-500">
          Music Page
        </Link>
      </p>
    </main>
  );
}
