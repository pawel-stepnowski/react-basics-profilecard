import React from "react";

/** @type {({}: { counter_image_url: string, profile_image_url: string, counter: number, flip_horizontally: boolean }) => React.JSX.Element} */
export default function ProfileCardImage({ counter_image_url, profile_image_url, counter, flip_horizontally })
{
  return <div className="relative m-2 min-w-36">
    <img className="size-36" src={profile_image_url} />
    <div className={`absolute bottom-0 flex items-end font-extrabold ${flip_horizontally ? 'right-24 flex-row-reverse' : 'left-24 flex-row'}`}>
      <img className="size-14 min-w-14" src={counter_image_url} />
      <span className="mx-2 text-3xl text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 to-cyan-500">{counter}</span>
    </div>
  </div>;
}