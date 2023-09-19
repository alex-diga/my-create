<script setup lang="ts"></script>

<template>
  <router-view v-slot="{ Component, route }">
    <!-- 使用任何自定义过渡和回退到 `fade` -->
    <Transition name="fade">
      <component :is="Component" :key="route.path" />
    </Transition>
  </router-view>
</template>

<style scoped></style>
