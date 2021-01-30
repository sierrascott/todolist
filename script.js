
// Custom name
let name = prompt("What's your name?");
var firstLetter = name.slice(0, 1);
cap = firstLetter.toUpperCase();
restLetters = name.slice(1, name.length);
low = restLetters.toLowerCase();
capName = cap + low;
if (name!= null) {
document.getElementById("name").innerHTML =
    capName + "'s";
}

// Current date
let today = new Date();
document.getElementById("currentDay").innerHTML = today.toDateString();


let app = new function() {

  this.el = document.getElementById('tasks');

// Default tasks
  this.tasks = ['Work', 'Play'];

// Task(s) count
  this.Count = function(data) {
    var el   = document.getElementById('counter');
    var name = 'task to complete';

    if (data) {
      if (data > 1) {
        name = 'tasks to complete';
      }
      el.innerHTML = data + ' ' + name ;
    } else {
      el.innerHTML = 'No ' + name;
    }
  };

  // Populate list
  this.FetchAll = function() {
    var data = '';

    if (this.tasks.length > 0) {
      for (i = 0; i < this.tasks.length; i++) {
        data += '<tr>';
        data += '<td>' + this.tasks[i] + '</td>';
        data += '<td><button onclick="app.Edit(' + i + ')">Edit</button></td>';
        data += '<td><button onclick="app.Delete(' + i + ')">Delete</button></td>';
        data += '</tr>';
      }
    }

    this.Count(this.tasks.length);
    return this.el.innerHTML = data;
  };

// Add task
  this.Add = function () {
    el = document.getElementById('add-name');
    // Get the value
    var task = el.value;

    if (task) {
      // Add the new value
      this.tasks.push(task.trim());
      // Reset input value
      el.value = '';
      // Dislay the new list
      this.FetchAll();
      console.log("Successfully added item.")
    }
  };

// Edit task
  this.Edit = function (item) {
    var el = document.getElementById('edit-name');
    // Display value in the field
    el.value = this.tasks[item];
    // Display fields
    document.getElementById('spoiler').style.display = 'block';
    self = this;

    document.getElementById('saveEdit').onsubmit = function() {
      // Get value
      var task = el.value;

      if (task) {
        // Edit value
        self.tasks.splice(item, 1, task.trim());
        // Display the new list
        self.FetchAll();
        // Hide fields
        CloseInput();

        console.log("Successfully edited item.")
      }
    }
  };

//Delete task
  this.Delete = function (item) {
    // Delete the current row
    this.tasks.splice(item, 1);
    // Display the new list
    this.FetchAll();
    console.log("Successfully deleted item.")
  };

}

app.FetchAll();

function CloseInput() {
  document.getElementById('spoiler').style.display = 'none';
}

//Quotes
let quotes = [
  "'Life is too complicated not to be orderly.' - Martha Stewart",
  "'Gitter done!'",
  "'Productivity is being able to do things that you were never able to do before.' - Franz Kafka",
  "'How many functions does it take to change the world?'",
  "'Amateurs sit and wait for inspiration, the rest of us just get up and go to work.' - Stephen King",
  "'Every error is a chance to learn'",
  "'Once you have mastered time, you will understand how true it is that most people overestimate what they can accomplish in a year – and underestimate what they can achieve in a decade!' - Tony Robbins",
  "'I function better at night'",
  "'The key is not to prioritize what’s on your schedule, but to schedule your priorities.' - Stephen Covey"
];

  // Get random quote and display
  var randomNumber = Math.floor(Math.random() * quotes.length);
  document.getElementById('encouragement').innerHTML = quotes[randomNumber];


// Tweet quote on click
function tweetQuote() {
  var generatedQuote = document.getElementById('encouragement').innerHTML;
  var tweetUrl = ' https://twitter.com/intent/tweet?text=' + encodeURIComponent(generatedQuote) + ' @msassafras';
   window.open(tweetUrl);
}
