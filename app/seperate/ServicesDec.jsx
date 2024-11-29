"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FaPassport, FaUniversity, FaRegHandshake, FaMapMarkerAlt, FaChalkboardTeacher, FaMoneyCheckAlt, FaFileAlt, FaAirbnb, FaRegStar } from 'react-icons/fa';

const ServicesDec = () => {const boxData = [
  { 
    icon: <FaPassport />, 
    title: 'PR Visa', 
    content: 'Premium Immigration Services For PR Visas To Australia, Canada, New Zealand Etc.', 
    buttonLabel: 'Read More' 
  },
  { 
    icon: <FaUniversity />, 
    title: 'Student Visa', 
    content: 'Apply for student visas from the hands of an experienced professional team.', 
    buttonLabel: 'Read More' 
  },
  { 
    icon: <FaRegHandshake />, 
    title: 'Jobseeker Visa', 
    content: 'Get started now to open doors with our three-step Jobseeker Visa services that speak for themselves.', 
    buttonLabel: 'Read More' 
  },
  { 
    icon: <FaMapMarkerAlt />, 
    title: 'Visit Visa', 
    content: 'Visit and dependent visa processing across the globe in a matter of days.', 
    buttonLabel: 'Read More' 
  },
  { 
    icon: <FaChalkboardTeacher />, 
    title: 'Coaching', 
    content: 'Get a high score with guidance from our certified English language specialists.', 
    buttonLabel: 'Read More' 
  },
  { 
    icon: <FaMoneyCheckAlt />, 
    title: 'Investor Visa', 
    content: 'Work With Us For Stress Free Processing Of Investor Visa To Top European Nations.', 
    buttonLabel: 'Read More' 
  },
  { 
    icon: <FaFileAlt />, 
    title: 'Resume Marketing', 
    content: 'Get your resume marketed internationally by us at a cost-effective price.', 
    buttonLabel: 'Read More' 
  },
  { 
    icon: <FaAirbnb />, 
    title: 'Air ticketing', 
    content: 'Make your travel planning easier with our ticketing and passport services.', 
    buttonLabel: 'Read More' 
  }
];

  // Animation variants
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const pageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.2 } },
  };

  return (
    <motion.div
      className="flex items-center justify-center w-screen h-screen relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('/comp-21.webp')`, // Replace with your actual image path
      }}
      initial="hidden"
      animate="visible"
      variants={pageVariants}
    >
      {/* Central Button */}
      
      <motion.div
      className="relative w-[30rem] h-[30rem] mb-10"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      whileHover={{ scale: 1.05, rotate: 2 }}
    >
      {/* Image */}
      <motion.img
        src="/ser.png" // Replace with your image path
        alt="Services"
        className="w-full h-full object-cover rounded-full"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />

      {/* Overlay Content */}
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center text-black mt-52 ml-6"
        whileHover={{ y: -10 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <h2 className="text-2xl font-bold">Our Services</h2>
        <p className="text-center mt-2 text-sm px-4">
          Discover a range of top-notch services designed to meet your needs.
        </p>
        {/* <button className="mt-4 px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-md">
          Learn More
        </button> */}
      </motion.div>
    </motion.div>


  {/* <div className="absolute inset-0 flex items-center justify-center text-center">
    <span className="text-sm font-medium">Explore Our Expert Solutions</span>
  </div> */}


      {/* Boxes - Circular Layout */}
      <div className="absolute w-full h-full flex justify-center items-center">
       {/* Box 1 (Top Left) */}
<motion.div
  className="absolute w-72 h-28 bg-white border border-gray-300 shadow-lg flex items-center justify-between p-4 rounded-lg top-16 left-20 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:border-black hover:bg-orange-400 group"
  initial="hidden"
  animate="visible"
  variants={fadeInVariants}
  transition={{ delay: 0.3 }}
>
  <FaPassport className="w-16 h-16 text-orange-500 group-hover:text-white" />
  <div className="w-0.5 h-12 bg-orange-400 group-hover:bg-white mr-1 ml-2" />
  <div className="flex flex-col justify-between text-center">
    <p className="text-base font-semibold uppercase">{boxData[0].title}</p>
    <p className="text-sm text-gray-600">{boxData[0].content}</p>
    <motion.span
      className="absolute bottom-2 right-2 text-xl font-extrabold hover:text-white cursor-pointer"
      whileHover={{ rotate: -10 }}
      transition={{ duration: 0.2 }}
    >
      →
    </motion.span>
  </div>
</motion.div>

{/* Box 2 (Top Center) */}
<motion.div
  className="absolute w-72 h-28 bg-white border border-gray-300 shadow-lg flex items-center justify-between p-4 rounded-lg top-8 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:border-black hover:bg-orange-400 group"
  initial="hidden"
  animate="visible"
  variants={fadeInVariants}
  transition={{ delay: 0.6 }}
>
  <FaUniversity className="w-16 h-16 text-orange-500 group-hover:text-white mr-2" />
  <div className="w-0.5 h-12 bg-orange-400 group-hover:bg-white" />
  <div className="flex flex-col justify-between text-center">
    <p className="text-base font-semibold uppercase">{boxData[1].title}</p>
    <p className="text-sm text-gray-600">{boxData[1].content}</p>
    <motion.span
      className="absolute bottom-2 right-2 text-xl font-extrabold hover:text-white cursor-pointer"
      whileHover={{ rotate: -10 }}
      transition={{ duration: 0.2 }}
    >
      →
    </motion.span>
  </div>
</motion.div>

{/* Box 3 (Top Right) */}
<motion.div
  className="absolute w-72 h-28 bg-white border border-gray-300 shadow-lg flex items-center justify-between p-4 rounded-lg top-16 right-20 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:border-black hover:bg-orange-400 group"
  initial="hidden"
  animate="visible"
  variants={fadeInVariants}
  transition={{ delay: 0.9 }}
>
  <FaRegHandshake className="w-16 h-16 text-orange-500 group-hover:text-white mr-2" />
  <div className="w-0.5 h-12 bg-orange-400 group-hover:bg-white" />
  <div className="flex flex-col justify-between text-center">
    <p className="text-base font-semibold uppercase">{boxData[2].title}</p>
    <p className="text-sm text-gray-600">{boxData[2].content}</p>
    <motion.span
      className="absolute bottom-0 right-2 text-xl font-extrabold hover:text-white cursor-pointer"
      whileHover={{ rotate: -10 }}
      transition={{ duration: 0.2 }}
    >
      →
    </motion.span>
  </div>
</motion.div>

{/* Box 4 (Left) */}
<motion.div
  className="absolute w-72 h-28 bg-white border border-gray-300 shadow-lg flex items-center justify-between p-4 rounded-lg left-20 mt-8 top-1/3 transform -translate-y-1/2 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:border-black hover:bg-orange-400 group"
  initial="hidden"
  animate="visible"
  variants={fadeInVariants}
  transition={{ delay: 1.2 }}
>
  <FaMapMarkerAlt className="w-16 h-16 text-orange-500 group-hover:text-white mr-2" />
  <div className="w-0.5 h-12 bg-orange-400 group-hover:bg-white" />
  <div className="flex flex-col justify-between text-center">
    <p className="text-base font-semibold uppercase">{boxData[3].title}</p>
    <p className="text-sm text-gray-600">{boxData[3].content}</p>
    <motion.span
      className="absolute bottom-2 right-2 text-xl font-extrabold hover:text-white cursor-pointer"
      whileHover={{ rotate: -10 }}
      transition={{ duration: 0.2 }}
    >
      →
    </motion.span>
  </div>
</motion.div>

{/* Box 5 (Right) */}
<motion.div
  className="absolute w-72 h-28 bg-white border border-gray-300 shadow-lg flex items-center justify-between p-4 rounded-lg right-20 mt-8 top-1/3 transform -translate-y-1/2 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:border-black hover:bg-orange-400 group"
  initial="hidden"
  animate="visible"
  variants={fadeInVariants}
  transition={{ delay: 1.5 }}
>
  <FaChalkboardTeacher className="w-16 h-16 text-orange-500 group-hover:text-white mr-2" />
  <div className="w-0.5 h-12 bg-orange-400 group-hover:bg-white" />
  <div className="flex flex-col justify-between text-center">
    <p className="text-base font-semibold uppercase">{boxData[4].title}</p>
    <p className="text-sm text-gray-600">{boxData[4].content}</p>
    <motion.span
      className="absolute bottom-2 right-2 text-xl font-extrabold hover:text-white cursor-pointer"
      whileHover={{ rotate: -10 }}
      transition={{ duration: 0.2 }}
    >
      →
    </motion.span>
  </div>
</motion.div>

{/* Box 6 (Bottom Left) */}
<motion.div
  className="absolute w-72 h-28 bg-white border border-gray-300 shadow-lg flex items-center justify-between p-4 rounded-lg bottom-16 left-20 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:border-black hover:bg-orange-400 group"
  initial="hidden"
  animate="visible"
  variants={fadeInVariants}
  transition={{ delay: 1.8 }}
>
  <FaMoneyCheckAlt className="w-16 h-16 text-orange-500 group-hover:text-white mr-2" />
  <div className="w-0.5 h-12 bg-orange-400 group-hover:bg-white" />
  <div className="flex flex-col justify-between text-center">
    <p className="text-base font-semibold uppercase">{boxData[5].title}</p>
    <p className="text-sm text-gray-600">{boxData[5].content}</p>
    <motion.span
      className="absolute bottom-2 right-2 text-xl font-extrabold hover:text-white cursor-pointer"
      whileHover={{ rotate: -10 }}
      transition={{ duration: 0.2 }}
    >
      →
    </motion.span>
  </div>
</motion.div>

{/* Box 7 (Bottom Center) */}
<motion.div
  className="absolute w-72 h-28 bg-white border border-gray-300 shadow-lg flex items-center justify-between p-4 rounded-lg bottom-8 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:border-black hover:bg-orange-400 group"
  initial="hidden"
  animate="visible"
  variants={fadeInVariants}
  transition={{ delay: 2.1 }}
>
  <FaFileAlt className="w-16 h-16 text-orange-500 group-hover:text-white mr-2" />
  <div className="w-0.5 h-12 bg-orange-400 group-hover:bg-white" />
  <div className="flex flex-col justify-between text-center">
    <p className="text-base font-semibold uppercase">{boxData[6].title}</p>
    <p className="text-sm text-gray-600">{boxData[6].content}</p>
    <motion.span
      className="absolute bottom-2 right-2 text-xl font-extrabold hover:text-white cursor-pointer"
      whileHover={{ rotate: -10 }}
      transition={{ duration: 0.2 }}
    >
      →
    </motion.span>
  </div>
</motion.div>


{/* Box 8 (Bottom Right) */}
<motion.div
  className="absolute w-72 h-28 bg-white border border-gray-300 shadow-lg flex items-center justify-between p-4 rounded-lg bottom-16 right-20 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:border-black hover:bg-orange-400 group"
  initial="hidden"
  animate="visible"
  variants={fadeInVariants}
  transition={{ delay: 2.4 }}
>
  <FaAirbnb className="w-16 h-16 text-orange-500 group-hover:text-white mr-2" />
  <div className="w-0.5 h-12 bg-orange-400 group-hover:bg-white" />
  <div className="flex flex-col justify-between text-center">
    <p className="text-base font-semibold uppercase">{boxData[7].title}</p>
    <p className="text-sm text-gray-600">{boxData[7].content}</p>
    <motion.span
      className="absolute bottom-2 right-2 text-xl font-extrabold hover:text-white cursor-pointer"
      whileHover={{ rotate: -10 }}
      transition={{ duration: 0.2 }}
    >
      →
    </motion.span>
  </div>
</motion.div>


      </div>
    </motion.div>
  );
};

export default ServicesDec;