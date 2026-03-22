// import React from 'react'
'use client'
import { useClerk } from "@clerk/nextjs";
import { useState } from "react";
import { useRouter } from "next/navigation";
const Write = () => {
  const [emailTitle, setEmailTitle] = useState("");
  const [emails, setEmails] = useState<any>([]);
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { user } = useClerk();
  return (
    <div>Write</div>
  )
}

export default Write