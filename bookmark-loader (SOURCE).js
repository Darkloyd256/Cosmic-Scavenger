async function replaceCurrentPage() {
  const pageUrl = 'https://raw.githubusercontent.com/Darkloyd256/Cosmic-Scavenger/main/index.html';
  const baseUrl = 'https://raw.githubusercontent.com/Darkloyd256/Cosmic-Scavenger/main/';

  try {
    // 1. Fetch the raw HTML content
    const response = await fetch(pageUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    let htmlContent = await response.text();

    // 2. Add a <base> tag to the <head>
    // This is essential so it can find 'game.js', 'style.css', etc.
    const baseTag = `<base href="${baseUrl}">`;
    htmlContent = htmlContent.replace('<head>', `<head>${baseTag}`);

    // 3. Replace the entire document
    document.open();
    document.write(htmlContent);
    document.close();

  } catch (error) {
    console.error('Failed to load and replace page:', error);
  }
}

// Run the function to replace the page
replaceCurrentPage();
