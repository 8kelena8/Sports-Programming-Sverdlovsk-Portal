import React from "react";

export interface FooterProps {
  contactForm: React.ReactNode;
}

const Footer: React.FC<FooterProps> = ({ contactForm }) => {
  return (
    <footer className="bg-base-900 space-y-14 pt-14 max-xl:pt-5 max-xl:px-5">
      <div className="grid grid-cols-[1fr_1fr_auto] max-xl:grid-cols-2 max-xl:grid-rows-2 container mx-auto gap-y-5">
        <div className="space-y-2">
          <h3 className="text-2xl max-xl:text-xl font-bold">Контакты</h3>
          <ol className="list-none xl:font-bold">
            <li>Phone</li>
            <li>Email</li>
            <li>Address</li>
          </ol>
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl max-xl:text-xl font-bold">Полезные ссылки</h3>
          <ol className="list-none xl:font-bold">
            <li>Link 1</li>
            <li>Link 2</li>
            <li>Link 3</li>
            <li>Link 4</li>
          </ol>
        </div>
        <div className="space-y-2 xl:max-w-[600px] w-full text-background max-xl:col-span-2">
          <h3 className="text-2xl font-bold max-xl:text-xl text-foreground">
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
