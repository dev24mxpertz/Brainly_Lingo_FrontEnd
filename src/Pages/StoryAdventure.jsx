import React from 'react'

import "../Styles/storyAdventure.css"
import Book from '../Components/Story Adventure/Book'

function StoryAdventure({StoryAdventureData}) {
     
console.log(StoryAdventureData)

  return (
    <div>
      {/* <div className='storyHd'>
      <Heading blueText={blueText}  whiteText={whiteText} />
      </div>
  
        <Tabs/> */}
        <Book StoryAdventureDataBook={StoryAdventureData}/>
    </div>
  )
}

export default StoryAdventure