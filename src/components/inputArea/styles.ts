import styled from "styled-components";

export const Container = styled.div`
    background-color: #fff;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 10px;
    padding: 20px;
    margin-top: 20px;
    display: flex;
    align-items: center;

`;
export const InputArea = styled.div`
    flex:1;
    margin: 0px 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    &:last-child{
        max-width: 100px;
        display: flex;
        align-self: flex-end;
    }

   
`;

export const InputTitle = styled.div`
    color:#000;
    font-weight: bold;
    margin-bottom: 5px;

`;
export const Input = styled.input`
    width: 95%;
    height: 30px;
    padding: 0 5px;
    border: 1px solid lightblue;
    border-radius: 5px;
    
    

    :hover{
        box-shadow: 0px 0px 2px #00f;
    }

`;
export const Select = styled.select`
    width: 100%;
    height: 30px;
    padding: 0 5px;
    border: 1px solid lightblue;
    border-radius: 5px;
   
    :hover{
        box-shadow: 0px 0px 2px #00f;
    }
`;

export const Button = styled.button`
    background-color:#49f;
    
    height: 32px;
    padding: 0 5px;
    border: 1px solid lightblue;
    border-radius: 5px;
    background-color: lightblue;
    color: black;
    cursor: pointer;

    &:hover{
        background-color:#5af;
        color:#fff
    }
`
