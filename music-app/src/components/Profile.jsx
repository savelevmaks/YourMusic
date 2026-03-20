import React, { useState} from "react";
import "./Profile.css";
import { Link, useNavigate } from "react-router-dom";
import { CircleArrowLeft, Camera, Maximize2, UploadCloud, LogOut, Edit2, Check, X } from "lucide-react";
import picture from "../files/golub.jpg";

//Это потом перенесется в правильное место
const USER_INFO = {
    mail: "savelevmaksim06@gmail.com",
    nickname: "krizis",
    profile_picture: picture,
    info: "Молодой и перспективный, тут еще куча какой-то инфы бла бла бла, которая еще и переносится",
    main_genres: "Rock, Rap"
};

const Profile = ( {onLogout } ) => {
    const navigate = useNavigate();

    const [userInfo, setUserInfo] = useState(USER_INFO); 
    const [isEditing, setIsEditing] = useState(false);
    const [editData, setEditData] = useState(USER_INFO); 

     const handleEditClick = () => {
        setEditData(userInfo); 
        setIsEditing(true); 
    };

    const handleSaveClick = () => {
        setUserInfo(editData); 
        setIsEditing(false); 
    };

    const handleCancelClick = () => {
        setIsEditing(false); 
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditData(prev => ({ ...prev, [name]: value }));
    };

    const handleLogoutClick = () => {
        onLogout();
        navigate('/');
    };

    const fileUpload = (e) => {
         const file = e.target.files[0];
        if (file) {
            console.log("Выбран файл:", file.name); //Будет переход на страницу с данными релиза
        }
    };

    return (
        <div className="profile-page">
            <div className="profile-header">
                <Link to="/" className="icon-action-btn back-btn" title="На главную">
                    <CircleArrowLeft size={36} />
                </Link>

                <div className="header-actions">
                    {isEditing ? (
                        <>
                            <button className="icon-action-btn success" onClick={handleSaveClick} title="Сохранить">
                                <Check size={28} />
                            </button>
                            <button className="icon-action-btn danger" onClick={handleCancelClick} title="Отменить">
                                <X size={28} />
                            </button>
                        </>
                    ) : (
                        <>
                            <button className="icon-action-btn edit" onClick={handleEditClick} title="Редактировать профиль">
                                <Edit2 size={24} />
                            </button>
                            <button className="icon-action-btn logout" onClick={handleLogoutClick} title="Выйти из аккаунта">
                                <LogOut size={24} />
                            </button>
                        </>
                    )}
                </div>
            </div>

            <div className="profile-container">
                <div className="left-profile">                   
                    <div className={`avatar-wrapper ${isEditing ? 'editing' : ''}`} style={{ backgroundImage: `url(${userInfo.profile_picture})` }}>
                        <div className="avatar-overlay">
                            {isEditing ? (
                                <button className="avatar-btn" title="Загрузить новое фото"><Camera size={24} /></button>
                            ) : (
                                <button className="avatar-btn" title="Посмотреть фото"><Maximize2 size={24} /></button>
                            )}
                        </div>
                    </div>

                    {isEditing ? (
                        <div className="edit-form">
                            <input 
                                type="text" name="nickname" className="edit-input title-input" 
                                value={editData.nickname} onChange={handleChange} placeholder="Ваш псевдоним" 
                            />
                            <input 
                                type="text" name="main_genres" className="edit-input genre-input" 
                                value={editData.main_genres} onChange={handleChange} placeholder="Жанры (через запятую)" 
                            />
                            <textarea 
                                name="info" className="edit-textarea" rows="4" 
                                value={editData.info} onChange={handleChange} placeholder="Расскажите о себе" 
                            />
                        </div>
                    ) : (
                        <>
                            <h1 className="nickname">{userInfo.nickname}</h1>
                            <div className="genres-list">
                                {userInfo.main_genres.split(',').map((genre, index) => (
                                    <span key={index} className="genre-tag">{genre.trim()}</span>
                                ))}
                            </div>
                            <div className="about-me">
                                <h3>Обо мне</h3>
                                <p>{userInfo.info}</p>
                            </div>
                        </>
                    )}
                </div>

                <div className="right-profile">
                    <h2>Студия</h2>
                    <p className="subtitle">Загружайте свои треки и делитесь ими с миром</p>
                    <div className="upload-zone">
                        <input type="file" id="music-upload" accept="audio/*" style={{ display: "none" }} onChange={fileUpload} />
                        <label htmlFor="music-upload" className="upload-label">
                            <div className="upload-icon-circle">
                                <UploadCloud size={40} color="var(--accent)" />
                            </div>
                            <h3>Выбрать аудиофайл</h3>
                            <span>WAV, MP3, FLAC (до 100 МБ)</span>
                        </label>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Profile;