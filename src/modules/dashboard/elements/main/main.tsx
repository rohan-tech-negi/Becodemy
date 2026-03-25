
'use client'

import { useUser } from "@clerk/nextjs"
import DashboardOverViewCard from "@/shared/components/cards/overviewcard"
import SubscriberChart from "@/shared/components/charts/SubscriberChart"
import { Button } from "@heroui/button"
import { useState } from "react"
import { ICONS } from "@/shared/utils/Icons"
import Link from "next/link"
import toast from "react-hot-toast";  

const Main = () => {
  const [copied, setCopied] = useState(false);
    const {user} = useUser()

    const handleCopyClick = () => {
    const smallText = document.querySelector(".copy-text") as HTMLElement;
    if (smallText) {
      const textToCopy = smallText.innerText;
      navigator.clipboard.writeText(textToCopy).then(() => {
        setCopied(true);
        toast.success("Copied");
        setTimeout(() => {
          setCopied(false);
        }, 2000);
      });
    }
  };
  return (
    <div className="p-5 w-full h-screen bg-[#f9fafb] ">
        <h1 className="text-2xl text-surface-900 font-medium">
            Hi {user?.fullName}
        </h1>
        <p className="opacity-[.7] text-sm pt-2">
            Here's what's happening with your newsletter today
        </p>
        <div className="w-full flex">
        <div className="w-[65%]  min-h-[88vh] pr-5">
          {/* <ReportFilter></ReportFilter> */}
          <br />
          <DashboardOverViewCard></DashboardOverViewCard>
          <br />
          <SubscriberChart></SubscriberChart>
        </div>

        <div className="w-[35%] p-5">
          <div className="w-full flex justify-end">
            <Button className="bg-[#EB4898] text-white px-4 py-2 rounded">
              Start writting
            </Button>
          </div>

          <br />

          <div>
            <h5 className="text-xl font-medium">
              Resources
            </h5>
            <div className="w-full bg-white border rounded p-5 my-3">
              {/* homw page url  */}

              <div>
                <h4 className="font-medium">Home page</h4>

                <div
                  className="w-full px-2 my-1 h-[38px] bg-transparent border rounded-lg relative flex items-center cursor-pointer"
                  onClick={handleCopyClick}
                >
                  <small
                    className={`w-[70%] text-sm overflow-hidden overflow-ellipsis whitespace-nowrap copy-text ${
                      copied ? "bg-blue-200" : "bg-transparent"
                    }`}
                  >
                    {process.env.NEXT_PUBLIC_WEBSITE_URL}/subscribe?username={user?.username}
                  </small>
                  <div className="absolute h-[38px] w-[90px] rounded-r-lg bg-[#DFE7FF] right-0 flex items-center justify-center">
                    <span className="text-lg">{ICONS.copy}</span>
                    <span className="pl-1">copy</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

           <div className="w-full bg-white border rounded p-5 my-3">
            <h5 className="font-medium">Tutorials</h5>
            <p className="text-sm opacity-[.7]">
              Learn how to get started on becodemy and utilize all our features,
              directly from the becodemy team.
            </p>
            <br />
            <Button className="bg-[#FBCFE8] text-[#831743] rounded-lg h-[35px] flex items-center">
              Tutorials <span>{ICONS.link}</span>
            </Button>
          </div>

          <div className="w-full bg-white border rounded p-5 my-3">
            <h5 className="font-medium">Need help?</h5>
            <Link href={"/"}>
              <div className="w-max px-3 my-2 h-[33px] bg-transparent border rounded-lg flex items-center">
                <span className="text-sm">Knowledge base</span>
                <span className="ml-1">{ICONS.link}</span>
              </div>
            </Link>
            <Link href={"/"}>
              <div className="w-max px-3 my-2 h-[33px] bg-transparent border rounded-lg flex items-center">
                <span className="text-sm">API Documentation</span>
                <span className="ml-1">{ICONS.link}</span>
              </div>
            </Link>
            <Link href={"/"}>
              <div className="w-max px-3 my-2 h-[33px] bg-transparent border rounded-lg flex items-center">
                <span className="text-sm">Blog</span>
                <span className="ml-1">{ICONS.link}</span>
              </div>
            </Link>
            <Link href={"/"}>
              <div className="w-max px-3 my-2 h-[33px] bg-transparent border rounded-lg flex items-center">
                <span className="text-sm">FAQ</span>
                <span className="ml-1">{ICONS.link}</span>
              </div>
            </Link>
          </div>

          
        </div>
        </div>
    </div>
  )
}

export default Main