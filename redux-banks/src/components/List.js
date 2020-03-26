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
			<div>
				<header class="tc ph4">
				  <h1 class="f3 f2-m f1-l fw2 black-90 mv3">
				    Bancos
				  </h1>
				</header>
				<div dataName="component">
					<main className="mw6 center">
						<div className="dt w-100 bb b--black-10 pb2 mt2 dim tl">
							<article>
								<div className="dtc w3">
									<img src="https://public-liarla.s3.us-east-2.amazonaws.com/ico_pagatodo.png" alt="Bank Logo" className="db w-100"/>
								</div>
								<div className="dtc v-top pl2">
									<h1 className="f6 f5-ns fw6 lh-title black mv0">Aquí va el nombre del banco</h1>
									<h2 className="f6 fw4 mt2 mb0 black-60">Aquí va la descripción</h2>
									<h2 className="f6 fw4 mt2 mb0 black-60">Aquí va la antigüedad</h2>
								</div>
							</article>
						</div>
					</main>
				</div>
			</div>
			
		)
	}
} 

export default List;