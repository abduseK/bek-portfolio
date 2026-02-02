import { Footer } from "./components/footer";
import Header from "./components/header";
import { Hero } from "./components/hero";
import ExperienceTree from "./components/experience";

export default function Home() {
  return (
    /* h-screen + overflow-hidden prevents scrolling on the main body */
    <div className=" bg-white dark:bg-black text-white selection:bg-white/20 flex flex-col overflow-hidden">
      <Header />

      {/* flex-grow: takes up all remaining space between Header and Footer
        flex items-center: vertically centers the Hero/Experience 
      */}
      <main className="flex-grow max-w-6xl mx-auto px-6 md:px-12 flex flex-col justify-center w-full">
        <div className="w-full space-y-12">
          {/* Hero Section */}
          <Hero />
        </div>
      </main>

      {/* Footer stays at the very bottom */}
      <div className="pb-8">
        <Footer />
      </div>
    </div>
  );
}
