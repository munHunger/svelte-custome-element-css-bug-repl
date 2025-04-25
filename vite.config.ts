import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import fs from "fs";

export default defineConfig({
    resolve: {
        alias: [
            {
                find: /^\/(?!@)/, //Negative lookahead for '@'. ex @vite
                replacement: __dirname + "/"
            }
        ]
    },
    // @ts-ignore
    plugins: [svelte({
        emitCss: true
    })],
    build: {
        target: "es2019",   // To be able to use ?. ?? even though they were introduced later.
        outDir: "wwwroot/dist",
        manifest: true,
        cssCodeSplit: true,
        sourcemap: true,
        rollupOptions: {
            plugins: [],
            output: {
                entryFileNames: "[name].js",
                chunkFileNames: "[name].js",
                assetFileNames: "[name].[ext]"
            }
        },
        lib: {
            entry: {
                [`Public`]: "/src/index.ts",
            },

            formats: ["es"]
        },
    },
    publicDir: "assets",
    server: {
        cors: true,
        port: 5173,
        strictPort: true,
        host: true,
    }
});
