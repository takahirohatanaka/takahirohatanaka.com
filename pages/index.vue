<template>
  <div>
    <header>
      <img class="my-icon" src="icon.png" />
      <h1>Takahiro Hatanaka</h1>
    </header>

    <article>
      <about />
      <skills />
      <contact />
    </article>
  </div>
</template>

<script language="ts">
import About from "~/components/about.vue";
import Skills from "~/components/skills.vue";
import Contact from "~/components/contact.vue";

export default {
  components: {
    About,
    Skills,
    Contact,
  },
};
</script>

<style lang="scss" scoped>
header {
  margin-bottom: 2rem;
  vertical-align: middle;

  .my-icon {
    border-radius: 50%;
    height: 50px;
    float: left;
    margin-right: 1rem;
  }

  h1 {
    font-size: 45px;
    text-transform: uppercase;
  }
}
</style>
