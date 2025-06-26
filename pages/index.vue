<script setup lang="ts">

const { data: home } = await useAsyncData(() => queryCollection('content').path('/').first())


</script>

<template>
  <title>Tyler's Blog</title>
<div>
  My name is Tyler and i'm really glad to meet you.
</div>
  <ContentRenderer v-if="home" :value="home"> </ContentRenderer>
</template>

<style scoped>

</style>