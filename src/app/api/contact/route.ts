import { google } from 'googleapis';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, phone, email, project, message } = body;

        // Validation
        if (!name || !phone || !email || !project || !message) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // 1. Save to Google Sheets
        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
                private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
            },
            scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        });

        const sheets = google.sheets({ version: 'v4', auth });
        const spreadsheetId = process.env.GOOGLE_SHEET_ID;
        const range = 'Sheet1!A:F';

        const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

        await sheets.spreadsheets.values.append({
            spreadsheetId,
            range,
            valueInputOption: 'USER_ENTERED',
            requestBody: {
                values: [[timestamp, name, phone, email, project, message]],
            },
        });

        // 2. Send Email Notification
        try {
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASS, // App Password
                },
            });

            const mailOptions = {
                from: process.env.EMAIL_USER,
                to: 'interiorsbyrama@gmail.com', // Primary notification email
                subject: `New Inquiry: ${name} - ${project}`,
                html: `
                    <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
                        <h2 style="color: #1a1a1a; border-bottom: 2px solid #D4AF37; padding-bottom: 10px;">New Furniture Inquiry</h2>
                        <p style="font-size: 16px; color: #555;">You have received a new message from the contact form:</p>
                        
                        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
                            <tr style="background: #f9f9f9;">
                                <td style="padding: 10px; font-weight: bold; border: 1px solid #eee;">Name</td>
                                <td style="padding: 10px; border: 1px solid #eee;">${name}</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px; font-weight: bold; border: 1px solid #eee;">Phone</td>
                                <td style="padding: 10px; border: 1px solid #eee;">${phone}</td>
                            </tr>
                            <tr style="background: #f9f9f9;">
                                <td style="padding: 10px; font-weight: bold; border: 1px solid #eee;">Email</td>
                                <td style="padding: 10px; border: 1px solid #eee;"><a href="mailto:${email}">${email}</a></td>
                            </tr>
                            <tr>
                                <td style="padding: 10px; font-weight: bold; border: 1px solid #eee;">Project Type</td>
                                <td style="padding: 10px; border: 1px solid #eee; text-transform: capitalize;">${project}</td>
                            </tr>
                            <tr style="background: #f9f9f9;">
                                <td style="padding: 10px; font-weight: bold; border: 1px solid #eee;">Message</td>
                                <td style="padding: 10px; border: 1px solid #eee; line-height: 1.6;">${message}</td>
                            </tr>
                        </table>
                        
                        <p style="margin-top: 30px; font-size: 12px; color: #888; text-align: center;">
                            This inquiry was submitted on ${timestamp} via Rama Interiors website.
                        </p>
                    </div>
                `,
            };

            await transporter.sendMail(mailOptions);
            console.log('Email notification sent successfully');
        } catch (emailError) {
            // Log email error but don't fail the request since Sheet save worked
            console.error('Nodemailer Error:', emailError);
        }

        return NextResponse.json({ success: true }, { status: 200 });
    } catch (error: any) {
        console.error('API Error:', error);
        return NextResponse.json(
            { error: 'Failed to process inquiry. Please try again later.' },
            { status: 500 }
        );
    }
}
