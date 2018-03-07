import React from 'react'
import Tick from './Tick'
import Shake from './Shake'
import ShakeOne from './Shake1'
import Shakes from './Shake2'
import ShakesTwo from './Shake3'
import ShakesThree from './Shake4'
import ShakesFour from './Shake5'



export default class NewExpense extends React.Component {
	
	constructor(){
		super()
		this.state = {
			clicked: false,
			category: ''
		}
		this.click = this.click.bind(this)
		this.finish = this.finish.bind(this)
	}
	
	 newExpense(e, cat){
		
		 var category;
		 if(cat) {
			 category = cat
		 } else {
			  category = e.target.nextSibling.innerText
		 }
		 var name = this.refs.name.value
		 var amount = this.refs.amount.value
		
		 //make sure boxes arent empty with conditionals
		 if(category && name && amount) {
		     this.props.setExpense(category, name, amount)
			 this.props.setTotal(amount)
			 this.refs.name.value = ''
			 this.refs.amount.value = ''
			 this.click()
		 }
		 
		 
      }
	
	handleClick(e){
		var cat = e.target.nextSibling.innerText
		
		this.setState({category: cat})
	}
	
	goBack(){
		
		/*this should reset state of expenses*/
		this.props.expense()
		this.props.changePage("NewProject")
	}
	
	/*
	finish(){
		
		this.props.changePage("NewProject")
	}*/
	
	click(){
		
		var clicker = this.state.clicked
		this.setState({clicked: !clicker})
	}
	
	finish(){
		/*submit all project details in here and change page to home*/
		debugger;
		
		if(this.props.totalExpense > 1){
			
		this.props.addProject()
		this.props.viewChange(this.props.project)
		this.props.viewSwitch()	
		this.props.changePage("View")
		this.props.resetProject()
		}
		
		
	}
	
	
	
	render(){
		
		const cursor = {
			cursor: "pointer",
			backgroundColor: "white",
			opacity: "0.7"
		
		}
		
		const center = {
			textAlign: "center",
			marginBottom: "45px",
			marginTop: "20px",
			backgroundColor: "#f5f5f5",
		    opacity: "0.8",
			
		}
		
		
		
		
		const style = {
			    padding: "16px 19px",
				width: "100%",
				fontSize: "25px",
				color: "black",
				backgroundColor: "#f5f5f5",
				opacity: "0.8"
		 }
		
		const marg = {
			marginBottom: "20px",
			marginTop: "20px",
			backgroundColor: "#f5f5f5",
			opacity: "0.8",
			display: "inline-block"
		}
		
		const margin = {
			marginTop: "15px"
		}
		
		
		
		return(
				<div className="container-fluid">		
				
						<div className="row">
							
							<div className="col-xs-3">
								<img onClick={this.goBack.bind(this)} style={cursor} height="50" width="50" src="/images/back.png"></img>
							</div>
							
							<div className="col-xs-9">
								<h1 style={marg}>New Expense</h1>
							</div>
							
						</div>
							
				
						<div className="row">
							
							<div className="col-xs-3">
								<h3 style={margin}>Name:</h3>
							</div>
							
							<div className="col-xs-9">
								<input style={style} ref="name" placeholder="Expense"/>
							</div>
							
							<hr/>
					    </div>
				
						<div className="row">
							
							<div className="col-xs-3">
								<h3 style={margin}>£</h3>
							</div>
							
							<div className="col-xs-9">
								<input style={style} ref="amount" placeholder="Amount"/>
							</div>
							
						</div>
						
							
					
						<div className="row">
							<div className="col-xs-10">
								<h2 style={center}>Select a category</h2>
							</div>
							<div className="col-xs-2">
								{this.state.clicked == true ? <Tick click = {this.click} /> : null}
							</div>
					    </div>
							
							
				
							<div className="row">
								<div className="col-xs-4 images hoves">
									<Shake
										
										onClick={this.handleClick.bind(this)}
										newExpense = {this.newExpense.bind(this)}
										category = {this.state.category}
										/>
									
								</div>
								<div className="col-xs-4 images">
									<ShakeOne
										
										onClick={this.handleClick.bind(this)}
										newExpense = {this.newExpense.bind(this)}
										category = {this.state.category}
										/>
								</div>
								<div className="col-xs-4 images">
									<Shakes
										
										onClick={this.handleClick.bind(this)}
										newExpense = {this.newExpense.bind(this)}
										category = {this.state.category}
										/>
								</div>
							</div>
				
							<div className="row">
								<div className="col-xs-4 images">
									<ShakesTwo
										
										onClick={this.handleClick.bind(this)}
										newExpense = {this.newExpense.bind(this)}
										category = {this.state.category}
										/>
								</div>
								<div className="col-xs-4 images">
									<ShakesThree
										
										onClick={this.handleClick.bind(this)}
										newExpense = {this.newExpense.bind(this)}
										category = {this.state.category}
										/>
								</div>
								<div className="col-xs-4 images">
									<ShakesFour
										
										onClick={this.handleClick.bind(this)}
										newExpense = {this.newExpense.bind(this)}
										category = {this.state.category}
										/>
								</div>
								
							</div>
				
								
						<div className="row">
							<div className="col-xs-12">
								<div className="centers">
									<button className="centers btn-success finish-button" onClick={this.finish.bind(this)}>Calculate!</button>
								</div>
								
							</div>
					    </div>		
								
					
				
		        </div>
		)
	}
}