import React, { useState } from "react";
import CustomButton from "./components/Button";
import Alert from "./components/Alert";
// interface Props {
//   // children: string;
// }
const Mybutton = () => {
  const [isVisible, setVisible] = useState(false);
  const handleOnclick = () => {
    console.log("Clicked me");
  };
  return (
    <>
      <Alert />
      <CustomButton
        buttoncolor="secondary"
        onClick={handleOnclick}
        children="My Button 1"
      />
    </>
  );
};

export default Mybutton;
