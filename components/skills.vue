<template>
  <section class="skills">
    <h1>Skills</h1>
    <div>
      <div class="skill-list">
        <span v-for="(item, index) in skillList" :key="index" class="skill">{{
          item
        }}</span>
      </div>
      and more...
    </div>
  </section>
</template>

<script language="ts">
export default {
  data: () => ({
    skillList: [
      "Japanese",
      "PHP",
      "Laravel",
      "Ruby",
      "Ruby on Rails",
      "JavaScript",
      "Node.js",
      "Go",
      "HTML",
      "CSS",
      "MySQL",
      "Linux",
      "Network",
      "Docker"
    ]
  })
};
</script>

<style lang="scss" scoped>
.skills {
  .skill-list {
    width: 60%;
  }

  .skill {
    color: $primary-color;
    font-family: "Montserrat", -apple-system, system-ui, BlinkMacSystemFont,
      "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    display: inline-block;
    text-align: center;
    white-space: nowrap;
    border-radius: 0.4rem;
    border: 1px solid $primary-color;
    padding: 0.4rem 0.8rem;
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
  }
}
</style>
