function News({ title, desc, image, link }) {

  return (
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer" 
      style={{ textDecoration: "none", color: "black" }}
    >
      <div style={cardStyle}>

        <img 
          src={image || "https://via.placeholder.com/300"} 
          style={imageStyle} 
        />

        <h3>{title || "No Title"}</h3>

        <p>{desc || "No Description"}</p>

      </div>
    </a>
  )
}
export default News

// 🔥 Styles
const linkStyle = {
  textDecoration: "none",
  color: "inherit"
}

const cardStyle = {
  border: "14px solid #eee",
  padding: "10px",
  borderRadius: "12px",
  background: "white",
  cursor: "pointer",
  transition: "all 0.3s ease",
  height: "100%"
}

const imageStyle = {
  width: "100%",
  height: "200px",
  objectFit: "cover",
  borderRadius: "8px"
}