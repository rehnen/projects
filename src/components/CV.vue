<template>
    <div class="c-v">
        <div v-html="presentation">
        </div>
    </div>
</template>

<script>
import marked from 'marked';
import file from '../assets/presentation.md';
export default {
    name: "c-v",
    data() {
        return {
            presentation: marked(file)
        }
    }
}
</script>

<style>
    h2 {
        font-size: 2rem;
    }
    p {
        padding-bottom: 1rem;
    }
</style>