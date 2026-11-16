<template>
  <div>
    <section>
      <h1 class="text-2xl uppercase">Skills</h1>
      <p class="mt-1">
        My skills include the following languages and technologies.
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
      "TypeScript",
      "Node.js",
      "PHP",
      "Laravel",
      "Ruby",
      "Ruby on Rails",
      "JavaScript",
      "Go",
      "HTML",
      "CSS",
      "MySQL",
      "Linux",
      "Networking",
      "Docker",
    ],
  }),
};
</script>
