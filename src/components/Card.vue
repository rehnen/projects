<template>
    <div class="card is-4by3">
        <div class="card-image">
            <figure class="image is-4by3">
                <img src="../assets/marcus-i-shanghai.jpg" alt="">
            </figure>
        </div>
        <div class="card-content">
            <div class="media">
                <div class="media-left">
                    <figure class="image is-48x48"><slot></slot></figure>
                </div>
                <div class="media-content">
                    <p class="title is-4">{{ title }}</p>
                    <p class="subtitle is-6">{{ subTitle }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "Card",
    props: ['text', 'title', 'subTitle'],
  }
</script>

<style scoped>
    .card {
        margin: 5px;
    }
</style>