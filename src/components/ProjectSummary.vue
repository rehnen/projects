<template>
    <div>
        <router-link :to="'/projects/'+name" >{{ name }}</router-link>
        <p>{{ description }}</p>
    </div>
</template>

<script>
  export default {
    name: "project-summary",
    props: ['name', 'description']
  };
</script>

<style scoped>
    a {
        font-size: 18pt;
        color: #030905;
        text-decoration: none;
    }
    a:hover {
        text-decoration: underline;
    }
</style>