'use server'

import { transporter, mailOptions } from '@/config/nodemailer'

type ContactFormData = {
    name: string;
    email: string;
    budget?: string;
    description?: string;
    service_type: string;
    project_type?: string;
    mentoring_type?: string;
}

export async function sendEmailToVlad(data: ContactFormData) {
    try {
        await transporter.sendMail({
            ...mailOptions,
            subject: "Hola",
            text: "hola esto es texto si no hay html",
            html: `<div style="font-family: Arial, sans-serif;">
            <table style="width: 100%; border-collapse: collapse; border: 1px solid black;">
                <tr>
                    <th style="width: 30%; font-weight: bold; border-bottom: 1px solid black;">Name:</th>
                    <td style="border-bottom: 1px solid black;">${data?.name}</td>
                </tr>
                <tr>
                    <th style="width: 30%; font-weight: bold; border-bottom: 1px solid black;">Email:</th>
                    <td style="border-bottom: 1px solid black;">${data?.email}</td>
                </tr>
                <tr>
                    <th style="width: 30%; font-weight: bold; border-bottom: 1px solid black;">Service Type:</th>
                    <td style="border-bottom: 1px solid black;">${data?.service_type}</td>
                </tr>
                <tr>
                    <th style="width: 30%; font-weight: bold; border-bottom: 1px solid black;">Mentoring Type:</th>
                    <td style="border-bottom: 1px solid black;">${data?.mentoring_type}</td>
                </tr>
                <tr>
                    <th style="width: 30%; font-weight: bold; border-bottom: 1px solid black;">Budget:</th>
                    <td style="border-bottom: 1px solid black;">${data?.budget}</td>
                </tr>
                <tr>
                    <th style="width: 30%; font-weight: bold; border-bottom: 1px solid black;">Project Type:</th>
                    <td style="border-bottom: 1px solid black;">${data?.project_type}</td>
                </tr>
                <tr>
                    <th style="width: 30%; font-weight: bold; border-bottom: 1px solid black;">Description:</th>
                    <td style="border-bottom: 1px solid black;">${data?.description}</td>
                </tr>
            </table>
        </div>`
        })
        return { success: true }
    } catch (e: any) {
        return { success: false, message: e?.message }
    }
}
