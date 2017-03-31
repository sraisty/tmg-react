import React from 'react';
import {Navbar, FormGroup, FormControl, Button} from 'react-bootstrap';

class SearchMeets extends React.Component {

  handleSelect(eventKey) {
    event.preventDefault();
    alert(`selected ${eventKey}`);
  }

  render() {
    return(
      <Navbar.Form pullLeft>
        <FormGroup>
          <FormControl type="text"
              placeholder="Search for a meet..." />
        </FormGroup>
        <Button type="submit">
          <em className="fa fa-search"></em>
        </Button>
      </Navbar.Form>
    );
  }
}

export default SearchMeets;
