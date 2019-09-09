import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Checkbox from '../components/Checkbox';
import * as CheckboxActions from '../actions/actions';
import Label from '../components/Label';

class CheckboxContainer extends Component {
  constructor(props) {
    super(props);

    this.dispatchToggle = this.dispatchToggle.bind(this);
  }

  dispatchToggle(e) {
    console.log('toggle: ' + e);
    let item = e.id;

    this.props.actions.toggle(item);
  }

  render() {
    return (
      <div>
        <Checkbox
          // initToggleOn={this.props.one}
          name={'one'}
          dispatchToggle={this.dispatchToggle}
          initState={this.props.one}
        />
        <Checkbox
          // initToggleOn={this.props.two}
          name={'two'}
          dispatchToggle={this.dispatchToggle}
          initState={this.props.two}
        />
        <Checkbox
          // initToggleOn={this.props.three}
          name={'three'}
          dispatchToggle={this.dispatchToggle}
          initState={this.props.three}
        />
        <Label defaultText={this.props.text} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    one: state.one,
    two: state.two,
    three: state.three,
    text: state.text
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(CheckboxActions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckboxContainer);
