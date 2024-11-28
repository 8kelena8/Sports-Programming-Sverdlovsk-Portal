import { FeedbackForm } from "@/features/contact";
import { ContentHero } from "@/shared/ui/layout";
import { InstagramIcon, SendIcon, YoutubeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export interface ContactsPageProps {}

const ContactsPage: React.FC<ContactsPageProps> = ({}) => {
  const breadcrumbs = [
    { title: "Главная", link: "/" },
    { title: "Контакты", link: "/contacts" },
  ];

  return (
    <>
      <ContentHero title="События" breadcrumbs={breadcrumbs} />
      <div className="container mx-auto my-12 space-y-12 px-5">
        <section className="xl:bg-base-900 grid xl:grid-cols-2 xl:rounded-r max-xl:gap-12">
          <FeedbackForm className="p-12 max-xl:bg-base-900 max-xl:rounded" />
          <Image
            alt="Карта"
            src="/img/contactMap.png"
            width={813}
            height={700}
            className="object-contain rounded mx-auto"
          />
        </section>

        <section className="grid md:grid-cols-[auto_1fr] gap-12">
          <div>
            <p>Телефон</p>
            <p>+7 (999) 999-99-99</p>
          </div>
          <div>
            <p>Адрес</p>
            <p>Екатеринбург, ул. Екатеринбург</p>
          </div>
          <div>
            <p>Почта</p>
            <p>info@fcpekb.ru</p>
          </div>
          <div>
            <p>Время работы</p>
            <p>Пн-пт: 9:00 - 18:00</p>
          </div>
        </section>

        <section>
          <p className="text-xl pb-2">Мы в соц.сетях</p>
          <div className="flex gap-5 items-center text-primary text-xl">
            <Link href="https://instagram.com/" target="_blank">
              <InstagramIcon width={20} height={20} />
            </Link>
            <Link href="https://youtube.com/" target="_blank">
              <YoutubeIcon width={20} height={20} />
            </Link>
            <Link href="https://t.me/" target="_blank">
              <SendIcon width={20} height={20} />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default React.memo(ContactsPage);
