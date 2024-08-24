"use client"
import { useEffect, useState } from 'react';

const Typewriter = () => {
  const words = ["Hello, World!", "Welcome to my website!", "This is a typewriter effect."];
  const [currentWord, setCurrentWord] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [i, setI] = useState(0);
  const [j, setJ] = useState(0);

  useEffect(() => {
    const type = () => {
      const word = words[i];
      if (isDeleting) {
        setCurrentWord(word.substring(0, j - 1));
        setJ(j - 1);

        if (j === 0) {
          setIsDeleting(false);
          setI((prev) => (prev + 1) % words.length);
        }
      } else {
        setCurrentWord(word.substring(0, j + 1));
        setJ(j + 1);

        if (j === word.length) {
          setIsDeleting(true);
        }
      }
    };

    const timeout = setTimeout(type, 100);
    return () => clearTimeout(timeout);
  }, [i, j, isDeleting]);

  return (
    <div className="w-full h-full flex justify-center  text-cyan-300 items-center">
      <h1 className="text-4xl font-bold">{currentWord}</h1>
    </div>
  );
};

export default Typewriter;
