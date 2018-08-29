
<script>
import VueCharts from 'vue-chartjs'
import { Pie } from 'vue-chartjs'

export default {
  extends: Pie,
  props: ['chartInfo'],
  // watch: {
  //     	chartInfo: function(newVal, oldVal) { // watch it
  //         console.log('Prop changed: ', newVal, ' | was: ', oldVal)
  //       }},
  data () {
    return {
      chartTitles :[],
      chartAmounts: []
    }
  },
  mounted () {
    this.renderInfo()
    this.renderChart({
      labels: this.chartTitles,
      datasets: [
        {
          label: 'Label',
          backgroundColor: 'green',
          data: this.chartAmounts
        }
      ],
      options: {
        title: {
          display: true,
          text: 'Predicted world population (millions) in 2050'
        }
      }
    })
  },
  methods: {
    renderInfo () {
      console.log('hi');
      const lenders = this.chartInfo.map((o) => {
        return o.lenderName
      })
      const amounts = this.chartInfo.map((o) => {
        return o.totalAmount
      })
      this.chartTitles = lenders
      console.log(this.chartTitles);
      this.chartAmounts = amounts

    }
  }
}
</script>
