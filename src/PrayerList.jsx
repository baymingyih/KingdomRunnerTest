import React from "react";

const PrayerList = ({ prayers }) => {
  return (
    <div className="prayer-list">
      <h3>Your Prayers</h3>
      {prayers.length === 0 ? (
        <p>No prayers added yet. Start by adding a prayer above!</p>
      ) : (
        <ul>
          {prayers.map((prayer, index) => (
            <li key={index} className="prayer-item">
              <p>
                <strong>Prayer:</strong> {prayer.prayer}
              </p>
              <p>
                <strong>Associated Run:</strong> {prayer.associatedRun}
              </p>
              <p>
                <strong>Added:</strong>{" "}
                {new Date(prayer.timestamp).toLocaleString()}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PrayerList;
