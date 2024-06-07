'use client'

import React, {useState} from 'react'
import {Input, Button} from "@nextui-org/react";
import { BiSolidSend } from "react-icons/bi";
import { IoSend } from "react-icons/io5";
import { MdDeleteForever } from "react-icons/md";
import { toast } from 'sonner';

import { motion } from 'framer-motion'
import {getAIResponse} from '@/actions/actions'
import {useChatStore} from '@/store/useChatStore'
import QAChat from '@/app/[locale]/_components/QAChat'

import { useTranslation } from 'react-i18next';

const QASection =()=>{
    const [isLoadingBtn, setIsLoadingBtn] = useState(false)
    const [inMsg, setInMsg] = useState('')
    const {chatHistory, setChatHistory,clearChat} = useChatStore()
    const {t} = useTranslation()

    const ask = async (msg:string)=>{
        if(msg.length < 3){
            toast.error('Please enter a message longer than 3 characters')
            return
        }
        // AI response 
        setIsLoadingBtn(true)
        const response = await getAIResponse(msg, chatHistory)
        console.log(response)
    
        // Add the response to the chat history
        const newChat = [
            ...chatHistory, 
            {role:'user', content: msg},
            {role:'assistant', content: response}
        ]
        setChatHistory(newChat)
        // Reset the input
        setIsLoadingBtn(false)
        setInMsg('')
    }

    return <motion.div 
        initial={{opacity: 0, y:20}}
        whileInView={{opacity: 1, y:0}}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.75, delay: 0.25}}
        className='relative w-full flex p-5 sm:p-10 justify-center pt-0'
    >
        <div className='relative w-full flex justify-center items-center flex-col max-w-screen-md py-20 pt-0 gap-2'>
            <h1 className='font-medium text-[var(--foreground-5)] text-4xl md:text-5xl text-center'>{t("bot-1", {ns:"home"})}<span className='text-[var(--yellow)]'>{t("bot-2", {ns:"home"})}</span>?</h1>
            {chatHistory.length > 1 &&
                <div className='relative h-[1px] bg-[var(--background-2)] w-full my-6'></div>
            }
            <div className='relative w-full flex flex-col gap-2'>
                <QAChat chatMessages={chatHistory}/>
                <div className='relative flex felx-row gap-2 items-center'>
                    <Input type="text" variant={'flat'} 
                        size='lg'
                        placeholder="¿Quién soy?"
                        // label={t('name',{ns:"contact"})} 
                        className='col-span-2 sm:col-span-1'
                        isDisabled={isLoadingBtn}
                        isRequired
                        value={inMsg}
                        onChange={(e)=>{setInMsg(e.target.value)}}
                        onKeyUp={(e)=>{if(e.key === 'Enter'){ask(inMsg)}}}
                        endContent={
                            <div className='relative flex flex-row items-center gap-2'>
                                <Button
                                    radius='full'
                                    size='md'
                                    className='relative p-0 min-w-0 min-h-0 bg-transparent'
                                    onPress={()=>{
                                        clearChat()
                                        toast.success('Chat history cleared')
                                    }}
                                ><MdDeleteForever className='icon duration-200
                                    fill-[var(--foreground-5)]
                                    hover:fill-[var(--red)]
                                '/></Button>
                                <Button
                                    radius='full'
                                    size='md'
                                    className='relative p-0 min-w-0 min-h-0 bg-transparent'
                                    onPress={()=>ask(inMsg)}
                                ><IoSend className='icon duration-200
                                    fill-[var(--foreground-5)]
                                    hover:fill-[var(--yellow)]
                                '/></Button>
                            </div>
                        }
                    />
                </div>
            </div>
        </div>
    </motion.div>
}

export default QASection