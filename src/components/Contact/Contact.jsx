import React, { useState } from "react";
import emailjs from "emailjs-com";
import {
  UilFastMail,
  UilWhatsapp,
  UilArrowRight,
  UilMessage,
} from "@iconscout/react-unicons";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const [fromName, setFromName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      to_name: "Vatsal Tandel",
      from_name: fromName,
      message: message,
      from_email: "developervatsal7@gmail.com",
    };

    emailjs
      .send(
        "service_ccxkyuj",
        "template_1ttvu7h",
        templateParams,
        "cMeGCh-uWgtG-LdUt"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          toast.success("Message sent successfully!");
          setFromName("");
          setMessage("");
        },
        (err) => {
          console.error("FAILED...", err);
          toast.error("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <>
      <ToastContainer />
      <div className="p-6 h-[88vh] lg:h-[84vh] mb-[75px] lg:mb-[5px] max-w-4xl mx-auto">
        <div className="text-center mb-1 lg:mb-6">
          <h2 className="text-3xl font-semibold mt-4">Get In Touch</h2>
        </div>

        <div className="container mx-auto px-4 mb-4 py-8 flex flex-col lg:flex-row gap-x-4 items-start justify-center">
          <div className="w-full flex flex-col justify-center items-center md:w-1/2 mb-6 md:mb-0">
            <div className="text-center md:text-left mb-4">
              <h3 className="text-xl font-semibold">Talk Now</h3>
            </div>
            <div className="flex flex-col gap-y-4 items-center md:items-start">
              <div className="border flex flex-col shadow-sm items-center gap-y-2 w-[245px] px-4 py-4 rounded-md">
                <UilFastMail />
                <p className="text-gray-500 text-sm mb-1">
                  developervatsal7@gmail.com
                </p>
                <a
                  href="mailto:developervatsal7@gmail.com"
                  className="text-md text-gray-700 mb-0"
                >
                  <div className="flex items-center hover:text-black">
                    Send Mail <UilArrowRight />
                  </div>
                </a>
              </div>
              <div className="border flex flex-col shadow-sm items-center gap-y-2 w-[245px] px-4 py-4 rounded-md">
                <UilWhatsapp />
                <p className="text-gray-500 text-sm mb-1">9265282045</p>
                <a
                  href="https://wa.me/9265282045"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-md text-gray-700"
                >
                  <div className="flex items-center hover:text-black">
                    Chat on WhatsApp <UilArrowRight />
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col mt-15 lg:mt-0 justify-center items-center md:w-1/2">
            <div className="text-center md:text-left mb-4">
              <h3 className="text-xl font-semibold">Drop a Message</h3>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 mb-4"
                  placeholder="Your Name"
                  value={fromName}
                  onChange={(e) => setFromName(e.target.value)}
                />
                <textarea
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 h-[140px] min-h-[100px]"
                  placeholder="Your Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <div className="text-center md:text-left">
                <button
                  type="submit"
                  className="px-8 flex items-center gap-x-4 py-2 bg-gray-500 text-white rounded-md hover:bg-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                  Send Message <UilMessage />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
