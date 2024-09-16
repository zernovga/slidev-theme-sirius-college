import { defineAppSetup } from '@slidev/types'

import {Embeddable} from 'embeddable-monaco';

import 'embeddable-monaco/dist/embeddable.css';


/* plotly */
import { VuePlotly } from 'vue3-plotly';

export default defineAppSetup(({ app, router }) => {
  app.component('v-plotly', VuePlotly  ),
  Embeddable.install(app);
})
