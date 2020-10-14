<template>
    <b-container class="stat-section" fluid>
      <b-row>
        <b-col col class="stat-block" v-for="stat in statHolderData" :key="stat.title">
          <StatHolder
            :iconName="stat.iconName"
            :title="stat.title"
            :details="stat.details"
            :color="stat.color"
          />
        </b-col>
      </b-row>
      <b-row>
        <b-col col class="stat-block" v-for="stat in statBoxData" :key="stat.title">
          <StatBox
            :iconName="stat.iconName"
            :title="stat.title"
            :details="stat.details"
            :color="stat.color"
          />
        </b-col>
      </b-row>
      <b-row>
        <b-col md="12" lg="6" class="stat-block-nosolid">
          <b-row>
            <b-col sm="12" md="6" class="stat-block" v-for="stat in statChartData" :key="stat.title">
              <StatChart 
                :title="stat.title"
                :chart="stat.chart"
              />
            </b-col>
          </b-row>
        </b-col>
        <b-col md="12" lg="6" class="stat-block-map u-no-padding">
          <StatMap :mapImgName="mapImgName"/> 
        </b-col>
      </b-row>
      <b-row>
        <b-col class="stat-block">
          <AttentionBar />
        </b-col>
      </b-row>
      
    </b-container>
</template>

<script>
import StatHolder from '@/components/StatHolder'
import StatBox from '@/components/StatBox'
import StatChart from '@/components/StatChart'
import StatMap from '@/components/StatMap'
import AttentionBar from '@/components/AttentionBar'

export default {
  name: 'StatSection',
  components: {
    StatHolder,
    StatBox,
    StatChart,
    StatMap,
    AttentionBar
  },
  data () {
    return {
      statChartData: [
        {
          title: 'block time',
          chart: 'chart-test.png'
        },
        {
          title: 'block propagation',
          chart: 'chart-test.png'
        },
        {
          title: 'uncle count',
          chart: 'chart-test.png'
        },
        {
          title: 'transactions',
          chart: 'chart-test.png'
        }
      ],
      mapImgName:'map-test.png'
    }
  },
  props: {
    statHolderData: Object,
    statBoxData: Object
  }
}
</script>