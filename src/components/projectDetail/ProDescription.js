import React, {Component} from 'react';
import '../../App.css';

import TaskCard from './TaskCard';
import TaskTemplate from './TaskTemplate';

class MainRM extends Component {


	render(){

    const {  image , description ,tasks } = this.props.project;

		return(
			<div style={{marginTop:"2vh" , marginBottom:'7vh'}}>

            <img src={image} className="card"  alt="showcase-photo" style={{width:'45vw' , height:'57vh'}} />

            <div className="card" style={{padding:"4vh 3vw" ,margin:"3vh 0", background:'white' , width:'45vw'}}>
              <h1 className="f4 pb2 navy">Description</h1>
              <h3 className= "fw5 navy" style={{marginLeft:'auto' , marginRight:'auto' , fontSize:'1em'  }}>{description}</h3>
            </div>


							<div className="mv2 ">
							<TaskTemplate />
							</div>


			</div>
		);
	}
}


export default MainRM;
