'use client'

import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { Link } from '@nextui-org/react';

const InstagramIcon =({
    href, isExternal,white
}:{
    href:string
    isExternal?:boolean,
    white?:boolean,
})=>{
    return <div>
        <Link className='relative flex items-center'
            href={href} isExternal={isExternal}
        >
            <FaInstagram className={`icon
                ${white? "fill-[var(--foreground-5)]":"fill-[var(--foreground-2)]"}
            `}/>
        </Link>
    </div>
}

export default InstagramIcon