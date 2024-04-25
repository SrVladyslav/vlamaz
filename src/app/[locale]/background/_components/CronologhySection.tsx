'use client'

import React, {useMemo} from 'react'
import { FaArrowRight } from "react-icons/fa6";

import Timeline from'@/components/miscellaneous/Timeline'
import { useTranslation } from 'react-i18next';

const CronologhySection =()=>{
    const {t} = useTranslation()
    const timedata = [
        {
            id:0,
            time_range:"09/2019 - 06/2021", 
            title: t("timeline-1-t", {ns:"background"}),
            description: t("timeline-1-d", {ns:"background"}),
            company_logo_src:"/icons/companies/gdsc.webp",
            more:"https://www.inf.upv.es/www/etsinf/ca/200-estudiantes-de-la-etsinf-asisten-a-la-presentacion-del-developer-student-club-dsc/",
            tech_icons: [
                "/icons/tech/torch.webp",
                "/icons/tech/keras.webp",
                "/icons/tech/scikit.webp",
                "/icons/tech/python.webp",
                "/icons/tech/js.webp",
            ]
        },
        {
            id:1,
            time_range:"09/2020 - 08/2021", 
            title: t("timeline-2-t", {ns:"background"}),
            description: t("timeline-2-d", {ns:"background"}),
            company_logo_src:"/icons/companies/datamaran.webp",
            more:"https://www.inf.upv.es/www/etsinf/ca/200-estudiantes-de-la-etsinf-asisten-a-la-presentacion-del-developer-student-club-dsc/",
            tech_icons: [
                "/icons/tech/torch.webp",
                "/icons/tech/keras.webp",
                "/icons/tech/scikit.webp",
                "/icons/tech/python.webp",
                "/icons/tech/pandas.webp",
                "/icons/tech/numpy.webp",
                "/icons/tech/huggingface.webp",
                "/icons/tech/pillow.webp",
                "/icons/tech/aws.webp",
                "/icons/tech/vue.webp"
            ]
        },
        {
            id:2,
            time_range:"12/2022 - 03/2023", 
            title:t("timeline-3-t", {ns:"background"}),
            description: t("timeline-3-d", {ns:"background"}),
            company_logo_src:"/icons/companies/grifenix.webp",
            more:"",
            tech_icons: [
                "/icons/tech/aws.webp",
                "/icons/tech/vue.webp",
                "/icons/tech/pillow.webp",
                "/icons/tech/drf.webp",
                "/icons/tech/nextjs.webp",
                "/icons/tech/solidity.webp",
                "/icons/tech/hardhat.webp",
                "/icons/tech/ganache.webp",
                "/icons/tech/alchemy.webp",
            ]
        },
        {
            id:3,
            time_range:"03/2023 - 03/2024", 
            title:t("timeline-4-t", {ns:"background"}),
            description: t("timeline-4-d", {ns:"background"}),
            company_logo_src:"/icons/companies/essenfy.webp",
            more:"",
            tech_icons: [
                "/icons/tech/aws.webp",
                "/icons/tech/pillow.webp",
                "/icons/tech/drf.webp",
                "/icons/tech/nextjs.webp",
                "/icons/tech/tailwind.webp",
                "/icons/tech/torch.webp",
                "/icons/tech/scikit.webp",
            ]
        }
    ]

    return (
        <div
            id="background" 
            className='relative w-full flex justify-center px-5 bg-[var(--background-22)]'>
            <div className='relative gap-10 w-full max-w-screen-xl'>
                <Timeline timedata= {timedata}/>
            </div>
        </div>
    )
}

export default CronologhySection