<template>
  <div class="table-section">
    <table class="">
      <thead>
        <tr>
          <th>
            <span v-b-tooltip.hover title="Pin node to display first" >
              <b-icon icon="check-circle" variant="secondary"></b-icon>
            </span>
          </th>
          <th>
            <span v-b-tooltip.hover title="Node name">
              <b-icon icon="hdd-network" variant="secondary"></b-icon>
            </span>
          </th>
          <th>
            <span v-b-tooltip.hover title="Node type">
              <b-icon icon="hdd" variant="secondary"></b-icon>
            </span>
          </th>
          <th>
            <span v-b-tooltip.hover title="Node latency">
              <b-icon icon="watch" variant="secondary"></b-icon>
            </span>
          </th>
          <th>
            <span v-b-tooltip.hover title="Is mining">
              <b-icon icon="hammer" variant="secondary"></b-icon>
            </span>
          </th>
          <th>
            <span v-b-tooltip.hover title="peers">
              <b-icon icon="person" variant="secondary"></b-icon>
            </span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="data in tableData" :key="data.nodeName">
          <td><b-icon icon="circle" style="color: #7CCC3A"></b-icon></td>
          <td>{{data.nodeName}}</td>
          <td>{{data.nodeType}}</td>
          <td>{{data.nodeLatency}} ms</td>
          <td>{{data.isMining}}</td>
          <td>{{data.peers}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { BIcon } from 'bootstrap-vue'
import tableData from './tableData'

export default {
  name: 'TableSection',
  components: {
    BIcon
  },
  data() {
    return {
      tableData: tableData
    }
  }
}
</script>

