import { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
interface Props {
  isList: string[];
  heading: string;
  onSelected: (index: number) => void;
}
function ListItems({ isList, heading, onSelected }: Props) {
  const [isSelected, setSelected] = useState(-1);
  const handleOnclick = (index: any) => setSelected(index);
  return (
    <>
      <h1>{heading}</h1>
      <ListGroup>
        {isList?.map((item, index) => (
          <ListGroup.Item
            className={isSelected === index ? "active" : ""}
            onClick={() => {
              handleOnclick(index);
              onSelected(index);
            }}
          >
            {item}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
}
export default ListItems;
