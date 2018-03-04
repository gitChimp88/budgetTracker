import React from 'react'
import UpdateExpense from './UpdateExpense'


export default class UpdateProject extends React.Component {
	
    
	handleUpdate(){
        debugger;
		var project = this.refs.project.value
	    var amount = this.refs.amount.value
		
	    var balance = this.props.balanceTotal
		var totalExpense = this.props.totalExpenses
		
		
		var id = this.props.id
		var view = this.props.project
		
		if(this.refs.project.value == ""){
			this.props.updateProjects(id, view, amount, totalExpense)
		} else {
			this.props.updateProjects(id, project, amount, totalExpense)
		}
		
		
		this.refs.project.value = ""
		this.refs.amount.value = ""
	}
	
	handleDelete(){
		var id = this.props.id
		this.props.handleRemove(id)
		this.props.changePage("Home")
	}
	
	handleClick(){
		this.props.changePage("AddExpense")
	}
	
	
	
	render(){
		
		const cursor = {
			cursor: "pointer",
			marginLeft: "5px"
		}
		
		const centers = {
			textAlign: "center"
		}
		
		const green = {
			color: "green"
		}
		
		const red = {
			color: "red"
		}
		
		const style = {
			    padding: "16px 19px",
				width: "80%",
				fontSize: "25px",
				color: "black",
		}
		
		var balance = this.props.balanceTotal
		
		return ( 
			   <div>
					<div style={centers}>
						<h1>{this.props.project}</h1>
					<input style={style} ref="project" type="text" placeholder="project name"/>
					
					<img onClick={this.handleUpdate.bind(this)} style={cursor} height="50" width="50" src="/images/edit.png"></img>
					<h2>{this.props.amount}</h2>
				
					<input style={style} ref="amount" type="number" placeholder="initial budget"/>
					<img onClick={this.handleUpdate.bind(this)} style={cursor} height="50" width="50" src="/images/edit.png"></img>
						
						<hr/>
						
						<h2>Balance</h2>
						
						{balance <= 0 ? <h3 style={red}>{this.props.balanceTotal}</h3> : <h3 style={green}>{this.props.balanceTotal}</h3> }
						
						
				    </div>
				
					<hr/>
					
						<h2 style={centers}>Expenses</h2>
						
						<div className="images">
							<img onClick={this.handleClick.bind(this)} style={cursor} height="50" width="50" src="/images/add.png"></img>
							<p>Add</p>
				        </div>
						
				
					<hr/>

					{this.props.expense.map((ele, i)=>{
						
							return(
								<div key={i}>
									<UpdateExpense
										id = {this.props.id}
									    removeIt = {this.props.removeIt}
										index = {i}
										balanceTotal = {this.props.balanceTotal}
										totalExpenses = {this.props.totalExpenses}
										category = {ele.category}
										name = {ele.name}
										amount = {ele.amount}
										updateExpenses = {this.props.updateExpenses}
										/>
									<hr/>
							     </div>
						)
					
				})}
				
			
			
					
					
			       
		   </div>
			
			)
	
	}
}
