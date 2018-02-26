import React, { Component } from 'react'
import { Form, Grid, Image, Transition } from 'semantic-ui-react'

const transitions = ['jiggle', 'flash', 'shake', 'pulse', 'tada', 'bounce']

const options = transitions.map(name => ({ key: name, text: name, value: name }))

export default class ShakeOne extends React.Component {
	constructor(){
		super()
		this.state = {
			animation: transitions[0], duration: 500, visible: true 
		
		}
		
	}


  

  toggleVisibility(e){
	  this.setState({ visible: !this.state.visible })
	
	 
	  
	  var cat = e.target.nextSibling.innerText;
	  this.props.newExpense(e, cat)
  } 

  render() {
    const { animation, duration, visible } = this.state
	
	const cursor = {
			cursor: "pointer",
			backgroundColor: "white",
			opacity: "0.7",
		    borderRadius: "5px"
		    
		}
	

    return (
  
        <div >
			 
          <Transition animation={animation} duration={duration} visible={visible}>
				<img style={cursor} onClick={this.toggleVisibility.bind(this)} height="100" width="100" src="/images/confetti.png"></img>
			  </Transition>
		     <p>Fun</p>
		  </div>
          
         
        
     
    )
  }
}