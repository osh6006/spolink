import { useState } from "react";

import DaySelector from "components/schedule/day-selector";
import YearSelector from "components/schedule/year-selector";
import FootballTeamCalendar from "components/team/football-team-calendar";

import "./calendar.css";

interface ITeamScheduleProps {}

const TeamSchedule: React.FunctionComponent<ITeamScheduleProps> = () => {
  const [isAll, setIsAll] = useState(true);

  return (
    <>
      <YearSelector setIsAll={setIsAll} />
      <DaySelector isAll={isAll} setIsAll={setIsAll} />
      <FootballTeamCalendar isAll={isAll} />
    </>
  );
};

export default TeamSchedule;
