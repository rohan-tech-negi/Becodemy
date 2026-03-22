"use client";

import { useUser } from "@clerk/nextjs";
import {HeroUIProvider} from "@heroui/react";

import { usePathname } from "next/navigation";
import DashboardSidebar from "../widgets/dashboard/sidebar/DashboardSidebar";

interface ProviderProps{
    children: React.ReactNode;
}

export default function Providers({children}: ProviderProps){
    const pathname = usePathname();

    const {isLoaded} = useUser();

    if (!isLoaded) {
        return null;
    }
    // const isAuthPage = pathname === "/login" || pathname === "/register";
    return (
        <HeroUIProvider>
            {pathname !== "/dashboard/new-email" && pathname !== "/" && pathname !== "/sign-up" && pathname !== "subscribe" && pathname !== "/sign-in" ? (
                <div className="w-full flex flex-col min-h-screen">
                    <div className="w-[290px] h-screen overflow-y-scroll">
                        <DashboardSidebar></DashboardSidebar>
                        </div> 
                        {children}
                </div>
            ) : (
                <>
                    {children}
                </>
            )}
        </HeroUIProvider>
    )
}