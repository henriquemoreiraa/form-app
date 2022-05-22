import styled from "styled-components"; 

export const Container = styled.div`
    h1 {
        font-size: 26px;
        margin: 10px 0 0;
        padding: 0;
    }
    hr {
        height: 0.5px;
        border: 0;
        background-color: #5B5B8C;
        margin: 30px 0;
    }
    label {
        font-size: 13px;

        input {
            margin-top: 7px;
            box-sizing: border-box;
            width: 100%;
            padding: 20px 10px;
            border: 2px solid #51D675;
            border-radius: 10px;
            color: #FFF;
            outline: 0;
            font-size: 15px;
            background-color: transparent
        }
    }
    button {
        background-color: #51D675;
        color: #FFF;
        font-size: 14px;
        font-weight: bold;
        padding: 20px 40px;
        border: 0;
        border-radius: 30px;
        cursor: pointer;
        margin-top: 20px
    }

    .backButton {
        font-size: 16px;
        text-decoration: none;
        padding: 20px 40px;
        color: #B8B8D4
    }
`