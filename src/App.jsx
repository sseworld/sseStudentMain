import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  DeleteStudent,
  GetStudent,
  Home,
  Login,
  SharedLayout,
  SubmitStudent,
  UpdateStudent,
} from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Login />} />
        <Route path={"dashboard"} element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path={"submit"} element={<SubmitStudent />} />
          <Route path={"get"} element={<GetStudent />} />
          <Route path={"update"} element={<UpdateStudent />} />
          <Route path={"delete"} element={<DeleteStudent />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
