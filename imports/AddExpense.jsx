import React from 'react'
import Adding from './Adding'




export default class AddExpense extends React.Component {
	
    
	
	click(){
		this.props.changePage("Edit")
	}
	
	
	render(){
		
		const cursor = {
			cursor: "pointer"
		}
		
		const centers = {
			textAlign: "center"
		}
		
		
		return ( 
			   <div className="container-fluid">
				
				<img onClick={this.click.bind(this)} style={cursor} height="50" width="50" src="/images/back.png"></img>
				<h1 style={centers}>Add Expense</h1>
				
				<hr/>
				
				{this.props.projects.map((ele, i)=>{
					if(ele._id == this.props.view){
						return(
							<div key={i}>
								<Adding
									id = {ele._id}
									expense = {ele.expense}
									project = {ele.project}
									amount = {ele.amount}
									balanceTotal = {ele.balance}
									totalExpenses = {ele.totalExpense}
								    changePage = {this.props.changePage}
									updateNewExpense = {this.props.updateNewExpense}
								  />
							</div>
						)
					}
				})}
				
			
					
					
			       
		       </div>
			)
	}
}