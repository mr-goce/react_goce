import React, { Component } from 'react'

export class AddList extends Component {
    state = {
        description: ''
    }
    render() {
        return (
            <form style={{ display: 'flex' }}>
                <input type='text' placeholder='Input list' value = {this.state.description}>


                </input>
                <button> Submit </button>

            </form>
        )
    }
}

export default AddList
