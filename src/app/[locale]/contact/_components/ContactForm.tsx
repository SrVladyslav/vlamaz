'use client'

import React, {useState, ReactNode} from 'react'
import { Input, Select, SelectItem, Textarea, Button} from "@nextui-org/react";
import { BUTTON_PROPS } from '@/config/styles';

import { useTranslation } from 'react-i18next';
import { sendContactForm } from '@/lib/api';

import { useForm, Controller } from "react-hook-form";
import {zodResolver} from '@hookform/resolvers/zod'
import { toast } from 'sonner';
import {z} from 'zod'

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

const ContactForm =()=>{
    const {t} = useTranslation()
    const [subjectType, setSubjectType]:any = useState(null)
    const [isLoadingBtn, setIsLoadingBtn] = useState(false)

    // const sendContactMail =async (data:any)=>{
    //     await sendContactForm(data)
    // }

    const contactSchema = z.object({
        name: z.string().min(3),
        email: z.string().email().min(1),
        service_type: z.string(),
        project_type: z.string().optional(),
        mentoring_type: z.string().optional(),
        description: z.string().max(500, {message:"Max 500 Ch."}).optional(),
        budget: z.string().optional()
    })
    const {register, control, handleSubmit, formState, getValues, watch} = useForm({
        resolver: zodResolver(contactSchema)
    })
    const serviceTypeWatch = watch('service_type')
    const {errors} = formState
    const valueByKey =(array:any, key:any)=>{
        return array.filter((v:any)=> v.key == key)[0]?.label || '-'
    }
    const handleContact = async (formInfo:any)=>{
        setIsLoadingBtn(true)
        const {email, name, service_type, project_type, mentoring_type, description, budget} = formInfo
        const data = {
            name: name,
            email: email,
            budget: budget, 
            description: description,
            service_type: valueByKey(serviceTypes, service_type),
            project_type: valueByKey(projectTypes, project_type),
            mentoring_type: valueByKey(subjectTypes, mentoring_type),
        }

        await sendContactForm(data).then((e:any)=>{
            console.log(e)
            setIsLoadingBtn(false)
            toast.success("Tu mensaje se envió correectamente!")
        }).catch(()=>{
            toast.error("It vas imposible to send your email, please, try again or contact me on Linkedin.")
            setIsLoadingBtn(false)
        })
        setIsLoadingBtn(false)
    }

    return <form className='relative grid grid-cols-2 gap-5 w-full md:max-w-[450px] duration-100'
        onSubmit={handleSubmit(handleContact)}
    >
        <Input type="text" variant={'flat'} label={t('name',{ns:"misc"})} 
            className='col-span-2 sm:col-span-1'
            isDisabled={isLoadingBtn}
            {...register("name")}
            errorMessage={errors.name?.message as ReactNode}
            isRequired
        />
        <Controller
            render={({ field }) => (
                <Select label={t("service-type", {ns:"misc"})} 
                    {...field}
                    className='col-span-2 sm:col-span-1'
                    selectedKeys={[field.value]}
                    onSelectionChange={field.onChange}
                    // onSelectionChange={setSerType}
                    errorMessage={errors.service_type?.message as ReactNode}
                    isRequired
                    isDisabled={isLoadingBtn}
                >
                    {serviceTypes.map((sType:any, key:any) => (
                        <SelectItem key={key} value={sType.value}>
                            {sType.label}
                        </SelectItem>
                    ))}
                </Select>
            )}
            control={control}
            name="service_type"
            defaultValue={'0'}
        />
        {serviceTypeWatch == '1'
            ?<>
                <Controller
                    render={({ field }) => (
                        <Select label={t("project-type", {ns:"misc"})} 
                            {...field}
                            className='col-span-2 sm:col-span-1'
                            selectedKeys={field.value}
                            onSelectionChange={field.onChange}
                            errorMessage={errors.project_type?.message as ReactNode}
                            isRequired
                            isDisabled={isLoadingBtn}
                        >
                            {projectTypes.map((pType:any, key:any) => (
                                <SelectItem key={key} value={pType.value}>
                                    {pType.label}
                                </SelectItem>
                            ))}
                        </Select>
                    )}
                    control={control}
                    name="project_type"
                    defaultValue={'0'}
                />
                <Input
                    type="text"
                    label="Budget"
                    className='col-span-2 sm:col-span-1'
                    startContent={
                        <div className="pointer-events-none flex items-center">
                            <span className="text-default-400 text-small">€</span>
                        </div>
                    }
                    isDisabled={isLoadingBtn}
                    {...register("budget")}
                    errorMessage={errors.budget?.message as ReactNode}
                />
            </>
            :serviceTypeWatch == '2'
                    &&<>
                        <Select label={t("mentoring-type", {ns:"misc"})} 
                            className='col-span-2 sm:col-span-2'
                            selectedKeys={subjectType}
                            onSelectionChange={setSubjectType}
                            isRequired
                            errorMessage={errors.mentoring_type?.message as ReactNode}
                        >
                            {subjectTypes.map((sType:any, key:any) => (
                                <SelectItem key={key} value={sType.value}>
                                    {sType.label}
                                </SelectItem>
                            ))}
                        </Select>
                    </>
        }

        <Input type="email" variant={'flat'} label="Email" className='col-span-2 duration-100'
            isDisabled={isLoadingBtn}
            {...register("email")}
            errorMessage={errors.email?.message as ReactNode}
            isRequired
        />
        {/* {JSON.stringify(serType)}{JSON.stringify(projType)} */}
        <Textarea
            label="Additional details"
            placeholder={serviceTypeWatch == '0' || serviceTypeWatch == '2'?t("additional-info",{ns:"misc"}):''}
            className="w-full col-span-2 duration-100"
            classNames={{
                base: "",
                input: "resize-y min-h-[40px]",
            }}
            isDisabled={isLoadingBtn}
            {...register("description")}
            errorMessage={errors.description?.message as ReactNode}
        />
        <div className='relative w-full flex justify-center col-span-2 duration-100'>
            <Button {...BUTTON_PROPS} fullWidth disable
                className='text-[var(--foreground)] font-medium bg-transparent 
                    bg-[var(--btn-cta)] text-[white]
                    data-[hover=true]:text-[var(--black)]'
                isLoading={isLoadingBtn}
                type='submit'
            >
                {t("send", "contact")}
            </Button>
        </div>
    </form>
}

export default ContactForm