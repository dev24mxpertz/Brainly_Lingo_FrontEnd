// import React, { useEffect } from "react";
// import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import { Get_Drag_and_Drop_Data } from "../../store/Slice/DragDropSlice";
// import { Get_BrainQuest_Data } from "../../store/Slice/BrainQuestSlice";

// function StoryCard({
//   stryIMg,
//   text,
//   // btnText,
//   Brainquest,
//   id,
//   onStoryTextClick,
//   Storyadvenure,
//   Wordexplore,
//   endPoints,
//   StoryTitle,
// }) {
//   const FetchedBrainQuestData = useSelector((state) => state.BrainQuest.data);
//   const FetchedDragandDropData = useSelector((state) => state.DragDrop.data);
//   const user = useSelector((state) => state.auth.user);
//   let btnText;
//   // console.log(Brainquest)
//   // console.log(id)
//   let textColorClass = "";

//   useEffect(() => {
//     const GetData = {
//       StoryTitle: StoryTitle,
//       userID: user?._id,
//     };
//     dispatch(Get_BrainQuest_Data(GetData));
//     let Data = {
//       userID: user?._id,
//       StoryTitle: WordexploreStoryTitle,
//     };
//     dispatch(Get_Drag_and_Drop_Data(Data));
//   }, []);

//   if (btnText === "New") {
//     textColorClass = "new-text";
//   } else if (btnText === "In Progress") {
//     textColorClass = "progress-text";
//   } else if (btnText === "Completed") {
//     textColorClass = "completed-text";
//   }

//   return (
//     <>
//       <div className="sciStryCard">
//         <div className="stryimgbox">
//           <img
//             src={` https://ik.imagekit.io/dev24/${stryIMg}`}
//             alt="StoryImage"
//           />
//         </div>

//         {/* <Link to="/mainStory"> */}
//         <div
//           onClick={() =>
//             onStoryTextClick(
//               id,
//               Brainquest,
//               Storyadvenure,
//               Wordexplore,
//               endPoints,
//               StoryTitle
//             )
//           }
//         >
//           <p className="font-poppins font-semibold text-lg">{text}</p>
//         </div>
//         {/* </Link> */}

//         <div className="w-[100%]">
//           <button
//             className={`font-poppins font-semibold text-lg btnTextSciStry ${textColorClass}`}
//           >
//             {btnText}
//           </button>
//         </div>
//       </div>
//     </>
//   );
// }

// export default StoryCard;

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
// import { Get_Drag_and_Drop_Data } from "../../store/Slice/DragDropSlice";
// import { Get_BrainQuest_Data } from "../../store/Slice/BrainQuestSlice";
// import { Get_Status__Data } from "../../store/Slice/statusSlice";

function StoryCard({
  stryIMg,
  text,
  Brainquest,
  id,
  onStoryTextClick,
  Storyadvenure,
  Wordexplore,
  endPoints,
  StoryTitle,
  btnText,
}) {
  const dispatch = useDispatch();
  // const FetchedBrainQuestData = useSelector((state) => state.BrainQuest.data);
  // const StatusData = useSelector((state) => state.Status.data);
  const user = useSelector((state) => state.auth.user);


  //   console.log(FetchedBrainQuestData);
  //   console.log(FetchedDragandDropData);
  // useEffect( () => {
  //   dispatch(Get_BrainQuest_Data({ StoryTitle, userID: user?._id }));
  //   dispatch(Get_Drag_and_Drop_Data({ userID: user?._id, StoryTitle }));
  // }, [dispatch, StoryTitle, user]);

  // useEffect(() => {
  //   //   console.log("FetchedBrainQuestData:", FetchedBrainQuestData);
  //   //   console.log("FetchedDragandDropData:", FetchedDragandDropData);
  //   if (FetchedBrainQuestData === null && FetchedDragandDropData === null) {
  //     btnText = "New";
  //     return;
  //   }
  //   if (FetchedBrainQuestData === null || FetchedDragandDropData === null) {
  //     btnText = "In Progress";
  //     return;
  //   }
  //   if (FetchedBrainQuestData && FetchedDragandDropData) {
  //     console.log(
  //       "FetchedBrainQuestData length:",
  //       FetchedBrainQuestData?.BrainQuest?.length
  //     );
  //     console.log(
  //       "FetchedDragandDropData length:",
  //       FetchedDragandDropData?.Wordexplore?.length
  //     );
  //     switch (true) {
  //       case FetchedBrainQuestData?.BrainQuest?.length > 0 ||
  //         FetchedDragandDropData?.Wordexplore?.length > 0:
  //         setbtnText("In Progress");
  //         if (
  //           FetchedBrainQuestData?.BrainQuest?.length > 0 &&
  //           FetchedDragandDropData?.Wordexplore?.length > 0
  //         ) {
  //           btnText = "Completed";
  //         }
  //         break;
  //       default:
  //         btnText = "New";
  //         break;
  //     }
  //   }
  // }, [FetchedBrainQuestData, FetchedDragandDropData]);

  // useEffect(() => {
  //   console.log(`the btnText bahar - ${btnText} `);
  // }, [btnText]);

  // useEffect(() => {
  //   dispatch(Get_Status__Data({ StoryTitle, userID: user?._id }));
  // },[])

  let textColorClass = "";
  if (btnText === "New") {
    textColorClass = "new-text";
  } else if (btnText === "In Progress") {
    textColorClass = "progress-text";
  } else if (btnText === "Completed") {
    textColorClass = "completed-text";
  }

  return (
    <>
      <div className="sciStryCard">
        <div className="stryimgbox">
          <img
            src={`https://ik.imagekit.io/dev24/${stryIMg}`}
            alt="StoryImage"
          />
        </div>

        <div
          onClick={() =>
            onStoryTextClick(
              id,
              Brainquest,
              Storyadvenure,
              Wordexplore,
              endPoints,
              StoryTitle
            )
          }
        >
          <p className="font-poppins font-semibold text-lg">{text}</p>
        </div>

        <div className="w-[100%]">
          <button
            className={`font-poppins font-semibold text-lg btnTextSciStry ${textColorClass}`}
          >
            {btnText}
            {/* {StatusData ? (StatusData.Status) : (btnText)} */}
          </button>
        </div>
      </div>
    </>
  );
}

export default StoryCard;
