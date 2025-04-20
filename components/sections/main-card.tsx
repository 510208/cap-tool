"use client"; // This is a client component 👈🏽

import { useState, useEffect } from "react"; // 引入 useEffect
// import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  // CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { NumInputWithCtrl } from "../ui/numinput"; // 確保路徑正確

// --- Constants ---
const MIN_SCORE = 0;
// const MAX_SCORE = 30; // 這個常數可能不再需要，或者用途需要釐清
const MATH_NON_SELECT_TOTAL_SCORE = 6; // 1. 定義非選題總分常數
const MAX_TOTAL_SELECT_QUESTIONS = 50;

const ENGLISH_LISTENING_TOTAL_COUNT = 21; // 英文聽力總題數

export function TabsCalc() {
  // ==================
  // --- 數學計算機 ---
  // ==================

  // --- 靜態變數 ---
  const [mathSelectRight, setMathSelectRight] = useState(25);
  const [mathSelectTotal, setMathSelectTotal] = useState(25);
  const [mathNonSelectRight, setMathNonSelectRight] = useState(
    MATH_NON_SELECT_TOTAL_SCORE
  ); // 初始值設為滿分或 0 較合理
  // 新增 state 來儲存計算結果
  const [calculatedMathScore, setCalculatedMathScore] = useState<number | null>(
    null
  );

  // --- 在輸入框改變時的協助函式 ---
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setter: React.Dispatch<React.SetStateAction<number>>,
    min: number,
    max: number
  ) => {
    const value = e.target.value;
    if (value === "") {
      setter(min);
      return;
    }
    const num = parseInt(value, 10);
    if (!isNaN(num)) {
      // 確保數值在 min 和 max 之間
      setter(Math.max(min, Math.min(num, max)));
    } else {
      setter(min); // 非數字輸入也設為最小值
    }
  };
  // --------------------

  // --- 計算邏輯 ---
  const calculateScore = (
    // 公式：選擇題得分 / 總題數 * 85 + 非選題得分 / 總題數 * 15
    select_right: number,
    select_total: number,
    non_select_right: number,
    non_select_total: number // 接收非選總分作為參數
  ): number | null => {
    // 回傳值可能是 null (無法計算時)
    // 防呆：避免除以零，並確保輸入有效
    if (
      select_total <= 0 ||
      non_select_total <= 0 ||
      isNaN(select_total) ||
      isNaN(non_select_total)
    ) {
      return null;
    }
    // 防呆：確保分數不超過總分/總題數
    const validSelectRight = Math.min(select_right, select_total);
    const validNonSelectRight = Math.min(non_select_right, non_select_total);

    const selectScorePart = (validSelectRight / select_total) * 85;
    const nonSelectScorePart = (validNonSelectRight / non_select_total) * 15;

    const totalScore = selectScorePart + nonSelectScorePart;

    // 再次檢查計算結果是否有效
    return isNaN(totalScore) ? null : totalScore;
  };

  // --- 使用 useEffect 自動計算 ---
  useEffect(() => {
    const score = calculateScore(
      mathSelectRight,
      mathSelectTotal,
      mathNonSelectRight,
      MATH_NON_SELECT_TOTAL_SCORE // 3. 使用正確的非選總分常數
    );
    setCalculatedMathScore(score); // 更新 state
    // 當依賴的 state 改變時，這個 effect 會重新執行
  }, [mathSelectRight, mathSelectTotal, mathNonSelectRight]);
  // ------------------------------------
  // ===================

  // ==================
  // --- 英文計算機 ---
  // ==================

  // --- 靜態變數 ---
  const [englishWritingRight, setEnglishWritingRight] = useState(43);
  const [englishWritingTotal, setEnglishWritingTotal] = useState(43);
  const [englishListeningRight, setEnglishListeningRight] = useState(21); // 初始值設為滿分或 0 較合理
  const [englishListeningTotal, setEnglishListeningTotal] = useState(21);
  // 新增 state 來儲存計算結果
  const [calculatedEnglishScore, setCalculatedEnglishScore] = useState<
    number | null
  >(null);

  // --- 在輸入框改變時的協助函式 ---
  const handleInputChangeEnglish = (
    e: React.ChangeEvent<HTMLInputElement>,
    setter: React.Dispatch<React.SetStateAction<number>>,
    min: number,
    max: number
  ) => {
    const value = e.target.value;
    if (value === "") {
      setter(min);
      return;
    }
    const num = parseInt(value, 10);
    if (!isNaN(num)) {
      // 確保數值在 min 和 max 之間
      setter(Math.max(min, Math.min(num, max)));
    } else {
      setter(min); // 非數字輸入也設為最小值
    }
  };
  // --------------------

  // --- 計算邏輯 ---
  const calculateEnglishScore = (
    // 公式：聽力題得分 / 總題數 * 20 + 閱讀題得分 / 總題數 * 80
    listen_right: number,
    listen_total: number,
    read_right: number,
    read_total: number // 接收閱讀總分作為參數
  ): number | null => {
    // 回傳值可能是 null (無法計算時)
    // 防呆：避免除以零，並確保輸入有效
    if (
      listen_total <= 0 ||
      read_total <= 0 ||
      isNaN(listen_total) ||
      isNaN(read_total)
    ) {
      return null;
    }
    // 防呆：確保分數不超過總分/總題數
    const validListenRight = Math.min(listen_right, listen_total);
    const validReadRight = Math.min(read_right, read_total);

    const listenScorePart = (validListenRight / listen_total) * 20;
    const readScorePart = (validReadRight / read_total) * 80;
    const totalScore = listenScorePart + readScorePart;

    // 再次檢查計算結果是否有效
    return isNaN(totalScore) ? null : totalScore;
  };

  // --- 使用 useEffect 自動計算 ---
  useEffect(() => {
    const score = calculateEnglishScore(
      englishListeningRight,
      englishListeningTotal,
      englishWritingRight,
      englishWritingTotal // 3. 使用正確的非選總分常數
    );
    setCalculatedEnglishScore(score); // 更新 state
    // 當依賴的 state 改變時，這個 effect 會重新執行
  }, [
    englishListeningRight,
    englishListeningTotal,
    englishWritingRight,
    englishWritingTotal,
  ]);
  // ------------------------------------

  return (
    <>
      <Tabs defaultValue="math" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger
            value="math"
            className="text-gray-700 data-[state=active]:text-gray-200 dark:text-gray-200 dark:data-[state=active]:text-gray-300 dark:data-[state=active]:bg-gray-700"
          >
            數學
          </TabsTrigger>
          <TabsTrigger
            value="english"
            className="text-gray-700 data-[state=active]:text-gray-200 dark:text-gray-200 dark:data-[state=active]:text-gray-300 dark:data-[state=active]:bg-gray-700"
          >
            英語
          </TabsTrigger>
        </TabsList>
        <TabsContent value="math">
          {/* 輸入 Card */}
          <Card>
            <CardHeader>
              <CardTitle>數學加權分數計算</CardTitle>
              <CardDescription>輸入分數以計算加權分數。</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* 數學選擇 */}
              <div className="flex w-full max-w-m items-start space-x-4">
                <div className="flex-1">
                  <NumInputWithCtrl
                    id="math-select-right"
                    label="數學選擇題答對題數"
                    value={mathSelectRight}
                    min={MIN_SCORE}
                    // 最大值不應超過總題數
                    max={mathSelectTotal}
                    onChange={(e) =>
                      handleInputChange(
                        e,
                        setMathSelectRight,
                        MIN_SCORE,
                        // 傳遞動態的最大值
                        mathSelectTotal
                      )
                    }
                    onIncrement={() =>
                      setEnglishListeningRight((prev) =>
                        Math.min(prev + 1, mathSelectTotal)
                      )
                    }
                    onDecrement={() =>
                      setEnglishListeningRight((prev) =>
                        Math.max(prev - 1, MIN_SCORE)
                      )
                    }
                  />
                </div>
                <div className="flex-1">
                  <NumInputWithCtrl
                    id="math-select-total"
                    label="數學選擇題總題數"
                    value={mathSelectTotal}
                    min={1} // 總題數至少為 1
                    max={MAX_TOTAL_SELECT_QUESTIONS}
                    onChange={(e) =>
                      handleInputChange(
                        e,
                        setMathSelectTotal,
                        1, // 最小值設為 1
                        MAX_TOTAL_SELECT_QUESTIONS
                      )
                    }
                    onIncrement={() =>
                      setMathSelectRight((prev) =>
                        Math.min(prev + 1, MAX_TOTAL_SELECT_QUESTIONS)
                      )
                    }
                    onDecrement={() =>
                      setMathSelectRight((prev) =>
                        Math.max(prev - 1, MIN_SCORE)
                      )
                    }
                  />
                </div>
              </div>
              <Separator className="my-4" />
              {/* 數學非選 */}
              {/* 2. 移除多餘的非選總分輸入框和外層 flex 容器 */}
              <NumInputWithCtrl
                id="english-listening-right"
                // 更新 Label 提示滿分
                label={`數學非選得分 (滿分 ${MATH_NON_SELECT_TOTAL_SCORE})`}
                value={mathNonSelectRight}
                min={MIN_SCORE}
                // 最大值為非選總分
                max={MATH_NON_SELECT_TOTAL_SCORE}
                onChange={(e) =>
                  handleInputChange(
                    e,
                    setMathNonSelectRight,
                    MIN_SCORE,
                    // 使用非選總分作為最大值
                    MATH_NON_SELECT_TOTAL_SCORE
                  )
                }
                onIncrement={() =>
                  setMathNonSelectRight((prev) =>
                    Math.min(prev + 1, MATH_NON_SELECT_TOTAL_SCORE)
                  )
                }
                onDecrement={() =>
                  setMathNonSelectRight((prev) => Math.max(prev - 1, MIN_SCORE))
                }
              />
            </CardContent>
            {/* 如果使用 useEffect 自動計算，可以移除 Footer 和 Button */}
            {/*
            <CardFooter>
              <Button type="button" onClick={handleCalculateClick}>
                計算
              </Button>
            </CardFooter>
            */}
          </Card>

          {/* 結果 Card */}
          <Card className="w-[400px] mt-4">
            {" "}
            {/* 增加上方間距 */}
            <CardHeader>
              <CardTitle>計算結果</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <p className="font-thin">數學加權分數</p>
                <p
                  className="text-green-900 text-2xl font-bold"
                  id="math-score" // ID 可以保留
                >
                  {/* 4. 顯示 state 中的計算結果 */}
                  {calculatedMathScore !== null
                    ? calculatedMathScore.toFixed(2) // 格式化為小數點後兩位
                    : "N/A"}
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="english">
          {/* 輸入 Card */}
          <Card>
            <CardHeader>
              <CardTitle>英文加權分數計算</CardTitle>
              <CardDescription>輸入分數以計算加權分數。</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* 英文閱讀 */}
              <div className="flex w-full max-w-m items-start space-x-4">
                <div className="flex-1">
                  <NumInputWithCtrl
                    id="english-reading-right"
                    label="英文閱讀題答對題數"
                    value={englishWritingRight}
                    min={MIN_SCORE}
                    // 最大值不應超過總題數
                    max={englishWritingTotal}
                    onChange={(e) =>
                      handleInputChange(
                        e,
                        setEnglishWritingRight,
                        MIN_SCORE,
                        // 傳遞動態的最大值
                        englishWritingTotal
                      )
                    }
                    onIncrement={() =>
                      setMathSelectRight((prev) =>
                        Math.min(prev + 1, mathSelectTotal)
                      )
                    }
                    onDecrement={() =>
                      setMathSelectRight((prev) =>
                        Math.max(prev - 1, MIN_SCORE)
                      )
                    }
                  />
                </div>
                <div className="flex-1">
                  <NumInputWithCtrl
                    id="math-select-total"
                    label="英文閱讀題總題數"
                    value={englishWritingTotal}
                    min={1} // 總題數至少為 1
                    max={MAX_TOTAL_SELECT_QUESTIONS}
                    onChange={(e) =>
                      handleInputChange(
                        e,
                        setEnglishWritingTotal,
                        1, // 最小值設為 1
                        MAX_TOTAL_SELECT_QUESTIONS
                      )
                    }
                    onIncrement={() =>
                      setMathSelectRight((prev) =>
                        Math.min(prev + 1, mathSelectTotal)
                      )
                    }
                    onDecrement={() =>
                      setMathSelectRight((prev) =>
                        Math.max(prev - 1, MIN_SCORE)
                      )
                    }
                  />
                </div>
              </div>
              <Separator className="my-4" />
              {/* 英文聽力 */}
              <div className="flex w-full max-w-m items-start space-x-4">
                <div className="flex-1">
                  <NumInputWithCtrl
                    id="math-non-select-right"
                    // 更新 Label 提示滿分
                    label="英文聽力題答對題數"
                    value={englishListeningRight}
                    min={MIN_SCORE}
                    // 最大值為非選總分
                    max={englishListeningTotal}
                    onChange={(e) =>
                      handleInputChange(
                        e,
                        setEnglishListeningRight,
                        MIN_SCORE,
                        // 使用非選總分作為最大值
                        englishListeningTotal
                      )
                    }
                    onIncrement={() =>
                      setMathSelectRight((prev) =>
                        Math.min(prev + 1, mathSelectTotal)
                      )
                    }
                    onDecrement={() =>
                      setMathSelectRight((prev) =>
                        Math.max(prev - 1, MIN_SCORE)
                      )
                    }
                  />
                </div>
                <div className="flex-1">
                  <NumInputWithCtrl
                    id="math-non-select-right"
                    // 更新 Label 提示滿分
                    label="英文聽力題總題數"
                    value={englishListeningTotal}
                    min={MIN_SCORE}
                    // 最大值為非選總分
                    max={ENGLISH_LISTENING_TOTAL_COUNT}
                    onChange={(e) =>
                      handleInputChange(
                        e,
                        setEnglishListeningTotal,
                        MIN_SCORE,
                        // 使用非選總分作為最大值
                        ENGLISH_LISTENING_TOTAL_COUNT
                      )
                    }
                    onIncrement={() =>
                      setMathSelectRight((prev) =>
                        Math.min(prev + 1, mathSelectTotal)
                      )
                    }
                    onDecrement={() =>
                      setMathSelectRight((prev) =>
                        Math.max(prev - 1, MIN_SCORE)
                      )
                    }
                  />
                </div>
              </div>
            </CardContent>
            {/* 如果使用 useEffect 自動計算，可以移除 Footer 和 Button */}
            {/*
            <CardFooter>
              <Button type="button" onClick={handleCalculateClick}>
                計算
              </Button>
            </CardFooter>
            */}
          </Card>

          {/* 結果 Card */}
          <Card className="w-[400px] mt-4">
            {" "}
            {/* 增加上方間距 */}
            <CardHeader>
              <CardTitle>計算結果</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <p className="font-thin">英文加權分數</p>
                <p
                  className="text-green-900 text-2xl font-bold"
                  id="english-score" // ID 可以保留
                >
                  {/* 4. 顯示 state 中的計算結果 */}
                  {calculatedEnglishScore !== null
                    ? calculatedEnglishScore.toFixed(2) // 格式化為小數點後兩位
                    : "N/A"}
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      <label className="text-sm text-muted-foreground">
        <span className="text-red-500">*</span>{" "}
        這個計算機僅供參考，實際成績以官方公告為準。
      </label>
    </>
  );
}
