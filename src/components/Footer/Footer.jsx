import React from "react";
import Logo from "../../assets/food/logo.png";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-lightYellow rounded-t-3xl"
    >
      <div className="container py-14">
        <div className="grid-cols-1 gap-12 gtid md:grid-cols-3"></div>
        {/* brand info */}
        <div className="space-y-3 lg:max-w-[300px]">
          <img src={Logo} alt="" className="w-24" />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima
            aperiam sunt aliquam necessitatibus, eligendi ipsam iste
            perspiciatis deserunt tenetur pariatur doloribus, corrupti enim
            cupiditate.
          </p>
          <a href="#" className="inline-block mt-6 text-sm">
            Contact@food.com
          </a>
        </div>
        {/* Quick Links */}
        <div className="grid grid-cols-2 col-span-2 gap-6 md:grid-cols-3">
          <div>
            <h1 className="text-xl font-semibold">Quick Links</h1>
            <ul className="mt-6 space-y-3">
              <li className="footer-link">Home</li>
              <li className="footer-link">About</li>
              <li className="footer-link">Contact</li>
              <li className="footer-link">Food</li>
            </ul>
          </div>
          <div>
            <h1 className="text-xl font-semibold">Quick Links</h1>
            <ul className="mt-6 space-y-3">
              <li className="footer-link">Home</li>
              <li className="footer-link">About</li>
              <li className="footer-link">Contact</li>
              <li className="footer-link">Food</li>
            </ul>
          </div>
          <div>
            <h1 className="text-xl font-semibold">Quick Links</h1>
            <ul className="mt-6 space-y-3">
              <li className="footer-link">Home</li>
              <li className="footer-link">About</li>
              <li className="footer-link">Contact</li>
              <li className="footer-link">Food</li>
            </ul>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
