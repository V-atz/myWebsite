import React from "react";
import {
  UilLinkedin,
  UilGithubAlt,
  UilInstagram,
} from "@iconscout/react-unicons";

function Social() {
  return (
    <div className="flex flex-row lg:flex-col gap-x-4 justify-center gap-y-4">
      <div>
        <a
          href="https://www.linkedin.com/in/vatsal-tandel-588034202/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <UilLinkedin className="text-2xl hover:text-black text-gray-500" />
        </a>
      </div>
      <div>
        <a
          href="https://github.com/V-atz"
          target="_blank"
          rel="noopener noreferrer"
        >
          <UilGithubAlt className="text-2xl hover:text-black text-gray-500" />
        </a>
      </div>
      <div>
        <a
          href="https://www.instagram.com/vatz_4802/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <UilInstagram className="text-2xl hover:text-black text-gray-500" />
        </a>
      </div>
    </div>
  );
}

export default Social;
