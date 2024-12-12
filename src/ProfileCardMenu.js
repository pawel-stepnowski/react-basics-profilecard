import React from "react";

/** @type {({}: { menu_image_url: string }) => React.JSX.Element} */
export function ProfileCardMenu({ menu_image_url })
{
  return <div className="p-4 flex items-center min-w-28"><img className="h-20" src={menu_image_url} /></div>;
}