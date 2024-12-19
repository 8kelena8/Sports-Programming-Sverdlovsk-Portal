"use server";

import { SendEmailObject } from "@/shared/types/email";
import { serverEmailController } from "@/shared/api/server";

export async function sendFeedbackEmail(formData: FormData) {
  const senderEmail = formData.get("email")!.toString();
  const senderSubject = formData.get("title")!.toString();
  const senderQuestion = formData.get("question")!.toString();

  const message = `Было получено обращение от ${senderEmail}
Тема: ${senderSubject}
Сообщение:
${senderQuestion}`;

  const data: SendEmailObject = {
    email: process.env["SERVER_EMAIL"]!,
    subject: "Обращение с сайта",
    message: message,
  };

  await serverEmailController.sendEmail(data);
}

export async function sendContactEmail(formData: FormData) {
  const senderEmail = formData.get("contactEmail")!.toString();

  const message = `Был получен запрос на связь от ${senderEmail}`;

  const data: SendEmailObject = {
    email: process.env["SERVER_EMAIL"]!,
    subject: "Запрос на связь",
    message: message,
  };

  await serverEmailController.sendEmail(data);
}
