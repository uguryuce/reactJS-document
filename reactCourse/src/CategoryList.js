import React, { Component } from 'react';
import {ListGroup, ListGroupItem} from 'reactstrap';

export default class CategoryList extends Component {
    render() {
        return (
            <div>
                <h3>Category List</h3>
                <ListGroup>
                    <ListGroupItem>lorem1</ListGroupItem>
                    <ListGroupItem>lorem2</ListGroupItem>
                    <ListGroupItem>lorem3</ListGroupItem>
                    <ListGroupItem>lorem4</ListGroupItem>
                    <ListGroupItem>lorem5</ListGroupItem>
                </ListGroup>
            </div>
        )
    }
}
