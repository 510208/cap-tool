// import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
import { InfoIcon } from "lucide-react";
import Image from "next/image";

export function AboutDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="bg-gray-700 hover:bg-gray-900 text-white font-bold py-3 px-3 rounded-full shadow-lg flex items-center justify-center transition-transform duration-300 ease-in-out transform hover:scale-110">
          <InfoIcon className="h-4 w-4" />
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] bg-gray-50 dark:bg-gray-950">
        <DialogHeader>
          <DialogTitle className="text-black dark:text-white">
            關於 國中教育會考計算機
          </DialogTitle>
          <DialogDescription>
            這是一個用於計算國中教育會考的計算機，幫助學生快速計算分數和成績。
            <br />
            <br />
            你好，我是這個計算機的作者SamHacker，現在是我面對114年會考倒數27天時，用一天假日做出來的。
            對於每位考生而言，最理想的目標就是考上自己的第一志願，而能定下這個志願的人永遠只有你。
          </DialogDescription>
        </DialogHeader>
        {/* 關於頁面 */}
        <div className="grid gap-4 py-4">
          <p className="text-sm text-muted-foreground">
            我想感謝
            <a
              href="https://nextjs.org/"
              className="underline text-gray-700 hover:text-gray-500 decoration-gray-300 hover:decoration-gray-900 dark:text-gray-300 dark:hover:text-gray-200 dark:decoration-gray-700 dark:hover:decoration-gray-100 underline-offset-3 decoration-1 transition-all duration-200"
            >
              Next.js
            </a>
            、
            <a
              href="https://react.dev/"
              className="underline text-gray-700 hover:text-gray-500 decoration-gray-300 hover:decoration-gray-900 dark:text-gray-300 dark:hover:text-gray-200 dark:decoration-gray-700 dark:hover:decoration-gray-100 underline-offset-3 decoration-1 transition-all duration-200"
            >
              React
            </a>
            、
            <a
              href="https://tailwindcss.com/"
              className="underline text-gray-700 hover:text-gray-500 decoration-gray-300 hover:decoration-gray-900 dark:text-gray-300 dark:hover:text-gray-200 dark:decoration-gray-700 dark:hover:decoration-gray-100 underline-offset-3 decoration-1 transition-all duration-200"
            >
              Tailwind CSS
            </a>
            、
            <a
              href="https://www.radix-ui.com/"
              className="underline text-gray-700 hover:text-gray-500 decoration-gray-300 hover:decoration-gray-900 dark:text-gray-300 dark:hover:text-gray-200 dark:decoration-gray-700 dark:hover:decoration-gray-100 underline-offset-3 decoration-1 transition-all duration-200"
            >
              Radix UI
            </a>
            、
            <a
              href="https://www.typescriptlang.org/"
              className="underline text-gray-700 hover:text-gray-500 decoration-gray-300 hover:decoration-gray-900 dark:text-gray-300 dark:hover:text-gray-200 dark:decoration-gray-700 dark:hover:decoration-gray-100 underline-offset-3 decoration-1 transition-all duration-200"
            >
              TypeScript
            </a>
            和
            <a
              href="https://lucide.dev/"
              className="underline text-gray-700 hover:text-gray-500 decoration-gray-300 hover:decoration-gray-900 dark:text-gray-300 dark:hover:text-gray-200 dark:decoration-gray-700 dark:hover:decoration-gray-100 underline-offset-3 decoration-1 transition-all duration-200"
            >
              Lucide React
            </a>
            等開源項目的支持，讓這個計算機得以實現。
            <br />
            如果你喜歡這個計算機，請在GitHub上給我們一個星星！
            <br />
            最後，祝各位考生在會考中取得優異的成績！順利考上理想的第一志願，此致
          </p>
          <p className="text-sm text-muted-foreground text-right">
            SamHacker 敬上，
            <br />
            {/* 自動抓取年分 */}
            {new Date().getFullYear()}年
          </p>
        </div>
        <DialogFooter>
          {/* Logo們 */}
          <div className="flex w-full max-w-m space-x-4">
            {/* 國中教育會考 */}
            <a
              href="https://www.cap.edu.tw/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-white rounded-b-m overflow-hidden font-bold py-1 px-1 flex items-center justify-center transition-transform duration-300 ease-in-out transform hover:scale-110">
                <Image
                  src="/logos/cap.png"
                  width={272 / 2}
                  height={78 / 2}
                  alt="CAP Logo"
                  className="rounded-b-m overflow-hidden"
                />
              </button>
            </a>
            {/* SamHacker Logo */}
            <a
              href="https://samhacker.xyz/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-white rounded-b-m overflow-hidden font-bold py-1 px-1 flex items-center justify-center transition-transform duration-300 ease-in-out transform hover:scale-110">
                <Image
                  src="https://samhacker.xyz/wp-content/uploads/2024/05/SamHacker.svg"
                  width={272 / 2}
                  height={78 / 2}
                  alt="SamHacker Logo"
                  className="rounded-b-m overflow-hidden"
                />
              </button>
            </a>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
