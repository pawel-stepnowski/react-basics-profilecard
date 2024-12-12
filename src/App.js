import React, { useState } from "react";
import ProfileCard from "./ProfileCard";
import { AppSettings } from "./AppSettings";
import { AppService } from "./AppService";
import './default.css'

export default function App() 
{
  const [profile_card_settings, setProfileCardsSettings] = useState(AppSettings.Profile_Cards);
  const { presentation: { flip_horizontally }, images, loading } = profile_card_settings;
  const flipProfileCard = () => setProfileCardsSettings({ presentation: { flip_horizontally: !flip_horizontally }, images, loading });
  return <main>
    <div className="p-10">
      <ProfileCard settings={profile_card_settings} profile={AppService.readProfile()} />
    </div>
    <p><button className="button" onClick={flipProfileCard}>Reorder</button></p>
  </main>
}
