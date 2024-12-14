"use client";

import { Button } from "@/shared/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared/ui/dialog";
import React from "react";
import AskForm from "./askForm";

export interface AskButtonProps {}

const AskButton: React.FC<AskButtonProps> = ({}) => {
  return (
    <Dialog>
      <DialogTrigger>
        <Button variant="primary" className="xl:w-[400px] w-full h-16">
          Задавать вопросы
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-base-900 border-0">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary">
            Задать вопрос
          </DialogTitle>
        </DialogHeader>
        <AskForm />
      </DialogContent>
    </Dialog>
  );
};

export default React.memo(AskButton);
