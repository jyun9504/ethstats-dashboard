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
            <span v-b-tooltip.hover title="Peers">
              <b-icon icon="person" variant="secondary"></b-icon>
            </span>
          </th>
          <th>
            <span v-b-tooltip.hover title="Pending trasactions">
              <b-icon icon="basket" variant="secondary"></b-icon>
            </span>
          </th>
          <th>
            <span v-b-tooltip.hover title="Last block">
              <b-icon icon="diamond" variant="secondary"></b-icon>
            </span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="data in tableData" :key="data.nodeName">
          <td @click="handlePriorityClick(data.nodeName)">
            <b-icon 
              v-if="priorityNodeName.indexOf(data.nodeName) === -1" 
              :class="data.active ? 'u-font-color-green' : 'u-font-color-red'" 
              icon="circle"
            >
            </b-icon>
            <b-icon 
              v-if="priorityNodeName.indexOf(data.nodeName) !== -1" 
              :class="data.active ? 'u-font-color-green' : 'u-font-color-red'" 
              icon="check-circle"
            >
            </b-icon>
          </td>
          <td :class="data.active ? 'u-font-color-green' : 'u-font-color-red'">{{ data.nodeName }}</td>
          <td :class="data.active ? 'u-font-color-green' : 'u-font-color-red'">{{ data.nodeType }}</td>
          <td>{{ data.nodeLatency }} ms</td>
          <td>
            <b-icon v-if="data.isMining === false" icon="x-octagon"></b-icon>
            <p v-if="data.isMining !== false">{{ data.isMining }} ms</p>
          </td>
          <td>{{ data.peers }}</td>
          <td>{{ data.pendingTrasactions }}</td>
          <td>#{{ $numberSeparator(data.lastBlock) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { BIcon } from 'bootstrap-vue'
import { numberFormat } from '@/mixins/numberFormat.js'

export default {
  name: 'TableSection',
  components: {
    BIcon
  },
  data() {
    return {}
  },
  props:['tableData','priorityNodeName','handlePriorityClick'],
  mixins: [numberFormat],
  mounted() {
  },
}
</script>

