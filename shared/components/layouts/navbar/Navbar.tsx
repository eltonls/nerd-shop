"use client";
import { Menubar } from "../../ui/menubar";
import { SearchInput } from "./SearchInput";

interface NavbarProps {
  dict: any;
}

const Navbar = ({ dict }: NavbarProps) => {
  return (
    <Menubar className="w-full flex justify-between h-16 px-5">
      <h1 className="font-bold">Nerd Shop</h1>
      <SearchInput placeholder={dict.app.navbar.search_placeholder} />
      <div></div>
    </Menubar>
  );
};

export default Navbar;
