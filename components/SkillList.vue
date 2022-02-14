<template>
  <div>
    <section>
      <h1 class="text-2xl uppercase">Skills</h1>
      <p class="mt-1">
        I am able to develop using the following technologies and languages.
      </p>
      <div class="my-2 flex flex-wrap">
        <SkillsItem
          v-for="(item, index) in skillList"
          :key="index"
          :name="item"
          class="mb-2"
        />
      </div>
    </section>
  </div>
</template>

<script language="ts">
export default {
  data: () => ({
    skillList: [
      "Japanese",
      "PHP",
      "Laravel",
      "FuelPHP",
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
      "Docker",
    ],
  }),
};
</script>
