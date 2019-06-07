import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby';
import Layout from '../components/layout'
import HeaderGeneric from '../components/HeaderGeneric'
import pic04 from '../assets/images/pic04.jpg'

class Generic extends React.Component {
    constructor(props) {
     super(props);
     this.updateSubmit = this.updateSubmit.bind(this);
     this.input = React.createRef();
   }
    updateSubmit(event) {
    alert('Thanks for your Valuable Voting for Favorite Superhero and Super-Villain.');
    event.preventDefault();
    window.location.href = "http://localhost:8000/videos";
  }
  render() {
    return (
      <Layout>
        <Helmet title="Voting" />
        <HeaderGeneric />
        <div id="main">
          <section id="content" className="main">
          <form onSubmit={this.updateSubmit}>
        <h1>Select Favorite Super Hero and Super Villain</h1>
        <label>Super Heroes:
          <select name = "hero">
            <option value = "Iron-Man" selected>Iron-Man</option>
            <option value = "Batman">Batman</option>
            <option value = "Spider-Man">Spider-Man</option>
            <option value = "Hal Jordan">Hal Jordan</option>
            <option value = "Thor">Thor</option>
            <option value = "Captain America">Captain America</option>
            <option value = "Wonder Woman">Wonder Woman</option>
            <option value = "Martian Manhunter">Martian Manhunter</option>
            <option value = "Invisible Woman">Invisible Woman</option>
            <option value = "Black Panther">Black Panther</option>
            <option value = "Catwoman">Catwoman</option>
            <option value = "Elektra">Elektra</option>
            <option value = "Wolverine">Wolverine</option>
          </select>
      </label>
        <label>
            Super Villain:
            <select name = "hero">
              <option value = "Magneto" selected>Magneto</option>
              <option value = "Joker">Joker</option>
              <option value = "Doctor Doom">Doctor Doom</option>
              <option value = "Lex Luthor">Lex Luthor</option>
              <option value = "Galactus">Galactus</option>
              <option value = "Darkseid">Darkseid</option>
              <option value = "Ra's al Ghul">Ra's al Ghul.</option>
              <option value = "Loki">Loki</option>
              <option value = "Scarecrow">Scarecrow</option>
              <option value = "Norman Osbornr">Norman Osborn</option>
              <option value = "The Penguin">The Penguin</option>
              <option value = "Hela">Hela</option>
              <option value = "Poison Ivy">Poison Ivy</option>
            </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
          </section>

        </div>
      </Layout>
    )
  }
}

export default Generic
