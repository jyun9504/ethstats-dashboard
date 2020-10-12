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
        <b-col md="12" lg="6">
          <b-row>
            <b-col sm="12" md="6" class="stat-block" v-for="stat in statChartData" :key="stat.title">
              <StatChart 
                :title="stat.title"
                :chart="stat.chart"
              />
            </b-col>
          </b-row>
        </b-col>
        <b-col col class="stat-block" >
          
        </b-col>
      </b-row>
    </b-container>
</template>

<script>
import StatHolder from '@/components/StatHolder'
import StatBox from '@/components/StatBox'
import StatChart from '@/components/StatChart'

export default {
  name: 'StatSection',
  components: {
    StatHolder,
    StatBox,
    StatChart
  },
  data () {
    return {
      statHolderData:[
        {
          iconName: 'icons8-sugar-cube-100.png',
          title: 'best block',
          details: '#11,038,821',
          color: '#12A0DE'
        },
        {
          iconName: 'icons8-sand-timer-100.png',
          title: 'last block',
          details: '10 s ago',
          color: '#7BCC3A'
        },
        {
          iconName: 'icons8-timer-100.png',
          title: 'avg block time',
          details: '13.18s',
          color: '#FFD162'
        },
        {
          iconName: 'icons8-fire-100.png',
          title: 'avg network hashrate',
          details: '302 TH/s',
          color: '#FF8A00'
        }
      ],
      statBoxData:[
        {
          iconName: 'icons8-computer-100.png',
          title: 'active nodes',
          details: '78/78',
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
      statChartData: [
        {
          title: 'block',
          chart: 'chart-test.png'
        },
        {
          title: 'block',
          chart: 'chart-test.png'
        },
        {
          title: 'block',
          chart: 'chart-test.png'
        },
        {
          title: 'block',
          chart: 'chart-test.png'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
