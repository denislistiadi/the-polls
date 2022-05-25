import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Leaderboard from "./Leaderboard";
import Dashboard from "./Dashboard";
import AddPoll from "./AddPoll";
import Navbar from "./Navbar";
import Poll from "./Poll";

export default function App() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.authedUser === null);

  React.useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);

  return (
    <BrowserRouter>
    <div className="container">
      <Navbar />
      {loading === true 
        ? null 
        : <Routes>
            <Route path="/" element={<Dashboard/>} />
            <Route path="/leaderboard" element={<Leaderboard/>} />
            <Route path="/polls/:id" element={<Poll />} />
            <Route path="/add" element={<AddPoll />} />
          </Routes>}
    </div>
    </BrowserRouter>
  );
}
