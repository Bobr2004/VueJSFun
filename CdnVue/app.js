Vue.createApp({
   data(){
      return {
         todos: [],
         inputVal:""
      }
   },
   methods: {
      addTodo(){
         if (this.inputVal) this.todos.push(this.inputVal);
         this.inputVal = "";
      }
   },
}).mount("#root")