"use client"

import { useEffect, useState } from "react"

interface ChangingTextPropsI {
  texts: Array<string>;
  changeIntervalMs?: number;
}

const ChangingText = (props: ChangingTextPropsI) => {
  const { texts = [], changeIntervalMs = 1000 } = props;
  const [textIndex, setTextIndex] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTextIndex(idx => (idx + 1 > texts.length - 1 ? 0 : idx + 1));
    }, changeIntervalMs);

    return () => {
      clearInterval(intervalId);
    };
  }, [changeIntervalMs, texts.length]);

  if (texts.length === 0) return null;

  return (
    <span className="underline">{texts[textIndex]}</span>
  );
}

export default ChangingText;
