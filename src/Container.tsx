import React, { FC, useCallback, useState } from "react";
import update from "immutability-helper";
import Card from "./Card";
import { levels } from "./levels";
import Modal from "react-modal"; // Import the Modal component

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
  const [cards, setCards] = useState(levels[currentLevel].cards);
  const [isOrderCorrect, setIsOrderCorrect] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      setIsModalOpen(true);

      if (currentLevel < levels.length - 1) {
        setCurrentLevel(currentLevel + 1);
        setCards(levels[currentLevel + 1].cards);
        setIsOrderCorrect(false); // Reset the order correctness for the new level
      }
    } else {
      setIsOrderCorrect(true); // Set to true only when the order is incorrect
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div style={style}>{cards.map((card, i) => renderCard(card, i))}</div>
      <button onClick={checkOrder}>Check Order</button>
      {isOrderCorrect ? <p>The order is incorrect.</p> : null}

      {/* Modal for advancing to the next level */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Advance to Next Level"
        style={{
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
          },
        }}
      >
        <h2>Success!</h2>
        <p>The order is correct! Click below to advance to the next level.</p>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </>
  );
};
