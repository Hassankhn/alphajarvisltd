import React from "react";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
} from "react-icons/ti";
import { HiOutlineMail } from "react-icons/hi";

const page = () => {
  return (
    <div className="w-full bg-[#ecf0f3] py-8">
      <div className=" w-4/5 md:w-3/5 mx-auto text-[#4c5773]">
        <h1 className="text-center text-5xl font-extrabold mt-4 mb-6">
          Contact
        </h1>
        <div className="grid grid-cols-[1fr] md:grid-cols-[1fr,2fr] md:gap-5 items-center self-start ">
          <div className="">
            <div className="Style.contactus_box_box_left_item">
              <h4 className="text-lg">🗺 ADDRESS</h4>
              <p className="leading-5 w-4/5 text-lg">
                Unit 1603, 16th Floor, The L. Plaza, 367 - 375 Queen's Road
                Central, Sheung Wan, Hong Kong
              </p>
            </div>
            <div className="Style.contactus_box_box_left_item">
              <h4 className="text-lg">💌 EMAIL</h4>
              <p className="leading-5 w-4/5 text-lg">info@alphajarvisltd.com</p>
            </div>
            <div className="contactus_box_box_left_item">
              <h3 className="text-lg">☎ PHONE</h3>
              <p className="leading-5 w-4/5 text-lg">+852 5808-2131</p>
            </div>
            <h4 className="text-lg">🌏 SOCIALS</h4>
            <div className="flex">
              <a
                href="#"
                className="text-2xl text-[#4c5773] rounded-full  p-1.5 hover:bg-slate-800 hover:rounded-md hover:p-2 hover:text-white transition-all duration-500 ease-in"
              >
                <TiSocialFacebook />
              </a>
              <a
                href="#"
                className="text-2xl text-[#4c5773] rounded-full p-1.5 hover:bg-slate-800 hover:rounded-md hover:p-2 hover:text-white transition-all duration-500 ease-in"
              >
                <TiSocialLinkedin />
              </a>
              <a
                href="#"
                className="text-2xl text-[#4c5773] rounded-full p-1.5 hover:bg-slate-800 hover:rounded-md hover:p-2 hover:text-white transition-all duration-500 ease-in"
              >
                <TiSocialInstagram />
              </a>
              <a
                href="#"
                className="text-2xl text-[#4c5773] rounded-full p-1.5 hover:bg-slate-800 hover:rounded-md hover:p-2 hover:text-white transition-all duration-500 ease-in"
              >
                <TiSocialYoutube />
              </a>
              <a
                href="#"
                className="text-2xl text-[#4c5773] rounded-full p-1.5 hover:bg-slate-800 hover:rounded-md hover:p-2 hover:text-white transition-all duration-500 ease-in"
              >
                <TiSocialTwitter />
              </a>
            </div>
          </div>
          <div className="contactus_box_box_right text-">
            <form>
              <div className="mt-8">
                <label
                  htmlFor="name"
                  className="block w-full ml-4 text-lg font-bold "
                >
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter full Name"
                  className="w-full py-1 px-2 rounded-2xl border border-[#4c5773] bg-transparent mt-2 outline-none "
                />
              </div>
              <div className="mt-8">
                <label
                  className="block w-full ml-4 font-bold text-lg"
                  htmlFor="email"
                >
                  Email
                </label>
                <div className="w-full flex items-center gap-4 overflow-hidden rounded-2xl border border-solid border-1 border-[#4c5773]">
                  <div className="grid cursor-pointer text-4xl py-1 px-2 text-[#ecf0f3] bg-[#4c5773]">
                    <HiOutlineMail />
                  </div>
                  <input
                    className="outline-none w-5/6 border-0 bg-transparent"
                    type="text"
                    placeholder="Email*"
                  />
                </div>
              </div>
              <div className="Form_box_input">
                <label
                  className="block w-full ml-4 font-bold mt-8 text-lg"
                  htmlFor="description"
                >
                  Message
                </label>
                <textarea
                  name=""
                  id=""
                  cols={30}
                  rows={6}
                  placeholder="If you have some quries drop us a message, we will be back shortly"
                  className="w-full px-2 py-1 bg-transparent outline-none  rounded-2xl mt-2 border border-solid border-[#353c4e] p-1"
                ></textarea>
              </div>
              <button className="font-bold px-4 py-2 rounded-md mt-12">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
