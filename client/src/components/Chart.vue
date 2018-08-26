
<script>
import VueCharts from 'vue-chartjs'
import { Pie } from 'vue-chartjs'

export default {
  extends: Pie,
  props: {
    loanInfo: Array
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
      ]
    })
  }
}
</script>
