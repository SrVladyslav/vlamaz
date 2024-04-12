'use client'

import {Toaster} from 'sonner'
import { useTheme } from 'next-themes'
type Theme = 'dark' | 'light' | 'system';

const availableThemes: Theme[] = ['dark', 'light', 'system'];

export default function Setup(){
    const {theme, setTheme} = useTheme()
    
    return (
        <Toaster 
            richColors={true}
            position="top-center"
            closeButton
            theme={ theme==='dark'? 
                    availableThemes[1]:theme==='system'?
                    availableThemes[2]: availableThemes[0]
                }
            duration={10000}
            toastOptions={{className: 'toast-options'}}
        />
    )
}