'use client'

import { useState } from "react"

export const useAllowScrollWithBackup = (initialState:boolean=true, initialScroll:any=0)=>{
    const [isScrollable, setIsScrollable] = useState(initialState)
    const [windowScroll, setWindowScroll] = useState(initialScroll)

    const deactivateScroll =() =>{
        try{
            let toScroll: number = parseInt(window.scrollY.toString(), 10)
            if(!!initialScroll){
                toScroll = parseInt(initialScroll)
            }else if(document.body.classList.contains('no-bg-scroll')){
                const top = Math.abs(parseInt(document.body.style.top))
                if(top) toScroll = top
                else toScroll = 0
                // toScroll = parseInt(top || 0)
            }
            
            setWindowScroll(toScroll)
            document.body.classList.add('no-bg-scroll')
            document.body.style.top = "-"+toScroll+"px"
        
            setIsScrollable(true)
        }catch(e){}
    }
    
    const activateScroll =() =>{
        try{
            setIsScrollable(false)
            document.body.classList.remove("no-bg-scroll")
            document.body.style.top = "-0px"
            window.scrollTo({
                top:windowScroll,
                behavior: "instant"
            });
        }catch(e){}
    }

    return {isScrollable, activateScroll, deactivateScroll}
}