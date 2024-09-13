import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getStravaActivities } from "./stravaApi";
import PrayerForm from "./PrayerForm";
import PrayerList from "./PrayerList";
import "./UserDashboard.css";

const UserDashboard = () => {
  const [activities, setActivities] = useState([]);
  const [prayers, setPrayers] = useState([]);
  const [user, setUser] = useState({
    name: "VICKY LEE",
    email: "vickylee@gmail.com",
    target: 100,
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const stravaActivities = await getStravaActivities();
        setActivities(stravaActivities);
      } catch (error) {
        console.error("Error fetching Strava activities:", error);
      }
    };
    fetchActivities();
  }, []);

  const handleAddPrayer = (prayer) => {
    setPrayers([...prayers, prayer]);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  const prayerProgress = (prayers.length / user.target) * 100;

  return (
    <div className="user-dashboard">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Dashboard</h1>
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      </div>
      <div className="dashboard-content">
        <div className="user-profile">
          <div className="profile-image">{user.name.charAt(0)}</div>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <p>Prayer Target: {user.target}</p>
          <button className="edit-profile">Edit Profile</button>
        </div>

        <div className="main-content">
          <div className="challenge-info">
            <h3>6HR CHALLENGE</h3>
            <p>Status: In Progress</p>
            <p>Last Submission: Sun, 14th Feb 2021 - 3hrs</p>
            <p>Last Activity: Sun, 14th Feb 2021 - 3hrs</p>
            <div className="progress-bar">
              <div
                className="progress"
                style={{ width: `${prayerProgress}%` }}
              ></div>
            </div>
            <p>Prayer Progress: {prayerProgress.toFixed(2)}% completed</p>
            <p>{user.target - prayers.length} prayers remaining</p>
          </div>

          <div className="prayer-submission">
            <h3>PRAYER SUBMISSION</h3>
            <PrayerForm onAddPrayer={handleAddPrayer} />
          </div>

          <div className="activity-records">
            <h3>ACTIVITY RECORDS</h3>
            {activities.slice(0, 3).map((activity, index) => (
              <div key={index} className="activity-item">
                <p>
                  {activity.name} - {activity.distance}km - {activity.duration}
                </p>
              </div>
            ))}
            <button className="more-activities">MORE</button>
          </div>
        </div>
      </div>

      <div className="app-sync">
        <button className="sync-button">SYNC YOUR APP</button>
      </div>

      <PrayerList prayers={prayers} />
    </div>
  );
};

export default UserDashboard;
