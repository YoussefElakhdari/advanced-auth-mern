import { VERIFICATION_EMAIL_TEMPLATE, PASSWORD_RESET_REQUEST_TEMPLATE } from "./emailTemplates.js";
import { mailtrapClient, sender } from "./mailtrap.config.js";

export const sendVerificationEmail=async(email, verificationToken)=>{
    const recipient = [{email}];

    try {
        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            subject: "Verify you email",
            html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken),
            category: "Email Verification"
        });
        console.log("emailsent successfully", response);
    } catch (error) {
        console.log('error sending verification ', error); 
        throw new Error(`Error sending email: ${error}`);
    }
};

export const sendWelcomeEmail = async(email, name)=>{
    const recipient = [{email}];

    try {
        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            template_uuid: "bab66af2-8a2e-4e5c-b185-ef50a756d58e",
            template_variables: {
              "company_info_name": "Test_Company_info_name",
              "name": name,
              "company_info_address": "Test_Company_info_address",
              "company_info_city": "Test_Company_info_city",
              "company_info_zip_code": "Test_Company_info_zip_code",
              "company_info_country": "Test_Company_info_country"
            }
        });
        console.log('email sent successfully', response);
    } catch (error) {
        console.log('error sending the email', error);
        throw new Error(`Error sending welcome email: ${error}`);
    }

}

export const sendPasswordResetEmail = async(email, resetUrl) => {
    const recipient = [{email}];

    try {
        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            subject: "reset your password",
            html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetUrl),
            category: "password reset",
        });
    } catch (error) {
        console.error("error sending the reset email", error);

        throw new Error(`Error sending the email : ${error}`);
    }
}