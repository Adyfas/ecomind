import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div class="text-center">
        <div class="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-yellow-500 mx-auto"></div>
        <h2 class="mt-4">Loading...</h2>
        <p class="text-zinc-600 dark:text-zinc-400">
          AI Still in training....
        </p>
        <Link href={'/'} className="py-15 cursor-pointer">Back In Page</Link>
      </div>
    </div>
  );
};

export default page;
