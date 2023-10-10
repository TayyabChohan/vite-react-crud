import React from "react";
interface Props {
  children: string;
  buttoncolor: string;
  onClick: () => void;
}
const CustomButton = ({ children, buttoncolor, onClick }: Props) => {
  console.log(buttoncolor,'dsafsd');
  return (
    <button color={'btn btn-'+ buttoncolor} onClick={onClick}>
      {children}
    </button>
  );
};

export default CustomButton;
