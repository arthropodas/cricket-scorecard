/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import history from '../history';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import { Container, SubContainer, Teamscard, Divider } from '../componets/styles';
import { Morris, Dwaine, JPDuminy } from './PlayerData';


class RsaAllround extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    }

    render () {
        return (
            <Container>
                <SubContainer>
                <a onClick={() => { history.push('/RSA') }}>---Back---</a>
                    {Morris.map((name, topPlayer) => (
                        <div key={topPlayer}>
                            <img className="icon-player" src={name.imageURL} alt={name.fullName} />
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
                                        <Td>{name.data.batting.tests.fifty}</Td>
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
                    {Dwaine.map((name, topPlayer) => (
                        <div key={topPlayer}>
                            <img className="icon-player" src={name.imageURL} alt={name.fullName} />
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
                                        <Td>-</Td>
                                        <Td>{name.data.batting.ODIs.fifty}</Td>
                                        <Td>{name.data.batting.T20Is.fifty}</Td>
                                        </Tr>
                                        <Tr>
                                        <Td>100</Td>
                                        <Td>-</Td>
                                        <Td>{name.data.batting.ODIs.cent}</Td>
                                        <Td>{name.data.batting.T20Is.cent}</Td>
                                        </Tr>
                                        <Tr>
                                        <Td>St</Td>
                                        <Td>-</Td>
                                        <Td>{name.data.batting.ODIs.St}</Td>
                                        <Td>{name.data.batting.T20Is.St}</Td>
                                        </Tr>
                                        <Tr>
                                        <Td>Ct</Td>
                                        <Td>-</Td>
                                        <Td>{name.data.batting.ODIs.Ct}</Td>
                                        <Td>{name.data.batting.T20Is.Ct}</Td>
                                        </Tr>
                                        <Tr>
                                        <Td>6s</Td>
                                        <Td>-</Td>
                                        <Td>{name.data.batting.ODIs.six}</Td>
                                        <Td>{name.data.batting.T20Is.six}</Td>
                                        </Tr>
                                        <Tr>
                                        <Td>4s</Td>
                                        <Td>-</Td>
                                        <Td>{name.data.batting.ODIs.four}</Td>
                                        <Td>{name.data.batting.T20Is.four}</Td>
                                        </Tr>
                                        <Tr>
                                        <Td>SR</Td>
                                        <Td>-</Td>
                                        <Td>{name.data.batting.ODIs.SR}</Td>
                                        <Td>{name.data.batting.T20Is.SR}</Td>
                                        </Tr>
                                        <Tr>
                                        <Td>BF</Td>
                                        <Td>-</Td>
                                        <Td>{name.data.batting.ODIs.BF}</Td>
                                        <Td>{name.data.batting.T20Is.BF}</Td>
                                        </Tr>
                                        <Tr>
                                        <Td>AVG</Td>
                                        <Td>-</Td>
                                        <Td>{name.data.batting.ODIs.Ave}</Td>
                                        <Td>{name.data.batting.T20Is.Ave}</Td>
                                        </Tr>
                                        <Tr>
                                        <Td>HS</Td>
                                        <Td>-</Td>
                                        <Td>{name.data.batting.ODIs.HS}</Td>
                                        <Td>{name.data.batting.T20Is.HS}</Td>
                                        </Tr>
                                        <Tr>
                                        <Td>Runs</Td>
                                        <Td>-</Td>
                                        <Td>{name.data.batting.ODIs.Runs}</Td>
                                        <Td>{name.data.batting.T20Is.Runs}</Td>
                                        </Tr>
                                        <Tr>
                                        <Td>Matches</Td>
                                        <Td>-</Td>
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
                                        <Td>-</Td>
                                        <Td>{name.data.bowling.ODIs.tenw}</Td>
                                        <Td>{name.data.bowling.T20Is.tenw}</Td>
                                        </Tr>
                                        <Tr>
                                        <Td>5W</Td>
                                        <Td>-</Td>
                                        <Td>{name.data.bowling.ODIs.fivew}</Td>
                                        <Td>{name.data.bowling.T20Is.fivew}</Td>
                                        </Tr>
                                        <Tr>
                                        <Td>4W</Td>
                                        <Td>-</Td>
                                        <Td>{name.data.bowling.ODIs.fourw}</Td>
                                        <Td>{name.data.bowling.T20Is.fourw}</Td>
                                        </Tr>
                                        <Tr>
                                        <Td>SR</Td>
                                        <Td>-</Td>
                                        <Td>{name.data.bowling.ODIs.SR}</Td>
                                        <Td>{name.data.bowling.T20Is.SR}</Td>
                                        </Tr>
                                        <Tr>
                                        <Td>Eco</Td>
                                        <Td>-</Td>
                                        <Td>{name.data.bowling.ODIs.Econ}</Td>
                                        <Td>{name.data.bowling.T20Is.Econ}</Td>
                                        </Tr>
                                        <Tr>
                                        <Td>Avg</Td>
                                        <Td>-</Td>
                                        <Td>{name.data.bowling.ODIs.Ave}</Td>
                                        <Td>{name.data.bowling.T20Is.Ave}</Td>
                                        </Tr>
                                        <Tr>
                                        <Td>BBM</Td>
                                        <Td>-</Td>
                                        <Td>{name.data.bowling.ODIs.BBM}</Td>
                                        <Td>{name.data.bowling.T20Is.BBM}</Td>
                                        </Tr>
                                        <Tr>
                                        <Td>BBI</Td>
                                        <Td>-</Td>
                                        <Td>{name.data.bowling.ODIs.BBI}</Td>
                                        <Td>{name.data.bowling.T20Is.BBI}</Td>
                                        </Tr>
                                        <Tr>
                                        <Td>Wkts</Td>
                                        <Td>-</Td>
                                        <Td>{name.data.bowling.ODIs.Wkts}</Td>
                                        <Td>{name.data.bowling.T20Is.Wkts}</Td>
                                        </Tr>
                                        <Tr>
                                        <Td>Runs</Td>
                                        <Td>-</Td>
                                        <Td>{name.data.bowling.ODIs.Runs}</Td>
                                        <Td>{name.data.bowling.T20Is.Runs}</Td>
                                        </Tr>
                                        <Tr>
                                        <Td>Balls</Td>
                                        <Td>-</Td>
                                        <Td>{name.data.bowling.ODIs.Balls}</Td>
                                        <Td>{name.data.bowling.T20Is.Balls}</Td>
                                        </Tr>
                                        <Tr>
                                        <Td>Matches</Td>
                                        <Td>-</Td>
                                        <Td>{name.data.bowling.ODIs.Mat}</Td>
                                        <Td>{name.data.bowling.T20Is.Mat}</Td>
                                        </Tr>
                                    </Tbody>
                                </Table>
                            </Teamscard>
                        </div>
                    ))}
                    {JPDuminy.map((name, topPlayer) => (
                        <div key={topPlayer}>
                            <img className="icon-player" src={name.imageURL} alt={name.fullName} />
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
                                        <Td>{name.data.batting.tests.fifty}</Td>
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

export default RsaAllround;
