type Footer = string | { text: string, iconUrl?: string };

const footerA: Footer = { text: "abc", iconUrl: "icon.png" };
const footerB = "bcd" as Footer;
const footerC = "cde" satisfies Footer;

///

type Cooldowns = Record<string, number>;

const cooldowns = {
    mats: 20,
    itzy: 30,
    bkps: 55
} satisfies Cooldowns;

