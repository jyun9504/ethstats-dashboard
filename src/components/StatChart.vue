<template>
  <div class="stat-chart">
    <h1 class="stat-chart--title">
      {{ title }}
    </h1>
    <img class="stat-chart--chart" :src="require(`@/assets/${chart}`)" alt="statchart">
  </div>
</template>

<script>

export default {
  name: 'StatChart',
  props: {
    title: String,
    chart: String
  }
}
</script>
