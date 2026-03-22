"use client";

import { useUser } from "@clerk/nextjs";
import {HeroUIProvider} from "@heroui/react";

import { usePathname } from "next/navigation";
import DashboardSidebar from "../widgets/dashboard/sidebar/DashboardSidebar";
import { Toaster } from "react-hot-toast";

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
                <div className="w-full flex h-screen overflow-hidden">
                    <div className="w-[290px] h-full overflow-y-scroll shrink-0">
                        <DashboardSidebar></DashboardSidebar>
                    </div> 
                    <div className="flex-1 h-full overflow-y-auto">
                        {children}
                    </div>
                </div>
            ) : (
                <>
                    {children}
                </>
            )}

            <Toaster position="top-center" reverseOrder={false} />
        </HeroUIProvider>
    )
}