import React, { Component } from 'react'

export class SimpleComponent extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         start:0,
         toogle:false,
      }
    }

    setvalue=()=>{
        if(this.state.toogle===true){
        this.setState({
            start:this.state.start+1
         } )}
         else{
            this.setState({
                start:this.state.start,
            })
         }
     
    }

    toggle=()=>{
        if(this.state.toogle===false){
        this.setState({
            toogle:true,
        })}
        else{
            this.setState({
                toogle:false,
            })
        }

    }



  render() {
    console.log("Simple Component")
    return (
      <div>
        <h1>Simple Component</h1>
        <div>
            {this.state.start}
        </div>
        <div>
            
            <button onClick={this.toggle} >Set Toggle</button>
            <button onClick={this.setvalue} >Counter</button>
        </div>
        
      </div>
    )
  }
}

export default SimpleComponent