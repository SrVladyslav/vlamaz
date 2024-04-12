'use client'
import { Button, Switch} from "@nextui-org/react";
import { useTheme } from "next-themes";
import {MoonIcon} from '@/components/icons/MoonIcon'
import {SunIcon} from '@/components/icons/SunIcon'
import {SWITCH_PROPS} from '@/config/styles'

const ToggleTheme =()=>{
    const {theme, setTheme} = useTheme()

    // return <Button
    //     onClick={()=>{
    //         console.log("Check")
    //         setTheme(theme == 'dark'? 'light': 'dark')
    //     }}
    //     className="z-0"
    //     color="primary"
    //     radius="full"
    // >
    //     Toggle Theme {theme}
    // </Button>

    return (   
        <Switch
            {...SWITCH_PROPS}
            defaultSelected
            isSelected={theme=='light'}
            onValueChange={()=>{setTheme(theme == 'dark'? 'light': 'dark')}}
            size="lg"
            color="success"
            startContent={<SunIcon />}
            endContent={<MoonIcon />}
        />
    )
}

export default ToggleTheme