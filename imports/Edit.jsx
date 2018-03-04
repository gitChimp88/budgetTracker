import React from 'react'
import UpdateProject from './UpdateProject'




export default class Edit extends React.Component {
	
    
	
	click(){
		this.props.changePage("View")
	}
	
	
	render(){
		
		const cursor = {
			cursor: "pointer",
			margin: "10px"
		}
		
		const centers = {
			textAlign: "center"
		}
		
		return ( 
			   <div className="container-fluid">
				
				<img onClick={this.click.bind(this)} style={cursor} height="50" width="50" src="/images/back.png"></img>
			
				<h1 style={centers}>Edit Project</h1>
				
				<hr/>
				
				{this.props.projects.map((ele, i)=>{
					if(ele._id == this.props.view){
						return(
							<div key={i}>
								<UpdateProject
									id = {ele._id}
									expense = {ele.expense}
									project = {ele.project}
									amount = {ele.amount}
									balanceTotal = {ele.balance}
									totalExpenses = {ele.totalExpense}
								    handleRemove = {this.props.handleRemove}
									changePage = {this.props.changePage}
									updateProjects = {this.props.updateProjects}
									updateExpenses = {this.props.updateExpenses}
									removeIt = {this.props.removeIt}
									view = {this.props.view}
									
									/>
							</div>
						)
					}
				})}
				
			
					
					
			       
		       </div>
			)
	}
}