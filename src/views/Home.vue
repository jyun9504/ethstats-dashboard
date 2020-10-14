<template>
  <div class="home">
    <StatSection 
      :statHolderData="statHolderData"
      :statBoxData="statBoxData"
    />
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
import { numberFormat } from '@/mixins/numberFormatＭixins.js'

export default {
  name: 'Home',
  components: {
    StatSection,
    TableSection
  },
  mixins: [numberFormat],
  data() {
    return {
      timing: null,
      lastBlockCount: 0,
      tableData: null,
      priorityDataKey: [],
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
          details: 0,
          color: '#7BCC3A'
        },
        {
          iconName: 'icons8-timer-100.png',
          title: 'avg block time',
          details: '0.00 s',
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
    this.initWebSocket()

  },
  destroyed() {
    this.websock.close()
  },
  methods: {
    initWebSocket() {
      this.websock = new WebSocket('ws://localhost:3000')
      this.websock.onopen = () => {
        console.log('open connection')
      }
      this.websock.onmessage = event => {
        let tableData = JSON.parse(event.data)
        this.initSort(tableData)
        this.calcStatData(tableData)
        this.handleLastBlock()
      }
      this.websock.onclose = () => {
        console.log('close connection')
      }
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
    },
    calcStatData() {
      if(this.tableData) {
        this.handleBestBlock()
        this.handleActiveNodes()
      }
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
      this.lastBlockCount = 0
      clearInterval(this.timing)
      this.statHolderData[1].details = '0s ago'
      this.timing = setInterval(() => {
        this.lastBlockCount++
        this.statHolderData[1].details = this.lastBlockCount + 's ago'
      }, 1000)
    }
  }
}
</script>
