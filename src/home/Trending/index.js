/* eslint-disable */
import "./styles.css";
import { Link } from "react-router-dom";
export const Trending = () => {
  //test
  return (
    <div className={"trending"}>
      <div className={"trending-container"}>
      <h1 className={"trending-title"}>Trending Games</h1>
      <p className={"trending-paragraph"}>
        Which are the most popular video games to be playing this year? There’s no denying that video games are awesome, and extremely popular among all age groups.
      </p>
      <Link className={"redirect-link"} to={`/trending`}>
        Trending games !
      </Link>
    </div>
    </div>
  )
}
