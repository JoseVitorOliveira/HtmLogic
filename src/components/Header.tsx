import React, { useState } from "react";
import Tutorial from "./Tutorial";

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
    <header className="md:px-[200px] px-[100px] select-none flex justify-between items-center h-[60px] shadow-2xl bg-slate-800">
      <a href="/">
        <h1 className="grandient_logo logo_font text-3xl uppercase mt-1">
          HtmLogic
        </h1>
      </a>
      <div className="flex items-center justify-center">
        <h2 className="uppercase logo_font text-zinc-200 text-1xl ml-10 p-2 rounded-md">
          Level {level}
        </h2>
      </div>
      <div className="flex">
        <h1 className="text-2xl mt-1 text-red-500 font-bold uppercase min-w-[150px] logo_font">
          {hp}hp
        </h1>
      </div>
      <div className="bg-blue-950 border shadow-sm shadow-white border-gray-500 rounded-full flex justify-center items-center">
        <button
          title="Ajuda"
          className="text-xl hover:text-blue-900 hover:bg-gray-200 font-bold logo_font rounded-full text-white uppercase w-[130px] h-[45px]"
          onClick={openTutorial}
        >
          Ajuda
        </button>
      </div>

      {isTutorialOpen && <Tutorial onClose={closeTutorial} />}
    </header>
  );
};

export default Header;
