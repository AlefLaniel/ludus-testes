import uuid from "react-uuid";

const loadLists = () => {
  return [
    {
      title: "Backlog",
      creatable: false,
      cards: [
        {
          id: uuid(),
          content:
            'Gravar Aula "Internacionalização de aplicações Node.js, ReactJS e React Native"',
          members: [],
          labels: [],
          comments: [],
          activity: [],
          story: null,
          dateTime: "",
        },
      ],
    },
    {
      title: "Sprint Backlog",
      creatable: false,
      cards: [],
    },
    {
      title: "Doing",
      creatable: false,
      done: false,
      cards: [],
    },
    {
      title: "Review",
      creatable: false,
      done: false,
      cards: [],
    },
    {
      title: "Done",
      creatable: false,
      done: true,
      cards: [],
    },
  ];
};

export default loadLists;
