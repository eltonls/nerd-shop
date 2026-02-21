"use client";
import { Menubar } from "../../ui/menubar";
import { SearchInput } from "./SearchInput";

const Navbar = () => {
  return (
    <Menubar className="w-full flex justify-between h-16 px-5">
      <h1 className="font-bold">Nerd Shop</h1>
      <SearchInput />
      <div></div>
    </Menubar>
  );
};

export default Navbar;
