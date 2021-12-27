import React, { useState } from "react";

import MomentUtils from "@date-io/moment";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";

import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
} from "@material-ui/pickers";
import { Modal } from "@material-ui/core";
import { WrapDateTime, WrapButtons, Button } from "./style.js";

const MiniCalendar = ({
  display,
  setDisplay,
  setHours,
  setDelivery,
  hours,
  delivery,
  setDateTime,
}) => {
  const [time, setTime] = useState(hours ? new Date(hours) : new Date());
  const [day, setDay] = useState(delivery ? new Date(delivery) : new Date());

  const HandleSave = () => {
    const holeDay = HandleDay(day);
    const holeTime = HandleTime(time);
    setDisplay(false);
    setDateTime(`${holeDay} às ${holeTime}`);
  };

  const HandleRemove = () => {
    setDelivery("");
    setHours("");
    setDisplay(false);
  };

  const HandleTime = (time) => {
    const date = time.toString().split(" ");
    const dateTime = date[4].split(":");
    const hour = dateTime[0];
    const minutes = dateTime[1];
    setHours(`${hour}:${minutes}`);
    return `${hour}:${minutes}`;
  };

  const HandleDay = (e) => {
    const date = e.toString().split(" ");
    const month = date[1];
    const day = date[2];
    setDelivery(`${day} de ${month}`);
    return `${day} de ${month}`;
  };

  return (
    <Modal
      BackdropProps={{ style: { backgroundColor: "transparent" } }}
      open={display}
      onClose={() => setDisplay(false)}
    >
      <WrapDateTime className="WrapDateTime">
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <KeyboardTimePicker
            style={{ width: "240px", alignSelf: "center" }}
            ampm={false}
            margin="normal"
            id="time-picker"
            label="Time picker"
            value={time}
            onChange={(time) => setTime(time)}
            KeyboardButtonProps={{
              "aria-label": "change time",
            }}
          />
        </MuiPickersUtilsProvider>
        <DayPicker selectedDays={day} onDayClick={(day) => setDay(day)} />
        <WrapButtons>
          <Button color={"linear-gradient(0deg, rgba(229, 243, 237, 0.4), rgba(229, 243, 237, 0.4)), #006A58"} hoverColor={"#24840a"} onClick={HandleSave}>
            Salvar
          </Button>
          <Button
            color={"#E14444"}
            hoverColor={"#f50303"}
            onClick={HandleRemove}
          >
            Remover
          </Button>
        </WrapButtons>
      </WrapDateTime>
    </Modal>
  );
};

export default MiniCalendar;
