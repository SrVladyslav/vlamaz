import { NextResponse, NextRequest } from 'next/server';
import {transporter, mailOptions} from '@/config/nodemailer'

export async function POST(req:NextRequest) {
    const formVals:any = await req.json()
    console.log("Email: ", formVals)

    // return NextResponse.json({msg:200})
    try{
        await transporter.sendMail({
            ...mailOptions,
            subject:"Hola",
            text: "hola esto es texto si no hay html",
            html: `<div style="font-family: Arial, sans-serif;">
            <table style="width: 100%; border-collapse: collapse; border: 1px solid black;">
                <tr>
                    <th style="width: 30%; font-weight: bold; border-bottom: 1px solid black;">Name:</th>
                    <td style="border-bottom: 1px solid black;">${formVals?.name}</td>
                </tr>
                <tr>
                    <th style="width: 30%; font-weight: bold; border-bottom: 1px solid black;">Email:</th>
                    <td style="border-bottom: 1px solid black;">${formVals?.email}</td>
                </tr>
                <tr>
                    <th style="width: 30%; font-weight: bold; border-bottom: 1px solid black;">Service Type:</th>
                    <td style="border-bottom: 1px solid black;">${formVals?.service_type}</td>
                </tr>
                <tr>
                    <th style="width: 30%; font-weight: bold; border-bottom: 1px solid black;">Budget:</th>
                    <td style="border-bottom: 1px solid black;">${formVals?.budget}</td>
                </tr>
                <tr>
                    <th style="width: 30%; font-weight: bold; border-bottom: 1px solid black;">Project Type:</th>
                    <td style="border-bottom: 1px solid black;">${formVals?.project_type}</td>
                </tr>
                <tr>
                    <th style="width: 30%; font-weight: bold; border-bottom: 1px solid black;">Description:</th>
                    <td style="border-bottom: 1px solid black;">${formVals?.description}</td>
                </tr>
            </table>
        </div>`
        })
    }catch(e:any){
        console.log(e)
        return NextResponse.json({message: e.message})
    }

    return NextResponse.json({});
}