
import { FC } from "react";
import { container, content, datetimes, subjects, weekDays } from "./styles.css";

export const ScheduleCard: FC<ScheduleCardProps> = ({datetime, subject, weekDay}) => {
  return (
    <div className={content}>
        <div className={weekDays}>{weekDay}</div>
        <div className={container}>
            <p className={subjects}>{subject}</p>
            <p className={datetimes}>{datetime}</p>
        </div>
    </div>
  );
}