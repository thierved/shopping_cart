import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { searchItem } from '../actions';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            keyword: ''
        }

        this.submitForm = this.submitForm.bind(this);
    }

    submitForm(event) {
        event.preventDefault();
        searchItem(this.state.keyword);                
    }


    render() {
        return (
            <div className="header">
                <h2>Shopping Cart</h2>
                <form onSubmit={this.submitForm}>
                    <input type="text" 
                           value={this.state.keyword}
                           onInput={e => this.setState({keyword: e.target.value})} />
                    <button>Go</button>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ searchItem }, dispatch);
}

export default connect(null, mapDispatchToProps)(Header);
