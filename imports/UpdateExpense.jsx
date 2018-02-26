import React from 'react'
import Category from './Category'



export default class UpdateExpense extends React.Component {
	
    
	handleSubmit(){
		
		var category = this.refs.category.value
		var amount = this.refs.amount.value
		var name = this.refs.name.value
		var index = this.props.index
		var id = this.props.id
		
		var balance = this.props.balanceTotal
		var totalExpense = this.props.totalExpenses
		
		var subcategory = this.props.category
		var subname = this.props.name
		var subamount = this.props.amount
		
		
		if(category && amount && name) {
			this.props.updateExpenses(id, index, category, name, amount, subamount, balance, totalExpense)
		} else if(category != "" && amount == "" && name == ""){ 
		 this.props.updateExpenses(id, index, category, subname, subamount)
			
		} else if(category != "" && amount != "" && name == ""){  
			this.props.updateExpenses(id, index, category, subname, amount, subamount, balance, totalExpense)
		} else if(category != "" && amount == "" && name != ""){ 
			this.props.updateExpenses(id, index, category, name, subamount)
		} else if(category == "" && amount == "" && name != ""){  
			this.props.updateExpenses(id, index, subcategory, name, subamount)
		} else if(category == "" && amount != "" && name == ""){ 
			this.props.updateExpenses(id, index, subcategory, subname, amount, subamount, balance, totalExpense)
		} else { 
			this.props.updateExpenses(id, index, subcategory, name, amount, subamount, balance, totalExpense)
		} 
		
		this.refs.category.value = ""
		this.refs.name.value = ""
		this.refs.amount.value = ""
   }
	
	handleRemove(){
		var category = this.props.category
		var name = this.props.name
		var amount = this.props.amount
		
		var balance = this.props.balanceTotal
		var totalExpense = this.props.totalExpenses
		
		var index = this.props.index
		var id = this.props.id
		
		this.props.removeIt(id, index, category, name, amount, balance, totalExpense)
	}
	
	
	render(){
		
		const centers = {
			textAlign: "center"
		}
		
		const marg = {
			margin: "20px",
			width: "150px",
			height: "50px"
		}
		
		return ( 
			   <div>
					
					  <Category
							category ={this.props.category}
							/>
				
				<form style={centers}>
					<select name="categories" ref="category">
						<option></option>
						<option>Food</option>
						<option>Fun</option>
						<option>Clothes</option>
						<option>Bills</option>
						<option>Travel</option>
						<option>Other</option>
					  </select>
				</form>
					
				<div className="row">
					<div className="col-xs-6 images">
						<h2>{this.props.name}</h2>
					    <input ref="name" placeholder="update name"/>
					</div>
					<div className="col-xs-6 images">
						<h2>{this.props.amount}</h2>
					    <input ref="amount" placeholder="update amount"/>
					</div>
				</div>
				    
				
					
				<div style={centers}>
					<button className="btn btn-success" style={marg} onClick={this.handleSubmit.bind(this)}>Update</button>
					<button className="btn btn-danger" style={marg} onClick={this.handleRemove.bind(this)}>Remove</button>
				</div>
					
			
					
		       </div>
			
			)
	
	}
}
