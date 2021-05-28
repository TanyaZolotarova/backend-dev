import { SelectionController } from "../сontrollers";
import  NameController from '../сontrollers/name.controller';

export function routes(router) {
  // const nameController = new NameController();
  const selectionController = new SelectionController();

  router.get("/names", NameController.getAll);

  router.get("/selection", selectionController.getAll);
  router.post("/selection", selectionController.create);
  router.delete("/selection", selectionController.delete);
  // router.get
  // router.delete

  return router;
}
