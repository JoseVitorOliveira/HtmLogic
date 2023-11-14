import React, { FC, useCallback, useState } from "react";
import update from "immutability-helper";
import { Card } from "./Card";
import { Level, levels } from "../levels";
import Modal from "./Modal";
import HTMLPreview from "./HtmlPreview";

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
  const [htmlPreview, setHtmlPreview] = useState(""); // New state for HTML preview

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

      // Use setTimeout to ensure that the state has updated before generating the HTML preview
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
        // Increase HP by 10, max of 100
        setHP(Math.min(hp + 10, 100));
      } else {
        setHasWon(true);
      }
      setIsModalOpen(true);
    } else {
      setIsOrderIncorrect(true);
      // Decrease HP by 10
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
    <div className="mx-[280px] text-gray-50">
      {/* header */}
      <header className="p-1 uppercase border flex justify-between items-center h-[60px] font-bold">
        <h1 className="grandient_logo text-5xl">HtmLogic</h1>
        <div className="flex items-center justify-center border">
          <h2>Level {level}</h2>
        </div>
        <h2>{hp}hp</h2>
      </header>
      {/* title + description */}
      <div className="border w-1/2 mt-2">
        <h1>{title}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
          possimus quis quod animi labore aperiam ullam repellat error
          praesentium nihil amet, ea ratione veniam nemo corporis cumque
          incidunt rem quia aliquam similique aspernatur enim voluptate. Fuga
          voluptate iste, sed velit quod odit mollitia et ut! Eveniet molestiae
          quasi harum illum!
          {/* {description} */}
        </p>
      </div>
      {/* objective + preview */}
      <div className="flex justify-between content-center mt-2">
        <div className="border h-[200px] w-1/3">
          <h1>Objetivo</h1>
          <img
            className="w-1/3"
            src={process.env.PUBLIC_URL + imagePath}
            alt={`Level ${level}`}
          />
        </div>
        <div className="border h-[200px] w-1/3 bg-[#e0e0e0]">
          <h1>Preview</h1>
          <HTMLPreview htmlPreview={htmlPreview} />
        </div>
      </div>
      {/* cards container */}
      <div className="border mt-2 flex">
        <div className="text-center bg-[#999999] px-2">
          1
          <br />
          2
          <br />
          3
          <br />
          4
          <br />
          5
          <br />
          6
          <br />
          7
          <br />
          8
          <br />
          9
          <br />
          10
          <br />
        </div>
        <div className="flex-1 bg-[#e0e0e0]">
          <div className="bg-[#e0e0e0]">
            {cards.map((card, i) => renderCard(card, i))}
          </div>
          <button onClick={checkOrder}>Check Order</button>
          {isOrderIncorrect ? <p>The order is incorrect.</p> : null}
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
  );
};

export default Container;
