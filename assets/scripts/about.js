import { showClientComments , displayLawyerTeam, showCaseSuccessPercentDark, showTeamValues } from "./funcs/shared.js";

window.addEventListener("load", () => {
  showClientComments();
  displayLawyerTeam();
  showCaseSuccessPercentDark();
  showTeamValues();
});
