import Link from "next/link";
import Image from "next/image";

interface Props {
  url: string;
  imgId: string;
  pageId: number | null;
}

const NavLink = (props: Props) => {
  // imgName = the image source for the navigation link image
  // it is not used for the active navigation link image
  let imgName = "nav-" + props.imgId + ".png";

  //   if the imgId is "back" then the imgName won't have "nav-" in front of it
  if (props.imgId == "back") {
    imgName = props.imgId + ".png";
  }

  return (
    <figure>
      <Link href={props.url} className="flex flex-col">
        {/* the active navigation link image will only be there if the link is active */}
        {props.pageId && props.pageId.toString() == props.imgId && (
          <Image
            src={"/images/nav_ui/nav-" + props.imgId + "-where.png"}
            alt="active navigation link"
            width="50"
            height="50"
            className="sm:order-1 md:order-2"
          />
        )}

        <Image
          src={"/images/nav_ui/" + imgName}
          alt="navigation link"
          width="50"
          height="50"
          className={`sm:order-2 md:order-1 ${
            props.pageId && props.pageId.toString() == props.imgId
              ? "mt-0"
              : "mt-3.5 md:mt-0"
          }`}
          //   ^ this makes sure that the images are aligned horizontally
        />
      </Link>
    </figure>
  );
};

export default NavLink;
