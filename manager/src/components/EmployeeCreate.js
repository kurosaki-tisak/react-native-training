import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, Input } from './common';
import { employeeUpdate } from '../actions';

class EmployeeCreate extends Component {
    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Name"
                        placeHolder="Jane"
                        value={this.props.name}
                        onChangeText={text => this.props.employeeUpdate({ prop: 'name', value: text })}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="Phone"
                        placeHolder="555-555-5555"
                        value={this.props.phone}
                        onChangeText={text => this.props.employeeUpdate({ prop: 'phone', value: text })}
                    />
                </CardSection>

                <CardSection>

                </CardSection>
            </Card>
        );
    };
};

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm

    return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeCreate);