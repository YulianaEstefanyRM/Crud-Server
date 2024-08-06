"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const producto_1 = require("../controllers/producto");
const router = (0, express_1.Router)();
//cuando tenga la ruta api/prodcuto/ y el verbo sea get ejecuta la función
// getProducts del archivo de controllers/product.ts
router.get('/', producto_1.getProducts);
router.get('/:id', producto_1.getProduct);
router.delete('/:id', producto_1.deleteProduct);
router.post('/', producto_1.postProduct);
router.put('/:id', producto_1.updateProduct);
exports.default = router;
