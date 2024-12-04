import React from "react";
import {
  UilReact,
  UilHtml5,
  UilCss3Simple,
  UilJavaScript,
  UilCheckCircle,
  UilDatabase,
  UilComments,
  UilPuzzlePiece,
  UilGithub,
  UilGithubAlt,
  UilBill,
  UilTruck,
  UilGlobe,
  UilBookOpen,
  UilFeedback,
  UilExternalLinkAlt,
} from "@iconscout/react-unicons";
import comingsoon from "../../assets/comingsoon.jpg";
import eCommerce from "../../assets/eCommerce.jpg";
import blogging from "../../assets/blogging.jpg";
import chatAPp from "../../assets/chatAPp.jpg";
import shortUrl from '../../assets/shortUrl.jpg'

function Project() {
  const projects = [
    {
      title: "blogging",
      image: blogging,
      techStack: [
        { icon: <UilReact />, name: "React Js" },
        { icon: <UilJavaScript />, name: "Node Js" },
        { icon: <UilDatabase />, name: "Mongo Db" },
        { icon: <UilBill />, name: "Razor Pay" },
        { icon: <UilTruck />, name: "Ship Rocket" },
      ],
      github: "https://github.com/V-atz",
      liveDemo: "https://your-live-demo-link.com",
    },
    {
      title: "ecommerce",
      image: eCommerce,
      techStack: [
        { icon: <UilJavaScript />, name: "Node Js" },
        { icon: <UilCheckCircle />, name: "Express Js" },
        { icon: <UilDatabase />, name: "Mongo Db" },
        { icon: <UilComments />, name: "Socket.io" },
        { icon: <UilPuzzlePiece />, name: "Algorithms" },
      ],
      github: "https://github.com/V-atz/E-commerce",
      liveDemo: "https://your-live-demo-link.com",
    },
    {
      title: "chat",
      image: chatAPp,
      techStack: [
        { icon: <UilJavaScript />, name: "Node Js" },
        { icon: <UilCheckCircle />, name: "Express Js" },
        { icon: <UilDatabase />, name: "Mongo Db" },
        { icon: <UilComments />, name: "Socket.io" },
        { icon: <UilPuzzlePiece />, name: "Algorithms" },
      ],
      github: "https://github.com/V-atz/Chat-Application",
      liveDemo: "https://your-live-demo-link.com",
    },
    {
      title: "url",
      image: shortUrl,
      techStack: [
        { icon: <UilJavaScript />, name: "Node Js" },
        { icon: <UilCheckCircle />, name: "Express Js" },
        { icon: <UilDatabase />, name: "Mongo Db" },
        { icon: <UilComments />, name: "Socket.io" },
        { icon: <UilPuzzlePiece />, name: "Algorithms" },
      ],
      github: "https://github.com/V-atz/URL-Shortener",
      liveDemo: "https://your-live-demo-link.com",
    },
  ];

  return (
    <div className="p-6 max-w-[95vw] lg:max-w-[69vw] mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl mt-4 font-semibold">Projects</h2>
      </div>

      <div className="grid grid-cols-1 py-2 md:grid-cols-3 gap-6 gap-y-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-lg border shadow-md p-2 justify-between flex flex-col items-center"
          >
            <img
              src={project?.image}
              style={{ height: "240px", width: "240px" }}
              alt={project?.title}
              className="mt-2 border border-black object-cover rounded-md mb-3"
            />
            {/* <ul className="list-none grid grid-cols-3 gap-x-4 gap-y-2 items-center justify-center mb-4">
              {project.techStack.map((tech, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  {tech.icon}
                  <span className="text-xs">{tech.name}</span>
                </li>
              ))}
            </ul> */}
            <div className="flex mx-4 py-1 mb-1 gap-x-8 items-center justify-center">
              <button
                // href={project.github}
                // target="_blank"
                // rel="noopener noreferrer"
                // onClick={() => alert("Error opening link")}
                onClick={() => window.open(project.github, "_blank")}
                className="rounded-lg px-3 py-1.5 border border-gray-700 text-gray-700 hover:text-white hover:bg-gray-700 flex items-center gap-2 text-sm"
              >
                <UilGithubAlt />
                Github
              </button>
              <button
                // href={project.liveDemo}
                // target="_blank"
                // rel="noopener noreferrer"
                onClick={() => alert("Launching Soon")}
                className="rounded-lg px-2 py-1.5 border border-gray-700 text-gray-700 hover:text-white hover:bg-gray-700 flex items-center gap-2 text-sm"
              >
                <UilExternalLinkAlt />
                Website
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
