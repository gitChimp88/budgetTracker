import React from 'react'
import {Budget} from './api/Budget'
import Home from './Home'
import NewProject from './NewProject'
import NewExpense from './NewExpense'
import View from './View'
import Edit from './Edit'
import AddExpense from './AddExpense'
import "./Budget.css"

export default class App extends React.Component {
	
	constructor(){
		super()
		this.state = {
			page: "Home",
			project: '',
			amount: '',
			projects: '',
			expense: [],
			view: '',
			totalExpense: 0,
			viewSwitch: ''
		
		}
		this.changePage = this.changePage.bind(this)
		this.viewChange = this.viewChange.bind(this)
		this.removeIt = this.removeIt.bind(this)
		this.setTotal = this.setTotal.bind(this)
		this.updateNewExpense = this.updateNewExpense.bind(this)
	}
	
	 
	
	addProject(){
		

		if(this.state.project && this.state.amount && this.state.expense){
            
			var project = this.state.project
			var amount = this.state.amount
			var expense = this.state.expense
			var totalExpense = this.state.totalExpense
			var balance = parseInt(amount) - parseInt(totalExpense)
			
                   
			 console.log("addProject meteor method called from the server", project, amount, expense, totalExpense, balance)
                Budget.insert({project, amount, expense, totalExpense, balance},(err,done)=>{
                        console.log(err + " id = " + done)
					 
                     this.setState({project:''})
				     this.setState({amount:''})
				     this.setState({expense:[]})
					 this.setState({totalExpense: 0})
				   
                })
            }
		}
	
	handleRemove(id){
		console.log("remove Project meteor method called from the server Project id = ", id)
                Budget.remove({_id:id})
	}
	
	viewswitch(){
		
		this.setState({viewSwitch: true})
	}
	
	changeback(){
		this.setState({viewSwitch: false})
	}
	
	
	updateProjects(id, project, amount, totalExpense){
        this.setState({view: id})
			
		var newBalance = parseInt(amount) - parseInt(totalExpense)
		
              console.log("update Budget meteor method the id is = ", id," and the project is = ", project)
			if(project && amount){
			  	Budget.update({_id:id},{ $set:{ project:project, amount:amount, balance: newBalance }
			  })
			} else if(project && !amount) {
				Budget.update({_id:id},{ $set:{ project:project }
			  })
			} else if(amount && !project){
				Budget.update({_id:id},{ $set:{ project: project, amount:amount, balance: newBalance }
			  })
			}
        }
	
	updateExpenses(id, index, category, name, amount, subamount, balance, totalExpenses){
		console.log("success ")
		var str = "expense.0.category"
		var find = str.replace("0", index)
		var str1 = "expense.0.name"
		var find1 = str1.replace("0", index)
		var str2 = "expense.0.amount"
		var find2 = str2.replace("0", index)
		
	
		var newBalance = parseInt(balance) + parseInt(subamount) - parseInt(amount)
		var newTotalExpense = parseInt(totalExpenses) - parseInt(subamount) + parseInt(amount)
	
		if(subamount && balance){
			Budget.update({_id:id},{ $set:{[find]: category, [find1]: name, [find2]: amount, balance: newBalance, totalExpense: newTotalExpense}
				})
		} else {
			Budget.update({_id:id},{ $set:{[find]: category, [find1]: name, [find2]: amount}
				})
		}
			
		
  } 
	
	updateNewExpense(id, category, name, amount, balance, totalExpenses){
		
		var newExpense = {
			category: category,
			name: name,
			amount: amount
		}
		
		var newTotalExpense = parseInt(amount) + parseInt(totalExpenses)
		var balances = parseInt(balance) - parseInt(amount)
		
		
		Budget.update({ _id: id },{ $push: { expense: newExpense }})
		
		Budget.update({ _id: id },{ $set: { balance: balances, totalExpense: newTotalExpense }})
	}
	
