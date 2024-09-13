import React, { useState } from "react";

const PrayerForm = ({ onAddPrayer }) => {
  const [prayer, setPrayer] = useState("");
  const [associatedRun, setAssociatedRun] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (prayer.trim() && associatedRun.trim()) {
      onAddPrayer({
        prayer,
        associatedRun,
        timestamp: new Date().toISOString(),
      });
      setPrayer("");
      setAssociatedRun("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="prayer-form">
      <h3>Add a Prayer</h3>
      <div>
        <label htmlFor="prayer">Prayer:</label>
        <textarea
          id="prayer"
          value={prayer}
          onChange={(e) => setPrayer(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="associatedRun">Associated Run:</label>
        <input
          type="text"
          id="associatedRun"
          value={associatedRun}
          onChange={(e) => setAssociatedRun(e.target.value)}
          placeholder="e.g., Morning Jog 5K"
          required
        />
      </div>
      <button type="submit">Add Prayer</button>
    </form>
  );
};

export default PrayerForm;
