import React, { Component } from 'react';
import DISHES from '../../data/dishes.js';
import COMMENTS from '../../data/comments.js';
import MenuItem from './MenuItem.jsx';
import DishDetail from './DishDetail.jsx';
import { Button, Container, Modal, Row } from 'react-bootstrap';

export class Menu extends Component {
  state = {
    dishes: DISHES,
    comments: COMMENTS,
    selectedDish: null,
    show: false,
  };

  modalClose = () => {
    this.setState({ show: false });
  };

  modalOpen = () => {
    this.setState({ show: true });
  };

  onDishSelect = (dish) => {
    this.setState({ selectedDish: dish, show: !this.state.show });
  };

  render() {
    document.title = 'Menu Page';

    const menu = this.state.dishes.map((item) => {
      return (
        <MenuItem dish={item} key={item.id} DishSelect={this.onDishSelect} />
      );
    });

    let dishDetail = null;
    if (this.state.selectedDish != null) {
      const comments = this.state.comments.filter((comment) => {
        return comment.dishId === this.state.selectedDish.id;
      });
      dishDetail = (
        <DishDetail dish={this.state.selectedDish} comments={comments} />
      );
    }

    return (
      <Container fluid={true}>
        <Row lg={3} md={3} sm={6} xs={6}>
          {menu}
        </Row>

        <Modal size="lg" show={this.state.show} onHide={this.modalOpen}>
          <Modal.Body>{dishDetail}</Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={this.modalClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    );
  }
}

export default Menu;
