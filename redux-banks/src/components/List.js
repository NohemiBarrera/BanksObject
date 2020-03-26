import React, {Component} from "react";
import { connect } from "react-redux";
import {} from "tachyons"; 

class List extends Component{
	constructor(props){
		super(props);

	}

	componentDidMount(){
		console.log("aqui va la petición")
	}

	render(){
		return(
			<div dataName="component">
				<main className="mw6 center">
					<div className="dtc w3">
						<img src="" alt="Bank Logo" className="db w-100"/>
					</div>
					<div className="dtc v-top pl2">
						<h1 className="f6 f5-ns fw6 lh-title black mv0">Aquí va el nombre del banco</h1>
					</div>
				</main>
			</div>
		)
	}
} 

export default List;