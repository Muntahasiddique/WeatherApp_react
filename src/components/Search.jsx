import '../styles/components/Search.scss'
import { searchplaces } from '../api'
import { useContext, useState } from 'react'
import WeatherContext from '../context/weather.context'

function Search() {
  const {setPlace} = useContext(WeatherContext)
const [text,settext] = useState('')
const [searchResults,setsearchResults] = useState([])
const [opensearchResults,setopensearchResults] = useState(false)


async function onSearch(e){
  settext(e.target.value)
const data =await  searchplaces(e.target.value);
setsearchResults(data)
setopensearchResults(data.length)
}

const changePlace = (place) =>{
setPlace(place)
settext('')
setopensearchResults(false)
}
  return (
  <>
  <div className="search-container" >
<div className="search-icon" >
       <i className='bi bi-search' ></i>
</div>
<div className="search-input">
    <input type="text" name="search-city" placeholder="Search City ...." 
     value={text}
     onChange={onSearch}
    />
   
</div>
{
  opensearchResults && <div className="search-results">
  <div className="results-container">
  { searchResults.map((place)=>(
<div className="result" key={place.place_id } onClick={()=> changePlace(place)} >
      {place.name} , {place.adm_area1} , {place.country}

    </div>
  
    
  ))}

  </div>
</div>
}

  </div>
  </>
  )
}

export default Search
