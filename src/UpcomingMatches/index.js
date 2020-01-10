/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import history from '../history';
import { Container, SubContainer, Matchescard } from '../componets/styles';

const Matches = [
    {
        id: 1194438,
        t1: "Boland",
        t2: "Easterns",
        date: "10 Jan"
    },
    {
        id: 1210978,
        t1: "Trinidad  Tobago",
        t2: "Jamaica",
        date: "11 Jan"
    },
    {
        id: 1210979,
        t1: "Windward Islands",
        t2: "Barbados",
        date: "12 Jan"
    },
    {
        id: 1203674,
        t1: "West Indies",
        t2: "Ireland",
        date: "13 Jan"
    },
    {
        id: 1210977,
        t1: "Leeward Islands",
        t2: "Guyana",
        date: "14 Jan"
    },
    {
        id: 1197766,
        t1: "Auckland",
        t2: "Northern Districts",
        date: "15 Jan"
    },
    {
        id: 1211593,
        t1: "Nepal Police Club",
        t2: "Province Number",
        date: "16 Jan"
    },
    {
        id: 1211885,
        t1: "Moors Sports Club",
        t2: "Panadura Sports Club",
        date: "17 Jan"
    },
    {
        id: 1211887,
        t1: "Nondescripts Cricket Club",
        t2: "Saracens Sports Club",
        date: "18 Jan"
    },
    {
        id: 1211889,
        t1: "Police Sports Club",
        t2: "Tamil Union Cricket and Athletic Club",
        date: "19 Jan"
    },
    {
        id: 1211891,
        t1: "Chilaw Marians Cricket Club",
        t2: "Kalutara Town Club",
        date: "20 Jan"
    },
    {
        id: 1211893,
        t1: "Colombo Cricket Club",
        t2: "Burgher Recreation Club",
        date: "21 Jan"
    },
    {
        id: 1211895,
        t1: "Ragama Cricket Club",
        t2: "Nugegoda Sports Welfare Club",
        date: "22 Jan"
    },
    {
        id: 1208105,
        t1: "Dhaka Platoon",
        t2: "Rangpur Rangers",
        date: "23 Jan"
    },
    {
        id: 1195602,
        t1: "Melbourne Renegades",
        t2: "Melbourne Stars",
        date: "24 Jan"
    },
    {
        id: 1211890,
        t1: "Sinhalese Sports Club",
        t2: "Sri Lanka Navy Sports Club",
        date: "25 Jan"
    },
    {
        id: 1211892,
        t1: "Sri Lanka Army Sports Club",
        t2: "Negombo Cricket Club",
        date: "26 Jan"
    },
    {
        id: 1208106,
        t1: "Cumilla Warriors",
        t2: "Khulna Tigers",
        date: "27 Jan"
    },
    {
        id: 1202244,
        t1: "India",
        t2: "Sri Lanka",
        date: "28 Jan"
    }
]

class UserDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }



  render() {
    return (
        <Container>
            <SubContainer>
                <a onClick={() => { history.push('/') }}>--Back--</a>
                <h1>Upcoming Matches</h1>
                {Matches.map((Match, key) => (
                    <Matchescard key={key}>
                        <p className="match-date">{Match.date}</p>
                        <p className="upcoming-matches-para">{Match.t1} <span className="versus">VS</span> {Match.t2}</p>
                    </Matchescard>
                ))}
            </SubContainer>
        </Container>

    );
  }
}

export default UserDetail;