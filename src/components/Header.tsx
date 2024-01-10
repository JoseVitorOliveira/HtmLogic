import React from "react";

interface HeaderProps {
  level: string;
  hp: number;
}

const Header = ({ level, hp }: HeaderProps) => {
  return (
    <header className="px-[200px] select-none flex justify-between items-center h-[60px] shadow-2xl bg-slate-800">
      <h1 className="grandient_logo logo_font text-3xl uppercase mt-1">
        HtmLogic
      </h1>
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
    </header>
  );
};

export default Header;
