import styled from "styled-components";

const Button = styled.button`
  background-color: #ff6347;
  width: 25%;
  height: 20%;
  border: 1px solid transparent;
  border-radius: 5px;
  padding: 8px;
  color: white;
  &:hover {
    background-color: #ff8064;
  }
`;
interface Text {
  text: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const ButtonDefault: React.FC<Text> = ({ style, text, onClick }) => {
  return (
    <Button onClick={onClick} style={style}>
      {text}
    </Button>
  );
};

export default ButtonDefault;
