import React from 'react'


export default class Details extends React.Component {
	
		
	
		
	
	changePage(e){
		//var target = e.target.previousSibling.innerHTML
		var target = this.props.id
		this.props.viewChange(target)
		this.props.changePage("View")
	}
	
	
	handleDelete(){
		var id = this.props.id
		this.props.handleRemove(id)
		
	}
	
	
	
	render(){
		
		const cursor = {
			cursor: "pointer",
			textAlign: "center"
		}
		
		const border = {
			fontSize: "40px",
			padding: "5px",
			//overflow: "scroll",
			textAlign: "center"
			
		}
		
		const back = {
			backgroundColor: "white",
			opacity: "0.8",
			borderRadius: "30px",
			border: "0.5px solid grey",
			textAlign: "center"
			
		}
		
		
		
		
			return (
					
						<div className="container-fluid" style={back}>
						
						     
								 <h1 style={border}>{this.props.project}</h1>
					      
							    
						
							
								<img onClick={this.changePage.bind(this)} style={cursor} height="75" width="75" src="/images/eye.png"></img>
								<div className="margin image">
									
									<img  onClick={this.handleDelete.bind(this)} style={cursor} height="50" width="50" src="/images/trash.png"></img>
									
							
								
							</div>
						
						</div>
					    
						
				    
			)
		
			
		 
			
			 

			
		
		
	}
}