import { BsTelegram } from "react-icons/bs"
import { BsCopy } from "react-icons/bs"
import { BsCollection } from "react-icons/bs"

const GetStartedData = [
    {
       icon: <BsTelegram className="get-started-icon"/>, 
       name: "Join Telegram",
       about: "Join a telegram community of over 1000 members ready to help you out.",
       button: "JOIN TELEGRAM",
       link: "https://t.me/alphasnifferportal"
    },
    {
       icon: <BsCollection className="get-started-icon"/>,
       name: "Get AlphaSniffer",
       about: "Verify your wallet and start using Alphasniffer NOW!",
       button: "LAUNCH BOT",
       link: "https://t.me/DexSnifferBot"
    },
    {
        icon: <BsCopy id="filtersmall" className="get-started-icon"/>,
        name: "Discover AlphaSniffer",
        about: "Get Educated about everything Alphasniffer",
        button: "DOCUMENTATION",
        link: "https://docs.dexsniffer.io/"
    }

]

export default GetStartedData