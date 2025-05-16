// eslint-disable-next-line
import React, { useRef } from 'react'
import './Blog.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/blog1.png'
import user_2 from '../../assets/blog2.png'
import user_3 from '../../assets/blog3.png'
import user_4 from '../../assets/blog4.png'
import user_5 from '../../assets/blog5.png'
import user_6 from '../../assets/blog6.png'
import user_7 from '../../assets/blog7.png'
import user_8 from '../../assets/blog8.png'

const Blog = () => {

    const slider = useRef();
    let tx = 0;

const slideForward = () => {
    if(tx > -50) {
        tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}
const slideBackward = () => {
    if(tx < 0) {
        tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}

  return (
    <div className='testimonials' id='Blog'>
      <h2>Our Blog and Articles</h2>
        <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
        <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
        <div className='slider'>
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_1} alt="" />
                            <div>
                                <h3>Burger</h3>
                                <span>CafeBliss,India</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus debitis, ea iusto illum esse ratione eaque eos, dolorem quia distinctio, amet eum tenetur aspernatur culpa exercitationem dolores rerum dignissimos quibusdam.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_2} alt="" />
                            <div>
                                <h3>Pasta</h3>
                                <span>CafeBliss,India</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti officia similique velit harum unde ut illum repellendus totam fugit numquam? Asperiores sapiente quidem magnam, culpa voluptatum fugiat porro aspernatur reprehenderit.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_3} alt="" />
                            <div>
                                <h3>Veggies</h3>
                                <span>CafeBliss,India</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem, incidunt delectus fuga ullam numquam necessitatibus aspernatur magnam quis recusandae nulla cupiditate architecto sit, consequatur facilis vero. Optio odit quam omnis.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_4} alt="" />
                            <div>
                                <h3>South Indian</h3>
                                <span>CafeBliss,India</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus aliquid architecto dolore, repudiandae eveniet qui adipisci voluptatum deserunt laudantium quaerat deleniti? Cum, blanditiis. Perferendis, earum quaerat? Quaerat aut fuga modi.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_5} alt="" />
                            <div>
                                <h3>Wraps</h3>
                                <span>CafeBliss,India</span>
                            </div>
                        </div>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel velit, nihil rerum eos autem eveniet vero, beatae voluptatem rem, porro provident impedit exercitationem. Sunt fugit, molestiae eveniet perferendis voluptates est.</p>
                    </div>
                </li><li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_6} alt="" />
                            <div>
                                <h3>Egg Specials</h3>
                                <span>CafeBliss,India</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quis modi temporibus tenetur sed officia odio, omnis, minus repudiandae incidunt est natus sunt accusamus, eum a magni laborum sint sequi.</p>
                    </div>
                </li><li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_7} alt="" />
                            <div>
                                <h3>Non Veg</h3>
                                <span>CafeBliss,India</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro asperiores illum tempore, tempora ipsum molestias quam molestiae voluptas fugit! Unde, facilis ipsa quas dicta cum sapiente nihil saepe reiciendis sint?</p>
                    </div>
                </li><li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_8} alt="" />
                            <div>
                                <h3>Biryani</h3>
                                <span>CafeBliss,India</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa corrupti nam provident voluptas sed. Libero quaerat, corporis tempora adipisci asperiores cupiditate totam veritatis fugit quidem in provident assumenda doloremque? Commodi?</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Blog