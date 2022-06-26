import Rate from "./Rate";
import React from "react";
export default function Ratebox() {
  const [ratenum, getnum] = React.useState([
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
  ]);

  const rateElement = ratenum.map((info) => {
    return (
      <div>
        <Rate key={info.id} id={info.id} />
      </div>
    );
  });

  return <>{rateElement}</>;
}
