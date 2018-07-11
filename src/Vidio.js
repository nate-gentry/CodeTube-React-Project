import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Button, ButtonGroup } from 'reactstrap';
import YouTube from 'react-youtube';



class Video extends Component {


render (){
    return (
        <div className="finish">
            <div className="screen">

                <YouTube
                    videoId={this.props.match.params.id}      
                />

            </div>
            <ButtonGroup className="youtubeend">
                <Button color="danger"><Link to="/" >Home</Link></Button>
                <Button color="danger"><Link to="/card" >Change topic </Link></Button>
            </ButtonGroup>
        </div>
    )
}
}


export default Video