// your code here
document.getElementById('shareForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  const name = document.getElementById('name').value.trim();
  const year = document.getElementById('year').value.trim();
  const baseURL = 'https://localhost:8080/';
  const urlDisplay = document.getElementById('url');

  let queryParams = [];

  if (name) {
    queryParams.push(`name=${encodeURIComponent(name)}`);
  }

  if (year) {
    queryParams.push(`year=${encodeURIComponent(year)}`);
  }

  if (queryParams.length > 0) {
    urlDisplay.textContent = `${baseURL}?${queryParams.join('&')}`;
  } else {
    urlDisplay.textContent = baseURL;
  }
});
