async function getPostData() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts/");
    let data = await response.json();
    console.log("AJAX Response Data:", data);
  } catch (error) {
    console.error("AJAX Request Failed:", error);
  }
}

getPostData();