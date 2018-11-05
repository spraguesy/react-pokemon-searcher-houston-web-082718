import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import { Search } from "semantic-ui-react";
import _ from "lodash";
const URL = "http://localhost:3000/pokemon";

class PokemonPage extends React.Component {
  state = {
    search: "",
    pokemon: []
  };

  componentDidMount() {
    fetch(URL)
      .then(resp => resp.json())
      .then(data => this.setState({ pokemon: data }));
  }

  changeSearch = (event, data) => {
    this.setState({ search: data.value });
  };

  addPokemon = data => {
    data.id = this.state.pokemon[this.state.pokemon.length - 1].id + 1;
    this.setState(state => {
      return { pokemon: [...state.pokemon, data] };
    });
  };

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search
          onSearchChange={_.debounce(this.changeSearch, 500)}
          showNoResults={false}
        />
        <br />
        <PokemonCollection
          pokemon={this.state.pokemon}
          search={this.state.search}
        />
        <br />
        <PokemonForm addPokemon={this.addPokemon} />
      </div>
    );
  }
}

export default PokemonPage;

//3d761274b740498faf9fd6c18c81e931
