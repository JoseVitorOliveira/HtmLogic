// Container.tsx
import React, { FC, useCallback, useState } from "react";
import update from "immutability-helper";
import { Card } from "./Card";
import { Level, levels } from "../levels";
import Modal from "./Modal";
import HTMLPreview from "./HtmlPreview";
import CodePanel from "./CodePanel";
import Header from "./Header";
import buildHtmlString from "../utils/buildHtmlString";

export interface Item {
  id: number;
  text: string;
}

export const Container: FC = () => {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [cards, setCards] = useState(levels[currentLevel].cards);
  const [isOrderIncorrect, setIsOrderIncorrect] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hp, setHP] = useState(100);
  const [hasWon, setHasWon] = useState(false);
  const [htmlPreview, setHtmlPreview] = useState("");

  const moveCard = useCallback(
    (dragIndex: number, hoverIndex: number) => {
      const dragCard = cards[dragIndex];
      const updatedCards = update(cards, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, dragCard],
        ],
      });
      setCards(updatedCards);

      setTimeout(() => {
        generateHtmlPreview(updatedCards);
      });
    },
    [cards]
  );

  const renderCard = useCallback(
    (card: { id: number; text: string }, index: number) => {
      return (
        <Card
          key={card.id.toString()}
          index={index}
          id={card.id.toString()}
          text={card.text}
          moveCard={moveCard}
        />
      );
    },
    [moveCard]
  );

  /*   const checkOrder = () => {
    const currentOrder = cards.map((card) => card.text);
    const isCorrect =
      JSON.stringify(currentOrder) ===
      JSON.stringify(levels[currentLevel].correctOrder);

    if (isCorrect) {
      if (currentLevel < levels.length - 1) {
        setCurrentLevel(currentLevel + 1);
        setCards(levels[currentLevel + 1].cards);
        setIsOrderIncorrect(false);
        setHtmlPreview("");
        setHP(Math.min(hp + 10, 100));
      } else {
        setHasWon(true);
      }
      setIsModalOpen(true);
    } else {
      setIsOrderIncorrect(true);
      setHP(hp - 10);
      if (hp - 10 <= 0) {
        setIsModalOpen(true);
      }
    }
  };
 */
  const checkOrder = () => {
    const currentOrder = cards.map((card) => card.text);
    const correctOrder = levels[currentLevel].correctOrder;

    const incorrectLines = currentOrder.reduce((acc, cardText, index) => {
      if (cardText !== correctOrder[index]) {
        acc.push((index + 1) as never); // Line numbers start from 1
      }
      return acc;
    }, []);

    const isCorrect = incorrectLines.length === 0;

    if (isCorrect) {
      if (currentLevel < levels.length - 1) {
        setCurrentLevel(currentLevel + 1);
        setCards(levels[currentLevel + 1].cards);
        setIsOrderIncorrect(false);
        setHtmlPreview("");
        setHP(Math.min(hp + 10, 100));
      } else {
        setHasWon(true);
      }
      setIsModalOpen(true);
    } else {
      setIsOrderIncorrect(true);
      setHP(hp - 10);
      if (hp - 10 <= 0) {
        setIsModalOpen(true);
      }
      alert(`Incorrect lines: ${incorrectLines}`);
    }
  };

  const generateHtmlPreview = (updatedCards: any) => {
    const htmlStructure = updatedCards
      .map((card: any) => `${card.text}`)
      .join("");
    setHtmlPreview(htmlStructure);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    if (hasWon) {
      setHasWon(false);
      restartGame();
    }
  };

  const restartGame = () => {
    setCurrentLevel(0);
    setCards(levels[0].cards);
    setHP(100);
    setIsOrderIncorrect(false);
    setIsModalOpen(false);
    setHasWon(false);
    setHtmlPreview("");
  };

  const currentLevelData: Level = levels[currentLevel];
  const { level, title, instructions, correctOrder } = currentLevelData;

  return (
    <>
      <Header level={level} hp={hp} />
      <div className="mx-[280px]">
        <div className="w-full mt-6 flex justify-center">
          <span className="title_font text-[#BB62E5] text-5xl mb-5">
            {title}
          </span>
        </div>
        <div className="flex justify-between content-center gap-6">
          <div className="w-1/3 flex flex-col">
            <h2 className="text-center text-white title_font text-xl">
              OBJETIVO
            </h2>
            <div className="bg-[#D9D9D9] rounded-sm h-[250px] flex justify-center items-center">
              <HTMLPreview htmlPreview={buildHtmlString(correctOrder)} />
            </div>
          </div>
          <div className="w-2/3 flex flex-col">
            <h2 className="text-center text-white title_font text-xl">
              INSTRUÇÕES/DICAS
            </h2>
            <div className="bg-[#D9D9D9] rounded-sm h-[250px]">
              <p className=" ml-2 text-black text-lg">{instructions}</p>
            </div>
          </div>
        </div>
        <div className="display flex justify-around w-full mt-3">
          <div className="w-2/3">
            <h2 className="text-center text-white title_font text-xl">
              ARRASTE E SOLTE AS TAGS HTML
            </h2>
          </div>
          <div className="w-1/3">
            <h2 className="text-center text-white title_font text-xl">
              PREVIEW
            </h2>
          </div>
        </div>
        <div className="flex gap-5">
          <div className="bg-[#D9D9D9] w-2/3 rounded-sm relative">
            <CodePanel
              cards={cards}
              isOrderIncorrect={isOrderIncorrect}
              moveCard={moveCard}
              renderCard={renderCard}
            />
            <button className="bg-red-500" onClick={checkOrder}>
              Próximo
            </button>
          </div>
          <div className="bg-[#D9D9D9] w-1/3 rounded-sm flex justify-center items-center">
            <HTMLPreview htmlPreview={htmlPreview} />
          </div>
        </div>
        <Modal
          isModalOpen={isModalOpen}
          hp={hp}
          hasWon={hasWon}
          closeModal={closeModal}
          restartGame={restartGame}
        />
      </div>
    </>
  );
};

export default Container;