import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { CharacterList } from '../components';
import { getCharacter } from '../actions';

class CharacterListView extends React.Component {
	componentDidMount() {
		this.props.getCharacter();
	}

	render() {
		return (
			<React.Fragment>
				{this.props.isLoading && <p>Fetching characters...</p>}
				<div className="CharactersList_wrapper">
					<CharacterList characters={this.props.characters} />
				</div>
			</React.Fragment>
		);
	}
}

const mapStateToProps = state => ({
	characters: state.charsReducer.characters,
	error: state.charsReducer.error,
	isLoading: state.charsReducer.isLoading,
});

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
	mapStateToProps,
	{ getCharacter }
)(CharacterListView);
