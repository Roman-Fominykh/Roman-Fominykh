import React, { useState } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'


const Dummy = () => {
  const [counter] = useState(0)
  return (

    <section id="trainer" className="parallax-section">
      <div className="container">
        <div className="row">
          <div> Hello World to greatest gym {counter} </div>
          <div className="wow fadeInUp col-md-12 col-sm-12" data-wow-delay="1.3s">
            <h2>our Trainers</h2>
            <p>Lorem ipsum dolor sit amet, maecenas eget vestibulum justo.</p>
          </div>

          <div className="wow fadeInUp col-md-4 col-sm-6" data-wow-delay="1.9s">
            <div className="trainer-thumb">
              <img src="images/trainer-img1.jpg" className="img-responsive" alt="Trainer" />
              <div className="trainer-overlay">
                <div className="trainer-des">
                  <h2>Jenny</h2>
                  <h3>Body Trainer</h3>
                  <ul className="social-icon">
                    <li><i className="fa fa-facebook wow fadeInUp" data-wow-delay="1s" /></li>
                    <li><i className="fa fa-twitter wow fadeInUp" data-wow-delay="1.3s" /></li>
                    <li><i className="fa fa-behance wow fadeInUp" data-wow-delay="1.9s" /></li>
                  </ul>
                </div>
              </div>
            </div>
            <p>Lorem ipsum dolor sit amet, maecenas eget vestibulum justo imperdiet, wisi risus purus augue vulputate.</p>
          </div>

          <div className="wow fadeInUp col-md-4 col-sm-6" data-wow-delay="2s">
            <div className="trainer-thumb">
              <img src="images/trainer-img2.jpg" className="img-responsive" alt="Trainer" />
              <div className="trainer-overlay">
                <div className="trainer-des">
                  <h2>Marry</h2>
                  <h3>Fitness Trainer</h3>
                  <ul className="social-icon">
                    <li><i className="fa fa-facebook wow fadeInUp" data-wow-delay="1s" /></li>
                    <li><i className="fa fa-twitter wow fadeInUp" data-wow-delay="1.3s" /></li>
                    <li><i className="fa fa-behance wow fadeInUp" data-wow-delay="1.9s" /></li>
                  </ul>
                </div>
              </div>
            </div>
            <p>Lorem ipsum dolor sit amet, maecenas eget vestibulum justo imperdiet, wisi risus purus augue vulputate.</p>
          </div>

          <div className="wow fadeInUp col-md-4 col-sm-6" data-wow-delay="2.3s">
            <div className="trainer-thumb">
              <img src="images/trainer-img3.jpg" className="img-responsive" alt="Trainer" />
              <div className="trainer-overlay">
                <div className="trainer-des">
                  <h2>Olivia</h2>
                  <h3>Yoga Teacher</h3>
                  <ul className="social-icon">
                    <li><i className="fa fa-facebook wow fadeInUp" data-wow-delay="1s" /></li>
                    <li><i className="fa fa-twitter wow fadeInUp" data-wow-delay="1.3s" /></li>
                    <li><i className="fa fa-behance wow fadeInUp" data-wow-delay="1.9s" /></li>
                  </ul>
                </div>
              </div>
            </div>
            <p>Lorem ipsum dolor sit amet, maecenas eget vestibulum justo imperdiet, wisi risus purus augue vulputate.</p>
          </div>

        </div>
      </div>
    </section>
  )
}

Dummy.propTypes = {}

const mapStateToProps = () => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Dummy)
