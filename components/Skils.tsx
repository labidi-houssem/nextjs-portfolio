import React from "react";

const techIcons = [
  { name: "JavaScript", src: "/js.svg" },
  { name: "TypeScript", src: "/ts.svg" },
  { name: "React", src: "/re.svg" },
  { name: "Node.js", src: "/nodejs.svg" },
  { name: "Next.js", src: "/next.svg" },
  { name: "HTML", src: "/html.svg" },
  { name: "CSS", src: "/css.svg" },
  { name: "MySQL", src: "/mysql1.svg" },
  { name: "MongoDB", src: "/mongodb.svg" },
  { name: "Flutter", src: "/flutter.svg" },
  { name: "Dart", src: "/dart.svg" },
  { name: "C++", src: "/c++.svg" },
];

const Skils = () => (
  <div className="py-10">
    <h1 className="heading mb-8">
      My <span className="text-purple">Skills</span>
    </h1>
    <div className="flex flex-wrap justify-center gap-6">
      {techIcons.map((icon) => (
        <div key={icon.name} className="flex flex-col items-center">
          <img src={icon.src} alt={icon.name} className="w-16 h-16" />
          <span className="mt-2 text-white-200 text-sm">{icon.name}</span>
        </div>
      ))}
    </div>
  </div>
);

export default Skils;
