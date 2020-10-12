<template>
  <div class="statholder">
    <div class="statholder--left">
      <img class="statholder--left--icon" :src="require(`@/assets/${iconName}`)" alt="block">
    </div>
    <div class="statholder--info u-margin-left-small">
      <h1 class="statholder--info--title u-margin-bottom-small">{{ title }}</h1>
      <p class="statholder--info--details" :style="`color: ${color}`">{{ details }}</p>
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
