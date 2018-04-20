<template>
    <div class="profile-pic">
        <div class="mugshot-holder">
            <slot class="mugshot"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "profile-pic",
        props: [
            'src'
        ]
    }
</script>

<style scoped>
.mugshot-holder {
    border: 0.5rem solid white;
    max-width: 200px;
    max-height: 200px;
}
</style>