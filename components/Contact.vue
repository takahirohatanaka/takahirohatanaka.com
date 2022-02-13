<template>
  <div>
    <section>
      <h1 class="text-3xl uppercase">Contact</h1>
      <div class="my-2">
        <ul>
          <li class="mb-1">
            <a href="https://github.com/takahirohatanaka"
              >github.com/takahirohatanaka</a
            >
          </li>

          <li class="mb-1">
            <a href="https://500px.com/takahirohatanaka"
              >500px.com/takahirohatanaka</a
            >
          </li>

          <li class="flex items-center">
            <span class="material-icons mr-3">mail_outline</span>
            i
            <span class="at-mark mx-0.5"></span>
            takahirohatanaka.com
          </li>
        </ul>
      </div>
    </section>

    <i class="material-icons-outlined">task_alt</i>
    <span class="material-icons"> task_alt </span>
  </div>
</template>

<style lang="scss" scoped>
.at-mark::before {
    font-family: "Material Icons", "Material Icons Outlined";
    content: "\e0e6";
}
</style>