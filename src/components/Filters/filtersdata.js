import { GiCardExchange } from "react-icons/gi"
import { FaLock } from "react-icons/fa"
import { FaRightLeft } from "react-icons/fa6"
import { FaRegCircleCheck } from "react-icons/fa6"
import { RiAlarmWarningFill } from "react-icons/ri"
import { GiDominoMask } from "react-icons/gi"
import { GiWhaleTail } from "react-icons/gi"
import { GiMove } from "react-icons/gi"
import { GiWallet } from "react-icons/gi"
import { IoColorFilter } from "react-icons/io5"
import { GiCoinflip } from "react-icons/gi"
import { IoWarningSharp } from "react-icons/io5"

export const filtersData = [
    {
        icon: <GiCardExchange className="filter-icon"/>,
        name: "ETH ONLY PAIRS",
        about: "The bot focuses on pairs of cryptocurrencies that are connected to the Ethereum network. This ensures compatibility with Ethereum-based trading and transactions."
    },
    {
        icon: <FaLock className="filter-icon"/>,
        name: "SAFE & SECURE PAIRS",
        about: "The bot prioritizes pairs that have undergone verification and are considered safe for trading. This helps reduce the risk of engaging with potentially harmful or fraudulent tokens."
    },
    {
        icon: <FaRightLeft className="filter-icon"/>,
        name: "MINIMUM LP, MC FILTERS",
        about: "The bot evaluates pairs based on minimum liquidity and market capitalization. This ensures that the selected pairs have a sufficient trading volume and overall value."
    },
    {
        icon: <FaRegCircleCheck className="filter-icon"/>,
        name: "SOCIALS ONLY FILTER",
        about: "Tokens with active and verified social media profiles, such as websites, Telegram, or Twitter, are preferred. This helps identify tokens with legitimate community engagement and development efforts."
    }, 
    {
        icon: <RiAlarmWarningFill className="filter-icon"/>,
        name: "LP LOCK, RENOUNCE ALERTS",
        about: "The bot provides alerts when liquidity pools (LP) are locked or when contract ownership is renounced. These alerts offer insights into the token's stability and the developer's commitment.",
    },
    {
        icon: <GiDominoMask className="filter-icon"/>,
        name: "CONTRACT CLOG FILTER",
        about: "Tokens associated with contracts having an excessive token supply are avoided. This filter helps prevent tokens that might face congestion or scalability issues.",
    },   {
        icon: <GiWhaleTail className="filter-icon"/>,
        name: "WHALE HOLDER DETECTOR",
        about: "The bot identifies and highlights significant token holders, known as 'whales.' This feature offers visibility into potential concentration of token ownership.",
    },   {
        icon: <GiMove className="filter-icon"/>,
        name: "FILTER PREVIOUS PROJECT MC",
        about: "Tokens are evaluated based on the market capitalization of their previous projects. This information assists in assessing the historical performance and credibility of tokens.",
    },   {
        icon: <GiWallet className="filter-icon"/>,
        name: "MAX WALLET FILTER",
        about: "Tokens are filtered based on the maximum wallet size allowed. This helps prevent an individual or entity from holding an overly large portion of the token supply.",
    },   {
        icon: <IoColorFilter className="filter-icon"/>,
        name: "DEPLOYER BALANCE FILTER",
        about: "Tokens are filtered based on the maximum wallet size allowed. This helps prevent an individual or entity from holding an overly large portion of the token supply.",
    },   {
        icon: <GiCoinflip className="filter-icon"/>,
        name: "TAXES FILTER",
        about: "The bot selects tokens with specific combined buy and sell tax values. This filter helps traders navigate tokens with transparent and manageable tax structures.",
    },   {
        icon: <IoWarningSharp className="filter-icon"/>,
        name: "INTELLIGENT ANTI RUG WARNINGS",
        about: "The bot offers intelligent alerts for potential rug pulls, which are scams where developers pull the rug. These warnings are based on patterns and scenarios commonly associated with such scams.",
    },
]