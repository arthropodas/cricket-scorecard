/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import history from '../history';
import { Container, SubContainer, Teamscard, Divider } from '../componets/styles';

const Profile = [
    {
        "pid": 35320,
        "profile": "\n\nSachin Tendulkar has been the most complete batsman of his time, the most prolific runmaker of all time, and arguably the biggest cricket icon the game has ever known. His batting was based on the purest principles: perfect balance, economy of movement, precision in stroke-making, and that intangible quality given only to geniuses - anticipation. If he didn't have a signature stroke - the upright, back-foot punch comes close - it's because he was equally proficient at each of the full range of orthodox shots (and plenty of improvised ones as well) and can pull them out at will.  \n\n",
        "imageURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSGgtzlRQG8JbdJTXKOuGjvrmJ1JoWAf6_UcnNDno2d9QYA-E2q",
        "battingStyle": "Right-hand bat",
        "bowlingStyle": "Right-arm offbreak, Legbreak googly",
        "majorTeams": "India,Asia XI,Mumbai,Mumbai Indians,Yorkshire",
        "currentAge": "44 years 186 days",
        "born": "April 24, 1973, Bombay (now Mumbai), Maharashtra",
        "fullName": "Sachin Ramesh Tendulkar",
        "name": "Sachin Tendulkar",
        "country": "India",
        "playingRole": "Top-order batsman",
        "v": "2",
        "data": {
            "bowling": {
                "listA": {
                    tenw: "0",
                    fivew: "2",
                    fourw: "4",
                    "SR": "50.8",
                    "Econ": "4.97",
                    "Ave": "42.17",
                    "BBM": "5/32",
                    "BBI": "5/32",
                    "Wkts": "201",
                    "Runs": "8478",
                    "Balls": "10230",
                    "Inns": "",
                    "Mat": "551"
                },
                "firstClass": {
                    tenw: "0",
                    fivew: "0",
                    fourw: "",
                    "SR": "107.1",
                    "Econ": "3.45",
                    "Ave": "61.74",
                    "BBM": "",
                    "BBI": "3/10",
                    "Wkts": "71",
                    "Runs": "4384",
                    "Balls": "7605",
                    "Inns": "",
                    "Mat": "310"
                },
                "T20Is": {
                    tenw: "0",
                    fivew: "0",
                    fourw: "0",
                    "SR": "15.0",
                    "Econ": "4.80",
                    "Ave": "12.00",
                    "BBM": "1/12",
                    "BBI": "1/12",
                    "Wkts": "1",
                    "Runs": "12",
                    "Balls": "15",
                    "Inns": "1",
                    "Mat": "1"
                },
                "ODIs": {
                    tenw: "0",
                    fivew: "2",
                    fourw: "4",
                    "SR": "52.2",
                    "Econ": "5.10",
                    "Ave": "44.48",
                    "BBM": "5/32",
                    "BBI": "5/32",
                    "Wkts": "154",
                    "Runs": "6850",
                    "Balls": "8054",
                    "Inns": "270",
                    "Mat": "463"
                },
                "tests": {
                    tenw: "0",
                    fivew: "0",
                    fourw: "0",
                    "SR": "92.1",
                    "Econ": "3.52",
                    "Ave": "54.17",
                    "BBM": "3/14",
                    "BBI": "3/10",
                    "Wkts": "46",
                    "Runs": "2492",
                    "Balls": "4240",
                    "Inns": "145",
                    "Mat": "200"
                }
            },
            "batting": {
                "listA": {
                    fifty: "114",
                    cent: "60",
                    "St": "0",
                    "Ct": "175",
                    six: "",
                    four: "",
                    "SR": "",
                    "BF": "",
                    "Ave": "45.54",
                    "HS": "200*",
                    "Runs": "21999",
                    "NO": "55",
                    "Inns": "538",
                    "Mat": "551"
                },
                "firstClass": {
                    fifty: "116",
                    cent: "81",
                    "St": "0",
                    "Ct": "186",
                    six: "",
                    four: "",
                    "SR": "",
                    "BF": "",
                    "Ave": "57.84",
                    "HS": "248*",
                    "Runs": "25396",
                    "NO": "51",
                    "Inns": "490",
                    "Mat": "310"
                },
                "T20Is": {
                    fifty: "0",
                    cent: "0",
                    "St": "0",
                    "Ct": "1",
                    six: "0",
                    four: "2",
                    "SR": "83.33",
                    "BF": "12",
                    "Ave": "10.00",
                    "HS": "10",
                    "Runs": "10",
                    "NO": "0",
                    "Inns": "1",
                    "Mat": "1"
                },
                "ODIs": {
                    fifty: "96",
                    cent: "49",
                    "St": "0",
                    "Ct": "140",
                    six: "195",
                    four: "2016",
                    "SR": "86.23",
                    "BF": "21367",
                    "Ave": "44.83",
                    "HS": "200*",
                    "Runs": "18426",
                    "NO": "41",
                    "Inns": "452",
                    "Mat": "463"
                },
                "tests": {
                    fifty: "68",
                    cent: "51",
                    "St": "0",
                    "Ct": "115",
                    six: "69",
                    four: "4016",
                    "SR": "-",
                    "BF": "-",
                    "Ave": "53.78",
                    "HS": "248*",
                    "Runs": "15921",
                    "NO": "33",
                    "Inns": "329",
                    "Mat": "200"
                }
            }
        },
    }
]

