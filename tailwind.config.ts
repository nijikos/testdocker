const { fontFamily } = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");
import colors from "./src/theme/colors";

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class", '[data-theme="dasssrk"]'], // kalau mau darkmode lagi dibalikin jadi "dark" lagi
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  corePlugins: {
    preflight: true,
  },
  theme: {
    screens: {
      "3xl": { max: "1600px" },
      "2xl": { max: "1400px" },
      xl: { max: "1280px" },
      lg: { max: "1000px" },
      md: { max: "700px" },
      sm: { max: "480px" },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "sandbox-external-landing": "url('/images/sandbox/landing-page.png')",
        "sandbox-ext-landing-lg": "url('/images/sandbox/landing-lg2.jpg')",
        "sandbox-ext-landing-md": "url('/images/sandbox/landing-md2.jpg')",
        "sandbox-ext-landing-sm": "url('/images/sandbox/landing-sm2.jpg')",
        "sandbox-select-gradient-background":
          "url('/images/sandbox/select-gradient-background.svg')",
        "sandbox-select-button": "url('/images/sandbox/select-button-bg.svg')",
      },
      backgroundSize: {
        "full-auto": "100% auto",
      },
      gridTemplateRows: {
        7: "repeat(7, minmax(0, 1fr))",
        8: "repeat(8, minmax(0, 1fr))",
        9: "repeat(9, minmax(0, 1fr))",
        10: "repeat(10, minmax(0, 1fr))",
        11: "repeat(11, minmax(0, 1fr))",
        12: "repeat(12, minmax(0, 1fr))",
        16: "repeat(16, minmax(0, 1fr))",
      },
      gridRow: {
        "span-7": "span 7 / span 7",
        "span-8": "span 8 / span 8",
        "span-9": "span 9 / span 9",
        "span-10": "span 10 / span 10",
        "span-11": "span 11 / span 11",
        "span-12": "span 12 / span 12",
        "span-16": "span 16 / span 16",
      },
      width: {
        104: "26rem", // 416px
        112: "28rem", // 448px
        120: "30rem", // 480px
        128: "32rem", // 512px
        136: "34rem", // 544px
        144: "36rem", // 576px
        152: "38rem", // 608px
        160: "40rem", // 640px
      },
      colors: colors,
      spacing: {
        0.25: "0.0625rem",
        0.75: "0.1875rem",
        4.5: "1.125rem",
        5.5: "1.375rem",
        6.5: "1.75rem",
        13: "3.25rem",
        15: "3.75rem",
        18: "4.5rem",
        22: "5.5rem",
        30: "7.5rem",
        34: "8.5rem",
        38: "9.5rem",
        58: "14.5rem",
        84: "21rem",
        96: "24rem", // 384px
        100: "25rem", // 400px
        104: "26rem", // 416px
        108: "27rem", // 432px
        112: "28rem", // 448px
        116: "29rem", // 464px
        120: "30rem", // 480px
        124: "31rem", // 496px
        128: "32rem", // 512px
        132: "33rem", // 528px
        136: "34rem", // 544px
        140: "35rem", // 560px
        144: "36rem", // 576px
        148: "37rem", // 592px
        152: "38rem", // 608px
        156: "39rem", // 624px
        160: "40rem", // 640px
        164: "41rem", // 656px
        168: "42rem", // 672px
        172: "43rem", // 688px
        176: "44rem", // 704px
        180: "45rem", // 720px
        184: "46rem", // 736px
        188: "47rem", // 752px
        192: "48rem", // 768px
        196: "49rem", // 784px
        200: "50rem", // 800px
      },
      transitionDuration: {
        DEFAULT: "200ms",
      },
      transitionTimingFunction: {
        DEFAULT: "linear",
      },
      transitionProperty: {
        height: "height",
        maxHeight: "max-height",
      },
      fontFamily: {
        sans: ["var(--font-karla)", ...fontFamily.sans],
        inter: "var(--font-inter)",
        karla: "var(--font-karla)",
        roboto: "var(--font-roboto)",
        rubik: "var(--font-rubik)",
        wixtext: "var(--font-wixtext)",
      },
      fontSize: {
        "2xs": ["0.6rem", "1rem"],
        "3xs": ["0.5rem", "0.75rem"],
        "4xs": ["0.4rem", "0.625rem"],
        0: ["0px", "0px"],
        md: ["1rem", "1.5rem"],
        xl: ["1.25rem", "1.5rem"],
        "2xl": ["1.5rem", "1.75rem"],
        "3xl": ["2rem", "2.1rem"],
        "4xl": ["2.5rem", "3rem"],
        "5xl": ["3rem", "3.5rem"],
        "6xl": ["4rem", "4.5rem"],
      },
      zIndex: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        100: "100",
        150: "150",
        200: "200",
        250: "250",
        300: "300",
        350: "350",
        400: "400",
        450: "450",
        500: "500",
        550: "550",
        600: "600",
        650: "650",
        700: "700",
        750: "750",
        800: "800",
        850: "850",
        900: "900",
        950: "950",
        1000: "1000",
        1001: "1001",
      },
      borderWidth: {
        3: "0.1875rem",
        6: "0.375rem",
        9: "9px",
        10: "10px",
        11: "11px",
        12: "12px",
        16: "16px",
        18: "18px",
        20: "20px",
        22: "22px",
        24: "24px",
        28: "28px",
        32: "32px",
        34: "34px",
        36: "36px",
        40: "40px",
        50: "50px",
        60: "60px",
      },
      opacity: {
        15: ".15",
      },
      keyframes: {
        loaderDots: {
          "0%": { opacity: 1 },
          "50%,100%": { opacity: 0.15 },
        },
        slideDownAndFade: {
          from: { opacity: 0, transform: "translateY(-2px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        slideLeftAndFade: {
          from: { opacity: 0, transform: "translateX(2px)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
        slideUpAndFade: {
          from: { opacity: 0, transform: "translateY(2px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        slideRightAndFade: {
          from: { opacity: 0, transform: "translateX(-2px)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        "custom-ping": {
          "0%": { transform: "scale(1)", opacity: 0 },
          "50%": { transform: "scale(1.15, 1.22)", opacity: 0.2 },
          "90%": { transform: "scale(1.15, 1.22)", opacity: 0.5 },
          "100%": { transform: "scale(1.3, 1.36)", opacity: 0 },
        },
        "custom-ping-2": {
          "0%": { transform: "scale(1)", opacity: 0 },
          "50%": { transform: "scale(1.02, 1.04)", opacity: 1 },
          "100%": { transform: "scale(1.04, 1.07)", opacity: 0 },
        },
      },
      animation: {
        slideDownAndFade:
          "slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideLeftAndFade:
          "slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideUpAndFade: "slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideRightAndFade:
          "slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        wiggle: "wiggle 1s ease-in-out infinite",
        "ping-custom":
          "custom-ping 0.8s cubic-bezier(0.25, 0.5, 0.75, 1) infinite",
        "ping-custom-2": "custom-ping-2 1s linear infinite",
      },
      scale: {
        98: "98%",
        99: "99%",
        102: "102%",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities }: any) {
      addBase({
        html: {
          "@apply font-wixtext text-[1rem]": {},
        },
        body: {
          "@apply font-wixtext bg-n-9 text-[1rem] tracking-normal leading-normal text-n-9 antialiased md:bg-n-0 dark:text-n-0 dark:md:bg-n-7":
            {},
        },
        input: {
          "@apply focus:outline-none": {},
        },
        p: {
          "@apply tracking-normal leading-8": {},
        },
        h1: {
          "@apply tracking-normal": {},
        },
        h2: {
          "@apply tracking-normal": {},
        },
        h3: {
          "@apply font-wixtext tracking-normal": {},
        },
        h4: {
          "@apply tracking-normal": {},
        },
        h5: {
          "@apply tracking-normal": {},
        },
        span: {
          "@apply tracking-normal": {},
        },
      });
      addComponents({
        // ------- BOUNDING BOX
        ".bound": {
          "@apply border border-dashed border-red-500": {},
        },
        ".bound-blue": {
          "@apply border border-dashed border-sky-500": {},
        },
        ".bound-green": {
          "@apply border border-dashed border-emerald-500": {},
        },
        ".bound-pink": {
          "@apply border border-dashed border-pink-400": {},
        },
        ".bound-orange": {
          "@apply border border-dashed border-orange-400": {},
        },
        ".bound-purple": {
          "@apply border border-dashed border-violet-400": {},
        },
        ".bound-yellow": {
          "@apply border-3 border-dashed border-yellow-200": {},
        },
        // ------- TYPOGRAPHY
        ".h1": {
          "@apply font-wixtext text-6xl font-bold": {},
        },
        ".h2": {
          "@apply font-wixtext text-5xl font-bold": {},
        },
        ".h3": {
          "@apply font-wixtext text-4xl font-bold": {},
        },
        ".h4": {
          "@apply font-wixtext text-3xl font-bold": {},
        },
        ".h5": {
          "@apply font-wixtext text-2xl font-semibold": {},
        },
        ".h6": {
          "@apply font-wixtext text-xl font-semibold": {},
        },
        ".body1": {
          "@apply text-2xl leading-normal": {},
        },
        ".body1S": {
          "@apply text-xl leading-normal": {},
        },
        ".body2": {
          "@apply text-lg leading-normal": {},
        },
        ".base1": {
          "@apply font-wixtext text-base leading-normal font-medium": {},
        },
        ".base2": {
          "@apply font-wixtext text-sm leading-normal font-medium": {},
        },
        ".caption1": {
          "@apply font-wixtext text-xs leading-normal font-medium": {},
        },
        ".caption2": {
          "@apply font-wixtext text-2xs leading-normal font-medium": {},
        },
        ".caption3": {
          "@apply font-wixtext text-3xs leading-normal font-normal": {},
        },
        ".expired-input": {
          "@apply border border-solid border-n-3 px-4 py-4 rounded-lg flex flex-row justify-center gap-4 items-center transition bg-n-1 text-n-4 cursor-not-allowed w-full":
            {},
        },
        // ------- TRUNCATE TEXT OVERLAY
        ".truncate-overlay-n-1": {
          "@apply before:content-[''] before:absolute before:top-0 before:right-0 before:bottom-0 before:w-24 before:h-full before:bg-gradient-to-r before:from-n-1/0 before:to-n-1 before:z-1 before:pointer-events-none before:from-0% before:to-90%":
            {},
        },
        // ------- CARDS/PAPERS
        ".card": {
          "@apply bg-n-0 px-6 py-4 rounded-lg": {},
        },
        ".card-xl": {
          "@apply bg-n-0 px-6 py-6 rounded-xl": {},
        },
        ".card-p-0": {
          "@apply bg-n-0 rounded-lg": {},
        },
        // ------- BUTTONS
        ".button-base": {
          "@apply flex flex-row items-center justify-center transition-all active:scale-98 disabled:bg-n-2 disabled:text-n-4 disabled:hover:text-n-4 disabled:border-n-2 disabled:hover:bg-n-2 disabled:hover:border-n-2 disabled:cursor-not-allowed disabled:active:scale-100":
            {},
        },
        // #### BUTTON SIZES (AUTO)
        ".button-2xl": {
          "@apply gap-4 rounded-lg px-16 py-4 text-lg": {},
        },
        ".button-xl": {
          "@apply gap-3 rounded-lg px-12 py-3.5": {},
        },
        ".button-lg": {
          "@apply gap-2 rounded-lg px-10 py-2": {},
        },
        ".button-md": {
          "@apply gap-2 rounded-lg px-6 py-2": {},
        },
        ".button-sm": {
          "@apply gap-2 rounded-lg px-4 py-2 text-sm": {},
        },
        ".button-xs": {
          "@apply gap-2 rounded px-2 py-1 text-xs": {},
        },
        ".button-2xs": {
          "@apply gap-1 rounded px-1.5 pt-[3px] pb-[5px] text-2xs": {},
        },
        ".button-3xs": {
          "@apply gap-1 rounded px-1.5 pt-0.5 pb-1 text-2xs": {},
        },
        // #### BUTTON SIZES (FIXED)
        ".button-fixed-2xl": {
          "@apply button-base gap-4 justify-center rounded-lg px-12 py-3 w-104":
            {},
        },
        ".button-fixed-xl": {
          "@apply button-base gap-4 justify-center rounded-lg px-12 py-3 w-96":
            {},
        },
        ".button-fixed-lg": {
          "@apply button-base gap-4 justify-center rounded-lg px-8 py-3 w-60":
            {},
        },
        ".button-fixed-md": {
          "@apply button-base gap-2 justify-center rounded-lg px-6 py-3 w-44":
            {},
        },
        ".button-fixed-sm": {
          "@apply button-base gap-2 justify-center rounded-lg px-5 py-3 w-40":
            {},
        },
        ".button-fixed-xs": {
          "@apply button-base gap-1 justify-center rounded-lg px-4 py-3 w-28":
            {},
        },
        ".button-fixed-2xs": {
          "@apply button-base gap-1 justify-center rounded-lg px-2 py-3 w-24":
            {},
        },
        // #### BUTTON STYLES
        ".button-disabled": {
          "@apply button-base border border-solid border-n-2 bg-n-2 text-n-4 fill-n-4 cursor-not-allowed":
            {},
        },
        ".button-contain-primary": {
          "@apply button-base border border-solid border-primary hover:border-primary-dark bg-primary hover:bg-primary-dark text-n-0":
            {},
        },
        ".button-contain-secondary": {
          "@apply button-base border border-solid border-secondary hover:border-secondary-dark bg-secondary hover:bg-secondary-dark text-n-0":
            {},
        },
        ".button-contain-gray": {
          "@apply button-base border border-solid border-n-2 hover:border-n-3 bg-n-2 hover:bg-n-3 text-n-9":
            {},
        },
        ".button-contain-black": {
          "@apply button-base border border-solid border-n-9 hover:border-n-7 bg-n-9 hover:bg-n-7 text-n-0 fill-n-0":
            {},
        },
        ".button-contain-error": {
          "@apply button-base border border-solid border-error hover:border-error-dark bg-error hover:bg-error-dark text-n-0":
            {},
        },
        ".button-contain-warning": {
          "@apply button-base border border-solid border-warning hover:border-warning-dark bg-warning hover:bg-warning-dark text-n-0":
            {},
        },
        ".button-outline-primary": {
          "@apply button-base border border-solid border-primary text-primary hover:bg-primary-lightest hover:text-primary-dark":
            {},
        },
        ".button-outline-secondary": {
          "@apply button-base border border-solid border-secondary text-secondary hover:bg-secondary-lightest hover:text-secondary-dark":
            {},
        },
        ".button-outline-black": {
          "@apply button-base border border-solid border-n-9 text-n-9 hover:bg-n-9 hover:text-n-0 hover:fill-n-0":
            {},
        },
        ".button-outline-gray": {
          "@apply button-base border border-solid border-n-2 text-n-9 hover:bg-n-1":
            {},
        },
        ".button-outline-error": {
          "@apply button-base border border-solid border-error text-error hover:bg-error-lightest hover:text-error-dark":
            {},
        },
        ".button-outline-warning": {
          "@apply button-base border border-solid border-warning text-warning-dark hover:bg-warning-lightest hover:text-warning-darker":
            {},
        },
        ".button-text-primary": {
          "@apply button-base text-primary hover:bg-primary-lightest hover:text-primary-dark":
            {},
        },
        ".button-text-secondary": {
          "@apply button-base text-secondary hover:bg-secondary-lightest hover:text-secondary-dark":
            {},
        },
        ".button-text-gray": {
          "@apply button-base text-n-9 hover:bg-n-9 hover:text-n-0": {},
        },
        ".button-text-black": {
          "@apply button-base text-n-9 hover:bg-n-1": {},
        },
        ".button-text-error": {
          "@apply button-base text-error hover:bg-error-lightest hover:text-error-dark":
            {},
        },
        ".button-text-warning": {
          "@apply button-base text-warning hover:bg-warning-lightest hover:text-warning-dark":
            {},
        },
        ".button-link-primary": {
          "@apply !p-0 text-primary hover:underline disabled:text-n-4 disabled:hover:no-underline disabled:cursor-not-allowed":
            {},
        },
        ".button-link-secondary": {
          "@apply !p-0 text-secondary hover:underline disabled:text-n-4 disabled:hover:no-underline disabled:cursor-not-allowed":
            {},
        },
        ".button-link-gray": {
          "@apply !p-0 text-n-9 hover:text-n-4 hover:underline disabled:text-n-4 disabled:hover:no-underline disabled:cursor-not-allowed":
            {},
        },
        ".button-link-black": {
          "@apply !p-0 text-n-9 hover:underline disabled:text-n-4 disabled:hover:no-underline disabled:cursor-not-allowed":
            {},
        },
        ".button-link-error": {
          "@apply !p-0 text-error hover:underline disabled:text-n-4 disabled:hover:no-underline disabled:cursor-not-allowed":
            {},
        },
        // ------- PAGE SPECIFICS
        // ## CHAT PAGE
        ".chatitem-action-btn": {
          "@apply h-6 px-2 bg-n-2 rounded-md caption1 text-n-7 transition-colors hover:text-secondary dark:bg-n-9":
            {},
        },
        // ## AUTOMATION FLOW PAGE
        ".template-item-selected": {
          "@apply border-2 bg-primary-white shadow-md border-primary hover:bg-primary-white px-4 h-16 rounded-xl cursor-pointer flex flex-row gap-4 items-center":
            {},
        },
        ".template-item": {
          "@apply border border-n-2 hover:bg-primary-white px-4 h-16 rounded-xl cursor-pointer flex flex-row gap-4 items-center":
            {},
        },
        ".template-item-icon-selected": {
          "@apply bg-primary shadow-md border border-primary rounded-lg p-1 grid place-items-center":
            {},
        },
        ".template-item-icon": {
          "@apply bg-none border border-primary rounded-lg p-1 grid place-items-center":
            {},
        },
        ".link-primary": {
          "@apply text-primary hover:text-primary-darker cursor-pointer visited:text-primary":
            {},
        },
      });
      addUtilities({
        ".tap-highlight-color": {
          "-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)",
        },
      });
    }),
  ],
};
