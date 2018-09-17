<script>
import VueCharts, { Pie } from 'vue-chartjs'

export default {
  extends: Pie,
  props: ['chartInfo', 'showChart'],
  data () {
    return {
      chartTitles: [],
      chartAmounts: []
    }
  },
  methods: {
    renderInfo: function () {
      // since lender or recipient can be null, filter them:
      const lenders = this.chartInfo.map((o) => {
        return (
          o.lenderName === null ? o.recipientsName : o.lenderName
        )
      })
      const amounts = this.chartInfo.map((o) => {
        return o.totalAmount
      })
      this.chartTitles = lenders
      this.chartAmounts = amounts

      this.renderChart({
        labels: this.chartTitles,
        datasets: [
          {
            label: 'Label',
            backgroundColor: [
              'rgb(37, 97, 136)',
              'rgb(5, 80, 130)',
              'rgb(15, 58, 86)',
              'rgb(1, 26, 43)',
              'rgb(5, 24, 109)',
              'rgb(12, 37, 153)',
              'rgb(13, 1, 124)',
              'rgb(7, 0, 66)',
              'rgb(47, 25, 232)',
              'rgb(24, 149, 232)',
              'rgb(8, 102, 165)' ],
            data: this.chartAmounts
          }
        ],
        options: {
          title: {
            display: true,
            text: 'Loan Totals'
          }
        }
      })
    }
  },
  watch: {
    chartInfo: function (newVal, oldVal) {
      if (this.$data._chart) {
        this.$data._chart
      }
      this.renderInfo()
    }
  }
}
</script>
