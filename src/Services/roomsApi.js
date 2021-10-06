
const loadRooms = () => {
  return [
    {
      _id: "94dd3b66-92ad-4322-8bdd-f89184384f62",
      name: "Sala da Turma 21",
      owner: "Hugo Barreto",
      projects: ["1", "2", "3"],
      people: [
        {
          _id: "5",
          name: "Antonio Hamilton Santos Freitas",
          password: "123321",
          email: "chatbot@chat.com.br",
          picture:
            "https://scontent.faju2-1.fna.fbcdn.net/v/t1.0-9/53926445_608343029609633_599052318935089152_o.jpg?_nc_cat=101&_nc_sid=09cbfe&_nc_ohc=2jnIWoiFWN0AX8me57-&_nc_ht=scontent.faju2-1.fna&oh=c9a2fd4659dc6c40ed06794ca7f79102&oe=5F604E67",
          permission: ["Dev"],
        },
        {
          _id: "15+1",
          name: "Hugo",
          password: "123321",
          email: "hugo@hugo.com",
          picture:
            "https://media-exp1.licdn.com/dms/image/C4E03AQFvbf5TQP12Vw/profile-displayphoto-shrink_200_200/0?e=1602720000&v=beta&t=H-aBtxzE3bHmplH5LhuKZLZ1Q1SY-N6O1s8rKAboY7M",
          permission: ["Consultor"],
        },
      ],
    },
  ];
};

export default loadRooms;
