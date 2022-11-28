/* eslint-disable */
import "./styles.css";
import { Link } from "react-router-dom";
export const Upcoming = () => {
  //test
  return (
    <div className={"upcoming"}>
      <div className={"upcoming-container"}>
        <h1 className={"upcoming-title"}>Upcoming</h1>
        <p className={"upcoming-paragraph"}>
          Wanna see all the best new upcoming games ? Well then, you've come to the right place! We even now know when Fable 4 is coming out, in case that's the one you were waiting for.
        </p>
        <Link className={"redirect-link"} to={`/upcoming`}>
          Upcoming games !
        </Link>
      </div>
    </div>
  )
}
