import { FC } from "react";
import { ScheduleCard } from "../schedule-card";
import { content } from "./styles.css";

export const ScheduleGrid: FC = () => {
  return (
      <div className={content}>
          <ScheduleCard weekDay='Segunda-feira' subject='Development and Design Patterns' datetime='19:00 as 22:30'/>
          <ScheduleCard weekDay='Segunda-feira' subject='Development and Design Patterns' datetime='19:00 as 22:30'/>
          <ScheduleCard weekDay='Segunda-feira' subject='Development and Design Patterns' datetime='19:00 as 22:30'/>
          <ScheduleCard weekDay='Segunda-feira' subject='Development and Design Patterns' datetime='19:00 as 22:30'/>
          <ScheduleCard weekDay='Segunda-feira' subject='Development and Design Patterns' datetime='19:00 as 22:30'/>
          <ScheduleCard weekDay='Segunda-feira' subject='Development and Design Patterns' datetime='19:00 as 22:30'/>
      </div>
    
  );
};