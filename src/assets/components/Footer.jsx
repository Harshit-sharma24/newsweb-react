function Footer() {
  return (
    <footer style={footerStyle}>
      {/* Top separator line */}
      <div style={separator}></div>

      <div style={footerContainer}>
        {/* Quick Links Left */}
        <div style={footerSection}>
          <h3 style={{ marginBottom: "15px" }}>Quick Links</h3>
          <ul style={linkList}>
            <li><a href="#" style={linkStyle}>Home</a></li>
            <li><a href="#" style={linkStyle}>Technology</a></li>
            <li><a href="#" style={linkStyle}>Sports</a></li>
            <li><a href="#" style={linkStyle}>Business</a></li>
          </ul>
        </div>

        {/* Logo / Info Right */}
        <div style={footerSection}>
          <h1 style={{ marginBottom: "10px" }}>NewsWeb</h1>
          <p style={{ margin: "5px 0", fontSize: "24px" }}>Latest news from around the world</p>
          <p style={{ margin: "5px 0", fontSize: "19px" }}>© 2026 NewsWeb</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

// Styles
const footerStyle = {
  backgroundColor: "#111",
  color: "white",
  padding: "40px 20px",
  fontFamily: "Arial, sans-serif",
  fontSize: "16px",
}

const separator = {
  height: "2px",
  backgroundColor: "#444",  // line color
  marginBottom: "30px"
}

const footerContainer = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  maxWidth: "1200px",
  margin: "0 auto",
}

const footerSection = {
  flex: "1 1 250px",
  marginBottom: "25px",
}

const linkList = {
  listStyle: "none",
  padding: 0,
  margin: 0,
}

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
  display: "block",
  margin: "8px 0",
  padding: "5px 10px",
  borderRadius: "5px",
  transition: "all 0.3s ease",
  fontWeight: "bold",
}