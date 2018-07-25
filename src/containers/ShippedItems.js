import React, { Component } from 'react';
import { connect } from 'react-redux';

class ShippedItems extends Component {
    render() {
        return (
            <div className="shipped-items">
                <h3>Bag</h3>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        shipItem : state
    }
}

export default connect()(ShippedItems);
