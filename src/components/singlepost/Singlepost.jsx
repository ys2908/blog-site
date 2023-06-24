import "./singlepost.css"

export default function Singlepost() {
  return (
    <div className="singlepost">
      <div className="singlepostwrapper">
        <img 
        src="https://images.pexels.com/photos/2344013/pexels-photo-2344013.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
        alt="" 
        className="singlepostimg"/>
      </div>
      <h1 className="singleposttitle">
        Lorem ipsum dolor sit amet.
        <div className="singlepostedit">
        <i className="singleposticon fa-solid fa-pen-to-square"></i>
        <i className="singleposticon fa-solid fa-trash"></i>
        </div>
      </h1>
      <div className="singlepostinfo">
        <span className="singlepostauthor">Author: <b>Yashika</b></span>
        <span className="singlepostdate">1 hour ago</span>
      </div>
      <p className="singlepostdesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda dolorum voluptatum quod culpa, ex a mollitia earum maiores, deserunt nemo blanditiis? Animi, dolores. Voluptatibus fugit provident recusandae, at in molestiae dolorem magni corrupti eos!Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, non dicta laudantium atque libero repellendus sed quo, culpa unde corporis voluptatibus. Quaerat cumque sequi tempora, dolor similique ea, dolores consectetur esse reprehenderit, mollitia veniam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit rerum maiores eum ipsam ab est porro fugiat ipsa, reprehenderit doloribus temporibus voluptas veniam accusamus optio animi aliquid, asperiores fuga ratione aut mollitia voluptate perferendis.
        </p>
    </div>
  )
}
