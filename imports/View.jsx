import React from 'react'
import Expense from './Expenses'



export default class View extends React.Component {
	
    
	
	click(){
		this.props.changePage("Home")
	}
	
	edit(){
		this.props.changePage("Edit")
	}
	
	
	
	
	
	render(){
		
		const cursor = {
			cursor: "pointer",
			margin: "10px"
		}
		
		
		const centers = {
			textAlign: "center",
			
			
		}
		
		const bold = {
			fontWeight: "bold"
		}
		
		const big = {
			fontSize: "70px"
		}
		
		const green = {
			color: "green"
		}
		
		const red = {
			color: "red"
		}
		
		const black = {
			color: "black"
		}
		
		return ( 
			   <div style={centers} className="container-fluid">
				
				
				<div className="row">
					<div className="col-xs-2">
						<img onClick={this.click.bind(this)} style={cursor} height="50" width="50" src="/images/back.png"></img>
						<p style={bold}>Back</p>
					</div>
					<div className="col-xs-8">
						
					</div>
					<div className="col-xs-2">
						<img onClick={this.edit.bind(this)} style={cursor} height="50" width="50" src="/images/edit.png"></img>
						<p style={bold}>Edit</p>
					</div>
				</div>
				
				
				
				
				
				{this.props.projects.map((ele, i)=>{
					if(ele.project == this.props.view){
						return(
							<div key={i}>
								<h1 style={big}>{ele.project}</h1>
								<hr style={black}/>
								<br/>
								
								<div>
									<h2>Current Balance</h2>
									
									{ ele.balance >= 0 ? <h2 style={green}>{ele.balance}</h2> : <h2 style={red}>{ele.balance}</h2> }
								    
								</div>
								
								<hr/>
								<div>
									<h2>Initial Budget</h2>
								    <h2 style={green}>{ele.amount}</h2>
								</div>
								<hr/>
								<h1>Expenses</h1>
								<hr/>
							    <br/>
								<Expense
									expense={ele.expense}
									key = {i}
									/>
								<hr/>
							
								
								<h2>Total Expense</h2>
								<h2 style={red}>{ele.totalExpense}</h2>
								
							</div>
						)
					}
				})}
				
			
					
					
			       
		       </div>
			)
	}
}