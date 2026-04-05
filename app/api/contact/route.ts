import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const { name, phone, email, message } = await req.json();
        console.log('name, phone, email, message', name, phone, email, message)
        // Configure the email transporter using SMTP
        // NOTE: You will need to replace these with real SMTP credentials
        // For Gmail, use an App Password: https://myaccount.google.com/apppasswords
        const emailUser = process.env.EMAIL_USER;
        const emailPass = process.env.EMAIL_PASS;
        const emailUserDk = process.env.EMAIL_USER_DK;
        const emailPassDk = process.env.EMAIL_PASS_DK;

        if (!emailUser || !emailPass) {
            console.error('Missing EMAIL_USER or EMAIL_PASS environment variables');
            return NextResponse.json(
                { error: 'Server configuration error' },
                { status: 500 }
            );
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: emailUser,
                pass: emailPass,
            },
        });
        const transporterDk = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: emailUserDk,
                pass: emailPassDk,
            },
        });

        const mailOptions = {
            from: emailUser,
            to: emailUser, // The destination email address (same as auth email)
            replyTo: email,
            subject: `New Contact Form Submission from ${name}`,
            html: `
                <h3>New Contact Form Submission</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong></p>
                <p>${message.replace(/\n/g, '<br>')}</p>
            `,
        };

        const mailOptionsDk = {
            from: emailUserDk,
            to: emailUserDk, // The destination email address (same as auth email)
            replyTo: email,
            subject: `New Contact Form Submission from ${name}`,
            html: `
                <h3>New Contact Form Submission</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong></p>
                <p>${message.replace(/\n/g, '<br>')}</p>
            `,
        };
        // Send the email
        await transporter.sendMail(mailOptions);
        await transporter.sendMail(mailOptionsDk);

        return NextResponse.json(
            { message: 'Email sent successfully!' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { error: 'Failed to send email' },
            { status: 500 }
        );
    }
}
