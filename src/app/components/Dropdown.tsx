"use client";
import { useState } from "react";

export interface DropdownPropsI {
  name?: string;
  href?: string;
  contents?: Array<{
    name: string;
    href: string;
  }>;
}
export default function Dropdown(props: DropdownPropsI) {
  const { contents = [] } = props;
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  if (!props.name || !props.href) return null;
  return (
    <li className="flex relative group">
      <a href={props.href} onClick={toggleDropdown} className="mr-1">{props.name}</a>
      <i className="">v</i>
      {contents.length > 0 && (
        <ul className={`absolute bg-white w-full top-6 transform ${isOpen ? 'scale-100' : 'scale-0'} transition duration-150 ease-in-out origin-top shadow-lg`}>
          {contents.map(({ name, href }) => {
            return <li key={name} className="text-sm hover:bg-slate-100 leading-8 py-2 px-3 w-full"><a className="block w-full" href={href}>{name}</a></li>
          })}
        </ul>
      )}
    </li>
  );
}