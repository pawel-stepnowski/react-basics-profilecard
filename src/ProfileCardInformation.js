import React from "react";

/** @type {({}: { verified_image_url: string, name: string, topic: string }) => React.JSX.Element} */
export function ProfileCardInformation({ verified_image_url, name, topic })
{
  return <div className="font-sans text-4xl ml-4">
    <div className="h-18 flex items-center">
      <span className="font-bold inline">{name}</span>
      <img className="size-12 ml-2 mt-3" src={verified_image_url} />
    </div>
    <div className="h-18 content-center min-w-[16em]">
      <span>{topic}</span>
    </div>
  </div>;
}