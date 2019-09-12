import React from 'react';
import './App.css';
import "./custom-theme.scss"
import { Hero } from "./Components/Hero"
import { Navbar } from "./Components/Navbar"
import { Body } from "./Components/Body";
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AboutCharacter } from "./Components/AboutCharacter";
import { CharacterFilter } from './Components/CharacterFilter';

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql/',
});

const App: React.FC = () => {
  return (
    <Router>
      <ApolloProvider client={client}>
        <Navbar />
        <Hero />
        <CharacterFilter
        filterCharacters={() => console.log("hello from filter")}
        removeFilter={() => {
          console.log("Remove filter")
        }}
        />
        <Route exact path="/" component={Body} />
        <Route exact path="/character/:id" component={AboutCharacter} />
      </ApolloProvider >
    </Router>
  );
}

export default App;