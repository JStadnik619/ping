const url = process.env.TARGET_URL;

async function ping() {
  try {
    const response = await fetch(url, { method: 'HEAD', timeout: 5000 });
    
    if (response.ok) {
      console.log(`Success: ${url} returned ${response.status}`);
      process.exit(0);
    } else {
      console.error(`Failure: ${url} returned ${response.status}`);
      process.exit(1);
    }
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}

ping();