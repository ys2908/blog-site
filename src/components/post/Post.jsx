import "./post.css"

export default function Post() {
  return (
    <div className="post">
      <img className="postimg" 
      src="https://images.pexels.com/photos/1751601/pexels-photo-1751601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
      alt="" />
      <div className="postinfo">
        <div className="postcats">
            <span className="postcat">Music</span>
            <span className="postcat">Life</span>
        </div>
        <span className="posttitle">
         Lorem ipsum dolor sit.
         </span>
         <hr/>
         <span className="postdate">1 hour ago</span>
      </div>
      <p className="postdesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae dolorem, distinctio consequatur amet vel aliquam asperiores rerum suscipit ab fugit aut omnis dignissimos ea, possimus autem facere delectus deserunt mollitia! Facilis obcaecati dicta sunt!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores veniam assumenda harum ipsa aliquid veritatis nam beatae aut adipisci deserunt non maxime obcaecati libero tenetur doloremque error architecto impedit, nesciunt similique commodi saepe repellendus? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate nam id exercitationem, dignissimos autem ad voluptatum! Debitis, adipisci pariatur dolore velit ducimus minus nostrum minima. Delectus eaque minus iste tempore molestiae ab aliquam sapiente.
      </p>
    </div>
  )
}
