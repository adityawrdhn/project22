import styled from "styled-components";

const Form = styled.form`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-content: center;
  font-family: inherit;

  input,
  textarea {
    font-family: inherit;
    background: ${(p) => p.theme.colors.white};
    color: ${(p) => p.theme.colors.black};
    padding: 12px;
    border: 1px solid transparent;
    border-bottom: 1px solid ${(p) => p.theme.colors.primary};
    border-radius: 1px;
    outline: none;
    transition: border 0.3s ease-in-out;
    resize: none;
    width: calc(100% - 24px);

    &:hover,
    &:active,
    &:focus {
      border: 1px solid ${(p) => p.theme.colors.primary};
    }

    &:not(:focus):not(:placeholder-shown):invalid {
      border-color: yellow;
    }
  }

  .radio {
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 16px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    color: ${(p) => p.theme.colors.black};
  }

  .radio input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    background-color: #eee;
    border-radius: 50%;
  }

  .radio:hover input ~ .checkmark {
    background-color: #ccc;
  }

  .radio input:checked ~ .checkmark {
    background: ${(p) => p.theme.colors.primaryHover};
  }

  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  .radio input:checked ~ .checkmark:after {
    display: block;
  }

  .radio .checkmark:after {
    top: 6px;
    left: 6px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: white;
  }
`;

export default Form;
