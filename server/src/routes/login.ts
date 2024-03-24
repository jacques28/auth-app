import express from 'express';
import { Router } from 'express';
import Login from '../models/Login.models';


const router = Router();

router.get('/', (req, res) => {
    res.json({
      message: 'Login',
    });
  });

export default router;