import React from 'react' ;
import photo from '../../images/weather-app.jpg' ;

import '../../App.css';

const FeaturedProject = () => {
	return(
		<div className=" " >


			<div className="main-showcase  pointer ">
				<img src={photo} className="card cover" alt="showcase-photo" style={{width:'55vw' , height:'57vh' }} />

			</div>

		</div>
	)
}

export default FeaturedProject;
