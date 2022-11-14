import Head from "next/head";
import { useTheme } from "react-daisyui";
import { writeStorage } from "@rehooks/local-storage";

export default function Settings({ h }) {
  const DEFAULT_THEMES = [
    "light",
    "dark",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "halloween",
    "garden",
    "forest",
    "aqua",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "black",
    "luxury",
    "dracula",
    "cmyk",
    "autumn",
    "business",
    "acid",
    "lemonade",
    "night",
    "coffee",
    "winter",
  ];
  const { theme } = useTheme();
  return (
    <div>
      <Head>
        <title>Settings</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <meta
          property="og:image"
          content="https://fake-ecommerce-app.vercel.app/api/og-image?name=Fake-Ecommerce-App&stage=Settings"
        />
      </Head>
      <main className="flex flex-col  w-1/2 mx-auto">
        <h4 className=" text-2xl my-10">Current Theme: {theme}</h4>
        <div className="flex flex-wrap gap-4 mx-auto pb-8">
          {DEFAULT_THEMES.map((t, i) => (
            <ThemeItem
              key={`theme_${t}_#${i}`}
              dataTheme={t}
              role="button"
              aria-label="Theme select"
              aria-pressed={t === theme}
              selected={t === theme}
              tabIndex={0}
              onClick={() => {
                writeStorage("theme", t);
              }}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
function ThemeItem({ dataTheme, selected, ...props }) {
  return (
    <div
      {...props}
      role="button"
      aria-label="Theme select"
      aria-pressed="false"
      tabindex="0"
      data-theme={dataTheme}
      class="border-base-content/20 hover:border-base-content/40 outline-base-content overflow-hidden rounded-lg border outline-2 outline-offset-2 p-5 m-2"
    >
      <div class="bg-base-100 text-base-content w-full cursor-pointer font-sans">
        <div class="grid grid-cols-5 grid-rows-3">
          <div class="bg-base-200 col-start-1 row-span-2 row-start-1"></div>
          <div class="bg-base-300 col-start-1 row-start-3"></div>
          <div class="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2">
            <div class="font-bold">{dataTheme}</div>
            <div class="flex flex-wrap gap-1">
              <div class="bg-primary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                <div class="text-primary-content text-sm font-bold">A</div>
              </div>
              <div class="bg-secondary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                <div class="text-primary-content text-sm font-bold">A</div>
              </div>
              <div class="bg-accent flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                <div class="text-primary-content text-sm font-bold">A</div>
              </div>
              <div class="bg-neutral flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                <div class="text-primary-content text-sm font-bold">A</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
