import styled from "styled-components";

export const Select = styled.select`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  background-color: white;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;