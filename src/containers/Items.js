import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Item from '../components/Item';
import {addProductToBag} from '../actions';

class Products extends Component {
    
    renderItems(items) {
        console.log(this.props);
        
        if (items) {
            return items.map(item => {
                return (
                    <Item key={item.id}
                          name={item.name}
                          src={item.image}
                          price={item.price} 
                          action={addProductToBag(item.id)}
                    />
                );
            });
        }        
    }

    render() {
        return (
            <div className="items">
                <div className="items-container">
                    {this.renderItems(this.props.items)}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        items : state.items
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({addProductToBag}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);
