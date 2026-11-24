const { customFilter, customMap, customReduce } = require("./utils.js");

async function testCustomMethods() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
    const data = await response.json();

    const shortPosts = customFilter(data, (post) => post.title.length < 25);

    const titles = customMap(shortPosts, (post) => post.title.toUpperCase());
    console.log("Filtered Uppercase Titles:", titles);

    const totalChars = customReduce(
      titles,
      (acc, title) => acc + title.length,
      0
    );
    console.log("Total characters in filtered titles:", totalChars);

  } catch (error) {
    console.error("Request Failed:", error);
  }
}

testCustomMethods();