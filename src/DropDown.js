import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';

export default class DropDown extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <Row>
        <Col sm="12" md={{ size: 12, offset: 1, push: 2, pull: 2 }}>
          <Form inline>
            <FormGroup>
              <Label for="exampleSelect">Device </Label>
              <Input type="select" name="select" id="exampleSelect" className="dropdown-picker">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Input>

              <Label for="exampleDate">Date </Label>
              <Input type="date" name="date" id="exampleDate" placeholder="date placeholder" className="datepicker"/>

              <Label for="exampleSelect">Team </Label>
              <Input type="select" name="select" id="exampleSelect" className="dropdown-picker">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Input>
            </FormGroup>
          </Form>
        </Col>
      </Row>
    );
  }
}
