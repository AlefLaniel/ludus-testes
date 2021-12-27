import React, { useEffect, useState } from "react";

import { getId } from "../../Services/auth";
import http from "../../Services/httpRequest";

import RoomCard from "../RoomCard";

import { Container, WrapList, Loading } from "./style.js";

import CircularProgress from '@material-ui/core/CircularProgress';
import { Text } from "@chakra-ui/core";


const RoomsList = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      const response = await http.get(`/user/${getId()}/member`);
      console.log(response.data);
      setRooms(response.data);
      setLoading(true)
    }
    )();
  }, []);
  
  
const data = rooms;
console.log(data)


  return (
    <Container>
      {loading ? <WrapList checkMockup={data}>
      {data.map((item, key)=> (
            <RoomCard key={key} data={item} />
        ))}
      </WrapList>
      : <Loading>
          <CircularProgress/>
        </Loading>}
     {((data.length === 0) && loading) ?
          <Text 
          width="150%"
          alignSelf="center"
          alignItems="center"
          fontFamily="var(--font-familyP)"
          >
             Você ainda não possui salas
          </Text>
      : ''}
    </Container>
  );
};

export default RoomsList;
