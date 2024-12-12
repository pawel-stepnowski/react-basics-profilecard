import React, { useState } from "react";
import ProfileCardImage from "./ProfileCardImage";
import { ProfileCardInformation } from "./ProfileCardInformation";
import { ProfileCardMenu } from "./ProfileCardMenu";

/** @type {({}: { settings: ProfileCardSettings, profile: Promise<Profile> }) => React.JSX.Element} */
export default function ProfileCard({ settings, profile })
{
  const { presentation: { flip_horizontally }, images, loading } = settings;
  const [{ name, image, topic, counter }, setValues] = useState({ name: loading.name, image: loading.image_url, topic: loading.topic, counter: -1 });
  const children_elements =
  [
    <ProfileCardImage key={0} counter_image_url={images.counter} profile_image_url={image} counter={counter} flip_horizontally={flip_horizontally} />, 
    <ProfileCardInformation key={1} verified_image_url={images.verified} name={name} topic={topic} />, 
    <ProfileCardMenu key={2} menu_image_url={images.menu} />
  ];
  const conditional_class_names = [];
  if (counter == -1) conditional_class_names.push('[&>*]:blur-lg grayscale');
  if (flip_horizontally) conditional_class_names.push('flipped');
  const element = <div className={`flex flex-row bg-white p-4 px-8 shadow-profilecard ${conditional_class_names}`}>{flip_horizontally ? children_elements.reverse() : children_elements}</div>;
  if (counter == -1) profile.then(setValues);
  return element;
}