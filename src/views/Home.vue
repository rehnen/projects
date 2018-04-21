<template>
  <div class="home">
    <div class="top"></div>
    <profile-pic id="profile-pic">
      <img src="../assets/marcus.jpg" alt="">
    </profile-pic>
    <c-v id="cv"></c-v>
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
  background-position: center -200px;
}



#profile-pic {
  position: relative;
  top: -5rem;
  margin-left: 1rem;
}
#cv {
  width: calc(100% - 300px);
  margin-left: 250px;
  top: -10rem;
  right: 0;
  position: relative;
}
@media only screen and (min-width: 2000px) {
  .top {
    background-position: center -600px;
  }
}

@media only screen and (max-width: 1000px) {
  .top {
    min-height: 300px;
  }
  #cv {
    margin-left: 2rem;
    top: -4rem;
    width: calc(100% - 4rem);
  }
}
</style>
