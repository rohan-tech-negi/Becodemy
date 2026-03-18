"use client";

import {NextUIProvider} from "@nextui-org/react";

import { usePathname } from "next/navigation";

interface ProviderProps{
    children: React.ReactNode;
}

export default function Providers({children}: ProviderProps){
    const pathname = usePathname();
    const isAuthPage = pathname === "/login" || pathname === "/register";
    return (
        <NextUIProvider>
            {children}
        </NextUIProvider>
    )
}