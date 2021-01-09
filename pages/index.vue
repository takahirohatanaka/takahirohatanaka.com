<template>
  <div>
    <header>
      <img class="my-icon" src="icon.png" />
      <h1>Takahiro Hatanaka</h1>
    </header>

    <article>
      <section class="about-me">
        <h1>About me</h1>
        <div>
          <p>
            I am Takahiro Hatanaka.
            I am working as a software engineer in Tokyo, Japan since 2011.
            <br />I work mainly as a developer and sometime as a developer manager.
          </p>
        </div>
      </section>

      <skills />
      <contact />
    </article>
  </div>
</template>

<script language="ts">
import Skills from "~/components/skills.vue";
import Contact from "~/components/contact.vue";

export default {
  components: {
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
