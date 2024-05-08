'use client'

import React from 'react'
import { FaGithub } from "react-icons/fa";
import { Link } from '@nextui-org/react';

const GithubIcon =({
    href, isExternal
}:{
    href:string
    isExternal?:boolean,
})=>{
    return <div>
        <Link className='relative flex items-center'
            href={href} isExternal={isExternal}
        >
            <FaGithub className='icon fill-[var(--foreground-5)]'/>
        </Link>
    </div>
}

export default GithubIcon