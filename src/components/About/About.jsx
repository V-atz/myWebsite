import React from "react";
import vatzProfile2 from "../../assets/vatzProfile2.png";
import {
  UilGraduationCap,
  UilSuitcaseAlt,
  UilCheckCircle,
  UilReact,
  UilHtml5,
  UilCss3Simple,
  UilJavaScript,
  UilDatabase,
  UilPuzzlePiece,
  UilLockAccess,
  UilComments,
} from "@iconscout/react-unicons";
import ScrollDown from "../Home/ScrollDown";
import TimeLine from "./TimeLine";

function About() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Profile Image and Header */}
      <div className="text-center mb-6">
        <h2 className="text-3xl font-semibold mt-4">About Me</h2>
      </div>

      {/* Content Section */}

      <div className="container mx-auto px-4 mb-4 py-8">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">Skills</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white flex flex-col justify-start items-center rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Frontend Development
            </h2>
            <ul className="list-none">
              <li className="mb-2 flex gap-2 items-center">
                <UilReact />
                <span className="font-medium">React Js</span>
              </li>
              <li className="mb-2 flex gap-2 items-center">
                <UilHtml5 />
                <span className="font-medium">HTML & CSS</span>
              </li>
              <li className="mb-2 flex gap-2 items-center">
                <UilJavaScript />
                <span className="font-medium">JavaScript</span>
              </li>
              <li className="mb-2 flex gap-2 items-center">
                <UilCheckCircle />
                <span className="font-medium">Redux</span>
              </li>
              <li className="mb-2 flex gap-2 items-center">
                <UilCheckCircle />
                <span className="font-medium">Tailwind</span>
              </li>
            </ul>
          </div>
          <div className="bg-white flex flex-col justify-start items-center rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Backend Development
            </h2>
            <ul className="list-none flex flex-col">
              <li className="mb-2 flex gap-2 items-center">
                <UilJavaScript />
                <span className="font-medium">Node Js</span>
              </li>
              <li className="mb-2 flex gap-2 items-center">
                <UilCheckCircle />
                <span className="font-medium">Express Js</span>
              </li>
              <li className="mb-2 flex gap-2 items-center">
                <UilDatabase />
                <span className="font-medium">Mongo Db</span>
              </li>
              <li className="mb-2 flex gap-2 items-center">
                <UilComments />
                <span className="font-medium">Socket.io</span>
              </li>
              <li className="mb-2 flex gap-2 items-center">
                <UilPuzzlePiece />
                <span className="font-medium">Algorithms</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">Career Journey</h1>
        <TimeLine />
      </div>
      {/* <ScrollDown /> */}
    </div>
  );
}

export default About;
