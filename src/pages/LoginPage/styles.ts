import styled from "styled-components";

export const LoginPageContainer = styled.div`
    height: 100vh;
    border: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const LoginPageForm = styled.form`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 400px;
    height: 300px;
    padding: 16px;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
`;

export const LoginpageLabel = styled.label`
    font-size: 24px;
    font-weight: 500;
`;

export const LinkContainer = styled.div`
    display: flex;
    justify-content: center;
    
    a {
        display: flex;
        align-items: center;
        color: #000;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
            text-decoration-color: var(--relay-orange);
        }

        span {
            color: var(--relay-orange);
            margin-left: 4px;
        }

        svg {
            color: var(--relay-orange);
            margin-left: 2px;
        }
    }
`;
