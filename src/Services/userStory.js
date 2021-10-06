import uuid from "react-uuid";

const loadStory = () => {
  return [
    {
      id: uuid(),
      content: "Eu como usuário quero criar outros usuários",
      theme: {
        name: "Login",
        color: "#f986d0",
      },
    },
  ];
};

export default loadStory;
