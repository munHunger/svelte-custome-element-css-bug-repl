import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

export default {
    // Disable accessibility warnings
    onwarn: (warning, handler) => {
        if (warning.code.includes("a11y")) {
            return;
        }
        handler(warning);
    },
    // Consult https://svelte.dev/docs#compile-time-svelte-preprocess
    // for more information about preprocessors
    preprocess: [vitePreprocess()],
    compilerOptions: {
        customElement: true,
    }
}
