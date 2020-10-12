<template>
  <div class="stat-box">
    <div class="stat-box--heading">
      <img class="stat-box--heading--icon" :src="require(`@/assets/${iconName}`)" alt="stat box">
      <h1 class="stat-box--heading--title">{{ title }}</h1>
    </div>
    <p class="stat-box--details" :style="`color: ${color}`">{{ details }}</p>
  </div>
</template>

<script>

export default {
  name: 'StatBox',
  props: {
    iconName: String,
    title: String,
    details: String,
    color: String
  }
}
</script>
