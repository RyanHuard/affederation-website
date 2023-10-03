// TEMPORARY FOR MID-SEASON TRADES
function hasTeamCredentials() {
  if (
    localStorage.getItem("isManager") == "true" &&
    localStorage.getItem("team") == window.location.href.split("/")[6]
  ) {
    return true;
  } else {
    return false;
  }
}

export default hasTeamCredentials;
