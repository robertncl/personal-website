import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";

export default {
  integrations: [tailwind(), image()],
  site: "https://robertngo.dev",
  base: "/",
};
