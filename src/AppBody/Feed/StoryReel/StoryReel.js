import React from "react";
import "./StoryReel.css";
import Story from "./Story/Story";

function StoryReel() {
  return (
    <div className="story__reels">
      <Story
        image="https://picsum.photos/seed/picsum/200/300"
        title="Sonny Vgtay"
        profileSrc="https://picsum.photos/id/237/200/300"
      />
      <Story
        image="https://picsum.photos/200/300?grayscale"
        title="Ninja"
        profileSrc="https://picsum.photos/200/300.jpg"
      />
      <Story
        image="https://picsum.photos/id/870/200/300?grayscale&blur=2"
        title="Mario"
        profileSrc="https://picsum.photos/200/300.webp"
      />
      <Story
        image="https://picsum.photos/200/300?grayscale"
        title="Shaun"
        profileSrc="https://picsum.photos/200/300?grayscale"
      />
      <Story
        image="https://picsum.photos/id/237/200/300"
        title="Matyart"
        profileSrc="https://picsum.photos/200/300?grayscale"
      />
    </div>
  );
}

export default StoryReel;
