"use client";
import { useState } from "react";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import { phoneNumber, whatsappLink } from "@/constant";
import Image from "next/image";
import { useRouter } from "next/navigation";

import "react-phone-number-input/style.css";
import { FaWhatsapp } from "react-icons/fa";
import axios from "axios";

const UserEmailForm = () => {
    const [phone, setPhone] = useState<string>("+62");
    const [name, setName] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const [isPhoneValid, setIsPhoneValid] = useState<boolean>(true);
    const [isNameValid, setIsNameValid] = useState<boolean>(true);
    const [isMessageValid, setIsMessageValid] = useState<boolean>(true);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const whatsappText = "?text=Halo Neema, saya ingin bertanya mengenai Neema"; 

    const [error, setError] = useState<{
        isError: boolean;
        message: string;
    }>({ isError: false, message: "" });

    const router = useRouter();

    const handleSubmit = async (event: { preventDefault: () => void }) => {
        event.preventDefault();
        setIsLoading(false);
        if (!isValidPhoneNumber(phone)) {
            setIsPhoneValid(false);
            return;
        }
        if (name.length <= 1) {
            setIsNameValid(false);
            return;
        }
        if (message.split(" ").length <= 2) {
            setIsMessageValid(false);
            return;
        }
        setIsPhoneValid(true);
        setIsNameValid(true);
        setIsMessageValid(true);
        try {
            setIsLoading(true);
            setError((err) => ({ ...err, isError: false, message: "" }));
            await axios({
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                data: JSON.stringify({
                    username: "Neema - Contact Form",
                    content: `${name}|${phone}|\n${message}`,
                }),
                url: "https://discord.com/api/webhooks/1262707799301816391/DCf191NalBaltoMmXfmKuSDinVsmDRttz8OIc5IT-OspN3BYSZXtlTPp3s00zWis_1T2",
            });
            router.replace("/thankyou");
        } catch (e) {
            setIsLoading(false);

            setError((err) => ({
                ...err,
                isError: true,
                message:
                    "Sepertinya kami sedang mengalami gangguan mohon coba beberapa saat lagi, atau hubungi kami langsung melalui WA/sosial media kami ya!",
            }));
            console.error("Error adding document: ", e);
        } finally {
            setIsLoading(false);
        }
    };

    const handleOnChangeName = (name: string) => {
        setIsNameValid(name.length > 3);
        setName(name);
    };
    const handleOnChangePhone = (phoneNumber: string | undefined) => {
        if (phoneNumber === undefined) {
            setPhone("+62");
            setIsPhoneValid(false);
            return;
        } else {
            if (!phoneNumber.startsWith("+62")) {
                phoneNumber = "+62" + phoneNumber.replace(/^\+?/, "");
            }
            setPhone(phoneNumber);
            setIsPhoneValid(isValidPhoneNumber(phoneNumber));
        }
    };
    const handleOnChangeMessage = (message: string) => {
        setIsMessageValid(message.split(" ").length > 2);
        setMessage(message);
    };

    const dismissError = () => {
        setError((err) => ({ ...err, isError: false, message: "" }));
    };
    return (
        <div className="w-full flex flex-col items-center">
            <form
                onSubmit={handleSubmit}
                action="#"
                method="post"
                className="bg-blue-100 px-5 md:px-10 py-8 rounded-lg contact-form w-full"
            >
                <div className="flex">
                    <div className="hidden md:flex md:h-[500px] lg:h-[550px] md:w-fit p-5 lg:pr-10">
                        <a
                            className="pointer-events-none"
                            href="https://www.vecteezy.com/png/24785806-3d-male-character-pointing-left"
                        >
                            <Image
                                width={150}
                                height={150}
                                className="w-full h-full object-contain"
                                alt="contact-img"
                                src="./images/contact-us.png"
                            />
                        </a>
                    </div>
                    <div className="flex flex-grow flex-col">
                        <h2 className="text-3xl font-bold">
                            Mau tanya-tanya?{" "}
                        </h2>
                        <p className="text-base  text-slate-500">
                            Yuk langsung hubungi kami!
                        </p>
                        <a
                            href={whatsappLink + whatsappText}
                            rel="noopener noreferrer"
                            target="_blank"
                            className="w-full mt-3 flex flex-wrap gap-5"
                        >
                            <span className="flex flex-grow justify-center items-center text-sm bg-green-500 text-white px-2 py-2 rounded-md font-bold">
                                <FaWhatsapp className="w-7 h-7 mr-1" /> Whatsapp
                            </span>
                        </a>
                        <span className="self-center mt-5">Atau</span>
                        <div className="flex flex-col w-full">
                            <div className="w-full mt-5">
                                <label
                                    htmlFor="name"
                                    className="text-slate-500"
                                >
                                    Nama <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={name}
                                    onChange={(e) =>
                                        handleOnChangeName(e.target.value)
                                    }
                                    placeholder="Nama Anda.."
                                    className="flex flex-1 pl-2 w-full outline-none text-base leading-4 text-slate-600 bg-white border border-slate-300 appearance-none rounded-lg px-3.5 py-2.5 focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                                    required
                                    disabled={isLoading}
                                />
                                {!isNameValid && (
                                    <p className="text-red-500 text-sm mt-1">
                                        Nama terlalu pendek
                                    </p>
                                )}
                            </div>

                            <div className="w-full mt-5">
                                <label
                                    htmlFor="phone"
                                    className="text-slate-500"
                                >
                                    Nomor Whatsapp/Telepon yang dapat dihubungi{" "}
                                    <span className="text-red-500">*</span>
                                </label>
                                <PhoneInput
                                    international
                                    defaultCountry="ID"
                                    placeholder="Enter phone number"
                                    value={phone}
                                    onChange={handleOnChangePhone}
                                    numberInputProps={{
                                        class: "w-full text-slate-600 bg-white border border-slate-300 appearance-none rounded-lg px-3.5 py-2.5 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100",
                                    }}
                                    countrySelectProps={{
                                        style: {
                                            "pointer-events": "none",
                                        },
                                    }}
                                    disabled={isLoading}
                                />
                                {!isPhoneValid && (
                                    <p className="text-red-500 text-sm mt-1">
                                        Nomor yang anda masukka salah! Mohon
                                        pastikan nomor yang anda masukkan sudah
                                        benar ya!
                                    </p>
                                )}
                            </div>

                            <div className="w-full mt-5">
                                <label
                                    htmlFor="name"
                                    className="text-slate-500"
                                >
                                    Pesan{" "}
                                    <span className="text-red-500">*</span>
                                </label>
                                <div className="grid text-sm after:px-3.5 after:py-2.5 [&>textarea]:text-inherit after:text-inherit [&>textarea]:resize-none [&>textarea]:overflow-hidden [&>textarea]:[grid-area:1/1/2/2] after:[grid-area:1/1/2/2] after:whitespace-pre-wrap after:invisible after:border">
                                    <textarea
                                        className="w-full text-slate-600 bg-white border border-slate-300 appearance-none rounded-lg px-3.5 py-2.5 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                                        name="message"
                                        rows={5}
                                        value={message}
                                        onChange={(e) =>
                                            handleOnChangeMessage(
                                                e.target.value
                                            )
                                        }
                                        placeholder="Ketik pesan kamu disini..."
                                        required
                                        disabled={isLoading}
                                    ></textarea>
                                </div>
                                {!isMessageValid && (
                                    <p className="text-red-500 text-sm  mt-1">
                                        Pesan anda harus diisi, dan minimal 2
                                        kata ya, biar kita nya dapat membantu
                                        kakak lebih lanjut. Terima kasih
                                    </p>
                                )}
                            </div>

                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    className="bg-black rounded-md text-white py-2 px-3 text-base leading-4 mt-5 disabled:bg-slate-400 disabled:cursor-not-allowed"
                                    disabled={
                                        !isPhoneValid ||
                                        !isNameValid ||
                                        phoneNumber.length === 0 ||
                                        name.length === 0 ||
                                        !isMessageValid ||
                                        message.length === 0 || isLoading
                                    }
                                >
                                    {isLoading ? "Sedang mengirim..." : "Hubungi Kami"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            {error.isError && (
                <div
                    className="w-full md:max-w-5xl my-5 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                    role="alert"
                >
                    <strong className="font-bold">Oops! </strong>
                    <span className="block sm:inline">{error.message}</span>
                    <span
                        className="absolute top-0 bottom-0 right-0 px-4 py-3"
                        onClick={dismissError}
                    >
                        <svg
                            className="fill-current h-6 w-6 text-red-500"
                            role="button"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                        >
                            <title>Close</title>
                            <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                        </svg>
                    </span>
                </div>
            )}
        </div>
    );
};

export default UserEmailForm;
