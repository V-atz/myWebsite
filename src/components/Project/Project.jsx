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

function Project() {
  const projects = [
    {
      title: "E-Commerce Platform",
      image: comingsoon,
      techStack: [
        { icon: <UilReact />, name: "React Js" },
        { icon: <UilJavaScript />, name: "Node Js" },
        { icon: <UilDatabase />, name: "Mongo Db" },
        { icon: <UilBill />, name: "Razor Pay" },
        { icon: <UilTruck />, name: "Ship Rocket" },
      ],
      github: "https://github.com/your-username/ecommerce-project",
      liveDemo: "https://your-live-demo-link.com",
    },
    {
      title: "Real-Time Chat App",
      image: comingsoon,
      techStack: [
        { icon: <UilJavaScript />, name: "Node Js" },
        { icon: <UilCheckCircle />, name: "Express Js" },
        { icon: <UilDatabase />, name: "Mongo Db" },
        { icon: <UilComments />, name: "Socket.io" },
        { icon: <UilPuzzlePiece />, name: "Algorithms" },
      ],
      github: "https://github.com/your-username/chat-app",
      liveDemo: "https://your-live-demo-link.com",
    },
    {
      title: "Real-Time Chat App",
      image: comingsoon,
      techStack: [
        { icon: <UilJavaScript />, name: "Node Js" },
        { icon: <UilCheckCircle />, name: "Express Js" },
        { icon: <UilDatabase />, name: "Mongo Db" },
        { icon: <UilComments />, name: "Socket.io" },
        { icon: <UilPuzzlePiece />, name: "Algorithms" },
      ],
      github: "https://github.com/your-username/chat-app",
      liveDemo: "https://your-live-demo-link.com",
    },
    {
      title: "Real-Time Chat App",
      image: comingsoon,
      techStack: [
        { icon: <UilJavaScript />, name: "Node Js" },
        { icon: <UilCheckCircle />, name: "Express Js" },
        { icon: <UilDatabase />, name: "Mongo Db" },
        { icon: <UilComments />, name: "Socket.io" },
        { icon: <UilPuzzlePiece />, name: "Algorithms" },
      ],
      github: "https://github.com/your-username/chat-app",
      liveDemo: "https://your-live-demo-link.com",
    },
    {
      title: "Real-Time Chat App",
      image: comingsoon,
      techStack: [
        { icon: <UilJavaScript />, name: "Node Js" },
        { icon: <UilCheckCircle />, name: "Express Js" },
        { icon: <UilDatabase />, name: "Mongo Db" },
      ],
      github: "https://github.com/your-username/chat-app",
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
              style={{ height: "240px", width: "auto" }}
              alt={project?.title}
              className="mt-2 border object-cover rounded-md mb-3"
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
                onClick={() => alert("Coming Soon...")}
                className="rounded-lg px-3 py-1.5 border border-gray-700 text-gray-700 hover:text-white hover:bg-gray-700 flex items-center gap-2 text-sm"
              >
                <UilGithubAlt />Github
              </button>
              <button
                // href={project.liveDemo}
                // target="_blank"
                // rel="noopener noreferrer"
                onClick={() => alert("Coming Soon...")}
                className="rounded-lg px-2 py-1.5 border border-gray-700 text-gray-700 hover:text-white hover:bg-gray-700 flex items-center gap-2 text-sm"
              >
                <UilExternalLinkAlt />Live Project
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
