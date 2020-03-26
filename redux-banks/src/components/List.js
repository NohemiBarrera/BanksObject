import React, {Component} from "react";
import { connect } from "react-redux";
import "tachyons"; 
import { getBanks } from "../actions/banks";
import PropTypes from "prop-types";

class List extends Component{
	static propTypes = {
		banks: PropTypes.array.isRequired,
		getBanks: PropTypes.func.isRequired,
	}

	componentDidMount(){
		this.props.getBanks();
	}

	render(){
		const {banks} = this.props;

		const allbanks = banks.map(bank => (
			<div dataname="component" key={`${bank.bankName}`}>
				<main className="mw6 center">
					<div className="dt w-100 bb b--black-10 pb2 mt2 dim tl">
						<article>
							<div className="dtc w3">
								<img src={bank.url} alt="Bank Logo" className="db w-100"/>
							</div>
							<div className="dtc v-top pl2">
								<h1 className="f6 f5-ns fw6 lh-title black mv0">{bank.bankName}</h1>
								<h2 className="f6 fw4 mt2 mb0 black-60">{bank.description}</h2>
								<h2 className="f6 fw4 mt2 mb0 black-60">Antigüedad: {bank.age} años</h2>
							</div>
						</article>
					</div>
				</main>
			</div>
		))

		return(
			<div>
				<header className="tc ph4">
				  <h1 className="f3 f2-m f1-l fw2 black-90 mv3">
				    Bancos
				  </h1>
				</header>
				{allbanks}
			</div>
			
		)
	}
} 

const mapStateToProps = state => ({
  banks: state.banks.banks,
  
});

export default connect(
	mapStateToProps,
	{ getBanks }
) (List);