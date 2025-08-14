import Link from "next/link";
import Image from "next/image";

const NavLink = ({ subId, pageId }: NavLinkProps) => {
  let icon = "back.png"; // the icon linking to the frontpage
  let url = "/"; // the frontpage url
  let queryId: string | null = null; // the id for the query needed for the subpages - null for the frontpage

  if (subId) { // if an imgId (connected to the subpages) is sent through the props
    icon = "nav-" + subId + ".png"; // the icon linking to the subpage with id == subId
    url = "/subpage"; // the subpage url
    queryId = subId; // the id for the query is set
  }

  return (
    <figure>
      <Link
        href={{ pathname: url, query: { id: queryId } }} 
        // the image(s) link to either the frontpage or one of the subpages
        className="flex flex-col"
      >
        {pageId && pageId.toString() == subId && (
          // this image will only show for the active subpage-link
          <Image
            src={"/images/nav_ui/nav-" + subId + "-where.png"}
            alt="active navigation link"
            width="50"
            height="50"
            className="sm:order-1 md:order-2"
          />
        )}

        <Image
          src={"/images/nav_ui/" + icon}
          alt="navigation link"
          width="50"
          height="50"
          className={`sm:order-2 md:order-1 ${
            pageId && pageId.toString() == subId ? "mt-0" : "mt-3.5 md:mt-0"
            // the icons get realigned on small screens
          }`}
        />
      </Link>
    </figure>
  );
};

export default NavLink;
