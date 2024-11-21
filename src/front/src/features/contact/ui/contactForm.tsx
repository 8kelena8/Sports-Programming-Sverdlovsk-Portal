"use client";

import { Button } from "@/shared/ui/button";
import React, { useState } from "react";

export interface ContactFormProps {}

const ContactForm: React.FC<ContactFormProps> = ({}) => {
  const [email, setEmail] = useState("");

  const onSubmit = () => {};

  return (
    <label
      className="flex p-5 bg-base-400 cursor-text w-full"
      htmlFor="GuestContactEmail"
    >
      <input
        type="email"
        name="contactEmail"
        id="GuestContactEmail"
        className="bg-transparent ring-0 outline-none w-full"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button variant="primary" onClick={onSubmit}>
        Отправить
      </Button>
    </label>
  );
};

export default React.memo(ContactForm);
