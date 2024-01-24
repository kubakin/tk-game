import { Card } from "antd";
import React from "react";
import { useMe } from "../../data/query/user/me";
import { ExistTeam } from "../../components/Team/ExistTeam";
import { NotExistTeam } from "../../components/Team/NotExistTeam";
import { useLocation, useSearchParams } from "react-router-dom";

const { Meta } = Card;

const mockedPlayers = [
  {
    name: "Anna",
    phone: "123",
  },
  {
    name: "Alex",
    phone: "123",
  },
  {
    name: "Dania",
    phone: "123",
  },
];

export const TeamContainer = () => {
  const {
    me: {
      data: { me },
    },
  } = useMe();

  if (me.team) {
    return <ExistTeam />;
  } else {
    return <NotExistTeam />;
  }
};
