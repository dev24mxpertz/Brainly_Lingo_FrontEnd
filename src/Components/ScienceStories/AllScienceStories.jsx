import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Next from "../../Assets/Images/arrow-down.png";
import pervious from "../../Assets/Images/arrow-up.png";
import StoryCard from "./StoryCard";
import {
  AdventurefetchData,
  Create_whole_copy,
  FantasyfetchData,
  HistoryfetchData,
  MysteryfetchData,
  SciencefetchData,
  SportfetchData,
} from "../../store/Actions/storyActions";

function AllScienceStories({ filteredBtnText }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [endPoints, setEndPoints] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const user = useSelector((state) => state.auth.user);
  const FakeDataFetched = useSelector((state) => state.Story.FakeData);
  const dataFetched = useSelector((state) => state.Story.data);

  useEffect(() => {
    let validate = true;
    const fetchData = () => {
      switch (location.pathname) {
        case "/ScienceFictionStories":
          setEndPoints("/ScienceFictionStories");
          dispatch(SciencefetchData());
          break;
        case "/FantasyStories":
          setEndPoints("/FantasyStories");
          dispatch(FantasyfetchData());
          break;
        case "/MysteryStories":
          setEndPoints("/MysteryStories");
          dispatch(MysteryfetchData());
          break;
        case "/HistoryStories":
          setEndPoints("/HistoryStories");
          dispatch(HistoryfetchData());
          break;
        case "/AdventureStories":
          setEndPoints("/AdventureStories");
          dispatch(AdventurefetchData());
          break;
        case "/SportsStories":
          setEndPoints("/SportsStories");
          dispatch(SportfetchData());
          break;
        default:
          break;
      }
    };

    fetchData();

    return () => {
      validate = false;
    };
  }, [dispatch, location]);

  useEffect(() => {
    if (FakeDataFetched.length > 0) {
       const CopyData = {
      Student_ID: user._id,
      Data: FakeDataFetched,
      pathname: location.pathname,
    };

     dispatch(Create_whole_copy(CopyData));
    }
  }, [FakeDataFetched, dispatch]);

  const CreateCopy = async () => {
  
  };

  const loading = useSelector((state) => state.Story.loading);
  const error = useSelector((state) => state.Story.error);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const itemsPerPage = 8;
  const filteredStories = dataFetched
    ? filteredBtnText
      ? dataFetched.filter(
          (dataFetched) => dataFetched.Status === filteredBtnText
        )
      : dataFetched
    : [];

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentStories = filteredStories.slice(startIndex, endIndex);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleStoryCardClick = (
    id,
    Brainquest,
    Storyadvenure,
    Wordexplore,
    endPoints,
    StoryTitle
  ) => {
    navigate(`/mainStory/${id}`, {
      state: { Brainquest, Storyadvenure, Wordexplore, endPoints, StoryTitle },
    });
  };

  return (
    <div>
      <div className="cardConatiner">
        {currentStories.map((item, id) => (
          <StoryCard
            key={id}
            stryIMg={item.Image[0]}
            text={item.Title}
            btnText={item.Status}
            id={item._id}
            onStoryTextClick={handleStoryCardClick}
            Brainquest={item.Brainquest}
            Storyadvenure={item.Storyadvenure}
            Wordexplore={item.Wordexplore}
            endPoints={endPoints}
            StoryTitle={item.Title}
          />
        ))}
      </div>

      {filteredBtnText === "Clear All" ? (
        ""
      ) : (
        <div className="p-4 button-container">
          {currentPage > 1 && (
            <button className="previous-button" onClick={handlePreviousPage}>
              <span>
                <img src={pervious} alt="Previous" />
              </span>
              Previous
            </button>
          )}
          {currentStories.length === itemsPerPage && (
            <button className="next-button" onClick={handleNextPage}>
              Next
              <span>
                <img src={Next} alt="Next" />
              </span>
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default AllScienceStories;
