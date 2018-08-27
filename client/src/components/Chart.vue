
<script>
import VueCharts from 'vue-chartjs'
import { Pie } from 'vue-chartjs'

export default {
  extends: Pie,
  props: ['allLoans'],
  data () {
      return {
        datacollection: {
          //labels: this.allLoans.totalAmount,
        }
      }
    },
  mounted () {
    // Overwriting base render method with actual data.
    this.renderChart({
      labels: ['January', 'Febuary'],
      datasets: [
        {
          label: 'GitHub Commits',
          backgroundColor: 'green',
          data: [40, 20]
        }
      ],
      options: {
        title: {
          display: true,
          text: 'Predicted world population (millions) in 2050'
        }
      }
    })
  }
}
</script>
