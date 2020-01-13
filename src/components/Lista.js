import React, {Component} from 'react';
import ListName from './ListName';
import PropTypes from 'prop-types';

class Lista extends Component{
  
  render(){
    //   console.log(this.props.lista)
    return this.props.lista.map((lista)=>(
    // <h2>{lista.title }</h2>
    <ListName listName= {lista} changeComplete={this.props.changeComplete} deleteList ={this.props.deleteList}/> 
    ))
    //   <div >

    //     <h1>Lista</h1>
    //   </div>
    // );
  }
}
Lista.propTypes ={
    lista: PropTypes.array.isRequired
}
export default Lista;