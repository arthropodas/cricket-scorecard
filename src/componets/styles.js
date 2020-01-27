import styled from 'styled-components';

export const Container = styled.div`
    align-items: center;
    background: #ccc;
    background-position: center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: auto;
    height: 100vh;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
`;

export const SubContainer = styled.div`
    background: #fff;
    background-position: center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    padding: 15px 20px;
    position: relative;
    top: 10%;
    bottom: 10%;
    left: 0;
    right: 0;
    width: 50%;
    font-family: "Times New Roman", Times, serif;
    a {
        color: blue;
        text-decoration: none;
        cursor: pointer;
    }
    .icon-player {
        width: 50%;
        // height: 150px;
        float: right;
        border-radius: 50%;
    }
    .squad-router {
        background: #159354;
        color: #fff;
        margin-top: 10px;
        float: right;
        width: 80px;
        height: 30px;
        border-radius: 7px;
        cursor: pointer;
        outline: none;
    }
    .link-upcoming-match {
        color: #108eb5;
        float: right;
        font-size: 18px;
        font-weight: 500;
        &:hover {
            text-decoration: underline;
            cursor: pointer;
            // font-size: 22px;
            font-weight: 900;
          }
    }
    .eng {
        background: #5C8EC1;
    }
    .upcoming {
        background: #ccc;
        color: #333;
    }
    .country-with-scores {
        color: #666
        font-size: 16px;
        font-weight: normal;
        padding: 7px 8px;
        margin: 0;
    }
    .country-with-scores2 {
        margin-top: 0;
        font-size: 20px;
        padding: 7px 8px;
        margin: 0;
    }
    .runs-to-win {
        font-size: 14px;
        padding: 7px 8px;
        margin: 0;
        color: #d0021b;
    }
    span {
        font-weight: bold;
        font-size: 12px;
        color: #666;
        margin-left: 3px;
    }
    .versus {
        font-weight: bold;
        font-size: 20px;
        color: #333;
    }
    .select-field-feed {
        font-size: 20px;
        font-weight: 900;
        float: right;
    }
    .comm-selector {
        width: 50%;
        height: 25px;
    }
    .comm-selector:focus {
        outline: none;
    }
    .commentory {
        font-size: 14px;
        font-weight: 900;
    }
    .dropdown-select-message {
        font-size: 16px;
        font-weight: 900;
        color: #666;
    }
    h1 {
        text-align: center;
        text-transform: uppercase;
    }
    .upcoming-matches-para {
        text-align: center;
        font-size: 16px;
        color: #666;
        font-weight: bold;
    }
    .Player-heading {
        text-align: center;
        color: #326394;
    }
`;

export const Divider = styled.hr`
    border-color: #ccc;
    border-style: solid;
    border-bottom: 0;
    margin-bottom: 40px;
    margin-top: 0;
`;

export const Matchescard = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    width: 100%;
    height: 70px;
    border-radius: 7px;
    margin-bottom: 10px;
    cursor: pointer;
    &:hover {
        box-shadow: 0 15px 16px 0 rgba(0,102,255,0.2);
      }
    .match-date {
        text-align: center;
        font-size: 14px;
        color: #173a59;
        font-weight: bold;
        margin: 0;
    }
`;

export const Teamscard = styled.div`
    box-shadow: 0 2px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    width: 100%;
    border-radius: 7px;
    margin-bottom: 10px;
    cursor: pointer;
    &:hover {
        box-shadow: 0 15px 16px 0 rgba(0,102,255,0.2);
      }
    .match-date {
        text-align: center;
        font-size: 14px;
        color: #173a59;
        font-weight: bold;
        margin: 0;
    }
    .profile-inform {
        margin-left: 10px;
        font-size: 16px;
        font-weight: 900;
    }
    thead {
        color: #666;
    }
    th {
        text-align: center;
    }
    td {
        padding: 20px;
        padding-left: 40px;
        color: #326394;
    }
`;