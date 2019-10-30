import React, { useState } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import Head from './head'

const Dummy = () => {
  const [counter] = useState(0)
  return (
  <div class="navbar navbar-default navbar-fixed-top sticky-navigation" role="navigation">
	<div class="container">

		<div class="navbar-header">
			<button class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
				<span class="icon icon-bar"/>
				<span class="icon icon-bar"/>
				<span class="icon icon-bar"/>
			</button>
			<a href="#" class="navbar-brand">Fitness</a>
		</div>
		<div class="collapse navbar-collapse">
			<ul class="nav navbar-nav navbar-right main-navigation">
				<li><a href="#home" class="smoothScroll">Home</a></li>
				<li><a href="#overview" class="smoothScroll">About</a></li>
				<li><a href="#trainer" class="smoothScroll">Trainers</a></li>
				<li><a href="#blog" class="smoothScroll">Blog</a></li>
				<li><a href="#price" class="smoothScroll">Prices</a></li>
				<li><a href="#testimonial" class="smoothScroll">Testimonials</a></li>
			</ul>
		</div>

	</div>
</div>



<section id="home" class="parallax-section">
	<div class="container">
		<div class="row">

			<div class="col-md-offset-1 col-md-10 col-sm-12">
				<h3 class="wow bounceIn" data-wow-delay="0.9s">Hello! you are welcome to</h3>
				<h1 class="wow fadeInUp" data-wow-delay="1.6s">Professional<br/>Fitness Club</h1>
				<a href="#overview" class="wow fadeInUp smoothScroll btn btn-default" data-wow-delay="2s">LEARN MORE</a>
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