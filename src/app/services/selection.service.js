import { selectionModel } from "../models/selection.model";

export class SelectionService {
  constructor() {
    this.model = selectionModel;
  }

  getAll() {
    return this.model.find();
  }

  add(ids) {
    return this.model.insertMany(
        ids.map((id) => ({id}))
    );
  }

  remove(ids) {
    return this.model.remove({ id: { $in: ids } });
  }
}
