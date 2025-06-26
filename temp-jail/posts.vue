<script setup lang="ts">
const slug = useRoute().params.slug
const singular = ref(false);
const ok = ref()

if (typeof slug !== "undefined") {
  singular.value=true;
} else {
  const { data: query } = await useAsyncData("posts-list", () => {
    return queryCollection('post').order("date", "DESC").select('title', 'path', 'description').all()
  })
  ok.value = query.value;
}


</script>

<template>
  <div v-if="singular">
    <NuxtPage />
  </div>
  <div v-else>
    <div v-for="a in ok">
      {{ a }}
    </div>

  </div>
</template>

<style scoped>

</style>