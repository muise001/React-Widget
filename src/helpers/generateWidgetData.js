export const generateWidgetData = (chosenGoal, chosenCompanyType, data) => {
  const { maxTime, maxLoan } = getMetaData(chosenGoal, chosenCompanyType, data);
  getMetaData(chosenGoal, chosenCompanyType, data);
  return {
    goalOptions: getAllGoalTypes(data),
    companyTypeOptions: data.map(d => d.companyType),
    maxLoan,
    maxTime
  };
};

const getAllGoalTypes = data => {
  let arr = [];
  data.forEach(d => {
    const goals = Object.keys(d.goals);
    goals.forEach(goal => {
      !arr.includes(goal) && arr.push(goal);
    });
  });
  return arr;
};

const getMetaData = (chosenGoal, chosenCompanyType, data) => {
  let maxTime = 0;
  let maxLoan = 0;
  if (!chosenGoal && !chosenCompanyType) {
    data.forEach(d => {
      const goals = Object.keys(d.goals);
      goals.forEach(g => {
        const goal = d.goals[g];
        if (goal.maxLoan > maxLoan) maxLoan = goal.maxLoan;
        if (goal.maxTimeInMonths > maxTime) maxTime = goal.maxTimeInMonths;
      });
    });
  } else if (chosenGoal && !chosenCompanyType) {
    data.forEach(d => {
      if (d.goals[chosenGoal]) {
        maxLoan = d.goals[chosenGoal].maxLoan;
        maxTime = d.goals[chosenGoal].maxTimeInMonths;
      }
    });
  } else if (!chosenGoal && chosenCompanyType) {
    data.forEach(d => {
      if (d.companyType === chosenCompanyType) {
        const goals = Object.keys(d.goals);
        goals.forEach(g => {
          const goal = d.goals[g];
          if (goal.maxLoan > maxLoan) maxLoan = goal.maxLoan;
          if (goal.maxTimeInMonths > maxTime) maxTime = goal.maxTimeInMonths;
        });
      }
    });
  } else {
    data.forEach(d => {
      if (d.companyType === chosenCompanyType && d.goals[chosenGoal]) {
        if (d.goals[chosenGoal].maxLoan > maxLoan)
          maxLoan = d.goals[chosenGoal].maxLoan;
        if (d.goals[chosenGoal].maxTimeInMonths > maxTime)
          maxTime = d.goals[chosenGoal].maxTimeInMonths;
      }
    });
  }
  return {
    maxTime,
    maxLoan
  };
};
