<template>
  <NuxtLayout>
    <div id="all">
    <header>
      <h1>Tyler's Blog</h1>
    </header>
    <nav>
        <NuxtLink to="/">Home</NuxtLink> |
        <NuxtLink to="/media-list">My media</NuxtLink>
    </nav>
    <main id="main">
      <div>
        <NuxtRouteAnnouncer />
        <NuxtPage/>
      </div>
    </main>
    <aside>

    </aside>
    </div>
  </NuxtLayout>
</template>

<style>
#all {
  margin: auto;
  max-width: 600px;
  font-family: "Inter", "sans-serif";
}

@font-face {
  font-family: "Inter";
  src: url("/fonts/Inter-Regular.ttf"), url("/fonts/Inter-Italic.ttf");
}

h1 {
  font-weight: bold;
  margin: 20px 0px 0px;
}

nav {
  margin: 0px 0px 20px;
}

</style>

<script setup lang="ts">
</script>