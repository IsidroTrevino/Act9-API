import Router from 'express';
import {prisma} from '../db.js'

const router = Router();

router.get('/recibos', async (req, res) => {
    const recibos = await prisma.recibo.findMany(
        
    )
    res.json(recibos)
});

router.get('/recibo/:id', async (req, res) => {
    const recibo = await prisma.recibo.findUnique({
        where: {
            id: parseInt(req.params.id)
        },
    })
    return res.json(recibo)
});

router.post('/recibo', async (req, res) => {
    const { user_id, tarifa, costo, inicioPeriodo, finPeriodo, kWh } = req.body;
        const recibo = await prisma.recibo.create({
            data: {
                userId: user_id,
                tarifa,
                costo,
                inicioPeriodo,
                finPeriodo,
                kWh
            }
        });
    return res.json(recibo);
});



export default router;