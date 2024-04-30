
import React,{useState} from 'react';
import Next from "../../Assets/Images/arrow-down.png";
import pervious from "../../Assets/Images/arrow-up.png";
import stryImg1 from "../../Assets/Images/stryimg1.png";
import stryImg2 from "../../Assets/Images/stryimg2.png";
import stryImg3 from "../../Assets/Images/stryimg3.png";
import stryImg4 from "../../Assets/Images/stryimg4.png";
import stryImg5 from "../../Assets/Images/stryimg5.png";
import stryImg6 from "../../Assets/Images/stryimg6.png";
import stryImg7 from "../../Assets/Images/stryimg7.png";
import stryImg8 from "../../Assets/Images/stryimg8.png";
import StoryCard from './StoryCard';


function StoriesBox({ filteredBtnText }) {


    
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;

    const filteredStories = filteredBtnText ? ScienceStryData.filter(ScienceStryData => ScienceStryData.btnText === filteredBtnText) : ScienceStryData;

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const currentStories = filteredStories.slice(startIndex, endIndex);

    const handleNextPage = () => {
        setCurrentPage(prevPage => prevPage + 1);
    };

    const handlePreviousPage = () => {
        setCurrentPage(prevPage => prevPage - 1);
    };

    return (
        <div>
            <div className='cardConatiner'>
                {currentStories.map((item, id) => (
                    <StoryCard
                        key={id}
                        stryIMg={item.stryIMg}
                        text={item.text}
                        btnText={item.btnText}

                    />
                ))}


            </div>
          
          {filteredBtnText === "Clear All" ? "" :
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
            }

        </div>

    )
}

export default StoriesBox