import React from 'react'

const Location = () => {
  return (
    <div id='Location'>
        <h1>Location of our CafeBliss</h1>
        <p>click on directions to get a detailed view from your location</p>
        <div class="mapswrapper"><iframe width="1200" height="450" loading="lazy" allowfullscreen src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=cafe%20bliss&zoom=10&maptype=roadmap"></iframe></div>
        
      
    </div>
  )
}

export default Location
