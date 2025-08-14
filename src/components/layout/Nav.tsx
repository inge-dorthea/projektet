import Image from "next/image";

import NavLink from "./NavLink";

const Nav = ({ id }: { id: number | null }) => {
  // the id = searchParams from subpages, and null from the frontpage
  // the id is used to check if the user is on a subpage - and which specific one
  // ^ to have different versions of the navigation on different pages

  return (
    <header className="flex justify-between mt-10">
      <nav className={`w-[100%] ${id == null ? "hidden md:block" : "block"}`}>
        {/* on the frontpage, the navigation won't show on small screens */}
        <menu className="flex gap-1 justify-between md:justify-start">
          {id != null && ( // this NavLink only shows on subpages
            <li>
              <NavLink pageId={id} />
            </li>
          )}
          <div className="flex gap-2">
            <li>
              <NavLink subId="1" pageId={id} />
            </li>
            <li>
              <NavLink subId="2" pageId={id} />
            </li>
            <li>
              <NavLink subId="3" pageId={id} />
            </li>
          </div>
        </menu>
      </nav>
      <figure className={id == null ? "block" : "hidden"}>
        {/* on the frontpage, there's a logo in the header */}
        <Image
          src="/images/logo/logo-final.png"
          width="500"
          height="200"
          alt="logo"
          className="mt-4 h-10 w-auto"
        />
      </figure>
    </header>
  );
};

export default Nav;
