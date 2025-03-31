/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
const Testimonial = () => {
  const [email, setEmail] = useState("");
  const t = useTranslations("Tesimonial");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("Votre email a bien été envoyé !");
        setEmail(""); // Réinitialise l'input
      } else {
        toast.error(data.message || "Une erreur s'est produite.");
      }
    } catch (error) {
      toast.success("Votre email a bien été envoyé !");
    }
  };

  return (
    <div className="container rounded-lg h-full w-full flex justify-center items-center p-6">
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
        className="w-full max-w-md text-center"
      >
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          {t("NewsletterTitle")}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {t("NewsletterDescription")}
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="email"
            className="w-full p-3 border rounded-lg dark:bg-gray-800 dark:text-white"
            placeholder={t("NewsletterInput")}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-[#EAC258] text-white py-2 rounded-lg hover:bg-[#f2c959] transition"
          >
            {t("NewsletterBtn")}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Testimonial;
