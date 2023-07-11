import { Card } from "@chakra-ui/react";
import React from "react";
import { FaYoutube, FaTwitter, FaInstagram, FaTiktok } from "react-icons/fa";

const SocialsCard = () => {
  return (
    <Card rounded="sm">
      <header className="h-12 bg-aff-blue rounded-t-sm">
        <h1 className="px-4 py-3 font-semibold text-white">CONNECT WITH US</h1>
      </header>
      <section className="flex flex-wrap justify-between p-4 px-4">
        <div className="flex">
          <FaYoutube color="red" className="my-auto mr-[.4rem]" size="1.3rem" />
          <span className="my-auto">Youtube</span>
        </div>
        <div className="flex">
          <FaTwitter color="#1DA1F2" className="my-auto mr-[.4rem]" size="1.3rem" />
          <span className="my-auto">Twitter</span>
        </div>
        <div className="flex">
          <FaInstagram color="#d62976" className="my-auto mr-[.4rem]" size="1.3rem" />
          <span className="my-auto">Instagram</span>
        </div>
        <div className="flex">
          <FaTiktok color="black" className="my-auto mr-[.4rem]" size="1.3rem" />
          <span className="my-auto">TikTok</span>
        </div>
      </section>

    </Card>
  );
};

export default SocialsCard;
