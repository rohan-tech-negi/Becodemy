"use client";

import {HeroUIProvider} from "@heroui/react";

import { usePathname } from "next/navigation";

interface ProviderProps{
    children: React.ReactNode;
}

export default function Providers({children}: ProviderProps){
    const pathname = usePathname();
    // const isAuthPage = pathname === "/login" || pathname === "/register";
    return (
        <HeroUIProvider>
            {pathname !== "/dashboard/new-email" && pathname !== "/" && pathname !== "sign-up" && pathname !== "subscribe" && pathname !== "/sign-in" ? (
                <div className="w-full flex flex-col min-h-screen">
                    <div className="w-[290px] h-screen overflow-y-scroll">
                        </div> 
                </div>
            ) : (
                <>
                    {children}
                </>
            )}
        </HeroUIProvider>
    )
}