"use client";
import { motion } from "framer-motion";
import {
  FaLightbulb,
  FaChartLine,
  FaLaptopCode,
  FaBullhorn,
  FaUsers,
  FaRocket,
} from "react-icons/fa";
import { MdVisibility, MdWeb } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";
import { useTranslations } from "next-intl";
import Hero from "@/components/shares/Hero";

const Page = () => {
  const t = useTranslations("Agence");
  const m = useTranslations("menu");
  return (
    <div className="flex flex-col">
      <Hero
        link={m("link3")}
        title={m("title")}
        backgroundImage="/images/agency.jpg"
      />
      <div className="w-full flex justify-center items-center">
        <div className="container mx-auto px-6 py-12 text-gray-900 dark:text-white">
          {/* Qui sommes-nous ? */}
          <section className="mb-12 text-center">
            <motion.h2
              initial="hidden"
              animate="visible" // Animation dès le début
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
              className="text-3xl font-bold flex items-center justify-center gap-2 text-[#EAC258]"
            >
              <FaLightbulb className="text-4xl" /> {t("titleOne")}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }} // Animation dès le début
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 text-lg max-w-2xl mx-auto"
            >
              {t("desc")}
            </motion.p>
          </section>

          {/* Nos Missions */}
          <section className="mb-12">
            <motion.h2
              initial="hidden"
              animate="visible" // Animation dès le début
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
              className="text-3xl font-bold flex items-center gap-2 text-[#EAC258]"
            >
              <FaChartLine className="text-4xl" /> {t("BoxCartTitle")}
            </motion.h2>

            <ul className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: FaBullhorn,
                  title: t("CartTitleone"),
                  desc: t("CartdescOne"),
                },
                {
                  icon: FaLaptopCode,
                  title: t("CartTitleTwo"),
                  desc: t("CartdescTwo"),
                },
                {
                  icon: MdVisibility,
                  title: t("CartTitleThree"),
                  desc: t("CartdescThree"),
                },
                {
                  icon: FaRocket,
                  title: t("CartTitleFour"),
                  desc: t("CartdescFour"),
                },
                {
                  icon: MdWeb,
                  title: t("CartTitleFive"),
                  desc: t("CartdescFive"),
                },
                {
                  icon: FaUsers,
                  title: t("CartTitleSix"),
                  desc: t("CartdescSix"),
                },
              ].map(({ icon: Icon, title, desc }, index) => (
                <motion.li
                  key={index}
                  initial="hidden"
                  animate="visible" // Animation dès le début
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  variants={{
                    hidden: { opacity: 0, scale: 0.9 },
                    visible: { opacity: 1, scale: 1 },
                  }}
                  className="flex items-start p-4 border border-[#EAC258] rounded-lg bg-[#fff] shadow-sm dark:bg-[#000]"
                >
                  <Icon className="text-3xl text-[#EAC258] mr-4" />
                  <div>
                    <h3 className="font-semibold text-lg">{title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 text-justify">
                      {desc}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </section>

          {/* Notre Équipe */}
          <section className="text-center">
            <motion.h2
              initial="hidden"
              animate="visible" // Animation dès le début
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
              className="text-3xl font-bold flex items-center justify-center gap-2 text-[#EAC258]"
            >
              <RiTeamFill className="text-4xl" /> {t("titleTeams")}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }} // Animation dès le début
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 text-lg max-w-2xl mx-auto"
            >
              {t("DescTeams")}
            </motion.p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Page;
