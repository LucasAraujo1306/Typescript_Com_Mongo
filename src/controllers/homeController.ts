import { log } from 'console';
import { Request, Response } from 'express';

import { Product } from '../models/Product';
import User from '../models/User'

export const home = async (req: Request, res: Response) => {

    //Para consulta mais de um registro no banco de dados retorna array de objetos
    let usuariosFind = await User.find({});

    //Para consulta um registro no banco de dados retorna o objeto
    let usuariosOne = await User.findOne({
        email: 'beltrano@gmail.com'
    });

    //Para consulta um registro pelo Id no banco de dados retorna um unico objeto
    let usuariosById = await User.findById('641bdda9ad958e4bb1abf443');
    //caso não entre com o id correto ele retorna null

    let usuariosFindEmail = await User.find({
        email: 'fulano@gmail.com',
        age: 21
    })
    //caso não encontre usuario retorna um array vazio


    //caso encontre usuario retorna um array com o objeto
    let pegaNomeDentroObj = await User.find({
        "name.firstName": 'fulano'
    })
    //caso não encontre usuario retorna um array vazio

    //caso encontre usuario retorna varios usuarios dentor de array com os objetos
    let procurarUsuarioComArray = await User.find({
        interests: 'node'
    })
    //caso não encontre usuario retorna um array vazio


    //gt - greater then = maior
    //gte - greater then or equal = maior ou igual
    //lt - less then = menor
    //lte - less then or equal = menor ou igual
    let usuariosFindAge = await User.find({
        age: { $gt: 21 }
    })


    let age: number = 90;
    let showOld: boolean = false;

    if (age > 50) {
        showOld = true;
    }

    let list = Product.getAll();
    let expensiveList = Product.getFromPriceAfter(12);

    res.render('pages/home', {
        name: 'Bonieky',
        lastName: 'Lacerda',
        showOld,
        products: list,
        expensives: expensiveList,
        frasesDoDia: []
    });
};