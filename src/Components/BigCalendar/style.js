import styled from "styled-components";

export const Container = styled.div`
  background: #e8e7e7;
  min-height: 100vh;

  header {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }

  svg {
    font-size: 35px;
    cursor: pointer;

    :hover {
      color: #383838;
    }
  }
`;

export const Title = styled.h1`
  width: 90%;
  font-size: 25px;
  font-weight: 500;
  color: #000;
  margin: 25px 0px 0px;
  padding-bottom: 20px;
  border-bottom: 1px solid #000;
`;

export const Calendar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  border-radius: 3px;
  box-shadow: 2px 2px 2px #000;
  width: fit-content;
  padding: 10px;
`;

export const Date = styled.div`
  background: #dd1a00;
  color: white;
  font-weight: 800;

  section {
    display: flex;
    justify-content: center;
    text-align: center;
    font-size: 14px;
    flex-direction: column;
    padding: 10px 35px;
    border-top: 1px solid white;
  }
`;

export const Day = styled.h1`
  font-size: 45px;
  text-align: center;
  padding: 15px;
`;

export const Month = styled.h2``;

export const Year = styled.h2``;

export const Content = styled.div`
  font-size: 20px;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  min-height: 168px;
  margin-left: 10px;
  min-width: 161px;
  justify-content: space-between;
  align-self: center;
`;

export const Text = styled.p`
  min-height: 70px;
  display: flex;
  align-items: center;
  overflow-wrap: anywhere;
`;

export const Time = styled.p`
  background: #ff8100;
  color: white;
  width: 100%;
  border-radius: 20px;
  text-align: center;
`;

export const WrapCalendar = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  padding: 40px 80px;
  justify-items: center;
`;
