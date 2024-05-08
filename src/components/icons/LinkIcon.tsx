'use client'

import React from 'react'
import { FaLink } from "react-icons/fa6";
import { Link } from '@nextui-org/react';

const LinkIcon =({
    href, isExternal, white
}:{
    href:string
    isExternal?:boolean,
    white?:boolean
})=>{
    return <div>
        <Link className='relative flex items-center'
            href={href} isExternal={isExternal}
        >
            <FaLink className={`icon 
                ${white? "fill-[var(--foreground-5)]":"fill-[var(--foreground-2)]"}
            `}/>
        </Link>
    </div>
}

export default LinkIcon