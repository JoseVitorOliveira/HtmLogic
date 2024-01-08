import React, { FC } from "react";

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
  const linesOfCode = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="flex justify-between h-[300px] rounded-sm border">
      <div className="bg-[#403b3b] text-white w-[35px] rounded-sm select-none">
        {linesOfCode.map((line) => (
          <div
            className="flex justify-center lines_font py-[0.2rem] text-[#cecece] h-[30px]"
            key={line.toString()}
          >
            {line}
          </div>
        ))}
      </div>
      <div className="flex-1 bg-[#403b3b]">
        <div>{cards.map((card, i) => renderCard(card, i))}</div>
        {isOrderIncorrect ? (
          <p className="text-red-500">The order is incorrect. -10hp</p>
        ) : null}
      </div>
    </div>
  );
};

export default CardsContainer;
