export const generateWidgetData2 = (chosenGoal, chosenCompanyType, data) => {
  if (chosenGoal && !chosenCompanyType) {
    return fillIn(
      data.filter(d => {
        const theseGoals = Object.keys(d.goals);
        if (theseGoals.includes(chosenGoal)) {
          d.goals = {
            [chosenGoal]: d.goals[chosenGoal]
          };
          return d;
        }
      })
    );
  } else if (!chosenGoal && chosenCompanyType) {
    return fillIn(data.filter(d => d.companyType === chosenCompanyType));
  } else if (!chosenGoal && !chosenCompanyType) {
    return fillIn(data.filter(d => d));
  } else {
    return fillIn(
      data.filter(d => {
        if (d.companyType === chosenCompanyType) {
          d.goals = {
            [chosenGoal]: d.goals[chosenGoal]
          };
          return d;
        }
      })
    );
  }
};

const createGoalArray = data => {
  const goalsArray = [];
  data.forEach(d => {
    Object.keys(d.goals).forEach(d => {
      if (!goalsArray.includes(d)) {
        goalsArray.push(d);
      }
    });
  });
  return goalsArray;
};

const fillIn = newData => {
  let maxLoan = 0;
  let maxTime = 0;
  const obj = {
    companyTypeOptions: newData.map(d => d.companyType),
    goalOptions: createGoalArray(newData)
  };

  newData.forEach(d => {
    const goals = Object.keys(d.goals);
    goals.forEach(g => {
      const goal = d.goals[g];
      if (goal.maxLoan > maxLoan) maxLoan = goal.maxLoan;
      if (goal.maxTimeInMonths > maxTime) maxTime = goal.maxTimeInMonths;
    });
  });

  obj.maxLoan = maxLoan;
  obj.maxTime = maxTime;

  return obj;
};
