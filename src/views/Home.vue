<template>
  <div class="home">
    <div class="columns is-center">
      <div class="column is-one-third">
        <card title="Marcus Rehn" subTitle="Developer based in Karlskrona">
          <img src="../assets/marcus.jpg">
        </card>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Card from '@/components/Card';

export default {
  name: 'home',
  components: {
    Card,
  },
};
</script>
<style scoped>

</style>
