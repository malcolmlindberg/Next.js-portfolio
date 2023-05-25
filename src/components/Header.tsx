"use client";
import { Bebas_Neue, Poppins, Nunito } from "next/font/google";
import { useContext } from "react";
import { langContext } from "./LanguageSwitcher";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--bebas-font",
});

const Header = () => {
  const { lang, handleLang } = useContext(langContext);

  const handleClickSV = () => {
    handleLang("SV");
  };

  const handleClickEN = () => {
    handleLang("EN");
  };

  return (
    <>
      <div
        className={`${bebas.variable}  border border-black h-24 content-center flex items-center justify-end font-poppins `}
      >
        <ul className={`space-x-8 flex  `}>
          <li className="">
            <a href="/">{lang === "EN" ? "Services" : "Arbeten"}</a>
          </li>

          <li>
            <a href="/">{lang === "EN" ? "Projects" : "Mina projekt"}</a>
          </li>
          <li className="">
            <a href="/">{lang === "EN" ? "Resume" : "Mitt cv"}</a>
          </li>
          <li className="">
            <a className="hover:bg-slate-800" href="/">
              {lang === "EN" ? "About me" : "Om mig"}
            </a>
          </li>
        </ul>
      </div>
      <div className="flex justify-end ">
        <button onClick={handleClickSV}>SV</button> |{" "}
        <button onClick={handleClickEN}>EN</button>
      </div>
    </>
  );
};

export default Header;
