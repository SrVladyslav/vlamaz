'use client'

import React from 'react'
import { useTheme } from "next-themes";

import { useTranslation } from 'react-i18next';

const VioletLabel =()=>{
    const {theme} = useTheme()
    const { t } = useTranslation();

    return <span className={`
        relative flex w-fit
        p-[2px] rounded-full text-xs font-bold
        bg-gradient-to-br
        from-[var(--blue)] to-[var(--blue-2)]
    `}>
        {/* ${theme=='dark'
            ?"from-[var(--violet)] to-[var(--background-2)]"
            :"from-[var(--blue)] to-[var(--blue-2)]"
            // :"from-[#32004f70]"
        } */}
            {/* ${theme=='dark'
                // ?"from-[var(--blue)] to-[var(--blue-2)]"
                // :"from-[var(--blue)] to-[var(--blue-2)]"
                // ?"from-white to-white"
                // :"from-white to-white"
                ?"from-[var(--violet-2)] to-[var(--violet-2)]"
                :"from-[var(--violet-2)] to-[var(--violet-2)]"
            } */}
        <span className={`relative bg-[var(--background)] px-3 py-2 rounded-full`}>
            <span className={`text-xs 
                bg-gradient-to-br inline-block 
                text-transparent bg-clip-text font-medium tracking-wider
                from-[var(--blue)] to-[var(--blue-2)]
            `}>
                {t("title-tag", {ns:"home"})}
            </span>
        </span>
    </span>
}

export default VioletLabel