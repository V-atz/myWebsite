import React from "react";
import vatzProfile2 from "../../assets/vatzProfile2.png";
import { UilMessage } from "@iconscout/react-unicons";
import resume_vatsalTandel from "../../assets/resume_vatsalTandel.pdf";

function Data() {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-16 p-4">
      <div className="text-start lg:text-start p-4 max-w-lg mx-auto">
        <p className="text-4xl lg:text-5xl mb-3 font-semibold">Vatsal Tandel</p>
        <p className="text-base text-lg lg:text-xl mb-3">MERN Developer</p>
        <p className="text-base lg:text-lg text-gray-500 mb-4">
          Passionate about creating web apps and solving problems, currently
          using the MERN stack to enhance user experiences.
        </p>
        <div className="flex items-center mt-4 gap-x-2">
          <div>
            <a
              href={resume_vatsalTandel}
              download
              className="bg-white border border-black flex gap-2 text-black py-2 px-4 rounded-full hover:bg-gray-200 transition duration-300"
            >
              Download CV
            </a>
          </div>
          <div>
            <button
              className="bg-black border border-black flex gap-2 text-white py-2 px-6 rounded-full hover:bg-gray-700 transition duration-300"
              onClick={() =>
                (window.location.href = "mailto:vatsaltandel48@gmail.com")
              }
            >
              Send Mail
            </button>
          </div>
        </div>
      </div>

      <div className="profile-pic-container">
        <img src={vatzProfile2} alt="profilePicture" className="profile-pic" />
      </div>

      <style jsx>{`
        .profile-pic-container {
          background-size: cover;
          box-shadow: inset 0 0 0 9px rgba(255, 255, 255, 0.3);
          width: 300px;
          height: 300px;
          animation: profile_animate 8s ease-in-out infinite;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .profile-pic {
          height: 100%;
          width: auto;
          border-radius: inherit;
        }

        @keyframes profile_animate {
          0% {
            border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
          }
          50% {
            border-radius: 30% 60% 70% 70%/60% 30% 70% 40%;
          }
          100% {
            border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
          }
        }
      `}</style>
    </div>
  );
}

export default Data;
