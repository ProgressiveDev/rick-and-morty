import React from 'react';
import { RouteComponentProps } from "react-router-dom";
import { gql } from "apollo-boost";
import { useQuery } from '@apollo/react-hooks';
import { Media } from "react-bootstrap";

interface CharacterParameters {
    id: number
    name: string
    image: string
    species: string
    gender: string
}

interface Character {
    character: CharacterParameters
}

interface MatchParams {
    id: string;
}

interface MatchProps extends RouteComponentProps<MatchParams> {
}

const FETCH_SINGLE_CHARACTER = gql`
query getCharacterById($characterID: ID!) {
    character(id: $characterID) {
        id
        name
        image
        species
        gender
    }
  }
`;

export const AboutCharacter: React.FC<MatchProps> = ({ match }: MatchProps) => {
    const { data } = useQuery<Character>(FETCH_SINGLE_CHARACTER, {
        variables: { characterID: Number(match.params.id) }
    });

    if (data === undefined || data.character === undefined) return null;

    const character = data.character;

    return (
            <Media>
                <img
                    width={64}
                    height={64}
                    className="mr-3"
                    src={character.image}
                    alt={character.name}
                />
                <Media.Body>
                    <h5>{character.name}</h5>
                    <p>
                        {character.species}
                    </p>
                </Media.Body>
            </Media>

    )
}
