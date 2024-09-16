// ./setup/monaco.ts
import { defineMonacoSetup } from '@slidev/types'

export default defineMonacoSetup(() => {
  return {
    editorOptions: {
      wordWrap: 'on',
      fontSize: 32,
      codeLensFontSize: 32,
      lineNumbers: 'on'
    }
  }
})