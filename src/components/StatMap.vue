<template>
  <div class="stat-map">
    <img  class="stat-map--img" :src="require(`@/assets/${mapImgName}`)" alt="map">
  </div>
</template>

<script>

export default {
  name: 'StatMap',
  props: {
    mapImgName: String
  }
}
</script>
