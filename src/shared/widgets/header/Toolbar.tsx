"use client";

import { useUser } from "@clerk/nextjs";
import { Button } from "@heroui/button";
import Image from "next/image";
import Link from "next/link";

const Toolbar = () => {
  const { user } = useUser();

  return (
    <>
      <Button
        color="primary"
        className="text-[15px] font-semibold px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-indigo-200 hover:scale-[1.02] active:scale-[0.98]"
      >
        Start Trial
      </Button>
      {user ? (
        <>
          <Link href={"/dashboard"}>
            <Image
              src={user.imageUrl}
              alt=""
              width={36}
              height={36}
              className="rounded-full ring-2 ring-indigo-200 hover:ring-indigo-400 transition-all cursor-pointer"
            />
          </Link>
        </>
      ) : (
        <Link
          href={"/sign-in"}
          className="text-[15px] font-medium text-slate-600 hover:text-indigo-600 transition-colors px-3 py-2"
        >
          Login
        </Link>
      )}
    </>
  );
};

export default Toolbar;