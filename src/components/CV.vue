<template>
    <div class="c-v">
        {{ presentation }}
    </div>
</template>

<script>
import marked from 'marked';
const file = require('../assets/presentation.md');
console.log(file)
export default {
    name: "c-v",
    data() {
        return {
            presentation: "marked(file)"
        }
    }
}
</script>

<style scoped>

</style>