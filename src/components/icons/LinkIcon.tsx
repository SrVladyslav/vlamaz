'use client'

import React from 'react'
import { FaLink } from "react-icons/fa6";
import { Link } from '@nextui-org/react';

const LinkIcon =({
    href, isExternal
}:{
    href:string
    isExternal?:boolean,
})=>{
    return <div>
        <Link className='relative flex items-center'
            href={href} isExternal={isExternal}
        >
            <FaLink className='icon fill-[var(--foreground-5)]'/>
        </Link>
    </div>
}

export default LinkIcon