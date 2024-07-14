"use client"

import { useEffect, useState } from "react"

interface ChangingTextPropsI {
  texts: Array<string>;
  changeIntervalMs?: number;
}
const ChangingText = (props: ChangingTextPropsI) => {
  const { texts, changeIntervalMs = 1000 } = props;
  const [textIndex, setTextIndex] = useState<number>(0);
  useEffect(() => {
    let intervalId = setInterval(() => {
      setTextIndex(idx => {
        const nextIdx = idx + 1;
        return nextIdx > texts.length ? 0 : nextIdx;
      })
    }, changeIntervalMs);
    () => {
      clearInterval(intervalId);
    }
  }, [changeIntervalMs, texts.length]);

  if (texts.length === 0 ) return null;

  return (
    <span className="underline">{texts[textIndex]}</span>
  )
}

export default ChangingText;