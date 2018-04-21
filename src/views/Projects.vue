<template>
  <div class="projects">
    <router-view v-if="this.$route.params.project"></router-view>
    <div v-else>
      <div v-for="summary in summaries">
        <project-summary :name="summary.name" :description="summary.description"></project-summary>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectSummary from '@/components/ProjectSummary'
export default {
  name: 'projects',
  components: {ProjectSummary},
  data() {
    return {
      summaries: [],
    };
  },
  created() {
    console.log(this.$route);
    this.fetchData();
  },

  methods: {
    fetchData() {
      this.$http.get('projects')
        .then((result) => {
          this.summaries = result.data;
        });
    }
  }
};
</script>
<style scoped>
.projects {
  margin: 0 2rem;
}
</style>