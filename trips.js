// JavaScript code for handling search functionality

document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get the search query
    var searchQuery = document.getElementById('search-input').value;
    
    // Perform search logic (you can implement this based on your requirements)
    console.log('Search query:', searchQuery);
    
    // Clear the input field
    document.getElementById('search-input').value = '';
});
