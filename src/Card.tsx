import React from "react";
import { useDrag, useDrop, DropTargetMonitor } from "react-dnd";

interface CardProps {
  id: string;
  text: string;
  index: number;
  moveCard: (from: number, to: number) => void;
}

const style: React.CSSProperties = {
  border: "1px dashed gray",
  padding: "0.5rem 1rem",
  marginBottom: "0.5rem",
  backgroundColor: "white",
  cursor: "move",
};

const Card: React.FC<CardProps> = ({ id, text, index, moveCard }) => {
  const [, ref] = useDrag({
    type: "CARD",
    item: { id, index },
  });

  const [, drop] = useDrop({
    accept: "CARD",
    hover: (
      draggedItem: { id: string; index: number },
      monitor: DropTargetMonitor
    ) => {
      if (draggedItem.index !== index) {
        moveCard(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  return (
    <div ref={(node) => ref(drop(node))} style={style}>
      {text}
    </div>
  );
};

export default Card;
