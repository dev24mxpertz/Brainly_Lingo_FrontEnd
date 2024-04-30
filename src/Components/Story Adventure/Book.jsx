// // import React, { useState } from 'react';
// // import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// // import BookImg from "../../Assets/Images/Book.png";

// // function Book({StoryAdventureDataBook}) {
// //     console.log(StoryAdventureDataBook)

// //     const [currentIndex, setCurrentIndex] = useState(0);

// //     const handleNext = () => {
// //         if (currentIndex === data.length - 1) {

// //             setCurrentIndex('storyEnded');
// //         } else {
// //             setCurrentIndex(prevIndex => prevIndex + 1);
// //         }
// //     };

// //     const handlePrevious = () => {
// //         if (currentIndex === 'storyEnded') {

// //             setCurrentIndex(data.length - 1);
// //         } else {
// //             setCurrentIndex(prevIndex => (prevIndex === 0 ? 0 : prevIndex - 1));
// //         }
// //     };

// //     const data = StoryAdventureDataBook.content


// //     return (
// //         <div className='book-main-container'>
// //             <div className='book-box'>
// //                 <img src={BookImg} className='bookimg' />
// //             </div>

// //             <div className='storyDetails'>
// //                 <div className='storyText'>
// //                     <div className='storyLines' >
// //                         <p>{currentIndex === 'storyEnded' ? "The End" : data[currentIndex]?.Paragraph[currentIndex]}</p>
// //                     </div>
// //                 </div>
// //                 <div className='storyimg'>
// //                     <div className='differentStoryImg'>
// //                         <img src={` https://ik.imagekit.io/dev24/${currentIndex === 'storyEnded' ? '' : data[currentIndex]?.Storyimage[currentIndex]}`}  alt="Image" className='DataimgStory' />
// //                     </div>
// //                 </div>
// //             </div>

// //             <div className='BookPagination'>
// //                 <div className="flex gap-1 justify-between items-center text-lg font-semibold tracking-normal leading-5 text-white whitespace-nowrap">
// //                     <button className="flex  justify-between items-center pgBtns" onClick={handlePrevious} disabled={currentIndex === 0}>

// //                         {currentIndex === 0 ? "" : <>
// //                             <IoIosArrowBack /> <div>Previous</div>
// //                         </>}

// //                     </button>
// //                     <button className="flex  justify-between items-center pgBtns" onClick={handleNext} disabled={currentIndex === 'storyEnded'}>
// //                         {currentIndex === 'storyEnded' ? "" : <>
// //                             <div>{currentIndex === data.length - 1 ? "End" : "Next"}</div>
// //                             <IoIosArrowForward />
// //                         </>}

// //                     </button>
// //                 </div>
// //             </div>
// //         </div>
// //     )
// // }

// // export default Book;


// import React, { useState, useEffect } from 'react';
// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// import BookImg from "../../Assets/Images/Book.png";

// function Book({ StoryAdventureDataBook }) {
//     console.log(StoryAdventureDataBook)
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const [paragraphChunks, setParagraphChunks] = useState([]);
//     const [currentChunkIndex, setCurrentChunkIndex] = useState(0);
//     const [storyImg, setStoryImg] = useState([])

//     // Calculate paragraph chunks with 104 words each
//     useEffect(() => {
//         if (StoryAdventureDataBook && StoryAdventureDataBook.content) {
//             const wordsPerChunk = 95;
//             const paragraphs = StoryAdventureDataBook.content.map(item => item.Paragraph).flat();
//             const storyImgs = StoryAdventureDataBook.content.map(item => item.Paragraph);
//             const chunks = [];
//             let currentChunk = [];

//             for (const paragraph of paragraphs) {
//                 const words = paragraph.split(' ');
//                 for (const word of words) {
//                     currentChunk.push(word);
//                     if (currentChunk.length === wordsPerChunk) {
//                         chunks.push(currentChunk.join(' '));
//                         currentChunk = [];
//                     }
//                 }
//             }

//             if (currentChunk.length > 0) {
//                 chunks.push(currentChunk.join(' '));
//             }

//             setParagraphChunks(chunks);
//             setCurrentIndex(0);
//             setCurrentChunkIndex(0);
//             setStoryImg(storyImgs)
//         }
//     }, [StoryAdventureDataBook]);

//     const handleNext = () => {
//         if (currentChunkIndex === paragraphChunks.length - 1) {
//             return; // Do nothing if it's already at the end
//         }
//         setCurrentChunkIndex(prevIndex => prevIndex + 1);
//     };

//     const handlePrevious = () => {
//         if (currentChunkIndex === 0) {
//             return; // Do nothing if it's already at the beginning
//         }
//         setCurrentChunkIndex(prevIndex => prevIndex - 1);
//     };

