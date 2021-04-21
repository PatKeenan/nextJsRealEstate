import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Navlink = (props) => {
  const router = useRouter();
  return (
    <Link href={props.link}>
      <a
        disabled={props.disabledStatus}
        title={props.title}
        className={
          router.pathname == props.link && router.pathname !== "/"
            ? "navlinkActive navigationLink blue-text px-3 py-1  shadow-md "
            : "navigationLink blue-text px-3 py-1 transition ease-in-out transform active:scale-95 hover:shadow-md hoverNonActiveNav "
        }
      >
        {props.linkTitle}
      </a>
    </Link>
  );
};

export default Navlink;
