'use client'

import React from 'react'
import { Button } from '@nextui-org/react';
import { FaArrowDown } from "react-icons/fa6";
import {scrollToHashWithOffset} from '@/lib/helpers'

const NextSectionBtn =(
    {scrollId, topOffset}:
    {scrollId:string, topOffset:number}
)=>{
    return (
        <Button
            radius='full'
            onPress={()=>{
                scrollToHashWithOffset(scrollId, topOffset)
            }}
            variant='light'
            className='relative p-1.5 m-0 min-w-0 min-h-0 border-[2px] md:border-[3px] 
                border-[var(--foreground)] flex items-center justify-center rounded-full 
                animate-bounce h-[33px] min-h-[33px] md:h-[44px] md:min-h-[44px]
                w-[33px] min-w-[33px] md:w-[44px] md:min-w-[44px]
                duration-75
        '>
            <FaArrowDown className='relative h-4 w-4 min-h-4 min-w-4 
                icon-mini fill-[var(--foreground)]'/>
        </Button>
    )
}

export default NextSectionBtn