'use client'
import React from 'react'

export type ChatMessage = {
    role: string;
    content: string;
}

const UserMsg =({message, key}:{
    message:string, key:string
})=>{
    return <div key={key} className='relative w-full pl-10 sm:pl-20 flex justify-end'>
        <span className='relative bg-[var(--yellow)] py-3 px-5 
            text-base rounded-2xl rounded-br-sm text-[white] font-medium tracking-wide'>
            {message}
        </span>
    </div>
}

const AssistantMsg =({message, key}:{
    message:string, key:string
})=>{
    return <div key={key} className='relative w-full pr-10 sm:pr-20 flex justify-start'>
        <span className='relative bg-[var(--background-2)] py-3 px-5 
            text-base rounded-2xl rounded-bl-sm font-medium tracking-wide'>
            {message}
        </span>
    </div>
}

const QAChat =({chatMessages}:{chatMessages:ChatMessage[] | any})=>{
    return <div className='relative w-full h-fit max-h-[500px] overflow-y-auto'>
        <div className='relative w-full flex flex-col gap-5 pb-6 pr-2'>
            {chatMessages?.length >0 && chatMessages.map((msg:ChatMessage, id:any)=>{
                if(msg.role === 'user'){
                    return <UserMsg key={id} message={msg.content}/>
                }else if(msg.role === 'assistant'){
                    return <AssistantMsg key={id} message={msg.content}/>
                }
            })}
        </div>
    </div>
}

export default QAChat