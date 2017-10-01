<template lang='pug'>
    .wrap
        .wrap-title
            h1.title Todo list
            .enter-field
                button(
                    type='button'
                    @click='addTodo'
                ).btn.btn-add Add note
                input(
                    placeholder='enter new task' 
                    type='text'
                    v-model='newToDo'
                    @keydown.enter='addTodo'
                )
        ul
            li(
                v-for='(todo, index) in todos'
            ).item
                todo-item(
                    :todoName='todo'
                    :index='index'
                    @removeItem='removeTodo'
                    @savechanges='saveItemName'
                )
        
</template>

<script>
export default {
    data: function () {
        return {
            todos: ['First', 'Second'],
            newToDo: ''
        }
    },
    methods: {
        addTodo() {
            if (!this.newToDo.length) {
                return;
            }
            this.todos.push(this.newToDo);
            this.newToDo = '';
        },
        removeTodo(id){
            this.todos.splice(id, 1);
        },
        saveItemName(id,newName){
            // console.log(newName)
            // console.log(this.todos[id])
            this.todos.splice(id, 1, newName)
        }
        
    },
    components: {
        'todo-item': require('./item')
    }
}
</script>

<style lang='scss' scoped>
    .wrap {
        // width: 100%;
        height: 100%;
        text-align: justify;
        padding: 5px;
    }
    .wrap-title {
        border: 2px solid grey;
        border-radius: 5px;
        margin-bottom: 10px;
        padding: 5px;
        background-color: lightgrey;
    }
    .enter-field {
        display: flex;
        flex-direction: column;
    }
    .item {
        margin: 0;
    }
    .item + .item {
        margin-top: 10px;
    }
    .title,.btn {
        margin-bottom: 10px;
    }
    input {
        margin-bottom: 10px;
        padding: 10px;
        border-radius: 5px;
    }
    .btn {
        padding: 10px 15px;
        border-radius: 5px;
        outline: none;
    }
    .btn-add {
        background-color: rgba(green,0.6);
        // flex: 0;
        align-self: flex-start;
    }
</style>
