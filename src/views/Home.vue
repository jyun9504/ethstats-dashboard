<template>
  <div class="home">
    <StatSection />
  </div>
</template>

<script>
// @ is an alias to /src
import StatSection from '@/containers/StatSection.vue'

export default {
  name: 'Home',
  components: {
    StatSection
  }
}
</script>
