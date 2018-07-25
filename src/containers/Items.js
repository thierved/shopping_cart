import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Item from '../components/Item';
import {shipItem} from '../actions';

class Products extends Component {
    
    renderItems({items}) {
        console.log(this.props);
        
        if (items) {
            return items.map(item => {
                return (
                    <Item key={item.id}
                          name={item.name}
                          src={item.image}
                          price={item.price} 
                          callback={shipItem(item.id)}/>
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
    console.log(state);
    return {
        items : state
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({shipItem}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);
