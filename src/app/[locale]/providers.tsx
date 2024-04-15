// app/providers.tsx
"use client";

import {NextUIProvider} from '@nextui-org/react'
import {ThemeProvider as NextThemesProvider} from "next-themes";
import {useState, useEffect} from 'react'

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
            {children}
        </NextUIProvider>
      </NextThemesProvider>
  )
}