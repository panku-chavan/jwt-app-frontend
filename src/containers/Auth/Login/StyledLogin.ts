import styled from "styled-components";

export const Wrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const Container = styled.div`
  box-sizing: border-box;
  width: 40%;
  /* border: 1px solid white; */
  background: rgb(237, 237, 237, 0.1);
  margin: 50px 10px 10px 10px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: -2px -3px 63px -5px rgba(0, 0, 0, 0.75);
`;

export const Form = styled.form`
  margin: 20px;
  div {
    display: flex;
    flex-flow: column;
    margin-top: 20px;
  }
  TextField {
    color: white;
  }
`;
