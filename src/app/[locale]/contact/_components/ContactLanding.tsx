import React from 'react'

import ContactForm from '@/app/[locale]/contact/_components/ContactForm'
import { FaGithub, FaLinkedin } from "react-icons/fa";

const ContactLanding =()=>{
    return <div className='relative w-full flex justify-center items-center px-5 pb-20'>
        <div className='relative grid grid-cols-1 md:grid-cols-2 
            md:h-[100vh] md:h-[100dvh] gap-10 sm:gap-5 md:gap-10
            pt-[170px] w-full max-w-screen-xl
        '>
            <div className='relative w-full h-fit flex flex-col gap-5
                items-center md:items-end
                text-center md:text-right
            '>
                <div className='relative max-w-readable40'>
                    <h2 className='relative text-[var(--foreground-5)] text-4xl md:text-5xl font-medium'>I&apos;m <span className='text-[var(--yellow)]'>exited</span> to learn <span className='text-[var(--yellow)]'>about your project</span>. Ready to get <span className='text-[var(--yellow)]'>started</span>?</h2>
                </div>
                <p className='max-w-readable40 relative tracking-wider text-[var(--foreground-4)]'>I&apos;ll text you back ASAP!</p>
                <div className='relative flex flex-row gap-3 justify-center md:justify-end'>
                    <FaGithub className='icon'/>
                    <FaLinkedin className='icon'/>
                </div>
            </div>
            <div className='relative w-full h-fit flex flex-col gap-5'>
                <ContactForm/>
            </div>
        </div>
    </div>
}

export default ContactLanding