// tasks.js

// Load JSON file
var xhr = new XMLHttpRequest();
xhr.open('GET', 'tasks.json', true);
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

    console.log(listName)
    showTasks(listName, jsonData[listName]);

  });
}

// Show tasks of a list
function showTasks(name, tasks) {
  var taskContainer = document.getElementById('tasks');
  var h2 = document.createElement('h2');
  h2.innerHTML = name;
  h2.id = name;

  var ul = document.createElement('ul');
  tasks.forEach(function(task) {
    var li = document.createElement('li');
    li.textContent = task;
    ul.appendChild(li);
  });
  taskContainer.appendChild(h2);
  taskContainer.appendChild(ul);
}
