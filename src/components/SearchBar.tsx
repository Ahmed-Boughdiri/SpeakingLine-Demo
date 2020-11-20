import React from "react";
import {
  Jumbotron,
  Container,
  InputGroup,
  FormControl,
  Image,
} from "react-bootstrap";
import "../layout/SearchBar.css";
import "bootstrap/dist/css/bootstrap.min.css";

import searchIcon from "../assets/search-icon.png";

// The Search Bar Section

const SearchBar: React.FC<{}> = () => {
  return (
    <>
      <Jumbotron className="search-bar">
        <Container className="search-bar-wrapper">
          {/* Title */}
          <h1 className="text-light">Eğitmenler</h1>
          <div>
            {/* Input */}
            <InputGroup className="search-bar-input rounded">
              <FormControl
                placeholder="Eğitmen adı ile ara..."
                aria-label="Eğitmen adı ile ara..."
                aria-describedby="basic-addon2"
                className="border-0 rounded-0"
              />
              <InputGroup.Append className="search-icon">
                <Image src={searchIcon} height={25} />
              </InputGroup.Append>
            </InputGroup>
          </div>
        </Container>
      </Jumbotron>
    </>
  );
};

export default SearchBar;
