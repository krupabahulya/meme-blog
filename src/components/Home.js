import React from "react";
import axios from "axios";
import Posts from "./Posts";
import Sidenavbar from "./Sidenavbar";
import DropMenu from "./Dropdown";

const Home = () => {
  const [memes, setMemes] = useState([]);

  useEffect(() => {
    const getMeme = `http://localhost:3000/memes/`;
    axios
      .get(getMeme)
      .then((res) => {
        console.log(res);
        setMemes(memes);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  

    return (

<div className="d-flex row">
    {/* <Sidenavbar Sidenavbar = {Sidenavbar} /> */}
    <DropMenu DropMenu ={ DropMenu } />
  <div className="d-flex row">
  <div className="p-2">
  <div className="d-flex flex-row">
    <Posts posts={memes} />
   </div>
</div>
</div>
</div>
    );
  }

export default Home;