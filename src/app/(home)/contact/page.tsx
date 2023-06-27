import React from "react";
import { FiInstagram } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import { FiPhone } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { FiMapPin } from "react-icons/fi";
import "@/globals.css";

// type Props = {};

const Contact = () => {
  return (
    <main className="mx-auto px-[5%] lg:px-[15%] pt-[5rem] lg:pt-[10rem] pb-[1rem]">
      <section className="md:p-8">
        <div className="bg-[rgba(var(--secondary-color-rgb),1)] max-w-[65rem] mx-auto rounded-[6px] p-5 md:p-10 xl:p-20">
          <section className="flex flex-wrap md:flex-nowrap justify-between">
            {/* info */}
            <div className="flex flex-col items-center md:items-start">
              <div>
                <h3 className="text-2xl font-bold text-center md:text-start">
                  Get a quote
                </h3>
                <p className="mt-5 max-w-[25rem] text-center md:text-start">
                  Fill up the form and our team will try the best to get back to
                  you
                </p>
              </div>
              <div className="flex flex-grow flex-col justify-around">
                <ul className="p-5">
                  <li className="flex items-center gap-5">
                    <FiPhone className="w-[1.2rem] h-[1.2rem] text-inherit" />

                    <p>+0123 456 7800</p>
                  </li>
                  <li className="my-5 flex items-center gap-5">
                    <FiMail className="w-[1.2rem] h-[1.2rem] text-inherit" />

                    <p>hello@somemail.com</p>
                  </li>
                  <li className="flex items-center gap-5">
                    <FiMapPin className="w-[1.2rem] h-[1.2rem] text-inherit" />

                    <p>123 street 2456 Dior</p>
                  </li>
                </ul>
                <div>
                  <ul className="flex flex-wrap gap-2 justify-center md:justify-start">
                    <li className="hover:bg-[rgba(var(--primary-color-rgb),1)] p-3 rounded-full hover:translate-y-[-2px] hover:shadow-[0_20px_80px_-10px_rgba(var(--primary-color-rgb),1)] cursor-pointer  hover:text-white text-[rgba(var(--primary-color-rgb),1)]">
                      <FiInstagram className="w-[2rem] h-[2rem] text-inherit" />
                    </li>
                    <li className="hover:bg-[rgba(var(--primary-color-rgb),1)] p-3 rounded-full hover:translate-y-[-2px] hover:shadow-[0_20px_80px_-10px_rgba(var(--primary-color-rgb),1)] cursor-pointer  hover:text-white text-[rgba(var(--primary-color-rgb),1)]">
                      <FiLinkedin className="w-[2rem] h-[2rem] text-inherit" />
                    </li>
                    <li className="hover:bg-[rgba(var(--primary-color-rgb),1)] p-3 rounded-full hover:translate-y-[-2px] hover:shadow-[0_20px_80px_-10px_rgba(var(--primary-color-rgb),1)] cursor-pointer hover:text-white text-[rgba(var(--primary-color-rgb),1)]">
                      <FiFacebook className="w-[2rem] h-[2rem] text-inherit" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* form */}
            <div className="min-t">
              <div className="bg-[rgba(var(--base-background-rgb),1)] p-8 rounded-[6px]">
                <form>
                  <ul>
                    <li>
                      <label>Your Name</label>
                      <input className="w-full rounded-[6px] p-2 bg-[rgba(var(--secondary-color-rgb),1)] mt-2"></input>
                    </li>
                    <li className="my-5">
                      <label>Mail</label>
                      <input className="w-full rounded-[6px] p-2 bg-[rgba(var(--secondary-color-rgb),1)] mt-2"></input>
                    </li>
                    <li>
                      <label>Message</label>
                      <textarea className="w-full resize-none rounded-[6px] p-2 min-h-[10rem] bg-[rgba(var(--secondary-color-rgb),.5)] mt-2"></textarea>
                    </li>
                  </ul>
                  <div className="flex justify-center md:justify-end mt-5">
                    <button
                      role="submit"
                      className="h-full px-8 py-3 bg-[rgba(var(--primary-color-rgb),1)] rounded-[6px] hover:translate-y-[-2px] hover:shadow-[0_20px_80px_-10px_rgba(var(--primary-color-rgb),1)] text-white"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
};

export default Contact;
