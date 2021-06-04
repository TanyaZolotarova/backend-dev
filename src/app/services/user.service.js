import { userModel } from "../models/user.model";

export class UserService {
  constructor() {
    this.model = userModel;
  }

  store(data) {}

  show() {
    return this.model.findOne({}, {}, { sort: { created_at: -1 } });
  }

  async search(name, pageSize = 0, pageIndex) {
    console.log(await this.model.find({ name: { $regex: name } }));
    return this.model.find({ name: { $regex: name, } })
        .skip(pageSize * pageIndex)
        .limit(pageSize);
  }

  getAll() {
    return this.model
        .find();
  }

   getAmountOfRows(name) {
    return this.model.count({ name: { $regex: name}})
  }

}
