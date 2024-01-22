// Header.tsx
import React, { useState } from "react";
import Tutorial from "./Tutorial"; // Import the Tutorial component

interface HeaderProps {
  level: string;
  hp: number;
}

const Header: React.FC<HeaderProps> = ({ level, hp }) => {
  const [isTutorialOpen, setIsTutorialOpen] = useState(false);

  const openTutorial = () => {
    setIsTutorialOpen(true);
  };

  const closeTutorial = () => {
    setIsTutorialOpen(false);
  };

  return (
    <header className="px-[200px] select-none flex justify-between items-center h-[60px] shadow-2xl bg-slate-800">
      <a href="/">
        <h1 className="grandient_logo logo_font text-3xl uppercase mt-1">
          HtmLogic
        </h1>
      </a>
      <div className="flex items-center justify-center">
        <h2 className="uppercase logo_font text-zinc-200 text-1xl p-2 rounded-md">
          Level {level}
        </h2>
      </div>
      <div className="flex">
        <h1 className="text-2xl mt-1 text-red-500 font-bold uppercase min-w-[150px] logo_font">
          {hp}hp
        </h1>
      </div>
      <div className="shadow-md shadow-gray-600 rounded-full flex justify-center items-center">
        <button
          title="Ajuda"
          className="text-3xl font-bold logo_font rounded-full mt-1 text-white uppercase w-[45px] h-[45px]"
          onClick={openTutorial}
        >
          ?
        </button>
      </div>

      {isTutorialOpen && <Tutorial onClose={closeTutorial} />}
    </header>
  );
};

export default Header;
