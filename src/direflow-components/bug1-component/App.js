import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button'

class App extends React.Component {

  state = {
	buttons: []
  }

  componentDidMount() {
	setTimeout(() =>  this.setState({
             buttons: ['Hello', 'World']
	  })
	, 1000)
  }

 render() {
        const buttons = this.state.buttons.map((b) =>
	      <Button key={b} variant="contained" color="primary">{b}</Button>
      	 )

  	 return (
      	   <div>
	  	{buttons}
      	   </div>
  	 )
 }
}


App.defaultProps = {
  componentTitle: 'Bug1 Component',
  sampleList: [
    'Create with React',
    'Build as Web Component',
    'Use it anywhere!',
  ],
}

App.propTypes = {
  componentTitle: PropTypes.string,
  sampleList: PropTypes.array,
};

export default App;
