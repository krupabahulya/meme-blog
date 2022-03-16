import React from "react";
import { client } from "./client";
import Posts from "./Posts";
import Sidenavbar from "./Sidenavbar";

class Home extends React.Component {
  state = {
    articles: [],
  };

  componentDidMount() {
    client
      .getEntries()
      .then((response) => {
        console.log(response);
        this.setState({
          articles: response.items,
        });
      })
      .catch(console.error);
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <header>
            <div className="wrapper">
              <span>Meme Blog</span>
            </div>
          </header>
          <main>
            <div className="wrapper">
            <Sidenavbar Sidenavbar = {Sidenavbar} />
              <Posts posts={this.state.articles} />
              
            </div>
          </main>
        </div>
      </div>
    );
  }
}
export default Home;