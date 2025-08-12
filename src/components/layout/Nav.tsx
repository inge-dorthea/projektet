import NavLink from "./NavLink";
import Image from "next/image";

const Nav = ({ id }: { id: number | null }) => {
  return (
    <header className="flex justify-between">
      {/* if you are on the frontpage, the navigation won't show at mobile-size */}
      <nav className={`w-[100%] ${id == null ? "hidden md:block" : "block"}`}>
        <menu className="flex gap-1 justify-between md:justify-start">
          {id != null && (
            <li>
              <NavLink url="/" imgId="back" pageId={id} />
            </li>
          )}
          <div className="flex gap-2">
            <li>
              <figure>
                <NavLink url="/subpage?id=1" imgId="1" pageId={id} />
              </figure>
            </li>
            <li>
              <NavLink url="/subpage?id=2" imgId="2" pageId={id} />
            </li>
            <li>
              <NavLink url="/subpage?id=3" imgId="3" pageId={id} />
            </li>
          </div>
        </menu>
      </nav>
      {/* if you are on the frontpage, there will be a logo in the header */}
      <figure className={id == null ? "block" : "hidden"}>
        <Image
          src="/images/logo/logo-final.png"
          width="110"
          height="110"
          alt="logo"
          className="mt-4"
        />
      </figure>
    </header>
  );
};

export default Nav;
