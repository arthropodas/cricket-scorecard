/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { Container, SubContainer } from './styles';
import history from '../history';
import Batsman from './Batsman';
import Bowler from './Bowler';

const Country = [
    {
      name: 'England',
      value: 'ENG',
      score1st: 269,
      score2nd: 391,
      wic1st: 7,
      allout1st: ' ',
      wic2nd: 5,
      allout2nd: ' ',
      declare: 'decl',
      overs: '90.0',
    },
  ]

const Country2 = [
    {
        name: 'South Africa',
        value: 'RSA',
        score1st: 223,
        score2nd: 126,
        wic1st: 7,
        allout1st: ' ',
        wic2nd: 2,
        allout2nd: ' ',
        declare: 'decl',
        overs: '26.2',
      },
    ]

const Commentory = [
        {
            comm: "Simi Singh to Nabi, no run",
            over: 26.2
        },
        {
            comm: "Simi Singh to Nabi, no run, tossed up outside off, Nabi gets an inside edge on the clip to short fine",
            over: 26.1
        },
        {
            comm: "Asghar Afghan is still struggling from the shoulder injury he sustained in the last match. Winced in pain after that last six, but going on for his team",
            over: null
        },
        {
            comm: "James Cameron to Asghar Afghan, no run, tossed up on off, Afghan leans well forward and blocks",
            over: 25.6
        },
        {
            comm: "James Cameron to Asghar Afghan, no run, flighted on the leg-stump line, clipped straight to the fielder at backward leg, wanted a single and is sent abck",
            over: 25.5
        },
        {
            comm: "James Cameron to Asghar Afghan, <b>SIX</b>, that has been <b>thumped</b>, juicy full-toss from Cameron-Dow, Afghan moves across and slugs it high and over backward square leg for a maximum",
            over: 25.4
        },
        {
            comm: "James Cameron to Asghar Afghan, <b>FOUR</b>, that's a poor ball from Cameron-Dow, dropped short and wide of off, Afghan made room and slapped it wide of cover - beats the fielder getting across from the deep",
            over: 25.3
        },
        {
            comm: "James Cameron to Asghar Afghan, no run, dropped short and wide of off, cracked straight to Dockrell at cover",
            over: 25.2
        },
        {
            comm: "James Cameron to Asghar Afghan, no run, turn for Cameron-Dow, but once again the length is short, allows Afghan to push it to the off-side",
            over: 25.1
        },
        {
            comm: "Simi Singh to Nabi, no run, full and at the stumps, whipped straight to the fielder at mid-wicket",
            over: 24.6
        }
    ]

class ScoreCard extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        runRate: 1,
        Country: [],
        Country2: [],
        value: '',
        options: [
            {
                val:' '
            },
            {
                val:'0 no run'
            },
            {
                val:'1 good run between wicket'
            },
            {
                val:'2 couple'
            },
            {
                val:'3 its three'
            },
            {
                val:'4 what a shot!'
            },
            {
                val:'6! over the rope'
            }
        ],
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({value: event.target.value});
      }
    handleSubmit(event) {
        event.preventDefault();
    }
  
    render() {
      return (
        <Container>
          <SubContainer>
            {Country.map((Country, key) => (
                <h2 className="country-with-scores" key={key}>
                    {Country.value} {Country.score1st}{Country.allout1st}, {Country.score2nd}/{Country.declare}
                </h2>
            ))}
            {Country2.map((Country, key) => {
                return (
                <div>
                    <h2 className="country-with-scores2" key={key}>
                        {Country.value} {Country.score1st}{Country.allout1st}, {Country.score2nd}/{Country.wic2nd} ({Country.overs})
                        <span>CRR: {Country.score2nd / Country.overs}</span>
                    </h2>
                    <div className="runs-to-win" key={key}>
                        Day 4: Stumps - {Country.name} need 316 runs to win
                    </div>
                </div>
            )})}
            <Batsman />
            <button className="squad-router" onClick={() => { history.push('/RSA') }}>SQUAD</button>
            <hr></hr>
            <Bowler />
            <button className="squad-router eng" onClick={() => { history.push('/ENG') }}>SQUAD</button>
            <p className="select-field-feed">Choose any one to add!</p>
            <form onSubmit={this.handleSubmit}>
                <select className="comm-selector" value={this.state.value} onChange={this.handleChange}>
                {this.state.options.map(options => (
                            <option key={options}>{options.val}</option>
                        ))}
                </select>
            </form>
            <hr />
            <p className="link-upcoming-match" onClick={() => { history.push('/matches') }}>Upcoming</p>
            <p className="link-upcoming-match" onClick={() => { history.push('/profile') }}>Player of All Time!</p>
            <div className="dropdown-select-message">
                {this.state.value}
            </div>
            {Commentory.map((Commentory, key) => {
                return (
                <div className="country-with-scores2" key={key}>
                    <p className= "commentory">{Commentory.over} <span>{Commentory.comm}</span></p>
                </div>
            )})}
          </SubContainer>
        </Container>
      );
    }
  }

  export default ScoreCard;
