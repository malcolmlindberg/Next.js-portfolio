"use client";
import React, { useContext } from "react";
import { Bebas_Neue, Poppins, Nunito } from "next/font/google";
import { langContext } from "./LanguageSwitcher";

const poppins = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-poppins",
});

const FrontPage = () => {
  const { lang } = useContext(langContext);

  return (
    <div
      className={` ${poppins.variable} border border-black h-96 flex items-center justify-center `}
    >
      <div>
        <h3>{lang === "EN" ? "Hi there!" : "Hallå där! "}</h3>
        <h3>
          {lang === "EN"
            ? "Im Malcolm, a frontend-developer and JavaScript enthusiast based in Stockholm, Sweden."
            : "Jag heter Malcolm, jag är en frontend-utvecklare och JavaScript enthusiast som bor Stockholm, Sverige "}
        </h3>
        <a href="/">{lang === "EN" ? "Get in touch!" : "Kontakta mig!"}</a>
      </div>
    </div>
  );
};

export default FrontPage;
