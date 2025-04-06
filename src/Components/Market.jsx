import React from 'react';
import { motion } from "framer-motion";
import sign from "../assets/sign.png";
import about1 from "../assets/about-icon-1.png";
import about2 from "../assets/about-icon-2.png";
import about3 from "../assets/about-icon-3.png";
import about4 from "../assets/about-icon-4.png";

const cardData = [
  {
    img: about1,
    title: "Premium Coffee Beans",
    desc: "Hand-picked beans from the world’s best plantations. Enjoy true aroma and taste."
  },
  {
    img: about2,
    title: "Eco-Friendly Packaging",
    desc: "Our packages are sustainable and designed with love for the planet."
  },
  {
    img: about3,
    title: "Fast Delivery System",
    desc: "Get your favorite coffee delivered in 24 hours, guaranteed freshness!"
  },
  {
    img: about4,
    title: "Expertly Roasted",
    desc: "Each batch is roasted to perfection by our skilled baristas."
  }
];

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2 }
  })
};

const Market = () => {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16 w-11/12 mx-auto bg-cover bg-no-repeat bg-left rounded-xl py-10 px-5"
      
    >
      {/* Left Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h5 className="text-sm uppercase tracking-wide text-[#6B4F3B] font-semibold mb-2">
          Who we are
        </h5>
        <h2 className="text-3xl md:text-4xl font-bold text-[#4B2E19] mb-4">
          About Market
        </h2>
        <p className="text-gray-700 text-2xl leading-relaxed mb-4">
          Sed sagittis sodales lobortis. Curabitur in eleifend turpis, id vehicula odio. 
          Donec pulvinar tellus eget magna aliquet ultricies. Praesent gravida hendrerit ex, 
          nec eleifend sem convallis vitae.
        </p>
        <img src={sign} alt="Signature" className="h-10" />
      </motion.div>

      {/* Right Section - Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {cardData.map((item, i) => (
          <motion.div
            key={i}
            className="bg-[#F8F1EC] p-5 rounded-lg shadow-md hover:shadow-xl transition duration-300 cursor-pointer"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={i + 1}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <img src={item.img} alt={`about-icon-${i}`} className="h-14 mb-4" />
            <h4 className="text-xl font-semibold text-[#4B2E19] mb-2">{item.title}</h4>
            <p className="text-sm text-gray-600">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Market;
