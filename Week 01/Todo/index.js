Vue.component('todo-item', {props: ['todo'], template: '<li>{{todo.text}}</li>'})
var app = new Vue({
    el: '#app',
    data: {
        items: [
            {text:'Assignment 1: Project', completed:false},
            {text:'Assignment 2: Project and PPT', completed:false},
            {text:'Assignment 3: Portfolio', completed:false}
        ]
    },
    methods:{
        toggle: function(item){
            item.completed = !item.completed;
        }
    }
});