import Router from 'express';
import {prisma} from '../db.js'

const router = Router();

router.get('/usuarios', async (req, res) => {
    const usuarios = await prisma.usuario.findMany()
    return res.json(usuarios)
});

router.get('/usuario/:id', async (req, res) => {
    const usuario = await prisma.usuario.findUnique({
        where: {
            id: parseInt(req.params.id)
        },
    })
    return res.json(usuario)
})

router.post('/usuario', async (req, res) => {
    const { nombre, apellido, correo } = req.body
    const usuario = await prisma.usuario.create({
        data: {
            nombre,
            apellido,
            correo
        }
    })
    return res.json(usuario)
})

router.get('/usuario/:id/recibos', async (req, res) => {
    const { id } = req.params;
        const usuario = await prisma.usuario.findUnique({
            where: { id: parseInt(id) },
            select: {
                nombre: true,
                apellido: true,
                recibos: true
            }
        });

        return res.json(usuario);
});

router.put('/usuario', async (req, res) => {
    const { nombre, apellido, correo } = req.body;
    const { id } = req.params;
    const usuario = await prisma.usuario.update({
        where: { id: parseInt(id) },
        data: {
            nombre,
            apellido,
            correo
        }
    });
    return res.json(usuario);
});

router.delete('/usuario', async (req, res) => {
    const { id } = req.params;
    const usuario = await prisma.usuario.delete({
        where: { id: parseInt(id) }
    });
    return res.json(usuario);
});

export default router;