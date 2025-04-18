"use client";
import { motion } from "framer-motion";

import {
  FaPaintBrush,
  FaBullhorn,
  FaLaptopCode,
  FaPrint,
  FaShoppingCart,
  FaClipboardList,
} from "react-icons/fa";
import { useTranslations } from "next-intl";
const ServicesContent = () => {
  const services = [
    {
      icon: <FaPaintBrush className="text-2xl mb-2 text-[#EAC258]" />,
      title: "titleOne",
      Stitle: "StitleOne",
      Sdesc: ["descOne1", "descOne2", "descOne3", "descOne4", "descOne5"],
      bg: "bg-[url('/services/07.jpg')]",
    },
    {
      icon: <FaLaptopCode className="text-2xl mb-2 text-[#EAC258]" />,
      title: "titleTwo",
      Stitle: "StitleTwo",
      Sdesc: ["descTwo1", "descTwo2", "descTwo3", "descTwo4", "descTwo5"],
      bg: "bg-[url('/services/01.png')]",
    },
    {
      icon: <FaBullhorn className="text-2xl mb-2 text-[#EAC258]" />,
      title: "titleThree",
      Stitle: "StitleThree",
      Sdesc: [
        "descThree1",
        "descThree2",
        "descThree3",
        "descThree4",
        "descThree5",
      ],
      bg: "bg-[url('/services/02.jpg')]",
    },
    {
      icon: <FaPrint className="text-2xl mb-2 text-[#EAC258]" />,
      title: "titleFour",
      Stitle: "StitleFour",
      Sdesc: ["descFour1", "descFour2", "descFour3", "descFour4"],
      bg: "bg-[url('/services/03.png')]",
    },
    {
      icon: <FaShoppingCart className="text-2xl mb-2 text-[#EAC258]" />,
      title: "titleFive",
      Stitle: "StitleFive",
      Sdesc: ["descFive1", "descFive2", "descFive3", "descFive4", "descFive5"],
      bg: "bg-[url('/services/14.jpg')]",
    },
  ];

  const c = useTranslations("cardServiceSection");
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="container my-10 flex justify-center items-center flex-col px-4 overflow-hidden">
        <motion.p
          initial="hidden"
          animate="visible" // Animation dès le début
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="text-center text-gray-500 dark:text-white my-20 w-1/2 max-md:w-full text-xl"
        >
          {c("ServiceTitle")}
        </motion.p>
        {services.map((service, index) => (
          <div key={index} className="flex justify-evenly items-center w-full">
            <div>
              {/* Animation du titre et icône */}
              <motion.div
                initial="hidden"
                animate="visible" // Animation dès le début
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
                className="flex items-center gap-2 w-full justify-center mt-20"
              >
                <p>{service.icon}</p>
                <h1 className="text-2xl text-center font-bold">
                  {c(service.title)}
                </h1>
              </motion.div>

              {/* Animation du texte et de l'image */}
              <motion.div
                initial="hidden"
                animate="visible" // Animation dès le début
                transition={{ duration: 0.6, delay: 0.2 }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 },
                }}
                className="grid grid-cols-2 gap-2 mt-20 max-md:grid-cols-1 max-md:text-base text-base"
              >
                <div className="flex items-center">
                  <p>{c(service.Stitle)}</p>
                </div>
                <div
                  className={`border-2 border-[#EAC258] bg-cover ${service.bg} h-[400px] bg-gray-500 shadow-lg`}
                ></div>
              </motion.div>

              {/* Animation des descriptions (Sdesc) */}
              <div className="grid grid-cols-3 gap-6 mt-20 w-full max-sm:grid-cols-1 max-xl:grid-cols-2">
                {service.Sdesc.map((desc, descIndex) => (
                  <motion.div
                    key={descIndex}
                    initial="hidden"
                    animate="visible" // Animation dès le début
                    transition={{ duration: 0.5, delay: descIndex * 0.1 }}
                    variants={{
                      hidden: { opacity: 0, scale: 0.9 },
                      visible: { opacity: 1, scale: 1 },
                    }}
                    className="p-4 shadow-xl dark:shadow-md dark:shadow-[#EAC258] bg-slate-300 dark:bg-black/25 rounded-md w-full text-base"
                  >
                    <div className="flex items-center mt-2 w-full justify-center first:uppercase mb-5">
                      <FaClipboardList className="mr-3 text-4xl text-[#EAC258]" />
                      <p className="first-letter:uppercase font-bold">
                        {c(desc).split(" ").slice(0, 1)}
                      </p>
                    </div>
                    <p>{c(desc)}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesContent;
