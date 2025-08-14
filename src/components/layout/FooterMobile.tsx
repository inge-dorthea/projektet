// the footer is only used on the subpages

import Image from "next/image";
import Link from "next/link";

const FooterMobile = ({ id }: { id: number }) => {
  // image source for the logo image which is orange on the third subpage
  let imgSrc = "/images/logo/logo-a.png";

  if (id == 3) {
    imgSrc = "/images/logo/logo-b.png";
  }

  return (
    <footer className="flex justify-end pb-25 md:hidden">
      <Link href="/">
        {/* the logo links to the frontpage */}
        <Image
          src={imgSrc}
          width="191"
          height="75"
          alt="logo"
          className="w-20"
        />
      </Link>
    </footer>
  );
};

export default FooterMobile;
