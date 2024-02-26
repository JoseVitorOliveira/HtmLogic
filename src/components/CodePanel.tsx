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
  const linesOfCode = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <div>
      <div className="bg-gray-700 rounded">
        <h1 className="text-center title_font text-2xl mb-4 text-gray-200 shadow-sm shadow-white">
          Reorganize as linhas de código HTML
        </h1>
      </div>
      <div className="flex justify-between h-[360px] w-[500px] bg-[#403b3b] rounded-sm shadow-sm">
        <div className="bg-[#2D2D2D] text-white w-[35px] rounded-sm select-none">
          {linesOfCode.map((line) => (
            <div
              className="flex justify-center w-full lines_font py-[0.2rem] text-[#cecece] h-[30px]"
              key={line.toString()}
            >
              {line}
            </div>
          ))}
        </div>
        <div
          className="flex-1 bg-[#403b3b] border border-gray-700"
          style={{ height: `${30 * cards.length}px` }}
        >
          <div>{cards.map((card, i) => renderCard(card, i))}</div>
        </div>
      </div>
    </div>
  );
};

export default CardsContainer;
