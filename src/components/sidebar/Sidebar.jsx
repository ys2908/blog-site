import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebaritem">
            <span className="sidebartitle">ABOUT ME</span>
            <img 
            src="https://img.freepik.com/free-photo/close-up-pensive-woman-writing-out-ideas-diary_1262-17809.jpg?w=360" 
            alt="" />
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque accusamus dolores nisi nesciunt culpa saepe necessitatibus itaque maiores veritatis facere.
            </p>
        </div>
        <div className="sidebaritem">
            <span className="sidebartitle">CATEGORIES</span>
            <ul className="sidebarlist">
                <li className="sidebarlistitem">Life</li>
                <li className="sidebarlistitem">Music</li>
                <li className="sidebarlistitem">Style</li>
                <li className="sidebarlistitem">Sport</li>
                <li className="sidebarlistitem">Tech</li>
                <li className="sidebarlistitem">Literature</li>
            </ul>
        </div>
        <div className="sidebaritem">
            <span className="sidebartitle">FOLLOW US</span>
            <div className="sidebarsocial">
            <i className="sidebaricon fa-brands fa-square-facebook"></i>
            <i className="sidebaricon fa-brands fa-square-twitter"></i>
            <i className="sidebaricon fa-brands fa-square-instagram"></i>
            <i className="sidebaricon fa-brands fa-square-pinterest"></i>
            </div>
        </div>
    </div>
  )
}