//     return (
//         <div className='book-main-container'>
//             <div className='book-box'>
//                 <img src={BookImg} className='bookimg' alt="Book" />
//             </div>

//             <div className='storyDetails'>
//                 <div className='storyText'>
//                     <div className='storyLines'>
//                         <p>{paragraphChunks[currentChunkIndex]}</p>
//                     </div>
//                 </div>
//                 <div className='storyimg'>
//                     <div className='differentStoryImg'>
//                         <img src={` https://ik.imagekit.io/dev24/${currentIndex === 'storyEnded' ? '' :storyImg[currentIndex]?.storyImg[currentIndex]}`} alt="Image" className='DataimgStory' />
//                     </div>
//                 </div>
//             </div>

//             <div className='BookPagination'>
//                 <div className="flex gap-1 justify-between items-center text-lg font-semibold tracking-normal leading-5 text-white whitespace-nowrap">
//                     <button className="flex  justify-between items-center pgBtns" onClick={handlePrevious} disabled={currentChunkIndex === 0}>
//                         {currentChunkIndex === 0 ? "" : <>
//                             <IoIosArrowBack /> <div>Previous</div>
//                         </>}
//                     </button>
//                     <button className="flex  justify-between items-center pgBtns" onClick={handleNext} disabled={currentChunkIndex === paragraphChunks.length - 1}>
//                         {currentChunkIndex === paragraphChunks.length - 1 ? "" : <>
//                             <div>Next</div>
//                             <IoIosArrowForward />
//                         </>}
//                     </button>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Book;


import React, { useState, useEffect } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import BookImg from "../../Assets/Images/Book.png";

function Book({ StoryAdventureDataBook }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [paragraphChunks, setParagraphChunks] = useState([]);
    const [imageUrls, setImageUrls] = useState([]);
    const [currentChunkIndex, setCurrentChunkIndex] = useState(0);

    // Calculate paragraph chunks with 104 words each and respective image urls
useEffect(() => {
    if (StoryAdventureDataBook && StoryAdventureDataBook.content) {
        const chunks = [];
        const urls = [];

        for (const item of StoryAdventureDataBook.content) {
            const paragraphs = item.Paragraph;
            const images = item.Storyimage;

            for (let i = 0; i < paragraphs.length; i++) {
                const paragraph = paragraphs[i];
                const wordsPerChunk = 104;
                const words = paragraph.split(' ');
                let currentChunk = [];
                let currentWordsCount = 0;

                for (const word of words) {
                    currentChunk.push(word);
                    currentWordsCount++;

                    if (currentWordsCount === wordsPerChunk) {
                        chunks.push(currentChunk.join(' '));
                        currentChunk = [];
                        currentWordsCount = 0;
                    }
                }

                if (currentChunk.length > 0) {
                    chunks.push(currentChunk.join(' '));
                }

                urls.push(`https://ik.imagekit.io/dev24/${images[i]}`);
            }
        }

        setParagraphChunks(chunks);
        setImageUrls(urls);
        setCurrentIndex(0);
        setCurrentChunkIndex(0);
    }
}, [StoryAdventureDataBook]);

    

    const handleNext = () => {
        if (currentChunkIndex === paragraphChunks.length - 1) {
            return; // Do nothing if it's already at the end
        }
        setCurrentChunkIndex(prevIndex => prevIndex + 1);
    };

    const handlePrevious = () => {
        if (currentChunkIndex === 0) {
            return; // Do nothing if it's already at the beginning
        }
        setCurrentChunkIndex(prevIndex => prevIndex - 1);
    };

    return (
        <div className='book-main-container'>
            <div className='book-box'>
                <img src={BookImg} className='bookimg' alt="Book" />
            </div>

            <div className='storyDetails'>
                <div className='storyText'>
                    <div className='storyLines'>
                        <p>{paragraphChunks[currentChunkIndex]}</p>
                    </div>
                </div>
                <div className='storyimg'>
                    <div className='differentStoryImg'>
                        <img src={imageUrls[currentChunkIndex]} alt="Image" className='DataimgStory' />
                    </div>
                </div>
            </div>

            <div className='BookPagination'>
                <div className="flex gap-1 justify-between items-center text-lg font-semibold tracking-normal leading-5 text-white whitespace-nowrap">
                    <button className="flex  justify-between items-center pgBtns" onClick={handlePrevious} disabled={currentChunkIndex === 0}>
                        {currentChunkIndex === 0 ? "" : <>
                            <IoIosArrowBack /> <div>Previous</div>
                        </>}
                    </button>
                    <button className="flex  justify-between items-center pgBtns" onClick={handleNext} disabled={currentChunkIndex === paragraphChunks.length - 1}>
                        {currentChunkIndex === paragraphChunks.length - 1 ? "" : <>
                            <div>Next</div>
                            <IoIosArrowForward />
                        </>}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Book;
