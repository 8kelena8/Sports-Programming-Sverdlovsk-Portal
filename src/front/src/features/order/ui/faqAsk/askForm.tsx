import { Button } from "@/shared/ui/button";
import { Checkbox } from "@/shared/ui/checkbox";
import React, { FormEvent } from "react";

export interface AskModalProps {}

const AskForm: React.FC<AskModalProps> = ({}) => {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    console.log(e.currentTarget.elements);
  };

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <label htmlFor="faqAskEmail" className="block">
        <span>Email</span>
        <input
          type="email"
          name="email"
          id="faqAskEmail"
          className="ring-0 outline-none w-full rounded bg-white text-black p-2"
          placeholder="Ваш адрес электронной почты"
          required
        />
      </label>
      <label htmlFor="faqAskName" className="block">
        <span>Имя</span>
        <input
          type="text"
          name="name"
          id="faqAskName"
          className="ring-0 outline-none w-full rounded bg-white text-black p-2"
          placeholder="Ваше имя"
          required
        />
      </label>
      <label htmlFor="faqAskQuestion" className="block">
        <span>Вопрос</span>
        <textarea
          name="question"
          id="faqAskQuestion"
          className="ring-0 outline-none w-full rounded bg-white text-black p-2 min-h-36"
          placeholder="Текст вопроса"
          required
        />
      </label>
      <label htmlFor="faqAskAgree" className="flex items-center space-x-2">
        <Checkbox id="faqAskAgree" name="agree" required />
        <span className="text-sm">
          Отправляя форму, вы даёте согласие на обработку персональных данных
        </span>
      </label>
      <Button type="submit" variant="primary" className="w-full">
        Отправить
      </Button>
    </form>
  );
};

export default React.memo(AskForm);
