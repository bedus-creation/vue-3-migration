import vue2 from "@vitejs/plugin-vue2"
import { fileURLToPath, URL } from "node:url"

import { defineConfig } from "vite"

export default defineConfig({
    root: 'src',
    plugins: [
        vue2(),
    ],
    build: {
        outDir: '../public/',
        emptyOutDir: false,
    }
})