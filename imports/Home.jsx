import React from 'react'
import Details from './Details'
import FlipMove from 'react-flip-move'


export default class Home extends React.Component {
	
		constructor(){
			super()
			this.state = {
				click: false
			}
		}
	
	
	 selectPage(e){
                this.props.changePage("NewProject")
        }
	
		click(){
			
		var click = this.state.click
		this.setState({click: !click})
	}
	
	
	
	render(){
		
		
		
		const center = {
			textAlign: "center",
			fontSize: "90px",
			border: "3px solid black",
			backgroundColor: "white",
			opacity: "0.7"
		}
		
		const big = {
			fontSize: "80px;",
			fontWeight: "bold",
			
		}
		
		const border = {
			border: "3px solid black",
			height: "95px",
			marginTop: "0",
			marginBottom: "0",
			textAlign: "center",
			fontSize: "50px",
			lineHeight: "85px",
			backgroundColor: "white",
			opacity: "0.7"
		}
		
		const back = {
			backgroundColor: "white",
			opacity: "0.9",
			cursor: "pointer"
		}
		
		
		
		
		return(
			
					
				
              <div className="container-fluid">
				
					<h1 style={center}>Home</h1>
				
				  <div className="row">
					  <div className="col-xs-8">
						  <h1 style={big} style={border}>Projects</h1>
					  </div>
					  <div className="col-xs-4">
						
						  <div>
							  <img onClick={this.selectPage.bind(this)} style={back} height="100" width="100" src="/images/add.png"></img>
						  </div>
							  
					  </div>
				  </div>
					
					<hr/>
				<br/>
					
				<FlipMove>

					{this.props.projects.map((ele, i)=>{
						return ( 
							<div key={i}>
							<Details 
								   remove = {this.props.remove}
								   update = {this.props.update}
								   
								   id = {ele._id}
								   project = {ele.project}
								   amount = {ele.amount}
								   expense = {ele.expense}
								   changePage = {this.props.changePage}
								   viewChange = {this.props.viewChange}
								   handleRemove = {this.props.handleRemove}
								   />
								<hr/>
								</div>
							)
					})}

				    </FlipMove>
					
				
					
				    
				
			  </div>

			
		        
		)
	}
}