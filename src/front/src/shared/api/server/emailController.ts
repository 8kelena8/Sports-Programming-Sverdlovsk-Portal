import { SendEmailObject } from "@/shared/types/email";

const sendEmail = async (data: SendEmailObject) => {
  await fetch(new URL("/email-send/", process.env.SERVER_API_URL), {
    method: "POST",
    body: JSON.stringify(data),
  });
};

const emailController = {
  sendEmail,
};

export default emailController;
