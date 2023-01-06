import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

export const TextArea = styled.textarea`
  width: 500px;
  height: 200px;
  resize:none;
  font-size: 16px;
  margin: 20px 0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Button = styled.button`
  width: 100px;
  height: 40px;
  font-size: 16px;
  margin: 0 10px;
  padding: 0;
  border: none;
  border-radius: 4px;
  background-color: #333;
  color: #fff;
  cursor: pointer;
`;

export const Output = styled.div`
  width: 500px;
  min-height: 50px;
  font-weight:700;
  font-size: 16px;
  margin: 20px 0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;