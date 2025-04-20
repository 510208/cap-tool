"use client";
import localFont from "next/font/local";
import { Skeleton } from "@/components/ui/skeleton";

const chenyuluoyan = localFont({
  src: [
    {
      path: "../../public/fonts/chenyu/ChenYuluoyan-20-Thin.woff2",
      weight: "normal",
      style: "normal",
    },
    {
      path: "../../public/fonts/chenyu/ChenYuluoyan-20-Thin.woff",
      weight: "normal",
      style: "normal",
    },
  ],
});
// 畫面中顯示一句隨機的鼓勵語句，用以鼓勵考生
import { useEffect, useState } from "react";
const quotes = [
  "努力不一定會成功，但不努力一定不會成功。",
  "心裡的火永遠不要滅，即使別人只能看到煙。",
  "每一次的努力，都是在為下一次的成功鋪路。",
  "相信自己，你就是最棒的！",
  "失敗只是成功之母，永不放棄才是關鍵。",
  "每一個今天都是你明天的基礎。",
  "只要你努力，就一定會有收穫。",
  "相信自己，你能做到！",
  "每一次的努力，都是在為下一次的成功鋪路。",
  "只要我們時間還在，離成功的距離就不會太遠。",
  "不要看前面還有多久，回頭看看你三年來的努力！",
  "失敗不是最痛苦的事，最痛苦的事我知道自己辦的到。",
  "自己就是成功的關鍵，努力就是成功的捷徑。",
  "很多事不是看到希望才試著堅持，而是試著堅持後才將看到希望。",
  "乾坤未定，你我都能是黑馬！",
  "煎和熬都是成功的方法，加油也是。",
  "每一滴汗水，終將獲得回報。",
  "人生是有意義且美好的，艱難的時刻總會過去。",
  "相信自己，因為你值得那個夢想中的未來。",
  "每一道題目，都是你知識的舞台，盡情展現吧！",
  "不完美沒關係，勇敢才是最珍貴的答案。",
  "考試只是過程，不是結局，你的價值遠比分數多得多。",
  "冷靜、深呼吸、穩住節奏，你可以的！",
  "曾經熬的夜、寫過的字，會在今天閃閃發光。",
  "你不是一個人，背後有一群人一直為你加油。",
  "勇敢走進考場，帶著信念走出來！",
  "寧吃百日苦，不留終生憾。",
  "三年磨一劍，五月試鋒芒。",
  "努力，一切皆有可能。",
  "天道酬勤，厚積薄發。",
  "三年寒窗，決戰今朝。",
  "拼搏到無能為力，堅持到感動自己。",
  "會考的路上，我註定要做王者。",
  "所謂萬丈深淵，下去也是前程萬里。",
  "在冷言嘲笑中翻盤，成為別人的可望不可及。",
  "今日浪費一分鐘，來日後悔一輩子。",
  "昨日撒下勤奮種，今朝一搏必成功。",
  "仰天大笑出門去，我輩豈是蓬蒿人。",
  "鷹擊天風壯，鵬飛海浪春。",
  "千淘萬漉雖辛苦，吹盡狂沙始到金。",
  "含淚播種，含笑收穫。",
  "放鬆心情，去迎接挑戰，我相信你，你一定是最出色的！",
  "願燦爛的陽光，青春的活力，秀美的容貌，舒心的微笑永遠屬於你！",
  "請繼續靜下來傾聽內心的聲音，接受它的指引，然後，勇敢、堅定地去體驗屬於你的寬廣和豐盛的人生。",
  "你筆下擁有一個色彩絢麗的世界：願你，也相信你，擁有另一個筆下燦爛的圖景。會考順利！",
  "天道酬勤，曾經的每一分付出，必將收到百倍回報。",
  "我自信，我出色；我拼搏，我成功。",
  "不奪桂冠誓不回，那怕銷得人憔悴。",
  "只為成功找方法，不為失敗找藉口。",
  "學海無涯勤可渡，書山萬仞志能攀。",
  "靜下來，鑄我實力；拼上去，亮我風采。",
  "辛苦三年，不為別的，只為一個夢想。",
  "我相信，努力就會有收穫！",
  "書念了、題刷了、心也靜了，考試就不怕了！",
  "考試的時候，心態最重要，放輕鬆，做自己就好！",
  "靜下心來，考場是你的。",
];

export default function Quote() {
  const [quote, setQuote] = useState("");
  const [loading, setLoading] = useState(true);
  const randomQuote = () => {
    setLoading(true);
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
    setLoading(false);
  };

  useEffect(() => {
    randomQuote();
  }, []);

  return loading ? (
    <>
      <Skeleton className="h-4 w-[400px]" />
      <Skeleton className="h-4 w-[320px]" />
    </>
  ) : (
    <p
      className={
        "text-lg text-gray-700 dark:text-gray-300 cursor-pointer max-w-[400px] " +
        chenyuluoyan.className
      }
      onClick={() => {
        randomQuote();
      }}
    >
      {quote}
    </p>
  );
}
