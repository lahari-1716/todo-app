import React from 'react';
import ListItems from './Todo';

type MyProps={
  items:any;
  currentItem:{text:any, key:any}
}

type MyState ={
  items: any;
  currentItem:{text:any, key:any}
}


class TodoList extends React.Component<MyProps,MyState> {
  constructor(props:MyProps){
    super(props);
    this.state = {
      items:[],
      currentItem:{
        text:'',
        key:''
      }
    }
    this.addItem = this.addItem.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.deleteItem =this.deleteItem.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
  
  }

  addItem(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    const newItem = this.state.currentItem;
    if(newItem.text !==""){
      const items = [...this.state.items, newItem];
    this.setState({
      items: items,
      currentItem:{
        text:'',
        key:''
      }
    })
    }
  }
  handleInput(e: React.FormEvent<HTMLInputElement>){
    this.setState({
      currentItem:{
        text: e.currentTarget.value,
        key: Date.now()
      }
    })
  }
 
  deleteItem(key: any){
    const filteredItems= this.state.items.filter((item: { key: any; }) =>
      item.key!==key);
    this.setState({
      items: filteredItems
    })

  }
  setUpdate(text: any,key: string){
    console.log("items:"+this.state.items);
    const items = this.state.items;
    items.map((item: { key: string; text: any; })=>{      
    if(item.key===key){
        console.log(item.key +"    "+key)
        item.text= text;
      }
    })
    this.setState({
      items: items
    }) }
 
 
render(){
  return (
    <div className="App">
      <header>
        <form id="to-do-form" onSubmit={this.addItem}>
          <input type="text" placeholder="What about Today?" value= {this.state.currentItem.text} onChange={this.handleInput}></input>
          <button type="submit">Add</button>
        </form>
        <p>{this.state.items.text}</p>
        <ListItems items={this.state.items} deleteItem={this.deleteItem} setUpdate={this.setUpdate}/>
      </header>
      <style>{`body{
  background-color: white;
}
.App{
  background-color: skyblue;
  min-height:500px;
  width: 400px;
  margin: 40px auto;
}

#to-do-form input{
  background-color: black;
  border: 0; 
  color: #fff;
  width: 200px;
  height: 50px;
  margin: 20px;
  padding: 0 20px;
  font-size: 18px;
  border-radius: 10px;
}
#to-do-form input::placeholder{
  color: white;
}
#to-do-form input:focus{
  outline: none;
}
#to-do-form button{
  height: 50px;
  width: 80px;
  border-radius: 5px;
  border: 0;
  background-color: green; 
  cursor: pointer;
}
#to-do-form button:focus{
  outline: none;
}
      `}</style>
    </div>
  );
 }
}


export default TodoList;
