import React from "react";
 import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import "./faq.css"


function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}
 
export function Faq() {
  const [open, setOpen] = React.useState(0);
 
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
 
  return (
    <div className="faq-container">
    <div>
      <h4>Frequently Asked Questions</h4>
    </div>
    <div className="faq">
      <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(1)}>WHAT IS ALPHA SNIFFER?</AccordionHeader>
        <AccordionBody>
        Alpha Sniffer is a next gen ETH new pair finder Bot with a built-in scanner and filters, which you can customize according to your own preferences, to be alerted about the tokens that you're explicitly looking for.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(2)}>
        IS  AS FREE TO USE
        </AccordionHeader>
        <AccordionBody>
        You need to hold at least 0.3% of the total $DS supply (3,000,000 $DS tokens) to be eligible for access to the bot. As the market capitalization rises, this requirement will be converted into a minimum token holdings amount valued in USD.
A trial period of 6 hours is set to provide new potential investors with the initial user experience of the bot functioning perfectly and showcasing the excellent gains it can provide!
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(3)}>
          HOW TO USE THE $AS BOT?
        </AccordionHeader>
        <AccordionBody>
        <ul>
        <li>DM the bot: <a className="underline" href="https://t.me/DexSnifferBot">@DexSnifferBot</a></li>
<li>Click on /start</li>
<li>Complete the wallet verification process</li>
<li>Customize your filter settings or</li> 
<li>Choose one of our pre-set configs.</li>
</ul>
From now on, you will automatically receive an alert in your DM from the $DS bot whenever a new token deployment aligns with your filter requirements!
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(4)}>
          $AS BOT UPDATES
        </AccordionHeader>
        <AccordionBody>
        Regular updates will take place by adding more defined and exclusive filters to the bot. This will provide our users more information about a project so they can trade more responsibly. Nevertheless we encourage you to additionally use the integrated TTF scanner to DYOR!<br/>
(Do Your Own Research!)
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(5)}>
             $AS BOT INTEGRATIONS
        </AccordionHeader>
        <AccordionBody>
        You can purchase tokens while using the UNIBOT SNIPER (our latest integrated collaboration!) or with the default MAESTRO SNIPER!
        </AccordionBody>
      </Accordion>
    </div>
    </div>
  );
}
