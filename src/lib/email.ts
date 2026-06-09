import emailjs from "@emailjs/browser";

export const sendEmail = async (
  name: string,
  email: string,
  message: string
) => {
  return emailjs.send(
    process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID!,
    process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID!,
    {
      name,
      email,
      message,
    },
    process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY!
  );
};