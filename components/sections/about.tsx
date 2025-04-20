import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { InfoIcon } from "lucide-react";

export function AboutDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="bg-gray-700 hover:bg-gray-900 text-white font-bold py-3 px-3 rounded-full shadow-lg flex items-center justify-center transition-transform duration-300 ease-in-out transform hover:scale-110">
          <InfoIcon className="h-4 w-4" />
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>關於 國中教育會考計算機</DialogTitle>
          <DialogDescription>
            這是一個用於計算國中教育會考的計算機，幫助學生快速計算分數和成績。
            <br />
            <br />
            這個計算機由SamHacker開發，旨在提供一個簡單易用的工具，幫助學生在考試中更輕鬆地計算分數。
            <br />
            如果對這個計算機有任何建議或問題，歡迎前往GitHub參觀，它採用GNU
            General Public License v3.0開源協議，歡迎大家的貢獻！
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" value="@peduarte" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
