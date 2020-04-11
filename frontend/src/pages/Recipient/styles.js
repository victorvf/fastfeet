import styled from 'styled-components';

export const Search = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 35px;
`;

export const SearchButton = styled.div`
    background: #fff;
    height: 36px;
    padding: 0 15px;
    border: 1px solid #ddd;
    border-radius: 4px;

    display: flex;
    align-items: center;

    input {
        margin-left: 5px;
        background: #fff;
        height: 100%;
        border: 0;
    }
`;

export const RecipientTable = styled.table`
    width: 100%;
    margin-top: 25px;
    border-spacing: 0 1em;

    thead th {
        color: #444;
        text-align: center;
    }

    tbody td {
        background: #fff;
        border-radius: 4px;
    }

    tbody tr {
        height: 50px;
        text-align: center;
    }
`;

export const Footer = styled.footer`
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    margin-top: 50px;

    button {
        background: none;
        color: #444;
        border: 1px solid #333;
        border-radius: 4px;
        padding: 8px;

        &:disabled {
            cursor: default;
            opacity: 0.3;
        }
    }
`;
