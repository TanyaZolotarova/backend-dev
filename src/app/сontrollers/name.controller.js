import { UserService } from "../services/user.service";

class NameController {
  constructor() {
    this.userService = new UserService();
  }

  getAll = async (req, res, next) => {
    try {
      const {
        query: { search, pageSize, pageIndex },
      } = req;

      return res.json(
        await this.userService.search(
          search || "",
          Number(pageSize || 20),
          Number(pageIndex || 1)
        )
      );
    } catch (e) {
      return next(e);
    }
  };
}

export default new NameController()