import { SelectionService } from "../services/selection.service";
import Joi from "joi";

export class SelectionController {
  constructor() {
    this.service = new SelectionService();
    this.schema = Joi.object({
      ids: Joi.array().items(Joi.string()).required()
    });
  }

  getAll = async (req, res, next) => {
    try {
      return res.json({ data: await this.service.getAll() });
    } catch (e) {
      return next(e);
    }
  };

  create = async (req, res, next) => {
    const { body: ids } = req;

    const { error } = this.schema.validate({ ids });
    if (error) {
      return res.status(422).json(error.message);
    }

    try {
      return res.json({ data: await this.service.add(ids) });
    } catch (e) {
      return next(e);
    }
  };

  delete = async (req, res, next) => {
    const { body: ids } = req;

    const { error } = this.schema.validate({ ids });
    if (error) {
      return res.status(422).json(error.message);
    }
    // todo validate request

    try {
      return res.json({ data: await this.service.remove(ids) });
    } catch (e) {
      return next(e);
    }
  };
}
