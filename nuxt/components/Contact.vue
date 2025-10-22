<template>
  <div>
    <section>
      <h1 class="text-2xl uppercase">Contact</h1>
      <div class="my-2">
        <p class="mb-2">
          This page is in English, but I don't actually speak English. It would
          be great if you could contact me in Japanese.
        </p>

        <ul>
          <li class="flex items-center mb-1">
            <span class="material-icons mr-2">code</span>
            <a href="https://github.com/takahirohatanaka"
              >github.com/takahirohatanaka</a
            >
          </li>

          <li class="flex items-center mb-1">
            <span class="material-icons mr-2">photo_camera</span>

            <a href="https://500px.com/takahirohatanaka"
              >500px.com/takahirohatanaka</a
            >
          </li>

          <li class="flex items-center">
            <span class="material-icons mr-2">mail_outline</span>
            i
            <span class="at-mark mx-0.5"></span>
            takahirohatanaka.com
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.at-mark::before {
  font-family: "Material Icons", "Material Icons Outlined";
  content: "\e0e6";
}
</style>
