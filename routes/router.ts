import { Router, Request, Response } from 'express';

export const router = Router();


// enlaces para las ordenes
router.get('/mensajes',(req:Request, res:Response)=>{

    res.json({
        ok:true,
        msg:'get'
    })
});

router.post('/mensajes',(req:Request, res:Response)=>{
    const cuerpo=req.body.cuerpo;
    const de= req.body.de;
    res.json({
        ok:true,
        cuerpo,
        de
    })
});

router.post('/mensajes/:id',(req:Request, res:Response)=>{
    const cuerpo=req.body.cuerpo;
    const de= req.body.de;
    const id =req.params.id
    res.json({
        ok:true,
        cuerpo,
        de,
        id
    })
});




//enlace para el menu

router.get('/menu',(req:Request, res:Response)=>{

    res.json({
        ok:true,
        msg:'Menu get'
    })
});

router.post('/menu',(req:Request, res:Response)=>{

    res.json({
        ok:true,
        msg:'Menu post'
    })
});