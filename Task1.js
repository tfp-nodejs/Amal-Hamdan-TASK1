async function getPostData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    const data = await response.json();
    console.log("AJAX Response Data:", data);

  } catch (error) {
    console.error("AJAX Request Failed:", error);
  }
}

getPostData();