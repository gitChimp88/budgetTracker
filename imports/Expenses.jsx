import React from 'react'
import Category from './Category'




export default class Expense extends React.Component {
	
    
	
    render(){
		
		const style = {
			display: "inline-block",
			margin: "10px"
		}
		
		const centers = {
			textAlign: "center"
		}
		
		return ( 
			   <div style={centers}>
				
				
				{this.props.expense.map((ele, i)=>{
					
						return(
							<div key={i} style={style}>
								<Category
									category={ele.category}
									name = {ele.name}
									amount = {ele.amount}
									/>
							</div>
						)
					
				})}
				
		     </div>
			)
		}
	
}