import React, { useState } from 'react';
import "../budget/Budget.css"

function BudgetCalculator() {
  const [numTravelers, setNumTravelers] = useState(1);
  const [numDays, setNumDays] = useState(1);
  const [activities, setActivities] = useState([]);
  const [activityName, setActivityName] = useState('');
  const [activityCost, setActivityCost] = useState('');

  const addActivity = () => {
    setActivities([...activities, { name: activityName, cost: activityCost }]);
    setActivityName('');
    setActivityCost('');
  };

  const deleteActivity = (index) => {
    const updatedActivities = [...activities];
    updatedActivities.splice(index, 1);
    setActivities(updatedActivities);
  };

  const calculateTotalBudget = () => {
    const activityCosts = activities.map(activity => activity.cost);
    const totalActivityCost = activityCosts.reduce((a, b) => Number(a) + Number(b), 0);
    const totalBudget = numTravelers * (numDays) * totalActivityCost;
    return totalBudget;
  };

  return (
    <div className='bud-con'>
       <h1>Travel Budget Calculator</h1>
      <div className='form'>
       
        <div className='left'>
          <label className='label'>
            Number of travelers:
            <input type="number" value={numTravelers} onChange={(e) => setNumTravelers(e.target.value)} />
          </label>
          <br />
          <label className='label'>
            Travel Duration:
            <input type="number" value={numDays} onChange={(e) => setNumDays(e.target.value)} />
          </label>
          <br />
          <label className='label'>
            Activity name:
            <input type="text" value={activityName} onChange={(e) => setActivityName(e.target.value)} />
          </label>
          <br />

          <label className='label'>

            Activity cost:
            <input type="number" value={activityCost} onChange={(e) => setActivityCost(e.target.value)} />
          </label>
          <label className='label'>(* per person per day)</label>
          <br />
          <button onClick={addActivity} className='add-but'>Add activity</button>
        </div>
        <div className='right'>
          <h3>Budget</h3>
          <ul className='ull'>
            {activities.map((activity, index) => (
              <li key={index} className='lis'>
                {activity.name} - {activity.cost * numTravelers * (numDays)} <button onClick={() => deleteActivity(index)} className='del-but'>Delete</button>
              </li>
            ))}
          </ul>
          <p>Total budget: {calculateTotalBudget()}</p>
        </div>
      </div>
    </div>
  );
}

export default BudgetCalculator;
