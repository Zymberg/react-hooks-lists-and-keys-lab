import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const mapLinks = links.map((links) => {
    return (
      <a key={links}
        href={`#${links}`}>
        {links}
      </a>
    )
  })
  return <nav>{mapLinks}</nav>
}

export default NavBar;
