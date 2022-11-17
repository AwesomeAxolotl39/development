import logo from './logo.svg';
import './App.css';

bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});

//1 sorting feature = time (vs popularity)
//2 filtering cats = dairy free, gluten free
//aggregator = favs section -- agg total cook time

function App() {
  return (
    <div className="App">
      <div class='d-flex row'>
        <h1>Recipe Finder</h1>
        <div class='row row-cols-md-2'>
            {bakeryData.map((item, index) => (
              <BakeryItem item={item} />
            ))}
          </div>
      </div>
    </div>
  );
}

export default App;
