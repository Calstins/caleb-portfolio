import { useState, useEffect } from 'react';

const useTypingEffect = (texts, speed) => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      if (deleting) {
        setText((prev) => prev.slice(0, -1));
        if (text === '') {
          setDeleting(false);
          setIndex((prev) => (prev + 1) % texts.length);
        }
      } else {
        setText(texts[index].slice(0, charIndex + 1));
        if (charIndex === texts[index].length - 1) {
          setDeleting(true);
        }
      }

      setCharIndex((prev) => (deleting ? prev - 1 : prev + 1));
    }, speed);

    return () => clearInterval(timer);
  }, [charIndex, deleting, index, speed, text, texts]);

  return text;
};

export default useTypingEffect;
