import React from "react";
import p from "./ProfileInfo.module.css"

const ProfileInfo = (props) => {
return(
    <div>
        <div>
            <img src="https://static.invenglobal.com/upload/image/2021/09/22/r1632297442836303.png"/>
        </div>
        <div className={p.descriptionBlock}>
            Info
        </div>
    </div>
)
}

export default ProfileInfo