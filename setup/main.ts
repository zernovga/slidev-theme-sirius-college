import { defineAppSetup } from '@slidev/types'

/* plotly */
import { VuePlotly } from 'vue3-plotly'

export default defineAppSetup(({ app, router }) => {
  app.component('v-plotly', VuePlotly  )
})
