import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

class PokemonCollection extends React.Component {
  searchedPokemon = () => {
    if (this.props.search.length > 0) {
      return this.props.pokemon.filter(poke => {
        return poke.name.includes(this.props.search);
      });
    } else {
      return this.props.pokemon;
    }
  };

  render() {
    return (
      <div>
        <h1>Hello From Pokemon Collection</h1>
        <Card.Group itemsPerRow={6}>
          <br />
          {this.searchedPokemon().map(poke => {
            return <PokemonCard key={poke.id} poke={poke} />;
          })}
        </Card.Group>
      </div>
    );
  }
}

export default PokemonCollection;
