<template lang='pug'>
    .wrap
        .wpap__title
            h3(
            v-if='edit'
            ).title {{index + 1}}. {{todoName}}
            input(
                autofocus
                type='text'
                v-else
                v-model='newName'
                @keydown.enter='savechanges(index)'
            ) 
        p.text {{text}}
        .btns
            button(type='button' @click='removeItem(index)').btn.btn-delete Delete
            button(type='button' @click='editItem').btn.btn-edit Edit
            //- button(
            //-     type='button'
            //-     href='/viev/1'
            //- ).btn.btn-add Show
            router-link(
                tag='button'
                :to='{name: "view", params: {title : todoName}}'
            ).btn.btn-add Show
</template>

<script>
export default {
    props:{
        todoName:{
            type: String,
            default: 'todo list item'
        },
        index:{
            type: [Number, String],
            default: 'X'
        }
    },
    data: function () {
        return {
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut exercitationem ad, in quam molestiae eveniet necessitatibus sed beatae totam porro!',
            edit: true,
            newName: this.todoName
        }
    },
    methods: {
        removeItem(id) {
            this.$emit('removeItem', id);
        },
        editItem() {
            this.edit = !this.edit;
        },
        savechanges(id) {
            this.$emit('savechanges',id, this.newName);
            this.edit = !this.edit;
        }
    }
}
</script>

<style lang='scss' scoped>
    .wrap {
        border: 2px solid gray;
        border-radius: 5px;
        text-align: justify;
        background-color: lightgray;
        padding: 5px;
    }
    .title, .btns, .text,input{
        margin-bottom: 10px;
        
    }
    .wpap__title {
        height: 40px;
    }
    .title, input {
        background-color: #fff;
        border-radius: 5px;
        display: inline-block;
        padding: 5px;
    }
    .text {
        padding: 5px;
        background-color: #fff;
        border-radius: 5px;
    }
    .btn + .btn {
        margin-left: 10px;
    }
    .btn {
        padding: 10px 15px;
        border-radius: 5px;
        outline: none;
    }
    .btn-add {
        background-color: rgba(lightgreen,0.6);
    }
    .btn-edit {
        background-color: rgba(orange,0.6);
    }
    .btn-delete {
        background-color: rgba(tomato,0.6);
    }
</style>
