"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { FaPaintBrush, FaLaptopCode } from "react-icons/fa";

const HomeSectionSetion = ({ locale }: { locale: string }) => {
  const t = useTranslations("menu");
  const c = useTranslations("cardServiceSection");
  const sections = [
    {
      icon: <FaPaintBrush className="text-2xl mb-2 text-[#EAC258]" />,
      title: "titleOne",
      Stitle: "StitleOne",
      Sdesc: "descOne1",
      bg: "bg-[url('/services/07.jpg')]",
    },
    {
      icon: <FaLaptopCode className="text-2xl mb-2 text-[#EAC258]" />,
      title: "titleTwo",
      Stitle: "StitleTwo",
      Sdesc: "descTwo1",
      bg: "bg-[url('/services/01.png')]",
    },
  ];
  return (
    <div className="w-full flex justify-center flex-col items-center mt-[28px]">
      <motion.h2
        initial="hidden"
        //valeur final
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
        className="text-[#EAC258] text-3xl my-8"
      >
        {t("link2")}
      </motion.h2>
      <div className="container border-t border-[#3d3d3d] dark:border-white px-4">
        <div className="my-8 gap-y-8 flex flex-wrap items-center justify-between max-md:justify-center">
          {sections.map((section, index) => (
            <motion.div
              initial="hidden"
              //valeur final
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              key={index}
              className="w-[48%] max-md:w-full my-2 h-[300px] max-md:h-auto p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-black dark:border-gray-700"
            >
              <div className="flex justify-center items-center w-full">
                {section.icon}
              </div>
              <a href="#">
                <motion.h5
                  initial="hidden"
                  //valeur final
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  className="mb-2 text-2xl text-center font-semibold tracking-tight text-gray-900 dark:text-white"
                >
                  {c(section.title)}
                </motion.h5>
              </a>
              <p className="font-normal text-gray-500 mt-6 dark:text-gray-400 text-justify">
                {c(section.Sdesc)}
              </p>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-6">
          <Link href={`/${locale}/services`} prefetch={false}>
            <motion.button
              initial="hidden"
              //valeur final
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              type="button"
              className="text-gray-900 dark:bg-black capitalize bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-6 py-3 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 transition-all"
            >
              services
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeSectionSetion;
