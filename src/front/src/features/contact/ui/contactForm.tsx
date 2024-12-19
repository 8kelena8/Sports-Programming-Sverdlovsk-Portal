import { sendContactEmail } from "@/shared/api/server/actions";
import { Button } from "@/shared/ui/button";
import React from "react";

export interface ContactFormProps {}

const ContactForm: React.FC<ContactFormProps> = ({}) => {
  return (
    <form action={sendContactEmail}>
      <label
        className="flex p-5 bg-base-400 cursor-text w-full"
        htmlFor="GuestContactEmail"
      >
        <input
          type="email"
          name="contactEmail"
          id="GuestContactEmail"
          className="bg-transparent ring-0 outline-none w-full"
        />
        <Button type="submit" variant="primary">
          Отправить
        </Button>
      </label>
    </form>
  );
};

export default React.memo(ContactForm);
