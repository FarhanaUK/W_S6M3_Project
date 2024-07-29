import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Card from './Card'

const api_key = 'DEMO_KEY'
const endpoint = `https://api.nasa.gov/planetary/apod?api_key=${api_key}`




function App() {

const [data, setData] = useState()
useEffect(()=>{
function apiData() {
 axios.get(endpoint)
.then(res => {
  console.log(res.data)
  setData(res.data)
})
.catch(err => {
  console.log(err.message)
})


}
apiData()
// setData({"date" : "2024-07-29",
//   "explanation" : "What's happening above Uluru?  A United Nations World Heritage Site, Uluru  is an extraordinary 350-meter high mountain in central Australia that rises sharply from nearly flat surroundings. Composed of sandstone, Uluru has slowly formed over the past 300 million years as softer rock eroded away.  The Uluru region has been a home to humans for over 22,000 years. Recorded  last month, the starry sky above Uluru includes the central band of our Milky Way galaxy, complete with complex dark filaments of dust, bright red emission nebulas, and billions of stars.",
//   "hdurl": "https://apod.nasa.gov/apod/image/2407/UluruMilkyWay_Inwood_1350.jpg",
//   "media_type" : "image",
//   "service_version" : "v1",
//   "title" : "Milky Way over Uluru",
//   "url" : "https://apod.nasa.gov/apod/image/2407/UluruMilkyWay_Inwood_960.jpg"
// })
},[])


if(!data) return "Fetching data..."
  
return (
  <section>
<Card 
title={data.title}
text={data.explanation}
imageURL={data.url}
date={data.date}
/>


  </section>
)


  
}



export default App
