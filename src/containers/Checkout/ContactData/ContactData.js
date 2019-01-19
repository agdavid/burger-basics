import React, { Component } from 'react';
import axios from '../../../axios-orders';

import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import classes from './ContactData.css';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false,
    }

    orderHandler = (event) => {
        event.preventDefault();

        this.setState( { loading: true } );
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Max Schwarzmüller',
                address: {
                    street: 'Teststreet 1',
                    zipCode: '41351',
                    country: 'Germany'
                },
                email: 'test@test.com'
            },
            deliveryMethod: 'fastest'
        }
        axios.post( '/orders.json', order )
            .then( response => {
                this.setState({ loading: false });
                this.props.history.push('/'); // redirect after successful submission
            } )
            .catch( error => {
                this.setState({ loading: false });
            } );
    }

    render () {
        let form = (
                <form>
                    <input
                        className={classes.Input}
                        type="text"
                        name="name"
                        placeholder="Your name..."
                    />
                    <input
                        className={classes.Input}
                        type="email"
                        name="email"
                        placeholder="Your email..."
                    />
                    <input
                        className={classes.Input}
                        type="text"
                        name="street"
                        placeholder="Your street..."
                    />
                    <input
                        className={classes.Input}
                        type="text"
                        name="postalCode"
                        placeholder="Your postal code..."
                    />
                    <Button
                        btnType="Success"
                        clicked={this.orderHandler}
                        >Order</Button>
                </form>
        );
        if (this.state.loading) {
            form = <Spinner />;
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        );
    }
}

export default ContactData;