import { defineShikiSetup } from "@slidev/types";
import fs from "fs";
import path from "path";

// export default defineShikiSetup(() => {
//     const filePath = path.resolve(
//         __dirname,
//         `./shiki-theme.json`
//     );
//     const contents = fs.readFileSync(filePath, "utf-8");
//     const theme = JSON.parse(contents);
//     return {
//         theme,
//     };
// });

export default defineShikiSetup(() => {
    return {
      themes: {
        dark: 'min-dark',
        light: 'min-light',
      },
      transformers: [
        // ...
      ],
    }
  })