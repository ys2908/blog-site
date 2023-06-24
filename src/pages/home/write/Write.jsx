import "./write.css"

export default function Write() {
  return (
    <div className="write">
        <img className="writeimg"
        src="https://images.pexels.com/photos/2344013/pexels-photo-2344013.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
        alt="" />
      <form className="writeform">
        <div className="writeformgroup">
            <label htmlFor="fileinput">
            <i className="writeicon fas fa-plus"></i>
            </label>
            <input type="file" id="fileinput" style={{display: "none"}} />
            <input type="text" placeholder="Title" className="writeinput" autoFocus={true}/>
        </div>
        <div className="writeformgroup">
            <textarea placeholder="Tell your story..." 
            type="text" 
            className="writeinput writetext">
            </textarea>
        </div>
        <button className="writesubmit">Publish</button>
      </form>
    </div>
  )
}
