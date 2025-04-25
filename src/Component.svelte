<script>
import {onMount} from "svelte"
onMount(() => console.log("mounted"));
</script>
<svelte:options customElement={{
    tag: "hello-world"
}} />
<span style="transition: color 2s ease-in-out; color: crimson;">hello</span>
<span class="test">world</span>

<style>
    .test {
        transition: color 2s ease-in-out; color: teal;
    }
</style>