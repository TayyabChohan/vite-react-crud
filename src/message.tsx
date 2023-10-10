import { useState } from "react";
import ListItems from "./components/ListGroup";
const Message = () => {
  const isList = [
    "Cras justo odio",
    "apibus ac facilisis in",
    "Morbi leo risus",
    "Porta ac consectetur ac",
    "Vestibulum at eros",
  ];
  const handleOnSelected = (item: number) => {
    console.log(item, "tayyab");
  };
  return (
    <>
      <ListItems
        heading={"City"}
        isList={isList}
        onSelected={handleOnSelected}
      />
    </>
  );
};
export default Message;
