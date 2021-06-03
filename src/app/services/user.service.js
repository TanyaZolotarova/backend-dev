import { userModel } from "../models/user.model";

export class UserService {
  constructor() {
    this.model = userModel;
  }

  store(data) {}

  show() {
    return this.model.findOne({}, {}, { sort: { created_at: -1 } });
  }

  search(name, pageSize = 0, pageIndex) {
    console.log({ name, pageSize, pageIndex });
    return this.model.find({ name: { $regex: name, $options: "i" } })
        .skip(pageSize * pageIndex + 1)
        .limit(pageSize);
  }

  getAll() {
    return this.model
        .find();
  }

  getAmountOfRows() {
    return this.model.count();
  }

}
