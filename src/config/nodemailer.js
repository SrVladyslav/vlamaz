import nodemailer from 'nodemailer'

const email = process.env.EMAIL_USERNAME
const pass = process.env.EMAIL_PASSWORD
const pemail = process.env.PERSONAL_EMAIL

export const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: email,
        pass: pass,
    }
})

export const mailOptions = {
    from: email, 
    to: pemail
}