import React,{Component} from 'react';
import './App.css';
import TodoElement from './TodoElement';


class ToDoList extends Component {


    constructor(props){

        super(props);
         this.state ={
          singleTodo:{
            id:" ",
            title:" ",
            description:"Ne",
            completed:false,
            deleted:false
          },

          TodoList:[
            
            {
              id:0,
              title:"Math HomwWork",
              description:"Try the problems in page 23",
              completed:false,
              deleted:false
          },
        
          {
            id:1,
            title:"Laundry",
            description:"Dry clean the party dress",
            completed:false,
            deleted:false
        },
        {
          id:2,
          title:"React project",
          description:"Complete the react todo list mini project",
          completed:false,
          deleted:false
      },
    
      {
        id:3,
        title:"Complete the work book",
        description:"bla bla bla",
        completed:false,
        deleted:false
    },
  
        
      {
        id:3,
        title:"Complete the work book",
        description:"bla bla bla",
        completed:false,
        deleted:false
    },
  
        
        
        ]


        } 
    }

    titletHandler = (e)=>{
   
     const TodoElement= {
            id:"",
            title:e.target.value,
            description:" ",
            completed:false,
            deleted:false


     }
     this.setState((state)=>{

     // this.state.TodoList.push(TodoElement)
      //console.log(this.state.TodoList)
      console.log("previous state"+JSON.stringify(state.singleTodo))
      let desc=this.state.singleTodo.description
      console.log("desc: "+desc)
       return{
        singleTodo:{
          id:"",
          title:TodoElement.title,
          description:desc,
          completed:false,
          deleted:false
              } 

      }
   
     }
     
       )

       console.log(JSON.stringify(this.state.singleTodo))

    }


    descriptionHandler =(e)=>{
      let description = e.target.value;
    //  console.log("description"+description)
      this.setState((state)=>{

        return{
          singleTodo:{
            id:"",
            title:this.state.singleTodo.title,
            description:description,
            completed:false,
            deleted:false
                } 
  
        }
     

      }
       
    
    )
      console.log("description updated: "+JSON.stringify(this.state.singleTodo))
    }




    AddTodo=()=>{

      let TodoElement= {
        id:"",
        title:this.state.singleTodo.title,
        description:this.state.singleTodo.description,
        completed:this.state.singleTodo.completed,
        deleted:this.state.singleTodo.deleted


 }
//console.log("new too: "+JSON.stringify(TodoElement))


this.setState((state)=>{
/* 
let previousTodos = [...state.TodoList]
console.log(Array.isArray(previousTodos))
previousTodos.push(TodoElement) */
let previousTodos=this.state.TodoList
previousTodos.push(TodoElement)
console.log("previousTodos : "+JSON.stringify(previousTodos)) 

return {
        ToDoList:previousTodos

}


})

    }
  



    render() {
      console.log("hii")
      return(


        <>
        <div className="TextInput" >
                <input  type="text" placeholder="Add your todo-title" onChange={this.titletHandler}/>
                <input  type="text" placeholder="Add your todo-description" onChange={this.descriptionHandler}/>
                <input type="button"  value="Add" onClick={this.AddTodo}/>

        {/*   {this.state.TodoList.map((i)=>{  
           
            return <TodoElement Title={i.title} Description={i.description}/>}
          )}
           */}
        </div>
      
        </>
      );
    }
  }

  export default ToDoList;