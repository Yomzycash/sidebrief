import styled from "styled-components";

export const InputWrapper = styled.div`
  border: 1px solid #ececec;
  align-items: center;
  display: flex;
  flex-direction: row;
  border-radius: 10px;
  padding: 8px 24px;
  margin-top: 20px;
  height: 56px;

  @media screen and (max-width: 600px) {
    height: 48px;
  }
`;

export const Wrapper = styled.div`
  margin-bottom: 24px;

  @media screen and (max-width: 600px) {
    margin-bottom: 20px;
  }
`;

export const Input = styled.input`
  color: #4e5152;
  height: 56px;
  width: 90%;
  border: none;
  background: none;
  outline: none;
  font-weight: 400;
  font-size: 16px;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  @media screen and (max-width: 600px) {
    font-size: 14px;
  }
`;

export const Select = styled.select`
  color: #4e5152;
  height: 56px;
  width: 100%;
  border: none;
  padding: 5px 4px;
  background: none;
  cursor: inherit;
  outline: none;
  font-weight: 400;
  font-size: 16px;

  @media screen and (max-width: 600px) {
    font-size: 14px;
  }
`;

export const Show = styled.p`
  cursor: pointer;
  color: #4e5152;
  font-size: 16px;

  @media screen and (max-width: 600px) {
    font-size: 14px;
  }
`;

export const Label = styled.label`
  color: #4e5152;
  font-weight: 400;
  font-size: 16px;

  @media screen and (max-width: 600px) {
    font-size: 14px;
  }
`;

export const Iconwrapper = styled.div`
  margin-right: 20px;

  @media screen and (max-width: 600px) {
    margin-right: 18px;
  }
`;

export const ErrMsg = styled.div`
  color: red;
  font-size: 12px;
  justify-content: center;
  align-items: center;
`;

export const Top = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const DateWrapper = styled.div`
  position: relative;
`;

export const CalendarWrapper = styled.div`
  position: absolute;
`;

// width: ${props => props.width };

// @media screen and (max-width: 600px) {
// font-size: 14px;
//   }
// `;
