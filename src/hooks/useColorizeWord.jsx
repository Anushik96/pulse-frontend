import { useState, useEffect } from 'react';

export default function useColorizeWord(initialText, wordIndex, className) {
  const [text, setText] = useState(initialText);

  useEffect(() => {
    const words = text.split(' ');
    if (words.length > 1) {
      words[wordIndex] = `<span class="${className}">${words[wordIndex]}</span>`;
      setText(words.join(' '));
    }
  }, []);

  return text;
}