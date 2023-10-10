import { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
const Like = () => {
  const [status, setStatus] = useState(true);
  // const [mySetSimpleObject, mySetmySetSimpleObject] = useState({ name: "tayyab", address: "chohan" });
  // const [isSet, mySetObject] = useState({
  //   name: "tayyab",
  //   address: { city: "Lahore", price: 23 },
  // });
  // const [isArray, mySetArray] = useState(["tayyab", "chohan"]);              
  const [isArray, mySetArray] = useState([{id:"tayyab", address:'chohan muridke'}]);              
  const togale = () => {
    // mySetmySetSimpleObject({ name: "Tufai", address: "choahn" });
    // mySetObject({ ...isSet, address: { ...isSet.address, city: "Karachi" } });
    //Add into array
    mySetArray([...isArray, 'Ali'])
    //remove
    // mySetArray(isArray.filter(item)!==
    
    setStatus(!false);
  };
  if (status)
    return (
      <>
      {isArray.map((item)=>console.log(item))}
        {/* {isSet?.address?.city} */}
        <AiFillHeart
          style={{ color: "red", size: "23px" }}
          onClick={() => setStatus(false)}
        />
      </>
    );
  return (
    <>
      <AiOutlineHeart size={20} onClick={togale} />
    </>
  );
};

export default Like;
