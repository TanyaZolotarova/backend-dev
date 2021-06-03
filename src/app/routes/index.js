import { SelectionController } from "../сontrollers";
import  NameController from '../сontrollers/name.controller';

export function routes(router) {
  const selectionController = new SelectionController();

  router.get("/names", NameController.getAll);

  router.get("/selection", selectionController.getAll);
  router.post("/selection", selectionController.create);
  router.post("/selection-delete", selectionController.delete);

  return router;
}
