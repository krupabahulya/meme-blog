import React from "react";
import { client } from "./client";
import Posts from "./Posts";
import Sidenavbar from "./Sidenavbar";
import DropMenu from "./Dropdown";

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

<div className="d-flex row">
    {/* <Sidenavbar Sidenavbar = {Sidenavbar} /> */}
    <DropMenu DropMenu ={ DropMenu } />
  <div className="d-flex row">
  <div className="p-2">
  <div className="d-flex flex-row">
    <Posts posts={this.state.articles} />
   </div>
</div>
</div>
</div>
    );
  }
}
export default Home;