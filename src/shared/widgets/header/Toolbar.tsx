"use client";

import { useUser } from "@clerk/nextjs";
import {Button } from "@heroui/button";
import Image from "next/image";
import Link from "next/link";

const Toolbar = () => {
//   const { user } = useUser();

  return (
    <>
      <Button color="primary" className="text-lg">
        Start Trial
      </Button>
      <Link href={"/sign-up"}>Login</Link>
    </>
  );
};

export default Toolbar;