"use server"
import { Resend } from "resend"
// import EmailTemplate from "./components/EmailTemplate"
interface State {
    error: string | null
    success: boolean
}

export const sendEmail = async (message: string) => {
    try {
        const resend = new Resend("re_HvCcnRgj_9dEqUgcgg4M7pS3jjWaCtJn3")
        await resend.emails.send({
            from: "onboarding@resend.dev",
            to: "judaslinarez@gmail.com",
            subject: "Form Submission",
            html: message
        })
        return {
            error: null,
            success: true
        }
    } catch (error) {
        console.log(error)
        return {
            error: (error as Error).message,
            success: false
        }
    }
}