class PlayerProfile extends Component {
    constructor(props) {
      super(props);
  
      this.state = {};
    }

    render () {
        return (
            <Container>
                <SubContainer>
                <a onClick={() => { history.push('/') }}>---Back---</a>
                    {Profile.map((name, key) => (
                        <div key={key}>
                            <img className="icon-player" src={name.imageURL} alt="sachin" />
                            <h2 className="Player-heading">{name.name}</h2>
                            <p>{name.profile}</p>
                            <Teamscard>
                                <h2 className="Player-heading">Personal Information</h2>
                                <Divider />
                                <p className="profile-inform">Full Name: <span>{name.fullName}</span></p>
                                <p className="profile-inform">Born     : <span>{name.born}</span></p>
                                <p className="profile-inform">Age: <span>{name.currentAge}</span></p>
                                <p className="profile-inform">country: <span>{name.country}</span></p>
                                <p className="profile-inform">Batting Style: <span>{name.battingStyle}</span></p>
                                <p className="profile-inform">Bowling Style: <span>{name.bowlingStyle}</span></p>
                                <p className="profile-inform">Teams: <span>{name.majorTeams}</span></p>
                            </Teamscard>
                            <Teamscard>
                                <h2 className="Player-heading">Batting Stats</h2>
                                <Divider />
                                <Table>
                                    <Thead>
                                        <Tr>
                                        <Th> </Th>
                                        <Th>Tests</Th>
                                        <Th>ODIs</Th>
                                        <Th>T20Is</Th>
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        <Tr>
                                        <Td>50</Td>
                                        <Td>{name.data.bowling.tests.fifty}</Td>
                                        <Td>{name.data.batting.ODIs.fifty}</Td>
                                        <Td>{name.data.batting.T20Is.fifty}</Td>
                                        </Tr>
                                        <Tr>
                                        <Td>100</Td>
                                        <Td>{name.data.batting.tests.cent}</Td>
                                        <Td>{name.data.batting.ODIs.cent}</Td>
                                        <Td>{name.data.batting.T20Is.cent}</Td>
                                        </Tr>
                                        <Tr>
                                        <Td>St</Td>
                                        <Td>{name.data.batting.tests.St}</Td>
                                        <Td>{name.data.batting.ODIs.St}</Td>
                                        <Td>{name.data.batting.T20Is.St}</Td>
                                        </Tr>
                                        <Tr>
                                        <Td>Ct</Td>
                                        <Td>{name.data.batting.tests.Ct}</Td>
                                        <Td>{name.data.batting.ODIs.Ct}</Td>
                                        <Td>{name.data.batting.T20Is.Ct}</Td>
                                        </Tr>
                                        <Tr>
                                        <Td>6s</Td>
                                        <Td>{name.data.batting.tests.six}</Td>
                                        <Td>{name.data.batting.ODIs.six}</Td>
                                        <Td>{name.data.batting.T20Is.six}</Td>
                                        </Tr>
                                        <Tr>
                                        <Td>4s</Td>
                                        <Td>{name.data.batting.tests.four}</Td>
                                        <Td>{name.data.batting.ODIs.four}</Td>
                                        <Td>{name.data.batting.T20Is.four}</Td>
                                        </Tr>
                                        <Tr>
                                        <Td>SR</Td>
                                        <Td>{name.data.batting.tests.SR}</Td>
                                        <Td>{name.data.batting.ODIs.SR}</Td>
                                        <Td>{name.data.batting.T20Is.SR}</Td>
                                        </Tr>
                                        <Tr>
                                        <Td>BF</Td>
                                        <Td>{name.data.batting.tests.BF}</Td>
                                        <Td>{name.data.batting.ODIs.BF}</Td>
                                        <Td>{name.data.batting.T20Is.BF}</Td>
                                        </Tr>
                                        <Tr>
                                        <Td>AVG</Td>
                                        <Td>{name.data.batting.tests.Ave}</Td>
                                        <Td>{name.data.batting.ODIs.Ave}</Td>
                                        <Td>{name.data.batting.T20Is.Ave}</Td>
                                        </Tr>
                                        <Tr>
                                        <Td>HS</Td>
                                        <Td>{name.data.batting.tests.HS}</Td>
                                        <Td>{name.data.batting.ODIs.HS}</Td>
                                        <Td>{name.data.batting.T20Is.HS}</Td>
                                        </Tr>
                                        <Tr>
                                        <Td>Runs</Td>
                                        <Td>{name.data.batting.tests.Runs}</Td>
                                        <Td>{name.data.batting.ODIs.Runs}</Td>
                                        <Td>{name.data.batting.T20Is.Runs}</Td>
                                        </Tr>
                                        <Tr>
                                        <Td>Matches</Td>
                                        <Td>{name.data.batting.tests.Mat}</Td>
                                        <Td>{name.data.batting.ODIs.Mat}</Td>
                                        <Td>{name.data.batting.T20Is.Mat}</Td>
                                        </Tr>
                                    </Tbody>
                                </Table>
                            </Teamscard>
                            <Teamscard>
                            <h2 className="Player-heading">Bowling Stats</h2>
                            <Divider />
                                <Table>
                                    <Thead>
                                        <Tr>
                                        <Th> </Th>
                                        <Th>Tests</Th>
                                        <Th>ODIs</Th>
                                        <Th>T20Is</Th>
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        <Tr>
                                        <Td>10W</Td>
                                        <Td>{name.data.bowling.tests.tenw}</Td>
                                        <Td>{name.data.bowling.ODIs.tenw}</Td>
                                        <Td>{name.data.bowling.T20Is.tenw}</Td>
                                        </Tr>
                                        <Tr>
                                        <Td>5W</Td>
                                        <Td>{name.data.bowling.tests.fivew}</Td>
                                        <Td>{name.data.bowling.ODIs.fivew}</Td>
                                        <Td>{name.data.bowling.T20Is.fivew}</Td>
                                        </Tr>
                                        <Tr>
                                        <Td>4W</Td>
                                        <Td>{name.data.bowling.tests.fourw}</Td>
                                        <Td>{name.data.bowling.ODIs.fourw}</Td>
                                        <Td>{name.data.bowling.T20Is.fourw}</Td>
                                        </Tr>
                                        <Tr>
                                        <Td>SR</Td>
                                        <Td>{name.data.bowling.tests.SR}</Td>
                                        <Td>{name.data.bowling.ODIs.SR}</Td>
                                        <Td>{name.data.bowling.T20Is.SR}</Td>
                                        </Tr>
                                        <Tr>
                                        <Td>Eco</Td>
                                        <Td>{name.data.bowling.tests.Econ}</Td>
                                        <Td>{name.data.bowling.ODIs.Econ}</Td>
                                        <Td>{name.data.bowling.T20Is.Econ}</Td>
                                        </Tr>
                                        <Tr>
                                        <Td>Avg</Td>
                                        <Td>{name.data.bowling.tests.Ave}</Td>
                                        <Td>{name.data.bowling.ODIs.Ave}</Td>
                                        <Td>{name.data.bowling.T20Is.Ave}</Td>
                                        </Tr>
                                        <Tr>
                                        <Td>BBM</Td>
                                        <Td>{name.data.bowling.tests.BBM}</Td>
                                        <Td>{name.data.bowling.ODIs.BBM}</Td>
                                        <Td>{name.data.bowling.T20Is.BBM}</Td>
                                        </Tr>
                                        <Tr>
                                        <Td>BBI</Td>
                                        <Td>{name.data.bowling.tests.BBI}</Td>
                                        <Td>{name.data.bowling.ODIs.BBI}</Td>
                                        <Td>{name.data.bowling.T20Is.BBI}</Td>
                                        </Tr>
                                        <Tr>
                                        <Td>Wkts</Td>
                                        <Td>{name.data.bowling.tests.Wkts}</Td>
                                        <Td>{name.data.bowling.ODIs.Wkts}</Td>
                                        <Td>{name.data.bowling.T20Is.Wkts}</Td>
                                        </Tr>
                                        <Tr>
                                        <Td>Runs</Td>
                                        <Td>{name.data.bowling.tests.Runs}</Td>
                                        <Td>{name.data.bowling.ODIs.Runs}</Td>
                                        <Td>{name.data.bowling.T20Is.Runs}</Td>
                                        </Tr>
                                        <Tr>
                                        <Td>Balls</Td>
                                        <Td>{name.data.bowling.tests.Balls}</Td>
                                        <Td>{name.data.bowling.ODIs.Balls}</Td>
                                        <Td>{name.data.bowling.T20Is.Balls}</Td>
                                        </Tr>
                                        <Tr>
                                        <Td>Matches</Td>
                                        <Td>{name.data.bowling.tests.Mat}</Td>
                                        <Td>{name.data.bowling.ODIs.Mat}</Td>
                                        <Td>{name.data.bowling.T20Is.Mat}</Td>
                                        </Tr>
                                    </Tbody>
                                </Table>
                            </Teamscard>
                        </div>
                    ))}
                </SubContainer>
            </Container>
        );
    }
}

export default PlayerProfile;
