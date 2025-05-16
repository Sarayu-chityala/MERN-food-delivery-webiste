import React from 'react'
import chef1 from '../../assets/chef1.jpg'
import chef2 from '../../assets/chef2.jpg'
import chef3 from '../../assets/chef3.jpg'
import chef4 from '../../assets/chef5.jpg'
import chef5 from '../../assets/chef6.jpg'


import './Chef.css'


const Chef = () => {
    return (

        <div id='Chef-Stories'>
            <h1>Here are our popular chef's Stories</h1>
            <div className='programs'>
                <div className="program">
                    <img src={chef1} alt="" />
                    <div className="caption">

                        <h2>Mark peel</h2><hr />
                        <p>was an American chef and restaurateur in California. Campanile, a restaurant owned by Peel and his former wife Nancy Silverton, won a James Beard Foundation Award in 2001.[1] Peel specialized in California cuisine and was a pioneer of the farm-to-table concept</p>
                    </div>
                </div>
                <div className="program">
                    <img src={chef2} alt="" />
                    <div className="caption">
                        <h2>Kylie</h2><hr />

                        <p>As a third-generation Chinese Australian,[2] she learned the fundamentals of Cantonese cooking by her mother's side. She undertook much of her apprenticeship at Neil Perry's Rockpool and Wockpool, and later at Restaurant Manfredi.

                        </p>
                    </div>
                </div>
                <div className="program">
                    <img src={chef3} alt="" />
                    <div className="caption">
                        <h2>Alex Atala</h2><hr />

                        <p> His establishment also holds the title of "Acqua Panna Best Restaurant In South America." He's known for transforming traditional Brazilian dishes, adapting French and Italian culinary techniques to native Brazilian ingredients. Atala also hosted a television show on Brazilian TV channel GNT.</p>
                    </div>
                </div>
            <div className="program">
                <img src={chef5} alt="" />
                <div className="caption">
                    <h2>Alex Atala</h2><hr />

                    <p> His establishment also holds the title of "Acqua Panna Best Restaurant In South America." He's known for transforming traditional Brazilian dishes, adapting French and Italian culinary techniques to native Brazilian ingredients. Atala also hosted a television show on Brazilian TV channel GNT.</p>
                </div>
            </div>
            </div>

        </div>


    
    )
}

export default Chef
