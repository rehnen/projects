<template>
  <div class="home">
    <div class="top"></div>
    <profile-pic id="profile-pic">
      <img src="../assets/marcus.jpg" alt="">
    </profile-pic>
    <div class="bla"></div>
    <c-v></c-v>
  </div>
</template>

<script>
// @ is an alias to /src
import ProfilePic from '../components/ProfilePic';
import CV from '../components/CV';
export default {
  name: 'home',
  components: {
      ProfilePic,
      CV,
  },
};
</script>
<style scoped>
.top {
  min-height: 500px;
  background-image: url("../assets/marcus-i-shanghai.jpg");
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}
.bla {
  height: 500px;
}
#profile-pic {
  position: relative;
  margin-top: -5rem;
  margin-left: 1rem;
}
</style>
