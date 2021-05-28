import { userModel } from "../models/user.model";

export class UserService {
  constructor() {
    this.model = userModel;
  }

  /// req.body = {  selection: { id: 1 } }

  store(data) {
    // 1 > selection  ? remove 1 from selection : selection.push(1)

    // /put store(data)
    // get return selection.

    // front: get selection > ngrx > render > id user = selection.id = checked

    // 3 effects, 1 for put selection, 1 for get users, 1 get selection
  }

  show() {
    return this.model.findOne({}, {}, { sort: { created_at: -1 } });
  }

  search(name, pageSize = 0, pageIndex) {
    console.log({ name });
    return this.model.find({ name: { $regex: name, $options: "i" } })
        .skip(pageSize * (pageIndex - 1))
        .limit(pageSize);
  }
}
