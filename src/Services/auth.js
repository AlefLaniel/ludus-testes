

const TOKEN_KEY = "ludus-token";
const id_key = "ludus-id";
const id_room = "room-id"
const id_project = "project-id";


export const isAuthenticated = () => {
  return localStorage.getItem(TOKEN_KEY) !== null;
};

export const getToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};

export const login = (token) => {
  localStorage.setItem(TOKEN_KEY, token);
};

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(id_key);
  localStorage.removeItem(id_room);
  localStorage.removeItem(id_project);
};

export const idUser = (id) => {
  localStorage.setItem(id_key, id);
}

export const getId = () => {
  return localStorage.getItem(id_key);
}

export const idRoom = (idroom) => {
  return localStorage.setItem(id_room, idroom);
}

export const idProject = (idproject) => {
  return localStorage.setItem(id_project, idproject);
}

export const getTdRoom = () => {
  return localStorage.getItem(id_room);
}

export const getIdProject = () => {
  return localStorage.getItem(id_project);
}

export const removeRoom = () => {
  localStorage.removeItem(id_room);
}

export const removeProject = () => {
  localStorage.removeItem(id_project);
}
