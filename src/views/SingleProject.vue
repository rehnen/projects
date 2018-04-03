<template>
    <div class="singleproject">
        <p v-html="this.result">{{ this.result }}</p>
    </div>
</template>

<script>
import marked from 'marked';
export default {
  name: 'singleproject',
  props: ['name'],
  created() {
    this.fetchData();
  },
  updated() {
    this.fetchData();
  },
  data() {
    return {
      result: '',
    };
  },
  methods: {
    fetchData() {
      this.$http.get(`repos/rehnen/${this.$route.params.project}/readme`)
        .then((result) => {
          // const base64 = result.data.content;
          this.result = this.marked(atob(result.data.content));
        })
        .catch(() => {
          this.projectDescription = `
            <h1>This project has no description</h1>
          `;
        });
    },
    marked,
  }
};
</script>

<style scoped>

</style>
