<template>
  <div class="home">
    <StatSection 
      :statHolderData="statHolderData"
      :statBoxData="statBoxData"
    />
    <TableSection 
      :tableData="tableData"
      :priorityNodeName="priorityNodeName"
      :handlePriorityClick="handlePriorityClick"
    />
  </div>
</template>

<script>
import StatSection from '@/containers/StatSection.vue'
import TableSection from '@/containers/TableSection.vue'
import { numberFormat } from '@/mixins/numberFormat.js'

export default {
  name: 'Home',
  components: {
    StatSection,
    TableSection
  },
  mixins: [numberFormat],
  data() {
    return {
      timing: 0,
      tableData: {},
      priorityNodeName: [],
      statHolderData:[
        {
          iconName: 'icons8-sugar-cube-100.png',
          title: 'best block',
          details: null,
          color: '#12A0DE'
        },
        {
          iconName: 'icons8-sand-timer-100.png',
          title: 'last block',
          details: null,
          color: '#7BCC3A'
        },
        {
          iconName: 'icons8-timer-100.png',
          title: 'avg block time',
          details: null,
          color: '#FFD162'
        },
        {
          iconName: 'icons8-fire-100.png',
          title: 'avg network hashrate',
          details: null,
          color: '#FF8A00'
        }
      ],
      statBoxData:[
        {
          iconName: 'icons8-computer-100.png',
          title: 'active nodes',
          details: null,
          color: '#7BCC3A'
        },
        {
          iconName: 'icons8-price-tag-100.png',
          title: 'gas price',
          details: '35 gwei',
          color: '#12A0DE'
        },
        {
          iconName: 'icons8-price-tag-100.png',
          title: 'gas limit',
          details: '12463137 gas',
          color: '#12A0DE'
        },
        {
          iconName: 'icons8-time-100.png',
          title: 'page latency',
          details: '76 ms',
          color: '#7BCC3A'
        }
      ],
    }
  },
  created() {
    this.$websocket.new('ws://localhost:3000', this.socketOnMessage)
  },
  destroyed() {
    this.$websocket.close()
  },
  methods: {
    socketOnMessage(socketData) {
      this.initSort(socketData)
      this.calcStatData(socketData)
    },
    calcStatData() {
      this.handleBestBlock()
      this.handleLastBlock()
      this.handleActiveNodes()
    },
    handleBestBlock() {
      const bestBlock = Math.max.apply(null, this.tableData.map(el => {
        return el.lastBlock;
      }))
      this.statHolderData[0].details = '#' + this.$numberSeparator(bestBlock)
    },
    handleActiveNodes() {
      const activeNodeAmount = this.tableData.reduce((acc, el) => {
        return el.active ? acc + 1 : acc
      }, 0)
      this.statBoxData[0].details = activeNodeAmount + '/' + this.tableData.length 
    },
    handleLastBlock() {
      let lastBlockCount = 0
      clearInterval(this.timing)
      this.statHolderData[1].details = '0s ago'
      this.timing = setInterval(() => {
        lastBlockCount++
        this.statHolderData[1].details = lastBlockCount + 's ago'
      }, 1000)
    },
    
    initSort(socketData) {
      socketData = socketData.sort((a, b) => {
        return a.lastBlock < b.lastBlock ? 1 : -1
      })
      this.prioritySort(socketData)
    },
    prioritySort(socketData) {
      let priorityData = socketData.filter(el => {
        return this.priorityNodeName.indexOf(el.nodeName) >= 0
      }) 
      const filterData = socketData.filter(el => {
        return this.priorityNodeName.indexOf(el.nodeName) < 0
      }) 
      priorityData = priorityData.concat(filterData)
      this.tableData = priorityData
    },
    handlePriorityClick(nodeName) {
      if(this.priorityNodeName.indexOf(nodeName) === -1){
        this.priority.push(nodeName)
      } else {
        this.priority.splice(this.priority.indexOf(nodeName), 1)
      }
      this.initSort(this.tableData)
    }
  }
}
</script>
