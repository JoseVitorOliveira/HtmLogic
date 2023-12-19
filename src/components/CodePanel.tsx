// CardsContainer.tsx
import React, { FC } from "react";
import { Card } from "./Card";

interface CardsContainerProps {
  cards: { id: number; text: string }[];
  isOrderIncorrect: boolean;
  moveCard: (dragIndex: number, hoverIndex: number) => void;
  renderCard: (
    card: { id: number; text: string },
    index: number
  ) => React.ReactNode;
}

const CardsContainer: FC<CardsContainerProps> = ({
  cards,
  isOrderIncorrect,
  moveCard,
  renderCard,
}) => {
  const linesOfCode = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className="flex justify-between h-[265px] rounded-sm">
      <div className="text-center bg-[#574F4F] text-white w-[35px] rounded-sm select-none">
        {linesOfCode.map((line) => (
          <div
            className="text-[#F3F4F6]  text-opacity-40"
            key={line.toString()}
          >
            {line}
          </div>
        ))}
      </div>
      <div className="flex-1 bg-[#e0e0e0]">
        <div className="mt-[0.7px]">
          {cards.map((card, i) => renderCard(card, i))}
        </div>
        {isOrderIncorrect ? (
          <p className="text-red-500">The order is incorrect. -10hp</p>
        ) : null}
      </div>
    </div>
  );
};

export default CardsContainer;
