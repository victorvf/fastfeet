import styled from 'styled-components';

export const Container = styled.div`
    max-width: 900px;
    margin: 0 auto;

    div {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`;

export const Content = styled.div`
    padding: 30px;
    margin-top: 35px;
    background: #fff;
    border-radius: 4px;

    form {
        width: 100%;
        display: flex;
        flex-direction: column;

        span {
            color: #444;
            font-weight: bold;
            align-self: flex-start;
            margin-bottom: 10px;
            margin-top: 20px;
        }

        input {
            padding: 0 10px;
            height: 45px;
            border: 1px solid #ddd;
            border-radius: 4px;
        }
    }
`;