	removeIt(id, index, category, name, amount, balance, totalExpenses){
		console.log("success")
		
		var str = "expense.0.category"
		var find = str.replace("0", index)
		var str1 = "expense.0.name"
		var find1 = str1.replace("0", index)
		var str2 = "expense.0.amount"
		var find2 = str2.replace("0", index)
		
		var newTotalExpense = parseInt(totalExpenses) - parseInt(amount)
		var balances = parseInt(balance) + parseInt(amount)
		
		Budget.update({_id:id},{ $pull:{"expense" : {"name": name, "amount": amount}} })
		
		Budget.update({ _id: id },{ $set: { balance: balances, totalExpense: newTotalExpense }})
		
		
	}
		
	setTotal(amount){
	   
		var add = this.state.totalExpense
		var amounts = parseInt(add) + parseInt(amount)
	    this.setState({totalExpense: amounts})
	
		
	}
	
	
		setExpense(category, name, amount){
			
		var arr = this.state.expense
		
	       arr.push({category: category,
					  name: name,
					 amount: amount
					})
			
		
			this.setState({expense: arr})
	}
	
		setProject(project, amount){
			
			var project = project
			var amount = amount
			this.setState({project:project})
			this.setState({amount:amount})
		}

		expenseReset(){
			this.setState({expense: []})
		}
	
	
	componentWillMount(){
		Tracker.autorun(()=>{
			var projects = Budget.find({}).fetch()
			this.setState({projects})
		})
	
	}
	
	 changePage(page){
                this.setState({page})
		}
	
	viewChange(target){
		var target = target
		this.setState({view: target})
	}
	
	resetProject(){
		this.setState({project: ''})
		this.setState({amount: ''})
		this.setState({expense:[]})
	    this.setState({totalExpense: 0})
		
	}
	
	
	render(){
		
		var page = this.state.page
		let shown;
		
			if(page == 'Home'){
				shown = <div className="pattern">
						   <Home
							changePage = {this.changePage}
							projects = {this.state.projects}
							viewChange = {this.viewChange}
							handleRemove = {this.handleRemove.bind(this)}
							/>
					    </div> 
					 
			} else if(page == 'NewProject'){
				shown = <div className="pattern">
							<NewProject
							changePage = {this.changePage}
							setProject = {this.setProject.bind(this)}
							project = {this.state.project}
							amount = {this.state.amount}
							addProject = {this.addProject.bind(this)}
							resetProject = {this.resetProject.bind(this)}
						    viewChange = {this.viewChange.bind(this)}
							/>
					    </div>
					
			} else if(page == 'NewExpense'){
				shown = <div className="pattern">
							<NewExpense
							changePage = {this.changePage}
							setExpense = {this.setExpense.bind(this)}
							expense = {this.expenseReset.bind(this)}
							setTotal = {this.setTotal}
							totalExpense = {this.state.totalExpense}
							viewChange = {this.viewChange.bind(this)}
						    addProject = {this.addProject.bind(this)}
							resetProject = {this.resetProject.bind(this)}
						    project = {this.state.project}
							viewSwitch = {this.viewswitch.bind(this)}	
						    
							/>
					    </div>
					
					
			} else if(page == 'View'){
				shown =  <View 
						  projects = {this.state.projects}
						  view = {this.state.view}
						  changePage = {this.changePage}
						  viewSwitch = {this.state.viewSwitch}
						  changeBack = {this.changeback.bind(this)}
						  /> 
												    
			} else if(page == "Edit"){
				shown = <Edit
							view = {this.state.view}
							changePage = {this.changePage}
							projects = {this.state.projects}
							updateProjects = {this.updateProjects.bind(this)}
							updateExpenses = {this.updateExpenses.bind(this)}
							removeIt = {this.removeIt}
							handleRemove = {this.handleRemove.bind(this)}
							
							/>
			} else if(page == "AddExpense"){
				shown = <AddExpense
							changePage = {this.changePage}
							projects = {this.state.projects}
							view = {this.state.view}
							updateNewExpense = {this.updateNewExpense}
							/>
			}
		
		return(
			<div>
				{shown}
			</div>
		)
	}
}