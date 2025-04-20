import { Noto_Sans_TC } from "next/font/google";
import { TabsCalc } from "@/components/sections/main-card";
import { Github } from "lucide-react";
import { ModeToggle } from "@/components/ui/dark-toggle";
// import Image from "next/image";
import { AboutDialog } from "@/components/sections/about";
import Quote from "@/components/sections/quote";

const noto = Noto_Sans_TC();

export default function Home() {
  return (
    <div className={noto.className}>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-gray-100 dark:bg-gray-950">
        <main className="flex flex-col gap-[10px] row-start-2 items-center sm:items-start">
          <h1 className="font-bold text-black dark:text-white">
            國中教育會考計算機
          </h1>
          <Quote />
          <TabsCalc />
        </main>
      </div>
      <div className="fixed bottom-4 right-4">
        <div className="flex w-full max-w-m items-start space-x-2">
          <a
            href="https://github.com/510208" // 替換為您的 GitHub 頁面 URL
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className="bg-gray-700 hover:bg-gray-900 text-white font-bold py-3 px-3 rounded-full shadow-lg flex items-center justify-center transition-transform duration-300 ease-in-out transform hover:scale-110"
              style={{
                backgroundImage:
                  "url('https://gravatar.com/avatar/a3acb96faf7156d0d0d4b019ba8cdd96?size=256')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <Github className="h-4 w-4 opacity-0" />
            </button>
          </a>
          <AboutDialog />
          <a
            href="https://github.com/510208/cap-tool" // 替換為您的 GitHub 頁面 URL
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-gray-700 hover:bg-gray-900 text-white font-bold py-3 px-3 rounded-full shadow-lg flex items-center justify-center transition-transform duration-300 ease-in-out transform hover:scale-110">
              <Github className="h-4 w-4" />
            </button>
          </a>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}
