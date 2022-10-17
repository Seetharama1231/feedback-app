import Card from "../components/shared/Card";
import { Link } from "react-router-dom";

function AboutPage() {
  return (
    <Card>
      <h1>About This project</h1>
      <h2>This is a React App with basic feedback service</h2>
      <p>Version: 1.0.0</p>
      <p>
        <Link to={"/"}>Back To Home</Link>
      </p>
    </Card>
  );
}

export default AboutPage;
