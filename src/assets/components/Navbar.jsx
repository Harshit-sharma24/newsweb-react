import { useState, useEffect } from "react"   // ✅ ADD KIYA (TOP PE)

function Navbar({ setCategory, category }) {

  // ✅ ADD KIYA (SCROLL LOGIC)
  const [show, setShow] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShow(false) // scroll down → hide
      } else {
        setShow(true)  // scroll up → show
      }
      setLastScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])


  const navStyle = {
    width: "100%",
    padding: "31px 60px",
    backgroundColor: "black",
    color: "white",
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    alignItems: "center",
    fontSize: "24px",

    position: "fixed",                 // ✅ ADD KIYA
    top: show ? "0" : "-120px",        // ✅ ADD KIYA (hide/show)
    left: 0,
    right: 0,
    zIndex: 1000,
    transition: "top 0.3s ease"
  }

  const logoStyle = {
    fontSize: "28px",
    fontWeight: "bold"
  }

  const centerStyle = {
    textAlign: "center",
    fontSize: "40px",
    color: "#ccc",
    fontWeight: "500"
  }

  const menuStyle = {
    display: "flex",
    gap: "50px",
    listStyle: "none",
    justifyContent: "flex-end"
  }

  const itemStyle = {
    cursor: "pointer"
  }

  const activeStyle = {
    color: "red",
    borderBottom: "2px solid red"
  }

  return (
    <nav style={navStyle}>

      {/* LEFT */}
      <div style={logoStyle}>
        <span style={{ color: "red", marginRight: "5px" }}>●</span>
        NewsWeb
      </div>

      {/* CENTER */}
      <div style={centerStyle}>
        Breaking News • Live Updates
      </div>

      {/* RIGHT */}
      <ul style={menuStyle}>
        
        <li
          style={category === "general" ? activeStyle : itemStyle}
          onClick={() => setCategory("general")}
        >Home</li>

        <li
          style={category === "technology" ? activeStyle : itemStyle}
          onClick={() => setCategory("technology")}
        >Technology</li>

        <li
          style={category === "sports" ? activeStyle : itemStyle}
          onClick={() => setCategory("sports")}
        >Sports</li>

        <li
          style={category === "business" ? activeStyle : itemStyle}
          onClick={() => setCategory("business")}
        >Business</li>

      </ul>

    </nav>
  )
}

export default Navbar