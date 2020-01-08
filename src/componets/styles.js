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
    a {
        color: blue;
        text-decoration: none;
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
`;
export const Footer = styled.div`
    backgroundColor: #F8F8F8;
    borderTop: 1px solid #E7E7E7;
    textAlign: center;
    padding: 20px;
    position: fixed;
    left: 0;
    bottom: 0;
    height: 60px;
    width: 100%;
    display: 'block',
    height: '60px',
`;