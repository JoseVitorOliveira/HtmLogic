import React, { FC, useCallback, useState } from "react";
import update from "immutability-helper";
import Card from "./Card";
import { levels } from "./levels"; // Import the levels data

const style = {
  width: 400,
};

export interface Item {
  id: number;
  text: string;
}

export interface Level {
  cards: Item[];
  correctOrder: string[];
}

export const Container: FC = () => {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [cards, setCards] = useState(levels[currentLevel].cards); // Use the imported levels

  const [isOrderCorrect, setIsOrderCorrect] = useState(false);

  const moveCard = useCallback(
    (dragIndex: number, hoverIndex: number) => {
      const dragCard = cards[dragIndex];
      setCards(
        update(cards, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, dragCard],
          ],
        })
      );
    },
    [cards]
  );

  const renderCard = useCallback(
    (card: { id: number; text: string }, index: number) => {
      return (
        <Card
          key={card.id.toString()} // Convert the ID to a string
          index={index}
          id={card.id.toString()} // Convert the ID to a string
          text={card.text}
          moveCard={moveCard}
        />
      );
    },
    [moveCard]
  );

  const checkOrder = () => {
    const currentOrder = cards.map((card) => card.text);
    setIsOrderCorrect(
      JSON.stringify(currentOrder) ===
        JSON.stringify(levels[currentLevel].correctOrder)
    );
  };

  const goToNextLevel = () => {
    if (currentLevel < levels.length - 1) {
      setCurrentLevel(currentLevel + 1);
      setCards(levels[currentLevel + 1].cards);
    }
  };

  return (
    <>
      <div style={style}>{cards.map((card, i) => renderCard(card, i))}</div>
      <button onClick={checkOrder}>Check Order</button>
      <button onClick={goToNextLevel}>Next Level</button>
      {isOrderCorrect ? (
        <p>The order is correct!</p>
      ) : (
        <p>The order is incorrect.</p>
      )}
    </>
  );
};
