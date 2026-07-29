'use server'

import { headers } from 'next/headers'
import { transporter, mailOptions } from '@/config/nodemailer'
import { contactSchema, type ContactFormData } from '@/schemas/contactSchema'
import { checkRateLimit } from '@/lib/rateLimit'
import { escapeHtml } from '@/lib/helpers'

const RATE_LIMIT_MAX_ATTEMPTS = 3
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000

export async function sendEmailToVlad(data: ContactFormData) {
    const parsed = contactSchema.safeParse(data)
    if (!parsed.success) {
        return { success: false, message: 'Invalid submission.' }
    }

    const headerList = await headers()
    const ip = headerList.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'
    if (!checkRateLimit(ip, RATE_LIMIT_MAX_ATTEMPTS, RATE_LIMIT_WINDOW_MS)) {
        return { success: false, message: 'Too many requests, please try again later.' }
    }

    const safe = parsed.data

    try {
        await transporter.sendMail({
            ...mailOptions,
            subject: "Hola",
            text: "hola esto es texto si no hay html",
            html: `<div style="font-family: Arial, sans-serif;">
            <table style="width: 100%; border-collapse: collapse; border: 1px solid black;">
                <tr>
                    <th style="width: 30%; font-weight: bold; border-bottom: 1px solid black;">Name:</th>
                    <td style="border-bottom: 1px solid black;">${escapeHtml(safe.name)}</td>
                </tr>
                <tr>
                    <th style="width: 30%; font-weight: bold; border-bottom: 1px solid black;">Email:</th>
                    <td style="border-bottom: 1px solid black;">${escapeHtml(safe.email)}</td>
                </tr>
                <tr>
                    <th style="width: 30%; font-weight: bold; border-bottom: 1px solid black;">Service Type:</th>
                    <td style="border-bottom: 1px solid black;">${escapeHtml(safe.service_type)}</td>
                </tr>
                <tr>
                    <th style="width: 30%; font-weight: bold; border-bottom: 1px solid black;">Mentoring Type:</th>
                    <td style="border-bottom: 1px solid black;">${escapeHtml(safe.mentoring_type)}</td>
                </tr>
                <tr>
                    <th style="width: 30%; font-weight: bold; border-bottom: 1px solid black;">Budget:</th>
                    <td style="border-bottom: 1px solid black;">${escapeHtml(safe.budget)}</td>
                </tr>
                <tr>
                    <th style="width: 30%; font-weight: bold; border-bottom: 1px solid black;">Project Type:</th>
                    <td style="border-bottom: 1px solid black;">${escapeHtml(safe.project_type)}</td>
                </tr>
                <tr>
                    <th style="width: 30%; font-weight: bold; border-bottom: 1px solid black;">Description:</th>
                    <td style="border-bottom: 1px solid black;">${escapeHtml(safe.description)}</td>
                </tr>
            </table>
        </div>`
        })
        return { success: true }
    } catch (e: unknown) {
        console.error('sendEmailToVlad failed:', e)
        return { success: false, message: 'Failed to send message. Please try again later.' }
    }
}
