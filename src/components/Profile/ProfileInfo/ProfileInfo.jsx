import React from "react";
import p from "./ProfileInfo.module.css"

const ProfileInfo = (props) => {
return(
    <div>
        <div className={p.descriptionBlock}>
            <img src="https://bs-uploads.toptal.io/blackfish-uploads/blog/post/seo/og_image_file/og_image/16097/react-context-api-4929b3703a1a7082d99b53eb1bbfc31f.png"/>
        </div>
        <div className={p.descriptionBlock}>
            Info
        </div>
    </div>
)
}

export default ProfileInfo