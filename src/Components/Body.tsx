import React from "react";
import { Card, Container, Row } from "react-bootstrap";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import { Link } from "react-router-dom";
import { Waypoint } from "react-waypoint";
import { CharacterFilter } from './CharacterFilter';

interface CharacterData {
  characters: Characters;
}

interface Characters {
  results: Character[];
}

interface Character {
  id: number;
  name: string;
  image: string;
  species: string;
}

const FETCH_CHARACTERS = gql`
  query Page($page: Int) {
    characters(page: $page) {
      results {
        id
        name
        image
        species
        gender
      }
    }
  }
`;

interface CardItemProp {
  handleClick: () => string;
}

export const Body = (handleClick: CardItemProp, about: string) => {
  const { loading, data, fetchMore } = useQuery<CharacterData>(
    FETCH_CHARACTERS,
    {
      variables: {
        page: 1
      }
    }
  );

  const characters = loading || !data ? [] : data.characters.results;

  const selectedFilters = [];
  const filterOptions = [...new Set(characters.map(item => item.species))];

  const displayCharacters = () => {
    return (
      characters.map(item => {
        return (
          <Card key={item.id} style={{ width: "15rem", margin: 20 }}>
            <Card.Img variant="top" src={item.image} />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>
                Race: {item.species}
              </Card.Text>
              <Link
                className="btn btn-primary"
                to={`/character/${item.id}`}
              >
                Visit profile
            </Link>
            </Card.Body>
          </Card>
        );
      })
    )
  }


  const loadResultsOnScroll = () => {
    if (characters.length < 20) return;
    fetchMore({
      variables: {
        page: characters.length / 20 + 1
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;

        return {
          characters: {
            __typename: "Characters",
            results: [
              ...prev.characters.results,
              ...fetchMoreResult.characters.results
            ]
          }
        };
      }
    });
  };

  return (
    <Container>
      <CharacterFilter
        filterOptions={filterOptions}
        filterCharacters={() => console.log("hello from filter")}
        removeFilter={() => console.log("Remove filter")}
      />
      <Row className="justify-content-center">
        {
          displayCharacters
        }
      </Row>
      <Waypoint onEnter={loadResultsOnScroll} bottomOffset="-200px"></Waypoint>
    </Container>
  );
};
