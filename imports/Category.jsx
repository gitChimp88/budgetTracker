import React from 'react'





export default class Category extends React.Component {
	
    
	
    render(){
		
		var category = this.props.category
		var shown;
		
		if(category == "Food"){
			shown = <div className="images">
							<img height="100" width="100" src="/images/food.png"></img>
							<p>Food</p>
							<p>{this.props.name}</p>
							<p>{this.props.amount}</p>
				    </div>
		} if(category == "Fun"){
			shown = <div className="images">
						<img height="100" width="100" src="/images/confetti.png"></img>
						<p>Fun</p>
						<p>{this.props.name}</p>
						<p>{this.props.amount}</p>
			        </div>
		} if(category == "Clothes"){
			shown = <div className="images">
						<img height="100" width="100" src="/images/shirt.png"></img>
						<p>Clothes</p>
						<p>{this.props.name}</p>
						<p>{this.props.amount}</p>
			        </div>
		} if(category == "Bills"){
			shown = <div className="images">
						<img height="100" width="100" src="/images/bills.png"></img>
						<p>Bills</p>
						<p>{this.props.name}</p>
						<p>{this.props.amount}</p>
			        </div>
		} if(category == "Travel"){
			shown = <div className="images">
						<img height="100" width="100" src="/images/travel.png"></img>
						<p>Travel</p>
						<p>{this.props.name}</p>
						<p>{this.props.amount}</p>
			        </div>
		} if(category == "Other"){
			shown = <div className="images">
						<img height="100" width="100" src="/images/other.png"></img>
						<p>Other</p>
						<p>{this.props.name}</p>
						<p>{this.props.amount}</p>
			        </div>
		}
		
		return ( 
			   <div>
					{shown}
			   </div>
			)
		}
	
}