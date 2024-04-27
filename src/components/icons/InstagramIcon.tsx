'use client'

import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { Link } from '@nextui-org/react';

const InstagramIcon =({
    href, isExternal
}:{
    href:string
    isExternal?:boolean,
})=>{
    return <div>
        <Link className='relative flex items-center'
            href={href} isExternal={isExternal}
        >
            <FaInstagram className='icon fill-[var(--foreground-2)]'/>
        </Link>
    </div>
}

export default InstagramIcon