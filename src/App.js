import React, { Component } from 'react';
import Lista from './components/Lista';
import Header from './components/Header';
import AddList from './components/AddList'
import './App.css';

class App extends Component {
  state = {
    lista: [
      {
        id: '1',
        title: 'naslov 1',
        description: 'description for title1',
        finished: false

      },
      {
        id: '2',
        title: 'naslov 2',
        description: 'description for title2',
        finished: false

      },
      {
        id: '3',
        title: 'naslov 3',
        description: 'description for title3',
        finished: false

      }
    ]
  }
  
  changeComplete = (id) => {
    // console.log(id);
    this.setState({
      lista: this.state.lista.map(list => {
        if (list.id === id) {
          list.finished = !list.finished;
        }
        return list
      })
    })
  }
  deleteList = (id) => {
    // console.log(id)
   this.setState({
     lista: [...this.state.lista.filter(list=> list.id !== id)]
   })
  }
  render() {
    // console.log(this.state.lista);
    return (
      <div className="App">
        <Header />
        <AddList />
        <Lista lista={this.state.lista} changeComplete={this.changeComplete} deleteList={this.deleteList} />


      </div>
    );
  }
}
export default App;