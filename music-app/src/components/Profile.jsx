import React from "react";
import "./Profile.css";
import { Link } from "react-router-dom";
import { CircleArrowLeft } from "lucide-react";

const Profile = () => {
    return (
        <div>
            <Link to="/">
                <CircleArrowLeft size={32}/>
            </Link>
            <div>

            </div>
        </div>
    )
}

export default Profile;