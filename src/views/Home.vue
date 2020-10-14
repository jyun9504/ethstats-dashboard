<template>
  <div class="home">
    <StatSection />
    <TableSection 
      :tableData="tableData"
      :priorityDataKey="priorityDataKey"
      :handlePriorityClick="handlePriorityClick"
    />
  </div>
</template>

<script>
import StatSection from '@/containers/StatSection.vue'
import TableSection from '@/containers/TableSection.vue'

export default {
  name: 'Home',
  components: {
    StatSection,
    TableSection
  },
  data() {
    return {
      tableData: null,
      priorityDataKey: [],
    }
  },
  created() {
    this.websock = new WebSocket('ws://localhost:3000')

    this.websock.onopen = () => {
      console.log('open connection')
    }

    this.websock.onmessage = event => {
      let tableData = JSON.parse(event.data)
      this.initSort(tableData)
    }

    this.websock.onclose = () => {
      console.log('close connection')
    }
  },
  destroyed() {
    this.websock.close()
  },
  methods: {
    sendMessage() {
      this.websock.send('hello')
    },
    initSort(tableData) {
      tableData = tableData.sort((a, b) => {
        return a.lastBlock < b.lastBlock ? 1 : -1
      })
      this.prioritySort(tableData)
    },
    prioritySort(tableData) {
      let priorityData = tableData.filter(el => {
        return this.priorityDataKey.indexOf(el.nodeName) >= 0
      }) 

      const filterData = tableData.filter(el => {
        return this.priorityDataKey.indexOf(el.nodeName) < 0
      }) 

      priorityData = priorityData.concat(filterData)
      this.tableData = priorityData
    },
    handlePriorityClick(key) {
      if(this.priorityDataKey.indexOf(key) === -1){
        this.priorityDataKey.push(key)
      } else {
        this.priorityDataKey.splice(this.priorityDataKey.indexOf(key), 1)
      }
      this.initSort(this.tableData)
    }
  }
}
</script>
