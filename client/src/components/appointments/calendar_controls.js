import React, { memo } from "react";

import ArrowLeft from "../../assets/arrow_left_.svg";

import styles from "../../styles/appointment/appointments.module.scss";

const CalendarControls = ({ getPrevWeek, week, getNextWeek, currentYear, addAppointments }) => {

    return (
        <div className={styles.calendar_control}>
            <div className={styles.dates_control}>
                <button onClick={() => getPrevWeek()}><img style={{transform: "rotateY(180deg)"}} src={ArrowLeft} alt="previous" /></button>
                {week && <span>{week[0].month.substring(0,3)} {week[0].date}-{week[4].month.substring(0,3)} {week[4].date}</span>}
                <button type="button" onClick={() => getNextWeek()}><img src={ArrowLeft} alt="next" /></button>
            </div>
            <span>{currentYear}</span>
            <button className="btn-add-app" onClick={(e) => addAppointments(e.target)}>Schedule Appointment</button>
        </div>
    );
};

export default CalendarControls;