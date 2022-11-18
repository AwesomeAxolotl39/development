import './App.css';
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";
import FavList from "./components/FavList";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from '@mui/material';

bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});

//1 sorting feature = time (vs popularity)
//2 filtering cats = dairy free, gluten free
//aggregator = favs section -- agg total cook time

function App() {

  const [type, setType] = useState("All");

  //function to selectFilter type
  const selectFilterType = (val) => {
    setType(val);
    console.log(val)
  };

  //function to check which items match filter type
  const matchesFilterType = (item) => {
    // if no fiter selected, show all items
    if (type === "All") {
      return true
      // } else if (type === item.type) {
      //   return true
    } else if (type === "df" && item.df === "yes") {
      return true
    } else if (type === "gf" && item.gf === "yes") {
      return true
    } else {
      return false
    };

  }

  // get only bakeryData that passed filter
  const filteredData = bakeryData.filter(matchesFilterType)

  //code for adding items to favorites list
  const [favList, setFavList] = useState([]);

  const handleInput = (item) => {
    //don't add to list if item is already in list
    if (favList.filter(thing => thing.name === item.name).length > 0) {
      return;
    } else{
      setFavList([...favList, {name: item.name, time: item.time, key: Date.now() }]);
    }
   
  };

  const removeM = (key) => {
    setFavList(favList.filter((favList) => key != favList.key));
  };

  return (
    <div className="App">
      <div class='d-flex row'>
        <div>
          <h1>Recipe Finder</h1>
        </div>
        <div class='MainGrid'>
          <div class='flex SideBar'>
            <h4>Sort By:</h4>
            <div class='btnPane'>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="All"
                  name="radio-buttons-group">
                  {/* // onChange={matchesFilterType(item)}> */}

                  <FormControlLabel onClick={() => selectFilterType('df')} control={<Radio />} label="Dairy Free" />
                  <FormControlLabel onClick={() => selectFilterType('gf')} control={<Radio />} label="Gluten Free" />
                  <FormControlLabel onClick={() => selectFilterType('All')} control={<Radio />} label="All" />
                </RadioGroup>
              </FormControl>
            </div>
            <h4>Favorites List:</h4>
            <FavList favList={favList} remove={removeM} />
          </div>
          <div class='flex RecipeGrid'>
            {filteredData.map((item) =>
              (<BakeryItem item={item} handleInput={handleInput} />))
            }
          </div>

        </div>

      </div>


    </div>
  );
}

export default App;


/* {
bakeryData.map((item, index) => (
  <BakeryItem item={item} handleInput={handleInput} />
))
} */

// setFavList({
//   favList: favList.filter(e => e.name !== item.name)
// });
