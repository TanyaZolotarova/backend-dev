import {UserService} from "../services/user.service";

class NameController {
    constructor() {
        this.userService = new UserService();
    }

    getAll = async (req, res, next) => {
        try {
            const {
                query: {search, pageSize, pageIndex},
            } = req;
            console.log("search: ", search)
            console.log(pageSize)
            console.log(pageIndex)
            const allUsers = await this.userService.search(search, parseInt(pageSize), parseInt(pageIndex));
            const amountOfRows = await this.userService.getAmountOfRows(search);


            return res.json(
                {
                    allUsers,
                    amountOfRows
                });
        } catch (e) {
            return next(e);
        }
    };
}

export default new NameController()