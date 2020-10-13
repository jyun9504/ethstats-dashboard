<template>
  <div class="home">
    <StatSection />
    <TableSection />
  </div>
</template>

<script>
// @ is an alias to /src
import StatSection from '@/containers/StatSection.vue'
import TableSection from '@/containers/TableSection.vue'

export default {
  name: 'Home',
  components: {
    StatSection,
    TableSection
  }
}
</script>
