<template>
  <span
    class="
      mr-2
      px-3
      py-1
      border border-solid
      rounded-lg
      border-teal-500
      text-teal-600
      font-light
    "
  >
    {{ name }}
  </span>
</template>

<script language="ts">
export default {
  props: {
    name: String,
  },
};
</script>

<style lang="scss" scoped>
span {
  font-family: "Prompt", sans-serif;
}
</style>