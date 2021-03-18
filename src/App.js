import React, { Component } from 'react';
import List from '../src/components/List';

class App extends Component {
  state={
    items:[],
    currentText:{
      text:'',
      key:''
    }
  }
  inputText=(e)=>{
    this.setState({
      currentText:{
        text:e.target.value,
        key:Date.now()
      }
    })
  }
  addText=(e)=>{
    e.preventDefault();
    const newItem=this.state.currentText;
    if(newItem.text!==''){
      const newItems=[...this.state.items,newItem];
      this.setState({
        items:newItems,
        currentText:{
          text:'',
          key:''
        }
      })
    }
  }
  delete=(key)=>{
    const filteredItem=this.state.items.filter(item=>item.key!==key)
    this.setState({
      items:filteredItem
    })
  }
  update=(text,key)=>{
    const items=this.state.items;
    items.map(item=>{
      if(item.key===key){
        item.text=text
      }
    })
    this.setState({
      items:items
    })
  }
  render() {
    return (
      <section>
        <form>
          <div className="form">
            <input type="text" placeholder="Enter text" value={this.state.currentText.text} onChange={this.inputText}/>
            <button type="submit" onClick={this.addText}>Add Text</button>
          </div>
          <List item={this.state.items} delete={this.delete} update={this.update}></List>
        </form>
      </section>
      
    )
  }
}
export default App;