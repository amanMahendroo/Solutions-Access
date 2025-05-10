import React from 'react'
import '../styles/home.css'
import {FiChevronRight} from 'react-icons/fi'
import { Link } from 'react-router-dom';

export default function Home() {
	return (
        <div className="section home-nav">
        	<Link to="/about">
	        	<div className="home-nav-item">
		        	<div className="heading">About the Company</div>
		        	<div className="arrow"><FiChevronRight /></div>
	        	</div>
	        </Link>
        	<Link to="/service">
	        	<div className="home-nav-item">
		        	<div className="heading">What we do</div>
		        	<div className="arrow"><FiChevronRight /></div>
	        	</div>
	        </Link>
        	<Link to="/searches">
	        	<div className="home-nav-item">
		        	<div className="heading">Representative Searches</div>
		        	<div className="arrow"><FiChevronRight /></div>
	        	</div>
	        </Link>
	        <Link to="/founder">
	        	<div className="home-nav-item">
		        	<div className="heading">Founder & CEO</div>
		        	<div className="arrow"><FiChevronRight /></div>
	        	</div>
	        </Link>
        	
        </div>
    )
}
