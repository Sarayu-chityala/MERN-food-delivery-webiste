import React, { useState } from 'react';
import AppDownload from '../../components/AppDownload/AppDownload';
import Menu from '../../components/ExploreMenu/Menu';
import { FoodDisplay } from '../../components/FoodDisplay/FoodDisplay';
import Header from '../../components/Header/Header';
import Chef from '../../components/Chef/Chef';
import './Home.css';
import Contact from '../../components/Contact/Contact';
import Blog from '../../components/Blog/Blog';
import Summer from '../../components/Summer/Summer';
import Winter from '../../components/Winter/Winter';
import Rainy from '../../components/Rainy/Rainy';
import './Home.css'
import Location from '../../components/Location/Location';

const Home = () => {
  const [category, setCategory] = useState("All");
  const [season, setSeason] = useState('');
  const [componentToRender, setComponentToRender] = useState(null);

  const handleSeasonChange = () => {

    if (season.toLowerCase() === 'summer') {
      setComponentToRender(<Summer />);
    } else if (season.toLowerCase() === 'winter') {
      setComponentToRender(<Winter />);
    } else {
      setComponentToRender(<Rainy />);
    }
  };

  return (
    <div>
      <Header />
      <Menu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <div className="favseason" id='seasonaltheme'>

        <h2>Select your fav season</h2>

        <input
          type="text"
          value={season}
          onChange={(e) => setSeason(e.target.value)}
          placeholder="Enter season (summer, winter, etc.)"
        />
        <button onClick={handleSeasonChange}>Submit</button>
      </div>

      {/* Render component based on the selected season */}
      <div id="season-content">
        {componentToRender}
      </div>



      {/* Common components */}
      <Chef />
      <Blog />
      <Contact />
      <Location />
      <AppDownload />
    </div>
  );
}

export default Home;
