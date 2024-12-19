import { SendEmailObject } from "@/shared/types/email";

const sendEmail = async (data: SendEmailObject) => {
  const response = await fetch(
    new URL("/discipline-list", process.env.SERVER_API_URL),
    {
      method: "POST",
      body: JSON.stringify(data),
    }
  );
};

const emailController = {
  sendEmail,
};

export default emailController;
