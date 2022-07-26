import logo from "./assets/images/logo.svg";
import { ReactComponent as Like } from "./assets/images/like.svg";
import { ReactComponent as Dislike } from "./assets/images/dislike.svg";

function App() {
  return (
    <>
      <Like style={{ width: "100px" }} />
      <Dislike style={{ width: "100px" }} />
    </>
  );
}

export default App;
