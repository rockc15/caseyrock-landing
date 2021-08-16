import React from 'react';
import "../css/OurTeam.css";
import TeamCard from '../components/TeamCard';

export default class OurTeam extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="team-page">
                <div className="team-title-container">
                    <h1 className="team-title">
                        Meet The Team
                    </h1>
                </div>
                <div className="card-container">
                    <TeamCard
                        name="Dylan Martin"
                        src="DylanMartin.jpeg"
                        bio="Senior computer engineering student at the University of Delaware with minors in both cyber security and computer science." />
                    <TeamCard
                        name="J Reynolds"
                        src="J.jpg"
                        bio="J is a computer engineer and computer scientist with several years experience as a developer with both defense contractors and cybersecurity startups." />
                </div>
                <div className="card-container">
                    <TeamCard
                        name="Andrew Novocin"
                        src="Novocin.jpg"
                        bio="Professor Novocin works in applications of algebraic number theory, pedagogical practices, and software engineering." />
                    <TeamCard
                        name="Casey Rock"
                        src="CaseyRock.jpeg"
                        bio="Computer Science Major with a concentration in Cyber Security. He has experience as a full stack developer and conducted research in offensive security." />
                </div>
            </div>
        );
    }
}