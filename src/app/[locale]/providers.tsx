// app/providers.tsx
"use client";

import {NextUIProvider} from '@nextui-org/react'
import {ThemeProvider as NextThemesProvider} from "next-themes";
import {useState, useEffect} from 'react'
import { Toaster } from 'sonner'

export function Providers({children}: { children: React.ReactNode }) {
    const [mounted, setMounted] = useState(false)

    useEffect(()=>{
        setMounted(true)
    },[])

    if (!mounted) {
        return null
    }
  
    return (
      <NextThemesProvider
        defaultTheme = 'dark'
      >
        {/* attribute="class" */}
        <NextUIProvider>
            <Toaster
              richColors
              position="top-center"
            />
            {children}
        </NextUIProvider>
      </NextThemesProvider>
  )
}