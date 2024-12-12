"use client";

import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/ui/button";
import { Checkbox } from "@/shared/ui/checkbox";
import React, { FormEvent } from "react";

export interface FeedbackFormProps {
  className?: string;
}

const FeedbackForm: React.FC<FeedbackFormProps> = ({ className }) => {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    console.log(e.currentTarget.elements);
  };

  return (
    <div className={cn("space-y-5 flex flex-col justify-center", className)}>
      <p className="text-2xl">Напишите нам</p>
      <p className="text-2xl">мы свяжемся с вами</p>
      <form onSubmit={onSubmit} className="space-y-5">
        <input
          type="email"
          name="email"
          className="ring-0 outline-none w-full rounded bg-white text-black p-2"
        />
        <input
          type="text"
          name="title"
          className="ring-0 outline-none w-full rounded bg-white text-black p-2"
        />
        <textarea
          name="question"
          className="ring-0 outline-none w-full rounded bg-white text-black p-2 min-h-36"
        />
        <Button type="submit" variant="primary" className="w-full">
          Отправить
        </Button>
        <label htmlFor="feedback_agree" className="flex items-center space-x-2">
          <Checkbox id="feedback_agree" name="agree" />
          <span className="text-sm">
            Отправляя форму, вы даёте согласие на обработку персональных данных
          </span>
        </label>
      </form>
    </div>
  );
};

export default React.memo(FeedbackForm);
