import { defineCodeRunnersSetup } from '@slidev/types'
import { CodeRunnerOutputs } from '@slidev/types'

export default defineCodeRunnersSetup(() => {
  return {
    async python(code) {
      const results = await godboltPythonRequest(code);
      return results;
    }
  }
})

async function godboltPythonRequest(code: string): Promise<CodeRunnerOutputs> {
    try {
      // Godbolt API URL for Python 3.12
      const apiUrl = 'https://godbolt.org/api/compiler/python312/compile';
  
      // Make an asynchronous POST request to the Godbolt API with the Python code
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json' // We need to explicitly ask for a JSON response, text is the default
        },
        body: JSON.stringify({
          source: code,
          options: {
            compilerOptions: {"executorRequest": true}, // We want to compile + execute
            executeParameters: {},
          }
        })
      });
  
      // Check if the response is successful
      if (!response.ok) {
        return {
          error: `Bad response: ${response.statusText}`
        };
      }

      // Parse the response as JSON
      const result = await response.json();

      // Extract stdout lines and convert them into CodeRunnerOutputText objects
      const stdout = result.stdout.map((line: any) => ({
            text: line.text
                      // Hack to keep leading whitespace
                      .replace(/\s/g, "‎ ")
                      .replace(/\t/g, "‎    ")
        }
      ));

      // Extract stderr lines and convert them into CodeRunnerOutputText objects
      const stderr = result.stderr.map((line: any) => ({
            text: line.text
                      // Hack to keep leading whitespace
                      .replace(/\s/g, "‎ ")
                      .replace(/\t/g, "‎    "),
            class: 'text-red-500'
        }
      ));
    
      if (stderr.length !== 0) {
        return stderr;
      } else if (stdout.length !== 0) {
        return stdout;
      } else {
        return {
          text: 'No output received'
        };
      }
    } catch (error) {
      console.error('Failed to execute Python code:', error);
      return {
        error: `Failed to execute Python code: ${error.message}`
      };
    }
  }
  