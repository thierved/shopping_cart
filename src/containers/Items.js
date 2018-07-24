import React, { Component } from 'react';
import { connect } from 'react-redux';
import Item from '../components/Item';

class Products extends Component {
    
    renderItems({items}) {
        if (items) {
            return items.map(item => {
                return (
                    <Item key={item.id} name={item.name} src={item.image} price={item.price} />
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

export default connect(mapStateToProps)(Products);
