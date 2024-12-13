import { defineAppSetup } from '@slidev/types'

import {Embeddable} from 'embeddable-monaco';

import 'embeddable-monaco/dist/embeddable.css';


export default defineAppSetup(({ app, router }) => {
  Embeddable.install(app);
})
