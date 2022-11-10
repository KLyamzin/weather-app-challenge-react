import React from 'react';
import { ListGroup } from 'react-bootstrap';

// list available search results
const ResultsList = ({ resultList, handleResultClick }) => {
  return (
    <ListGroup variant="flush">
      {resultList.map((result) => (
        <ListGroup.Item
          key={result.id}
          action
          onClick={() =>
            handleResultClick(
              result.latitude,
              result.longitude,
              result.name,
              result.admin1 !== undefined ? result.admin1 : result.admin2,
              result.country
            )
          }
        >{`${result.name}, ${
          result.admin1 !== undefined ? result.admin1 : result.admin2
        }, ${result.country}`}</ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default ResultsList;
