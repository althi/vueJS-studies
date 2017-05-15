var home = new Vue({
  el: "#app",
  data: {
    message: "Hello Vue.js!",
    name: "Thiago",
    lastName: "Marques"
  }
})

var list = new Vue ({
	el: "#list",
	data: {
		todos: [
			{ text: "Learn Javascript" },
			{ text: "Learn Vue" },
			{ text: "Build something awesome" }
		]
	}
})



//Define a new component called todo-item

Vue.component('todo-item', {
	template: '<li> This is a todo </li>'
})