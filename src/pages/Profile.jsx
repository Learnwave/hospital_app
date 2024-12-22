import React, { useState } from "react";
import { assets } from "../assets/assets_frontend/assets";

const Profile = () => {
  const [userData, setUserData] = useState({
    name: "Edward vencent",
    image: assets.profile_pic,
    email: "richardjameswap@gmail.com",
    phoneNumber: "+1  123 456 7890",
    address: {
      line1: "57th Cross, Richmond ",
      line2: "Circle, Church Road, London",
    },
    gender: "male",
    dob: "2000-01-19",
  });

  const [isEdit, setIsEdit] = useState(false);

  return (
    <div>
      <img src={userData.image} alt="" />
      {isEdit ? (
        <input
          type="text"
          value={userData.name}
          onChange={(e) =>
            setUserData((prev) => ({ ...prev, name: e.target.value }))
          }
        />
      ) : (
        <p>{userData.name}</p>
      )}
      <hr />
      <div>
        <p>Conatct Information</p>
        <div>
          <p>Email Id:</p>
          <p>{userData.email}</p>
          <p>Phone:</p>
          {isEdit ? (
            <input
              type="text"
              value={userData.phoneNumber}
              onChange={(e) =>
                setUserData((prev) => ({
                  ...prev,
                  phoneNumber: e.target.value,
                }))
              }
            />
          ) : (
            <p>{userData.phoneNumber}</p>
          )}
          <p>Address:</p>
          {isEdit ? (
            <p>
              <input
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line1: e.target.value },
                  }))
                }
                value={userData.address.line1}
                type="text"
                name=""
                id=""
              />
              <br />
              <input
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line2: e.target.value },
                  }))
                }
                value={userData.address.line2}
                type="text"
                name=""
                id=""
              />
            </p>
          ) : (
            <p>
              {userData.address.line1}
              <br />
              {userData.address.line2}
            </p>
          )}
        </div>
      </div>
      <div>
        <p>Basic Information</p>
        <div>
          <p>Gender:</p>
          {isEdit ? (
            <select
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, gender: e.target.value }))
              }
              value={userData.gender}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          ) : (
            <p>{userData.gender}</p>
          )}
          <p>Birthday:</p>
          {
            isEdit ? <input type="date"  onChange={(e) =>
              setUserData((prev) => ({ ...prev, dob: e.target.value }))
            }
            value={userData.dob} />
            : <p>{userData.dob}</p>

          }
        </div>
      </div>
    </div>
  );
};
// // git remote add origin https://github.com/Learnwave/hospital_app.git
// git branch -M main
// git push -u origin main
export default Profile;
