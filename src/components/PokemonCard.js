import React from "react";
import { Card } from "semantic-ui-react";

class PokemonCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFront: "Front"
    };
  }

  state = {
    hp: this
  };

  changeFront = () => {
    this.state.isFront
      ? this.setState({ isFront: false })
      : this.setState({ isFront: true });
  };
  render() {
    return (
      <Card>
        <div>
          <div className="image">
            <img
              alt="oh no!"
              src={
                this.state.isFront
                  ? this.props.poke.sprites.front
                  : this.props.poke.sprites.back
              }
              onClick={this.changeFront}
            />
          </div>
          <div className="content">
            <div className="header">{this.props.poke.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.poke.stats[this.props.poke.stats.length - 1].value}
            </span>
          </div>
        </div>
      </Card>
    );
  }
}

export default PokemonCard;
