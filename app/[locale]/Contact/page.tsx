"use client";
import { motion } from "framer-motion";
import Hero from "@/components/shares/Hero";
import { useTranslations } from "next-intl";
import { FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";

const Page = () => {
  const t = useTranslations("menu");

  return (
    <div className="relative">
      <Hero
        link={t("link5")}
        title={t("title")}
        backgroundImage="/images/contact.jpg"
      />
      <div className="max-w-3xl mx-auto p-6 max-md:mx-4 bg-white dark:bg-[#000] rounded-lg shadow-lg my-[100px]">
        {/* Titre animé */}
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-2xl font-semibold text-center mb-6"
        >
          {t("contact_title")}
        </motion.h2>

        {/* Liste des contacts */}
        <div className="space-y-4">
          {[
            {
              icon: FaEnvelope,
              color: "text-blue-500",
              info: "Labsikouma@gmail.com",
            },
            {
              icon: FaPhone,
              color: "text-green-500",
              extraIcon: FaWhatsapp,
              info: `+237 691 813 478 (${t("status")})`,
            },
            {
              icon: FaPhone,
              color: "text-green-500",
              extraIcon: FaWhatsapp,
              info: `+237 683 18 30 56 (${t("status")})`,
            },
          ].map(({ icon: Icon, color, extraIcon: ExtraIcon, info }, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center space-x-4"
            >
              <Icon className={`text-xl ${color}`} />
              {ExtraIcon && <ExtraIcon className="text-green-500 text-xl" />}
              <span className="text-lg">{info}</span>
            </motion.div>
          ))}
        </div>
      </div>
      ;
    </div>
  );
};

export default Page;
