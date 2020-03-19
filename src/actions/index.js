export const increment = () => {
  return {
    type: "INCREMENT"
  };
};

export const changeStatus = val => {
  return {
    type: "CHANGE_STATUS",
    payload: val
  };
};

export const setDashboardValue = val => {
  return {
    type: "SET_VALUE",
    payload: val
  };
};
