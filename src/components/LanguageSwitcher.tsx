"use client";
import React, { ReactNode } from "react";
import { useState, createContext } from "react";

interface langInterface {
  children: ReactNode;
}

export const langContext = createContext({
  lang: "",
  handleLang: (newLang: string) => {},
});

const LanguageSwitcher = ({ children }: langInterface) => {
  const [lang, setLang] = useState<string>("EN");

  const handleLang = (newLang: string) => {
    if (lang !== newLang) {
      setLang(newLang);
    }
  };

  return (
    <langContext.Provider value={{ lang, handleLang }}>
      {children}
    </langContext.Provider>
  );
};

export default LanguageSwitcher;
