"use client";
import { useState } from "react";

export interface DropdownSelectPropsI {
  name?: string;
  contents?: Array<{
    name: string;
    href: string;
  }>;
}

export default function DropdownSelect(props: DropdownSelectPropsI) {
  const { contents = [] } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="dropdown inline-block relative">
      <button className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center" onClick={() => setIsOpen(open => !open)}>
        <span className="mr-1">{props.name}</span>
        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
      </button>
      <ul className={`dropdown-menu absolute ${isOpen ? 'block' : 'hidden'} text-gray-700 pt-1`}>
        {contents.map(({ name }) => {
          return <li key={name} className=""><button className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">{name}</button></li>
        })}
      </ul>
    </div>
  )
}