import React from 'react'




export default class NewCategory extends React.Component {
	
    
	
	
	
	
	render(){
		
		
		
		return ( 
			
					
            <div className="row">
							<div className="col-xs-12">
								<h2 className="centers">Select a category</h2>
							</div>
					  
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


