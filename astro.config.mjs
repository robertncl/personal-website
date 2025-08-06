import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import markdown from "@astrojs/markdown";

export default {
  integrations: [tailwind(), image(), markdown()],
  site: "https://robertngo.dev",
  base: "/",
};
