import React from "react";

import {
  Container,
  Calendar,
  WrapCalendar,
  Date,
  Content,
  Day,
  Month,
  Year,
  Title,
  Time,
  Text,
} from "./style";
import { SwipeableDrawer } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const BigCalendar = ({ lists, toggleDrawer, show }) => {
  const HandleEvents = (cardData) => {
    let date = cardData.dateTime.split("às")[0];
    let time = cardData.dateTime.split("às")[1];
    let newDate = date.split("de");
    let event = {
      name: cardData.content,
      date: [newDate[0], newDate[1], "2020"],
      time: time,
    };

    return (
      <Calendar key={cardData.id}>
        <Date>
          <Day>{event.date[0]}</Day>
          <section>
            <Month>{event.date[1]}</Month>
            <Year>{event.date[2]}</Year>
          </section>
        </Date>
        <Content>
          <Text>{event.name}</Text>
          <Time>{event.time}</Time>
        </Content>
      </Calendar>
    );
  };

  return (
    <SwipeableDrawer
      onOpen={toggleDrawer(true)}
      onClose={toggleDrawer(false)}
      anchor={"top"}
      open={show}
    >
      <Container>
        <header>
          <Title>WHAT'S HAPPENING AT THIS PROJECT</Title>
          <FontAwesomeIcon icon={faTimesCircle} onClick={toggleDrawer(false)} />
        </header>
        <WrapCalendar>
          {lists.map((item, index) => {
            return item.cards.map((cardData, cardIndex) => {
              return cardData.dateTime !== "" ? HandleEvents(cardData) : null;
            });
          })}
        </WrapCalendar>
      </Container>
    </SwipeableDrawer>
  );
};

export default BigCalendar;
