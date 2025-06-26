<script setup lang="ts">

const { data: home } = await useAsyncData(() => queryCollection('content').path('/').first())


</script>

<template>
  <title>Tyler's Blog</title>
  <ContentRenderer v-if="home" :value="home"> </ContentRenderer>
</template>

<style scoped>

</style>