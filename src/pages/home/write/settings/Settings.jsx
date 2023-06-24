import Sidebar from "../../../../components/sidebar/Sidebar"
import "./settings.css"

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingswrapper">
        <div className="settingstitle">
            <span className="settingsupdatetitle">Update your account</span>
            <span className="settingsdeletetitle">Delete account</span>
        </div>
        <form className="settingsform">
            <label>Profile Picture</label>
            <div className="settingsPP">
                <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq3wBtb-mPDsHChGpsZUAn4N-EBimUX9nmra1n7YV1j4TjtlIIBkYyHUni2IuN-SUR2Mw&usqp=CAU" 
                alt="" />
                <label htmlFor="fileinput">
                <i className="settingsPPicon fas fa-user-circle"></i>
                </label>
                <input type="file" id="fileinput" style={{display:"none"}}/>
            </div>
            <label>Username</label>
            <input type="text" placeholder="Yashika"/>
            <label>Email</label>
            <input type="email" placeholder="Yashika@gmail.com"/>
            <label>Password</label>
            <input type="password" />
            <button className="settingssubmit">Update</button>
        </form>
      </div>
      <Sidebar/>
    </div>
  )
}
