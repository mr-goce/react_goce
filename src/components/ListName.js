import React, { Component } from 'react'

export class ListName extends Component {
    getStyle = () => {

        if (this.props.listName.finished) {
            return {
                borderBottom: '2px black solid',
                textDecoration: 'line-through'
            }
        } else {
            return {
                borderBottom: '2px black solid',
                textDecoration: 'none'
            }
        }
    }

    // changeComplete = (event) => {
    //     console.log(this.props)
    // }
    render() {
        // console.log(this.props.listName);
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type='checkbox' onChange={this.props.changeComplete.bind(this, this.props.listName.id)}></input>
                    {this.props.listName.description}
                    <button onClick={this.props.deleteList.bind(this, this.props.listName.id)} style={buttonStyle}>x</button>
                </p>
            </div>
        )
    }
}
// const bckColor = {
//     backgroundColor: 'grey'
// }
const buttonStyle = {
    background: 'red',
    borderRadius: '50%',
    padding: '2px 10px',
    float: 'right'
}
export default ListName
