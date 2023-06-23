import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1520px] m-auto px-4 py-2 bg-[#24262b]">
      <div className="py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
        <div>
          <h1 className="w-full text-3xl font-bold text-[#e67e22]">PicEats</h1>
          <p>
            "Experience the ultimate convenience with our seamless delivery
            service, bringing a world of flavors right to your doorstep.
          </p>
          <div className="flex justify-between md:w-[75%] my-6">
            <FaFacebookSquare className="cursor-pointer" size={30} />
            <FaInstagram className="cursor-pointer" size={30} />
            <FaTwitterSquare className="cursor-pointer" size={30} />
            <FaGithubSquare className="cursor-pointer" size={30} />
            <FaDribbbleSquare className="cursor-pointer" size={30} />
          </div>
        </div>

        <div className="lg:col-span-2 flex justify-between mt-6">
          <div>
            <h6 className="font-medium text-[#9b9b9b]">Countries</h6>
            <ul>
              <li className="py-2 text-sm">USA</li>
              <li className="py-2 text-sm">TW</li>
              <li className="py-2 text-sm">China</li>
              <li className="py-2 text-sm">Canada</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-[#9b9b9b]">City</h6>
            <ul>
              <li className="py-2 text-sm">New York</li>
              <li className="py-2 text-sm">NewTaipei</li>
              <li className="py-2 text-sm">Beijing</li>
              <li className="py-2 text-sm">Vancouver</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-[#9b9b9b]">Q/A</h6>
            <ul>
              <li className="py-2 text-sm">Credit Card</li>
              <li className="py-2 text-sm">Payment</li>
              <li className="py-2 text-sm">Refund</li>
              <li className="py-2 text-sm">Tickect</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-[#9b9b9b]">Ask me</h6>
            <ul>
              <li className="py-2 text-sm">User</li>
              <li className="py-2 text-sm">Deliver</li>
              <li className="py-2 text-sm">Owner</li>
              <li className="py-2 text-sm">Others</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
