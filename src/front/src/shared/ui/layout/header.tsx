import Image from "next/image";
import React from "react";
import Link from "next/link";

export interface HeaderProps {
  nav?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ nav }) => {
  return (
    <header className="w-full bg-white text-base-950">
      <div className="container p-5 flex items-center justify-between mx-auto">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/img/logo-full.png"
            width={150}
            height={50}
            alt="Логотип"
          />
          <span className="font-bold">
            Федерация спортивного
            <br />
            программирования Свердловской области
          </span>
        </Link>
        {nav}
      </div>
    </header>
  );
};

export default React.memo(Header);
