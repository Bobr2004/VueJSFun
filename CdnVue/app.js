Vue.createApp({
   data() {
      return {
         todos: [],
         inputVal: "",
         count: 0,
         activeTodo: -1
      };
   },

   computed: {
      todosLength() {
         return this.todos.length;
      }
   },


   watch: {
      todos(val){
         console.log(val)
      }
   },

   methods: {
      addTodo() {
         if (this.inputVal) this.todos = [...this.todos, this.inputVal]
         this.inputVal = "";
      },
      increment() {
         this.count += 1;
      },
      decrement() {
         this.count -= 1;
      },
      addNumber(num) {
         return () => {
            this.count += num;
         };
      },

      toggle(i){
         this.activeTodo = i
      }
   }
}).mount("#root");
