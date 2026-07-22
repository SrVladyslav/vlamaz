// app/providers.tsx
"use client";

import {HeroUIProvider} from '@heroui/react'
import {ThemeProvider as NextThemesProvider} from "next-themes";
import {useState, useEffect} from 'react'
import { Toaster } from 'sonner'

let scriptTagWarningPatched = false

// next-themes injects a raw <script> tag to prevent theme flash; React 19 warns about
// this as a false positive (https://github.com/pacocoursey/next-themes/issues/385).
function suppressNextThemesScriptTagWarning() {
    if (scriptTagWarningPatched || process.env.NODE_ENV !== 'development') return
    scriptTagWarningPatched = true

    const originalError = console.error
    console.error = (...args: unknown[]) => {
        if (typeof args[0] === 'string' && args[0].includes('Encountered a script tag')) {
            return
        }
        originalError(...args)
    }
}

export function Providers({children}: { children: React.ReactNode }) {
    const [mounted, setMounted] = useState(false)

    useEffect(()=>{
        suppressNextThemesScriptTagWarning()
        // eslint-disable-next-line react-hooks/set-state-in-effect -- intentional hydration-safe mount flag
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
        <HeroUIProvider>
            <Toaster
              richColors
              position="top-center"
            />
            {children}
        </HeroUIProvider>
      </NextThemesProvider>
  )
}