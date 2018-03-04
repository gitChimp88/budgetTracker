import React from 'react'

export default class Adding extends React.Component {
	
	 newExpense(e){
		 
		 /*This could be a form on submit save info and change page below*/
		 var category = e.target.nextSibling.innerText
		 var name = this.refs.name.value
		 var amount = this.refs.amount.value
		 var id = this.props.id
		
		 
		 var balance = this.props.balanceTotal
		 var totalExpenses = this.props.totalExpenses
		 
		 if(category && name && amount) {
		     
			
			 this.props.updateNewExpense(id, category, name, amount, balance, totalExpenses)
			 this.refs.name.value = ''
			 this.refs.amount.value = ''
			 
		 }
		 this.props.changePage("Edit")
      }
	
	
	
	
	render(){
		
		const cursor = {
			cursor: "pointer"
		}
		
		const style = {
			    padding: "16px 19px",
				width: "100%",
				fontSize: "25px",
				color: "black",
		}
		
		const marg = {
			marginTop: "15px"
		}
		
		return(
				<div>		
							
						    
				
				
						<div className="row">
							
							<div className="col-xs-3">
								<h3 style={marg}>Name:</h3>
							</div>
							
							<div className="col-xs-9">
								<input style={style} ref="name" placeholder="Expense"/>
							</div>
							
						
					    </div>
				
						<div className="row">
							
							<div className="col-xs-3">
								<h3 style={marg}>£</h3>
							</div>
							
							<div className="col-xs-9">
								<input style={style} ref="amount" placeholder="Amount"/>
							</div>
							
						</div>
				
						<hr/>
				
							<h2>Select a category</h2>
				
							<div className="row">
								<div className="col-xs-4 images">
									<img style={cursor} onClick={this.newExpense.bind(this)} height="100" width="100" src="/images/food.png"></img>
									<p>Food</p>
								</div>
								<div className="col-xs-4 images">
									<img style={cursor} onClick={this.newExpense.bind(this)} height="100" width="100" src="/images/confetti.png"></img>
									<p>Fun</p>
								</div>
								<div className="col-xs-4 images">
									<img style={cursor} onClick={this.newExpense.bind(this)} height="100" width="100" src="/images/shirt.png"></img>
									<p>Clothes</p>
								</div>
							</div>
				
							<div className="row">
								<div className="col-xs-4 images">
									<img style={cursor} onClick={this.newExpense.bind(this)} height="100" width="100" src="/images/bills.png"></img>
									<p>Bills</p>
								</div>
								<div className="col-xs-4 images">
									<img style={cursor} onClick={this.newExpense.bind(this)} height="100" width="100" src="/images/travel.png"></img>
									<p>Travel</p>
								</div>
								<div className="col-xs-4 images">
									<img style={cursor} onClick={this.newExpense.bind(this)} height="100" width="100" src="/images/other.png"></img>
									<p>Other</p>
								</div>
								
							</div>
							
							
				
		        </div>
		)
	}
}