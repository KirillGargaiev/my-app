import React from "react";
import p from "./ProfileInfo.module.css"

const ProfileInfo = (props) => {
return(
    <div>
        <div>
            <img src="https://img.otzyvua.net/2017/05/11/objora-set-supermarketov.png"/>
        </div>
        <div className={p.descriptionBlock}>
            Info
        </div>
    </div>
)
}

export default ProfileInfo