import Apliclient from "./Api-client";
export interface User {
  id: number;
  name: string;
}
class ClientServices {
  getAllUsers() {
    return Apliclient.get<User[]>("/users");
  }
  deleteUser(id: number) {
    return Apliclient.delete(`/users/${id}`);
  }
  addUser(newObject: object) {
    return Apliclient.post(`/users/${newObject}`);
  }
  updateUser(id: number,updatedUser: object) {
    return Apliclient.patch(`/users/${id}`, updatedUser);
  }
}
export default new ClientServices();
