import { Router } from 'express';
import { deleteProduct, getProduct, getProducts, postProduct, updateProduct } from '../controllers/producto';

const router =Router();

//cuando tenga la ruta api/prodcuto/ y el verbo sea get ejecuta la función
// getProducts del archivo de controllers/product.ts

router.get('/', getProducts);
router.get('/:id', getProduct);
router.delete('/:id', deleteProduct);
router.post('/', postProduct);
router.put('/:id', updateProduct);



export default router;