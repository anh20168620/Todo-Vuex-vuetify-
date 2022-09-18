import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store= new Vuex.Store({
    state:{
        todoInput:'',
        listTodo:[
            {id:1,text: 'di choi', isDone :false},
            {id:2,text: 'an com', isDone :true},
        ],
        tabs:['Tất cả', 'Đã xong', 'Chưa xong'],
        listFilter:[],
        typeFilter:1
    },

    getters:{
        todoInput:state=>state.todoInput,
        tabs:state=>state.tabs,
        listTodo:state=>state.listTodo,
        listFilter:state=>state.listFilter,
        typeFilter:state=>state.typeFilter,
        listTodoDone:state=>state.listTodo.filter(todo=>todo.isDone),
        listTodoUnDone:state=>state.listTodo.filter(todo=>!todo.isDone)
    },

    mutations:{
        SET_TODO_INPUT:(state, todoInput)=>{
        state.todoInput=todoInput
        },
        DELETE_TODO:(state, id)=>{
            state.listTodo= state.listTodo.filter(item=>item.id!==id)
        },
        SET_TYPE_FILTER:(state,value)=>{
            state.typeFilter=value
        },
        SET_LIST_FILTER:(state, payload)=>{
            state.listFilter=payload
        }
        
    }, 
    
})