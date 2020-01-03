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
          I am Takahiro Hatanaka. I am working as a IT engineer in Tokyo, Japan
          since 2011.
        </div>
      </section>

      <skills />

      <section class="contacts">
        <h1>Contacts</h1>
        <div>
          <ul>
            <li>
              <font-awesome-icon :icon="['fab', 'github']" class="icon" />
              <a href="https://github.com/takahirohatanaka"
                >github.com/takahirohatanaka</a
              >
            </li>

            <li>
              <font-awesome-icon :icon="['fab', 'flickr']" class="icon" />
              <a href="https://www.flickr.com/photos/takahirohatanaka/"
                >flickr.com/takahirohatanaka</a
              >
            </li>

            <li>
              <img class="icon" src="/qiita.png" />
              <a href="https://qiita.com/takahirohatanaka"
                >qiita.com/takahirohatanaka</a
              >
            </li>

            <li>
              <font-awesome-icon :icon="['far', 'envelope']" class="icon" />
              i<font-awesome-icon
                icon="at"
                style="width: 1rem; margin: auto .1rem;"
              />takahirohatanaka.com
            </li>
          </ul>
        </div>
      </section>
    </article>
  </div>
</template>

<script language="ts">
import Skills from "~/components/skills.vue";

export default {
  components: {
    Skills
  }
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

.contacts {
  ul {
    list-style: none;
    padding-left: 1rem;

    li {
      margin-bottom: 0.5rem;
      display: flex;

      .icon {
        font-size: 1.6rem;
        margin-right: 0.5rem;
        width: 1.4rem;
      }
    }
  }
}
</style>
