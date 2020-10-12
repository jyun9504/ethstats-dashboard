<template>
  <div class="stat-holder">
    <div class="stat-holder--left">
      <img class="stat-holder--left--icon" :src="require(`@/assets/${iconName}`)" alt="stat holder">
    </div>
    <div class="stat-holder--info u-margin-left-small">
      <h1 class="stat-holder--info--title u-margin-bottom-small">{{ title }}</h1>
      <p class="stat-holder--info--details" :style="`color: ${color}`">{{ details }}</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'StatHolder',
  props: {
    iconName: String,
    title: String,
    details: String,
    color: String
  }
}
</script>
