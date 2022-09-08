import { useEffect, useState } from "react";

enum TypingPhase {
  Typing,
  Pausing,
  Deleting,
}
const TYPING_INTERVAL = 100;
const PAUSE_INTERVAL = 1000;
const DELETING_INTERVAL = 100;

const useTypingAnimation = (array: string[]) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [typingPhase, setTypingPhase] = useState(TypingPhase.Typing);
  const [typing, setTyping] = useState("");

  useEffect(() => {
    switch (typingPhase) {
      case TypingPhase.Typing: {
        const nextTyping = array[selectedIndex].slice(0, typing.length + 1);
        if (nextTyping == typing) {
          setTypingPhase(TypingPhase.Pausing);

          return;
        }
        const timeout = setTimeout(() => {
          setTyping(nextTyping);
        }, TYPING_INTERVAL);

        return () => clearTimeout(timeout);
      }

      case TypingPhase.Deleting: {
        if (!typing) {
          const nextIndex = selectedIndex + 1;
          setSelectedIndex(array[nextIndex] ? nextIndex : 0);
          setTypingPhase(TypingPhase.Typing);
          return;
        }
        const nextRemaining = array[selectedIndex].slice(0, typing.length - 1);
        const timeout = setTimeout(() => {
          setTyping(nextRemaining);
        }, DELETING_INTERVAL);

        return () => clearTimeout(timeout);
      }
      case TypingPhase.Pausing:
      default: {
        const timeout = setTimeout(() => {
          setTypingPhase(TypingPhase.Deleting);
        }, PAUSE_INTERVAL);

        return () => clearTimeout(timeout);
      }
    }
  }, [typing, array, typingPhase, selectedIndex]);

  return typing;
};

export default useTypingAnimation;
