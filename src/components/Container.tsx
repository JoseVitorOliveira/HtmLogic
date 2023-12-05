// Container.tsx
import React, { FC, useCallback, useState } from "react";
import update from "immutability-helper";
import { Card } from "./Card";
import { Level, levels } from "../levels";
import Modal from "./Modal";
import HTMLPreview from "./HtmlPreview";
import CodePanel from "./CodePanel";
import Header from "./Header";

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

  const checkOrder = () => {
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

  const generateHtmlPreview = (updatedCards: any) => {
    const htmlStructure = updatedCards
      .map((card: any) => `<div>${card.text}</div>`)
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
  };

  const currentLevelData: Level = levels[currentLevel];
  const { level, title, imagePath } = currentLevelData;

  return (
    <>
      <Header level={level} hp={hp} />
      <div className="mx-[280px]">
        <div className="w-full mt-6 flex justify-center">
          <h1 className="title_font text-5xl text-white">
            Construa um{" "}
            <span className="title_font text-[#BB62E5] text-5xl">{title}</span>
          </h1>
        </div>
        <div className="flex justify-between content-center gap-6">
          <div className="w-1/3 flex flex-col">
            <h2 className="text-center text-white title_font text-xl">
              OBJETIVO
            </h2>
            <div className="bg-[#D9D9D9] rounded-sm h-[250px]"></div>
          </div>
          <div className="w-2/3 flex flex-col">
            <h2 className="text-center text-white title_font text-xl">
              INSTRUÇÕES/DICAS
            </h2>
            <div className="bg-[#D9D9D9] rounded-sm h-[250px]"></div>
          </div>
        </div>
        <div className="display flex justify-around w-full">
          <div className="w-1/2">
            <h2 className="text-center text-white title_font text-xl">
              ARRASTE E SOLTE AS TAGS HTML
            </h2>
          </div>
          <div className="w-1/2">
            <h2 className="text-center text-white title_font text-xl">
              PREVIEW
            </h2>
          </div>
        </div>
        <div className="flex gap-5">
          <div className="bg-[#D9D9D9] w-1/2 rounded-sm relative">
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
          <div className="bg-[#D9D9D9] w-1/2 rounded-sm">
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
