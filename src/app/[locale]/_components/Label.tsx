'use client'

import React from 'react'
import { useTheme } from "next-themes";

const VioletLabel =()=>{
    const {theme} = useTheme()

    return <span className={`
        relative flex w-fit
        py-2 px-3 rounded-full text-xs font-bold
        bg-gradient-to-r
        to-[var(--background-2)]
        ${theme=='dark'
            ?"from-[var(--violet)]"
            :"from-[#32004f70]"
        }
    `}>
        <span className={`bg-gradient-to-r inline-block text-transparent bg-clip-text
            ${theme=='dark'
                ?"from-white to-white"
                :"from-[var(--violet-2)] to-[var(--violet-2)]"
            }
        `}>
            Computer Engineer & Entrepreneur
        </span>
    </span>
}

export default VioletLabel