import FrontPage from "@/components/FrontPage";
import Header from "../components/Header";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function Home() {
  return (
    <LanguageSwitcher>
      <main className="container xl mx-auto ">
        <Header />
        <FrontPage />
      </main>
    </LanguageSwitcher>
  );
}
