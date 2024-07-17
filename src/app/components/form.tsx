"use client";
import { useState } from "react";
import { addUserEmail } from "@/service/firebase.service";

const UserEmailForm = () => {
  const [value, setValue] = useState("");

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    try {
      await addUserEmail(value);
      setValue(""); // Clear the form
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      action="#"
      method="post"
      className="flex justify-between w-full bg-white pl-3 py-2 pr-2 rounded-full overflow-hidden"
    >
      <input
        type="email"
        name="email"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Ketik email anda..."
        className="flex flex-1 mr-2 pl-2 outline-none text-base leading-4"
      />
      <button
        type="submit"
        className="bg-black rounded-full text-white py-2 px-3 text-base leading-4"
      >
        Daftar Beta
      </button>
    </form>
  );
};

export default UserEmailForm;
