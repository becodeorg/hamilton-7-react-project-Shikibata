/* eslint-disable */
import "./styles.css";
import { Link } from "react-router-dom";
export const Hero = () => {
  //test
  return (
    <div className={"hero"}>
        <h1 className={"hero-title"}>Throne of Games</h1>
        <p className={"hero-paragraph"}>There is only one thing we say to death: Not today. So today, we play !
        </p>
      <Link className={"redirect-link"} to={`/trending`}>
        Trending games !
      </Link>
    </div>
  )
}
