// Load JSON file
var xhr = new XMLHttpRequest();
xhr.open('GET', '/tasks/tasks.json', true);
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    try {
      var data = JSON.parse(xhr.responseText);
      createListLinks(data);
    } catch (e) {
      console.error('Failed to parse JSON:', e);
    }
  }
};
xhr.send();

// Create link for each list name
function createListLinks(jsonData) {
  var container = document.getElementById('nav-items');
  //container.innerHTML = ''; // clear if anything exists

  Object.keys(jsonData).forEach(function(listName) {
    var li = document.createElement('li');
    var a = document.createElement('a');

    a.textContent = listName;
    a.href = '/tasks/#' + listName; // points to an element with id=listName
    
    li.appendChild(a);
    container.appendChild(li);
  });
}