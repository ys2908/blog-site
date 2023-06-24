import "./header.css"

export default function Header() {
  return (
    <div className="header">
      <div className="headertitles">
        <span className="headertitlesm">React App</span>
        <span className="headertitlelg">Blog</span>
      </div>
      <img className="headerimg" src="https://images.pexels.com/photos/2138922/pexels-photo-2138922.jpeg?cs=srgb&dl=pexels-kyle-roxas-2138922.jpg&fm=jpg" alt="" />
    </div>
  )
}
