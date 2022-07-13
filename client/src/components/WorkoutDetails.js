import React from "react";

export const WorkoutDetails = ({ workout }) => {
  const { name, weight, reps, createdAt } = workout;

  return (
    <div className="workout-details">
      <h4>{name}</h4>
      <p>
        <strong>Weight (lbs): </strong>
        {weight}
      </p>
      <p>
        <strong>Reps : </strong>
        {reps}
      </p>
      <p>{createdAt}</p>
    </div>
  );
};
