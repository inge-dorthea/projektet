// kun til subpage

import React from "react";
import Image from "next/image";
import Link from "next/link";

const FooterMobile = ({ id }: { id: number }) => {
  let imgSrc = "/images/logo/logo-a.png";

  if (id == 3) {
    imgSrc = "/images/logo/logo-b.png";
  }

  return (
    <footer className="flex justify-end pb-25 md:hidden">
      <Link href="/">
        <Image src={imgSrc} width="100" height="100" alt="logo" />
      </Link>
    </footer>
  );
};

export default FooterMobile;
