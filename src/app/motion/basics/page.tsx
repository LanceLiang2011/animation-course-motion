import React from "react";
import ShowHide from "./ShowHide";
import DragGesture from "./DragGesture";

export default function Page() {
  return (
    <div>
      <h1 className="title">Framer Motion Basics</h1>
      <p className="paragraph mb-12">
        Framer Motion give us a Declaritive way of doing all sorts of animations
      </p>
      <div className="flex">
        <ShowHide />
        <DragGesture />
      </div>
    </div>
  );
}
