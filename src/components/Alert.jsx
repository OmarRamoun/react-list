import styled from 'styled-components';

const alertClassName = color => {

  switch (color) {
    case "green":
      return `bg-green-100 border-l-4 border-green-500 text-green-700 p-4 text-left`;
    case "red":
      return `bg-red-100 border-l-4 border-red-500 text-red-700 p-4 text-left`;
    case "blue":
      return `bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 text-left`;
      default:
        return `bg-indigo-100 border-l-4 border-indigo-500 text-indigo-700 p-4 text-left`;
  }
};

const StyledAlert = styled.div.attrs(({color}) => (
  {
    className: alertClassName(color)
  }
)
)``;

const Alert = ({ title, description, action }) => {

  const pickColor = action => {
    switch (action) {
      case "add":
        return "green";
      case "remove":
        return "red";
      case "update":
        return "blue"
      default:
        return "indigo";
    }
  }

  return (
    <StyledAlert
      role="alert"
      color={pickColor(action)}
    >
      <p className="font-bold">{title}</p>
      <p>{description}</p>
    </StyledAlert>
  )
}

export default Alert;
