import React from "react";

export interface FooterProps {
  contactForm?: React.ReactNode;
}

const Footer: React.FC<FooterProps> = ({ contactForm }) => {
  return (
    <footer className="bg-base-900 space-y-14 pt-14">
      <div className="flex justify-between container mx-auto">
        <div className="space-y-2">
          <h3 className="text-2xl font-bold">Контакты</h3>
          <ol className="list-none font-bold">
            <li>Phone</li>
            <li>Email</li>
            <li>Address</li>
          </ol>
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl font-bold">Полезные ссылки</h3>
          <ol className="list-none font-bold">
            <li>Link 1</li>
            <li>Link 2</li>
            <li>Link 3</li>
            <li>Link 4</li>
          </ol>
        </div>
        <div className="space-y-2 max-w-[600px] w-96 xl:w-full text-background">
          <h3 className="text-2xl font-bold text-foreground">
            Оставить почту для связи
          </h3>
          {contactForm}
        </div>
      </div>
      <div className="container bg-background text-center mx-auto py-5">
        © Федерация спортивного программирования Свердловской области, 2024 Все
        права защищены.
      </div>
    </footer>
  );
};

export default React.memo(Footer);
