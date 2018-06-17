console.log('App.js is running');

// JSX - Javascript XML
var app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer'
};

var template = (
  <div>
    <h1>{app.title}</h1> 
    <p>{app.subtitle}</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);

var user = {
  name: 'KongToonArmy',
  age: 26,
  location: 'Thailand'
};
var templateTwo = (
  <div>
    <h1>{user.name.toLocaleUpperCase()}</h1> 
    <p>Age: {user.age}</p>
    <p>Location: {user.location}</p>
  </div>
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);