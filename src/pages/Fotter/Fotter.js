import React from 'react';
import './fotter.css'
const Fotter = () => {
    return (
        <div>
              <div className="mt-5 footer">
      <div className="">
        <div className="row">
          <div className="col-md-3  ">
            <div className="first-cart p-2 mb-4">
              <img src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE0-m0CojMu29vROz2So_TpGFWyAULJ3gb6A&usqp=CAU" alt="" />
              <h1 className="mt-5">About Us</h1>
              <p> It is a long established fact that a reader will be distracted by the readable.</p>
          
            </div>
          </div>
          <div className="col-md-3">
            <div className="second-part">
              <h1 className=""> Give Feedback</h1>
              <input
                className="input-field mt-3"
                type="text"
                placeholder="Enter your Gmail"
              />
              <br /> <br/>
              <input
                className="input-field"
                type="text"
                placeholder="Enter your Feedback"
              />
              <br />
              <input className="input-button btn m-4" type="text" type="submit" />
              <br />
              <p>
                <span className="m-2 "><i class="fab fa-facebook-square"></i></span>
                <span className="m-2 "><i class="fab fa-instagram-square"></i></span>
                <span className="m-2 "><i class="fab fa-linkedin"></i></span>
                <span className="m-2 "><i class="fas fa-envelope-square"></i></span>
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="third-part">
              <h1>Useful Links</h1>
              <p className="mt-4">Privacy Policy</p>
              <p>Home</p>
              <p>Services</p>
              <p>Team</p>
              <p>How it's work</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="fourth-part">
              <h1>Contact Us</h1>
              <small className="mt-5">Office: 12 Fake Street,New York</small>
              <br />
              <small className="mt-3">Phone: (08) 8827 633354</small>
              <br />
              <small className="mt-3">Fax: 08) 08 4752 1499</small>
              <br />
              <small className="mt-3">Mail: support.goaltheme.com</small>
            </div>
          </div>
        </div>
        <hr />
        <div className="botton text-center">
          <small>© 2020 Safia Medi Theme by Omar. All Rights Reserved.</small>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Fotter;