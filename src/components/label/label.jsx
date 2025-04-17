import styled from "styled-components";

const LabelStyles = styled.label`
  font-weight: 600;
  cursor: pointer;
  color: #292D32;
`;
const Label = ({ htmlFor="", children, ...props }) => {
  return (
    <LabelStyles htmlFor={htmlFor} {...props}>
      { children}
    </LabelStyles>
  );
};
export default Label;
