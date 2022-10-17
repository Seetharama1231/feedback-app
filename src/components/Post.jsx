import { Navigate, useNavigate, Routes, Route } from "react-router-dom";

export default function Post() {
  const status = 200;

  const navigate = useNavigate();

  if (status === 401) {
    return <Navigate to="/notfound" />;
  }

  const onClick = () => {
    console.log("Hello!");
    navigate("/about");
  };
  return (
    <div>
      <h1>POST</h1>
      <button onClick={onClick}>Click </button>
      <Routes>
        <Route path="/show" element={<h1>Hello POST </h1>} />
      </Routes>
    </div>
  );
}
