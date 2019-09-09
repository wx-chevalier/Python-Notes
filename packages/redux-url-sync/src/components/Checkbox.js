import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Checkbox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggleOn: props.initState
    };
  }

  handleChange(e) {
    this.props.dispatchToggle(e.target);

    this.setState({
      toggleOn: !this.state.toggleOn
    });
  }

  render() {
    return (
      <div>
        <input
          type={'checkbox'}
          id={this.props.name}
          defaultChecked={this.state.toggleOn}
          onClick={e => this.handleChange(e)}
        />
        <label htmlFor={this.props.name}>{this.props.name}</label>
      </div>
    );
  }
}

Checkbox.propTypes = {
  name: PropTypes.string.isRequired
};

export default Checkbox;
