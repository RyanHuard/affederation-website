function calculateOverall(position, skill, speed, agility, strength) {
    let positionWeights = {
      "K": [40, 1, 1, 30],
      "P": [40, 1, 1, 30],
      "QB": [20, 1, 1, 15],
      "WR": [10, 9, 2, 1],
      "CB": [10, 9, 2, 1],
      "FS": [10, 9, 2, 1],
      "SS": [10, 9, 2, 1],
      "HB": [10, 9, 2, 1],
      "TE": [10, 9, 2, 1],
      "ILB": [20, 8, 4, 5],
      "OLB": [20, 8, 4, 5],
      "FB": [20, 8, 4, 5],
      "C": [15, 1, 1, 20],
      "LT": [15, 1, 1, 20],
      "LG": [15, 1, 1, 20],
      "RG": [15, 1, 1, 20],
      "RT": [15, 1, 1, 20],
      "LDT": [15, 1, 1, 20],
      "LDE": [15, 1, 1, 20],
      "RDT": [15, 1, 1, 20],
      "RDE": [15, 1, 1, 20],
    };
  
    let weights = positionWeights[position];

    if (weights) {
      let totalWeight = weights.reduce((total, weight) => total + weight, 0);
      let overall = 0;
  
      for (let i = 0; i < weights.length; i++) {
        overall += weights[i] * [skill, speed, agility, strength][i];
      }
  
      let scaledOverall = (overall / totalWeight); // Scale to 0-99
      return Math.round(scaledOverall);
    } else {
      return "Position not found.";
    }
  }
  export default calculateOverall;