import React from 'react'

export default class NewProject extends React.Component {
	
	
	 selectPage(e){
		 	/*save name and budget and continue to new expense*/
		 
		 var project = this.refs.name.value
		 var amount = this.refs.amount.value
		 if(project && amount){
			 this.props.setProject(project, amount)
			 this.props.changePage("NewExpense")
		 }
		 
        }
	
	
	
	goBack(){
		/*this just goes back a page and resets state to nothing*/
		this.props.resetProject()
		this.props.changePage("Home")
	}
	
	
	
	render(){
		
		const cursor = {
			cursor: "pointer",
			backgroundColor: "white",
			opacity: "0.8"
		}
		
		
		
		const center = {
			textAlign: "center",
			fontSize: "70px",
			border: "3px solid black",
			backgroundColor: "white",
			opacity: "0.7"
		}
		
		const big = {
			fontSize: "20px;",
			fontWeight: "bold"
		}
		
		const border = {
			border: "3px solid black",
			height: "95px",
			marginTop: "0",
			marginBottom: "0",
			textAlign: "center",
			lineHeight: "85px",
			backgroundColor: "white",
			opacity: "0.7"
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
			marginTop: "15px"
		}
		
		return(
				<div className="container-fluid">	
				
					
				
					<div className="row">
						<div className="col-xs-2">
							<img onClick={this.goBack.bind(this)} style={cursor} height="50" width="50" src="/images/back.png"></img>
						</div>
						<div className="col-xs-10">
							<h1 style={center}>New Project</h1>
						</div>
					</div>
						
							<hr/>
				<br/>
							
				
							<div className="row">
								<div className="col-xs-3">
									<h3 style={marg}>Name:</h3>
								</div>
								<div className="col-xs-9">
									{this.props.project ? <h1>{this.props.project}</h1> : <input style={style} ref="name" /> }
								</div>
							</div>
				
							<div className="row">
								<div className="col-xs-3">
									<h3 const={marg}>Budget:</h3>
								</div>
								<div className="col-xs-9">
									{this.props.amount ? <h1>{this.props.amount}</h1> : <input style={style} ref="amount" /> }
								</div>
							</div>
				
							<hr/>
				<br/>
							
							
			    
				  <div className="row">
					  <div className="col-xs-8">
						  <h1 style={big} style={border}>Add Expense</h1>
					  </div>
					  <div className="col-xs-4">
						
							  <img onClick={this.selectPage.bind(this)} style={cursor} height="100" width="100" src="/images/add.png"></img>
					  </div>
				  </div>
				
							<hr/>
				
							
							
		                
				
				
				
		        </div>
		)
	}
}