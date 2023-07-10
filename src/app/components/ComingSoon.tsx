import Link from "next/link";
import React from "react";

type Props = {};

const ComingSoon = (props: Props) => {
  return (
    <section className="py-4">
      <div className="container px-4 mx-auto">
        <img className="mx-auto" src="dashy-assets/images/empty.png" alt="" />
        <div className="max-w-md mx-auto text-center">
          <h2 className="font-heading mb-3 text-2xl font-semibold">
            It&rsquo;s a bit empty here
          </h2>
          <p className="mb-7 text-neutral-500">
            The component will be created. Coming Soon.
          </p>
          <button className="h-full px-8 py-3 ltr-bg rounded-[6px] hover:translate-y-[-2px] hover:shadow-[0_20px_80px_-10px_rgba(var(--primary-color-rgb),1)] text-white">
            <Link href="/">Go to Home</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;
