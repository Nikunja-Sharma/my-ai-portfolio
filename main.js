async function fetchModels() {
    try {
      const response = await fetch('https://openrouter.ai/api/v1/models', {
        method: 'GET',
        headers: {
          Authorization: 'Bearer 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',
        },
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
    //   console.log(data); // Log the data to inspect its structure
  
      // Since the response is an array inside an object, unwrap it
      const models = data[0];
  
      // Check if models is an array and process it
      if (Array.isArray(models)) {
        models.forEach(model => {
          const { id, name, description, context_length } = model;
          console.log(`ID: ${id}`);
          console.log(`Name: ${name}`);
          console.log(`Description: ${description}`);
          console.log(`Context Length: ${context_length}`);
          console.log('---------------------------');
        });
      } else {
        console.error('Models is not an array:', models);
      }
    } catch (error) {
      console.error('Error fetching models:', error);
    }
  }
  
  fetchModels();
  