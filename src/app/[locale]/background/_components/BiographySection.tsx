import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

const BiographySection =()=>{
    return (
        <div
            id="background-biography" 
            className='relative w-full flex justify-center px-5 bg-[var(--background-2)] 
                pt-20
        '>
            <div className='relative gap-10 w-full max-w-screen-xl
                grid grid-cols-[1fr] sm:grid-cols-[200px_1fr]
            '>
                <div className='h-fit sm:h-auto duration-75'>
                    <div className='relative sm:sticky sm:top-[90px] sm:left-0 text-4xl font-medium'>
                        <div className='flex flex-row gap-2 items-center'>
                            <h3>Biografía</h3><FaArrowRight className='hidden sm:block icon pt-1'/>
                        </div>
                    </div>
                </div>
                <div className='relative h-[110vh] flex flex-col gap-5'>
                    <p className='tracking-wider text-[var(--foreground)]'>
                        Mi nombre completo es Vladyslav Mazurkevych, naci en Ucrania y 
                        estoy graduado en la ingeniería informática por la <b><a href="https://www.upv.es/">Universidad Politécnica de Valencia</a></b> con 
                        especialidad en la <b>inteligéncia artifical</b>, más en concreto, en el 
                        Procesamiento del Lenguaje Natural (PLN) y el Análisis de Datos.
                    </p>
                    <p className='tracking-wider text-[var(--foreground)]'>
                        Durante la estáncia en la universidad, participé en varios grupos como 
                        desarrollador web
                    </p>
                </div>
            </div>
        </div>
    )
}

export default BiographySection