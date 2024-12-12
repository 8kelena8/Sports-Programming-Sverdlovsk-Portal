import { MiniNewsCard } from "@/entities/news";
import { News } from "@/shared/types/news";
import Image from "next/image";
import React from "react";

const lastNews: News[] = [
  {
    id: 0,
    title: "Новость 1",
    publicationDate: "2022-04-12T17:09:34.000Z",
    summary:
      "В Калуге завершились соревнования по продуктовому программированию",
    fullContent:
      "В Калуге завершились соревнования по продуктовому программированию",
  },
  {
    id: 1,
    title: "Новость 2",
    publicationDate: "2022-04-12T17:09:34.000Z",
    summary:
      "«Код мира»: в Севастополе завершились международные соревнования по спортивному программированию",
    fullContent:
      "«Код мира»: в Севастополе завершились международные соревнования по спортивному программированию",
  },
  {
    id: 2,
    title: "Новость 3",
    publicationDate: "2022-04-12T17:09:34.000Z",
    summary:
      "В Калуге завершились соревнования по продуктовому программированию",
    fullContent:
      "В Калуге завершились соревнования по продуктовому программированию",
  },
  {
    id: 3,
    title: "Новость 4",
    publicationDate: "2022-04-12T17:09:34.000Z",
    summary:
      "«Код мира»: в Севастополе завершились международные соревнования по спортивному программированию",
    fullContent:
      "«Код мира»: в Севастополе завершились международные соревнования по спортивному программированию",
  },
  {
    id: 4,
    title: "Новость 5",
    publicationDate: "2022-04-12T17:09:34.000Z",
    summary:
      "В Калуге завершились соревнования по продуктовому программированию",
    fullContent:
      "В Калуге завершились соревнования по продуктовому программированию",
  },
  {
    id: 5,
    title: "Новость 6",
    publicationDate: "2022-04-12T17:09:34.000Z",
    summary:
      "В Калуге завершились соревнования по продуктовому программированию",
    fullContent:
      "В Калуге завершились соревнования по продуктовому программированию",
  },
];

export interface NewsIdPageProps {
  id: News["id"];
}

const NewsIdPage: React.FC<NewsIdPageProps> = ({ id }) => {
  return (
    <div className="container mx-auto flex max-xl:flex-col gap-10 my-12 px-5">
      <main className="space-y-10">
        <div className="w-full">
          <Image
            alt={`Новость ${id + 1}`}
            src="/img/news.png"
            width={984}
            height={700}
            className="aspect-square object-contain"
          />
        </div>
        <h1 className="font-bold text-4xl max-xl:text-2xl">Новость {id + 1}</h1>
        <div className="xl:text-xl break-words">
          Sadipscing labore amet rebum est et justo gubergren. Et eirmod ipsum
          sit diam ut magna lorem. Nonumy vero labore lorem sanctus rebum et
          lorem magna kasd, stet amet magna accusam consetetur eirmod. Kasd
          accusam sit ipsum sadipscing et at at sanctus et. Ipsum sit gubergren
          dolores et, consetetur justo invidunt at et aliquyam ut et vero clita.
          Diam sea sea no sed dolores diam nonumy, gubergren sit stet no diam
          kasd vero. Voluptua est takimata stet invidunt sed rebum nonumy stet,
          clita aliquyam dolores vero stet consetetur elitr takimata rebum
          sanctus. Sit sed accusam stet sit nonumy kasd diam dolores, sanctus
          lorem kasd duo dolor dolor vero sit et. Labore ipsum duo sanctus amet
          eos et. Consetetur no sed et aliquyam ipsum justo et, clita lorem sit
          vero amet amet est dolor elitr, stet et no diam sit. Dolor erat justo
          dolore sit invidunt. Diam dolor est labore duo invidunt ipsum clita
          et, sed et lorem voluptua tempor invidunt at est sanctus sanctus.
          Clita dolores sit kasd diam takimata justo diam lorem sed. Magna amet
          sed rebum eos. Clita no magna no dolor erat diam tempor rebum
          consetetur, sanctus labore sed nonumy diam lorem amet eirmod. No at
          tempor sea diam kasd, takimata ea nonumy elitr sadipscing gubergren
          erat. Gubergren at lorem invidunt sadipscing rebum sit amet ut ut,
          voluptua diam dolores at sadipscing stet. Clita dolor amet dolor ipsum
          vero ea ea eos. Sadipscing labore amet rebum est et justo gubergren.
          Et eirmod ipsum sit diam ut magna lorem. Nonumy vero labore lorem
          sanctus rebum et lorem magna kasd, stet amet magna accusam consetetur
          eirmod. Kasd accusam sit ipsum sadipscing et at at sanctus et. Ipsum
          sit gubergren dolores et, consetetur justo invidunt at et aliquyam ut
          et vero clita. Diam sea sea no sed dolores diam nonumy, gubergren sit
          stet no diam kasd vero. Voluptua est takimata stet invidunt sed rebum
          nonumy stet, clita aliquyam dolores vero stet consetetur elitr
          takimata rebum sanctus. Sit sed accusam stet sit nonumy kasd diam
          dolores, sanctus lorem kasd duo dolor dolor vero sit et. Labore ipsum
          duo sanctus amet eos et. Consetetur no sed et aliquyam ipsum justo et,
          clita lorem sit vero amet amet est dolor elitr, stet et no diam sit.
          Dolor erat justo dolore sit invidunt.
        </div>
      </main>
      <section className="bg-base-900 p-10 space-y-10 xl:min-w-[500px] h-fit max-xl:p-5">
        <h2 className="font-bold text-2xl max-xl:text-xl">Последние новости</h2>
        {lastNews.map((n) => (
          <MiniNewsCard news={n} key={n.id} />
        ))}
      </section>
    </div>
  );
};

export default React.memo(NewsIdPage);
