import React from 'react';
import { Code2, Linkedin, Youtube, Github, Instagram, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import Logo from '../../assets/new logo 1.png'
import Arrow from '../../assets/Frame (11).png'
import bgImage from "../../assets/Desktop - 10.png";

const Footer = () => {
  const socialIcons = [
    { Icon: Linkedin, href: "#" },
    { Icon: Youtube, href: "#" },
    { Icon: Github, href: "#" },
    { Icon: Instagram, href: "#" },
    { Icon: MessageCircle, href: "#" }
  ];

  return (
    <footer style={{
      backgroundImage: `url(${bgImage})`,
      backgroundSize: "cover", // or "100% 100%" for exact height and width
backgroundRepeat: "no-repeat",
backgroundPosition: "center"
    }} className="bg-[#0a0118] py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 cursor-default">
        <div className="flex flex-col lg:flex-row  items-center w-full justify-center font-custom2 ">
          <div className='w-1/2 lg:mt-20'><motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration:2, delay: 0.5 }}
          >
            <h3 className="text-white text-center text-xl lg:text-lg font-light mb-5 lg:mb-10 lg:ml-5">Subscribe to our newsletter</h3>
            <div className="relative lg:flex lg:justify-center">
              <motion.input
                type="email"
                placeholder="Enter Email ID"
                className="w-full text-center lg:w-3/4 bg-[#23024D] text-white rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-[0_0_15px_5px_rgba(186,104,200,0.3)]"
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 1 }}
              />
              <motion.div
                className="hidden lg:block absolute -top-20 right-16 text-pink-500"
                animate={{ y: [0, -10, 0], rotate: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <img src={Arrow} className='h-16 w-28' alt="" />
              </motion.div>
            </div>
          </motion.div></div>
          
          <div className="flex flex-col lg:flex-row lg:items-start items-center text-center mt-40 gap-10 w-1/2 justify-around">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white text-3xl lg:text-lg font-semibold mb-4">BROWSE</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Events</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Team</a></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration:1, delay: 0.5 }}
          >
            <h3 className="text-white text-3xl lg:text-lg font-semibold mb-4">TEAM</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Core</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Subcore</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Members</a></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration:1, delay: 0.8 }}

            className='flex flex-col justify-center items-center'
          >
            <h3 className="text-white text-3xl lg:text-lg font-semibold mb-4">SOCIALS</h3>
            <div className="flex flex-col space-y-4">
              {socialIcons.map(({ Icon, href }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  className="text-gray-400 hover:text-white"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="h-6 w-6" />
                </motion.a>
              ))}
            </div>
          </motion.div>
          </div>
        </div>

        <motion.div 
          className="flex justify-center mt-10"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{duration:2, delay: 0.5 }}
        >
          <img src={Logo} className='h-[40vw] w-screen' alt="" />
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
