<template>
  <section>
    <h1>Contacts</h1>
    <div>
      <ul>
        <li>
          <font-awesome-icon :icon="['fab', 'github']" class="icon" />
          <a href="https://github.com/takahirohatanaka">github.com/takahirohatanaka</a>
        </li>

        <li>
          <font-awesome-icon :icon="['fa', 'camera']" class="icon" />
          <a href="https://500px.com/takahirohatanaka">500px.com/takahirohatanaka</a>
        </li>

        <li>
          <font-awesome-icon :icon="['far', 'envelope']" class="icon" />i
          <font-awesome-icon icon="at" style="width: 1rem; margin: auto .1rem .15rem .15rem;" />takahirohatanaka.com
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
ul {
  list-style: none;
  padding-left: 1rem;

  li {
    margin-bottom: 0.5rem;

    svg {
      display: inline-block;
    }

    .icon {
      display: inline-block;
      font-size: 1.6rem;
      margin-right: 0.5rem;
      width: 1.4rem;
      height: 1.4rem;
    }
  }
}
</style>
