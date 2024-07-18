import { ReactElement } from "react";
import { useLoaderData } from "react-router-dom";
import { ShowDetails } from "../../vite-env";

const Details = (): ReactElement => {
  const details = useLoaderData() as ShowDetails; 
  console.log(details);
  return ( 
    <div>
      <h1>Details</h1>
    </div> 
  );
}

export default Details;