import React, { Component } from 'react';
import { connect } from 'react-redux';

class Card extends Component {
  constructor() {
    super()
    this.state = {
      expanded: false
    }
  }

  handleClick = () => {
    this.setState( { expanded: !this.state.expanded } )
  }

  render() {
    const expandedCard = <article>
      <h2>{this.props.title}</h2>
      </article>

    const contractedCard = this.props.movies.map(p => {
      return (
      <article onClick={this.handleClick}>
        <img src={p.posterImage} />
        {this.state.expanded && expandedCard}
      </article>)
      })


    return(
      <div className="Card">
        {contractedCard}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  movies: state.movies
})

export default connect(mapStateToProps)(Card);