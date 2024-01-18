//import { MouseEvent } from "react";

interface ListGroupProps {
  items: string[];
  heading: string;
}

import { useState } from "react";

function ListGroup({ items, heading }: ListGroupProps) {
  //Hook function
  const [selectedIndex, setSelectedIndex] = useState(-1);

  //event handler with type annotation
  //const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>{heading}</h1>

      {/* this lets you use condition statements to have different elements */}
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
