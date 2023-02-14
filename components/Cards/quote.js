import { RiDoubleQuotesR, RiDoubleQuotesL } from "react-icons/ri"
import { BsDice5 } from "react-icons/bs"
import { useState } from "react";
import axios from "axios";

export default function QuoteCard() {

    const [quote, setQuote] = useState()

    axios
        .get("https://quotezen.vercel.app/api/quotes/random")
        .then((response) => {
            setQuote(response.data)
            console.log(quote);
        })
        .catch(error => console.log(error))

    return (
        <div className="min-w-full sm:min bg-[#212F31] min-h-screen flex flex-row justify-center items-center">
            <div className="text-white w-11/12 sm:w-10/12 md:w-8/12 lg:w-6/12 h-min p-4 relative">
                <RiDoubleQuotesL className="text-2xl mr-auto text-green-400" />
                <div className="p-8">
                    <p className=" font-quote text-2xl lg:text-3xl font-bold"></p>
                    <snap className="block mt-6 font-author font-light text-xs uppercase"> <span className="text-green-400 text-xs">-</span>  </snap>
                </div>
                <RiDoubleQuotesR className="text-2xl ml-auto -mt-6 text-green-400" />

                <div className="p-4 mt-4 bg-gray-100/10 mx-auto max-w-min rounded-full shadow cursor-pointer hover:-rotate-6">
                    <BsDice5 className="text-xl rotate-6" />
                </div>
            </div>
        </div>
    );
}