/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { Container, SubContainer, Divider, Teamscard} from '../styles';
import { Teams } from './style'
import history from '../../history';
import bat from '../../static/bat.svg';
import ball from '../../static/ball.svg';
import wk from '../../static/wk.svg';
import batball from '../../static/batball.svg'

const Batsman = ['Jonny Bairstow','Jason Roy','James Vince','Joe Root(C)', 'Eoin Morgan']

const AllRounder = ['Ben Stokes', 'Tom Curran', 'Moeen Ali', 'Chris Woakes', 'Liam Dawson', 'Adil Rashid']

const Wk = ['Jos Buttler']

const Bowler = ['Sam Curran', 'James Anderson', 'Jofra Archer']

class ENG extends Component {
    constructor(props) {
      super(props);
  
      this.state = {};
    }

    render () {
        return (
            <Container>
                <SubContainer>
                <a onClick={() => { history.push('/') }}>---Back---</a>
                    <Teams>
                        <h1 className="batsman-bowler-all engt">Batsman</h1>
                        <Teamscard>
                            {Batsman.map((bats, batm) => (
                                <h3 key={batm}>
                            {Batsman.map((bats, key) => (
                                <h3 key={key}>
                                    <img className="icon" src={bat} alt="bat" />{bats}
                                </h3>
                            ))}
                        </Teamscard>
                        <Divider />
                        <h1 className="batsman-bowler-all engt">All Rounder</h1>
                        <Teamscard>
                            {AllRounder.map((all, allro) => (
                                <h3 key={allro}>
                            {AllRounder.map((all, key) => (
                                <h3 key={key}>
                                    <img className="icon" src={batball} alt="bat" />{all}
                                </h3>
                            ))}
                        </Teamscard>
                        <Divider />
                        <h1 className="batsman-bowler-all engt">Wicket Keeper</h1>
                        <Teamscard onClick={() => { history.push('/cap') }}>
                            {Wk.map((Wk, keep) => (
                                <h3 key={keep}>
                        <Teamscard>
                            {Wk.map((Wk, key) => (
                                <h3 key={key}>
                                    <img className="icon" src={wk} alt="bat" />{Wk}
                                </h3>
                            ))}
                        </Teamscard>
                        <Divider />
                        <h1 className="batsman-bowler-all engt">Bowler</h1>
                        <Teamscard>
                            {Bowler.map((bowl, bowler) => (
                                <h3 key={bowler}>
                            {Bowler.map((bowl, key) => (
                                <h3 key={key}>
                                    <img className="icon" src={ball} alt="bat" />{bowl}
                                </h3>
                            ))}
                        </Teamscard>
                    </Teams>
                </SubContainer>
            </Container>
        );
    }
}

export default ENG;
