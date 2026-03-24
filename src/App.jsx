import { useState, useEffect } from "react"
import './App.css'
import Navbar from "./assets/components/Navbar"
import Footer from "./assets/components/Footer"
import NewsCard from "./assets/components/NewsCard"
const apiKey = import.meta.env.VITE_API_KEY

function App() {

  const [category, setCategory] = useState("general")
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {

    setLoading(true)

    
   const apiKey = import.meta.env.VITE_API_KEY

const query = category === "general" ? "india" : category + " india"

fetch(`https://newsapi.org/v2/everything?q=${query}&sortBy=publishedAt&apiKey=${apiKey}`)
  .then(res => res.json())
  .then(data => {
    setNews(data.articles || [])
    setLoading(false)
  })

  }, [category])

  return (
    <>
      <Navbar setCategory={setCategory} category={category} />

      {/* ✅ FIX 2: NAVBAR KE NICHE SPACE */}
      <div style={{ paddingTop: "120px", width: "100%" }}>

        <div className="main">

          {/* 🔥 HEADING WITH LINES */}
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "50px"
          }}>

            {/* LEFT LINE */}
            <div style={{
              flex: 1,
              height: "4px",
              backgroundColor: "#c45e3c",
              marginRight: "15px"
            }}></div>

            {/* TEXT */}
            <h1 style={{
              fontSize: "39px",
              whiteSpace: "nowrap",
              margin: 0
            }}>
              {category.charAt(0).toUpperCase() + category.slice(1)} News
            </h1>

            {/* RIGHT LINE */}
            <div style={{
              flex: 1,
              height: "4px",
              backgroundColor: "#c45e3c",
              marginLeft: "15px"
            }}></div>

          </div>

         
          {loading ? (
            <div className="loader"></div>
          ) : (
            <div className="grid">
              {news.map((item, index) => (
               <NewsCard
  title={item.title}
  desc={item.description}
  image={item.urlToImage}   // NewsAPI ke liye
  link={item.url}
/>
              ))}
            </div>
          )}

        </div>

      </div>

      <Footer />
    </>
  )
}

export default App