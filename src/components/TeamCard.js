import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';
import "../css/OurTeam.css";

export default class TeamCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card className="card">
                <CardActionArea>
                    <div className="media-container">
                        <CardMedia
                            className="media"
                            image={`/TeamPictures/${this.props.src}`}
                            title="Contemplative Reptile"
                        />
                    </div>
                    <CardContent>
                        <h2 className="team-name">    
                            {this.props.name}
                        </h2>
                        <Typography variant="body2" style={{fontSize:'1em'}} color="textSecondary" component="p">
                            {this.props.bio}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        );
    }
}