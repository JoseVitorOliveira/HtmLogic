import React, { FC, useCallback, useEffect, useState } from "react";
import update from "immutability-helper";
import { Card } from "./Card";
import { Level, levels } from "../levels";
import Modal from "./Modal";
import HTMLPreview from "./HtmlPreview";
import CodePanel from "./CodePanel";
import Header from "./Header";
import buildHtmlString from "../utils/buildHtmlString";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Code from "./SyntaxHighlighter";

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

  useEffect(() => {
    generateHtmlPreview(cards);
  }, [cards]);

  const renderCard = useCallback(
    (card: { id: number; text: string }, index: number) => {
      return (
        <Card
          key={card.id}
          index={index}
          id={card.id}
          text={card.text}
          moveCard={moveCard}
        />
      );
    },
    [moveCard]
  );

  const checkOrder = () => {
    const currentOrder = cards.map((card) => card.text);
    const correctOrder = levels[currentLevel].correctOrder;

    const incorrectLines = currentOrder.reduce((acc, cardText, index) => {
      if (cardText !== correctOrder[index]) {
        acc.push((index + 1) as never);
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
      toast.error(
        <div className="text-black text-center">
          <span className="ml-auto mt-1 text-base text-red-500 font-bold uppercase logo_font">
            -10HP
          </span>
          <br />
          <h3 className="text-sm">
            Linhas Incorretas: {incorrectLines.join(", ")}
          </h3>
        </div>
      );
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
    window.location.reload();
  };

  const currentLevelData: Level = levels[currentLevel];
  const { level, title, instructions, correctOrder } = currentLevelData;

  return (
    <>
      <Header level={level} hp={hp} />
      <div className="mx-[200px]">
        <div className="w-full mt-6 flex justify-center">
          <span className="title_font text-[#BB62E5] text-6xl mb-2">
            {title}
          </span>
        </div>
        <div className="w-[900px] h-[140px] mx-auto flex mt-5 items-center justify-center">
          <div className="w-full h-full rounded-lg p-2 text-center">
            <p className="text-white text-base text-justify">
              {Code({ code: instructions })}
            </p>
          </div>
        </div>

        <div className="flex w-full justify-around mt-2 p-6">
          {/* objetivo */}
          <div>
            <HTMLPreview
              containerTitle="Objetivo"
              htmlPreview={buildHtmlString(correctOrder)}
            />
          </div>
          {/* dnd */}
          <div className="relative">
            <CodePanel
              cards={cards}
              isOrderIncorrect={isOrderIncorrect}
              moveCard={moveCard}
              renderCard={renderCard}
            />
            <button
              className="bg-[#dc585a] rounded position_absolute p-2 title text-base text-gray-100"
              onClick={checkOrder}
            >
              Próximo
            </button>
          </div>
          <div>
            <HTMLPreview containerTitle="Preview" htmlPreview={htmlPreview} />
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
