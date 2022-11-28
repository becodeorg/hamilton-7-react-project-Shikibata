/* eslint-disable */
import "./styles.css";
import { Link } from "react-router-dom";
export const Newest = () => {
  //test
  return (
    <div className={"newest"}>
      <div className={"newest-container"}>
        <h1 className={"newest-title"}>Newest games</h1>
        <p className={"newest-paragraph"}>
          Want to pick up the latest games for your console? Look no further than right here at GAME! It's hard to keep on top of all the newest video game releases, so check out our list of recent releases below, and start your new adventure!        </p>
        <Link className={"redirect-link"} to={`/newest`}>
          New games !
        </Link>
      </div>
    </div>
  )
}
