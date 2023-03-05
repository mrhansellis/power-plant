//business logic

const storeState = () => {
  let currentState = {};
  return (stateChangeFunction = state => state) =>
  {
    const newState = stateChangeFunction(currentState);
    currentState = { ...newState};
    return newState;
  }
}

const stateControl = storeState();

const changeState = (prop) => {
  return(value) => {
    return (state) => ({
      ...state,
      [prop] : (state[prop] || 0) + value
    })
  }
}

const plant = storeState();
//const plant3 = stateControl(); <---not it
const plant3 = storeState();

const feed = changeState("soil")(1);
const blueFood = changeState("soil")(5);

const sun = changeState("light")(1);
const brightLight = changeState("light")(8);

const hydrate = changeState("water")(1);
const superWater = changeState("water")(5);

const plant1 = storeState();
const plant2 = storeState();

const fedPlant1 = plant1(blueFood);
const fedPlant3 = plant3(feed);

console.log(fedPlant3);


// const fedPlant = stateControl(blueFood);
// const plantFedAgain = stateControl(feed);

// console.log(fedPlant);
// console.log(plantFedAgain);


//UI logic

window.onload = function() {
  document.getElementById("feed").onclick = function ()
  {
    const newState = stateControl(blueFood);
    document.getElementById('soil-value').innerText = `Soil: ${newState.soil}`;
  };
  document.getElementById('show-state').onclick = function() {
  const currentState = stateControl();
  document.getElementById('soil-value').innerText = `Soil: ${currentState.Soil}`;
  };
};





