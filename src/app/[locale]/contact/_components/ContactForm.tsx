'use client'

import React, {useState} from 'react'
import { Input, Select, SelectItem, Textarea, Button} from "@nextui-org/react";
import { BUTTON_PROPS } from '@/config/styles';

import { useTranslation } from 'react-i18next';


const ContactForm =()=>{
    const {t} = useTranslation()
    const [serType, setSerType]:any = useState(null)
    const [projType, setProjType]:any = useState(null)
    const [subjectType, setSubjectType]:any = useState(null)

    const serviceTypes = [
        {label:"I want a meeting", value:"JUST_MEETING", key:"0"},
        {label:"I wanna hire you", value:"HIRING", key:"1"},
        {label:"Mentoring session ", value:"MENTORING", key:"2"}
    ]
    const projectTypes = [
        {label:"Startup", value:"STARTUP-FT", key:"0"},
        {label:"Company", value:"COMPANY-FT", key:"1"},
        {label:"Startup [Part-time]", value:"STARTUP-PT", key:"2"},
        {label:"Company [Part-time]", value:"COMPANY-PT", key:"3"}
    ]
    const subjectTypes = [
        {label:"Machine Learning", value:"ML", key:"0"},
        {label:"Data Analytics", value:"ML", key:"1"},
        {label:"Backend Development", value:"BACK-DEV", key:"2"},
        {label:"Frontend Development", value:"FRONT-DEV", key:"3"},
        {label:"Sales & Marketing from startup perspective", value:"SALES-MARK", key:"4"},
    ]

    return <div className='relative grid grid-cols-2 gap-5 w-full md:max-w-[450px] duration-100'>
        <Input type="text" variant={'flat'} label={t('name',{ns:"misc"})} className='col-span-2 sm:col-span-1'/>
        
        <Select label={t("service-type", {ns:"misc"})} 
            className='col-span-2 sm:col-span-1'
            selectedKeys={serType}
            onSelectionChange={setSerType}
        >
            {serviceTypes.map((sType:any, key:any) => (
                <SelectItem key={key} value={sType.value}>
                    {sType.label}
                </SelectItem>
            ))}
        </Select>
        {serType?.currentKey == '1'
            ?<>
                <Select label={t("project-type", {ns:"misc"})} 
                    className='col-span-2 sm:col-span-1'
                    selectedKeys={projType}
                    onSelectionChange={setProjType}
                >
                    {projectTypes.map((pType:any, key:any) => (
                        <SelectItem key={key} value={pType.value}>
                            {pType.label}
                        </SelectItem>
                    ))}
                </Select>
                <Input
                    type="text"
                    label="Budget"
                    className='col-span-2 sm:col-span-1'
                    startContent={
                        <div className="pointer-events-none flex items-center">
                            <span className="text-default-400 text-small">€</span>
                        </div>
                    }
                />
            </>
            :serType?.currentKey == '2'
                    &&<>
                        <Select label={t("mentoring-type", {ns:"misc"})} 
                            className='col-span-2 sm:col-span-2'
                            selectedKeys={subjectType}
                            onSelectionChange={setSubjectType}
                        >
                            {subjectTypes.map((sType:any, key:any) => (
                                <SelectItem key={key} value={sType.value}>
                                    {sType.label}
                                </SelectItem>
                            ))}
                        </Select>
                    </>
        }

        <Input type="email" variant={'flat'} label="Email" className='col-span-2 duration-100'/>
        {/* {JSON.stringify(serType)}{JSON.stringify(projType)} */}
        <Textarea
            label="Additional details"
            placeholder={serType?.currentKey == '0' || serType?.currentKey == '2'?t("additional-info",{ns:"misc"}):''}
            className="w-full col-span-2 duration-100"
            classNames={{
                base: "",
                input: "resize-y min-h-[40px]",
            }}
        />
        <div className='relative w-full flex justify-center col-span-2 duration-100'>
            <Button {...BUTTON_PROPS} fullWidth 
                className='text-[var(--foreground)] font-medium bg-transparent 
                    bg-[var(--btn-cta-2)] text-[white]
                    data-[hover=true]:text-[var(--yellow)]
                '
            >
                Send
            </Button>
        </div>
    </div>
}

export default ContactForm