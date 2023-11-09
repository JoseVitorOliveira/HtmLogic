import React, { FC, useCallback, useState } from "react";
import update from "immutability-helper";
import { Card } from "./Card";
import { Level, levels } from "./levels";
import Modal from "./components/Modal";
import { Button } from "@radix-ui/themes";

const style: React.CSSProperties = {
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexDirection: "row",
};

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
    <>
      <div style={style}>
        <div>
          <h1>HP</h1>
          <h2>{hp}</h2>
        </div>
        <div>
          <h1>{title}</h1>
          <h2>{level}</h2>
          <div>{cards.map((card, i) => renderCard(card, i))}</div>
          <Button size="4" variant="surface" onClick={checkOrder}>
            Check Order
          </Button>
          {isOrderIncorrect ? <p>The order is incorrect.</p> : null}
        </div>
        <div>
          <img
            src={process.env.PUBLIC_URL + imagePath}
            alt={`Level ${level}`}
          />
        </div>
      </div>

      <div>
        <h1>HTML Preview</h1>
        <div
          className="html-preview"
          dangerouslySetInnerHTML={{ __html: htmlPreview }}
        ></div>
      </div>

      <Modal
        isModalOpen={isModalOpen}
        hp={hp}
        hasWon={hasWon}
        closeModal={closeModal}
        restartGame={restartGame}
      />
    </>
  );
};

export default Container;
