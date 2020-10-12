<template>
  <div class="statbox">
    <div class="statbox--heading">
      <img class="statbox--heading--icon" :src="require(`@/assets/${iconName}`)" alt="block">
      <h1 class="statbox--heading--title">{{ title }}</h1>
    </div>
    <p class="statbox--details" :style="`color: ${color}`">{{ details }}</p>
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
