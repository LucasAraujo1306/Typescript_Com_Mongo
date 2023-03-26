import { log } from 'console';
import { Request, Response } from 'express';

import { Product } from '../models/Product';
import User from '../models/User'

export const home = async (req: Request, res: Response) => {

    /* //Para consulta mais de um registro no banco de dados retorna array de objetos
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
         //age: { $gt: 21 },
         age: { $gte: 21, $lte: 30 } // pega maior e menor
     })
 
     //Ordenando resultados
     let ordernaResultado = await User.find({
         age: { $gt: 18 },
     }).sort({ age: 1 })
     //-1 = ordem decrescente
     //1 = ordem crescente
 
     let ordernaResultadoPeloNome = await User.find({
         age: { $gt: 18 },
     }).sort({ "name.firstName": 1 })
     //-1 = ordem decrescente
     //1 = ordem crescente
 
     //limitando e pular resultados.limit(1) limita a 1 resultado
     let limitaResultado = await User.find({
         age: { $gt: 18 },
     }).limit(1)
 
     //pular resultados.skip(1) pula o primeiro resultado
     let pularResultado = await User.find({
         age: { $gt: 18 },
     }).limit(2).skip(0)
 
     //Inserindo dados no banco de dados
     /*let newuser = await User.create({
         name: { firstName: 'José', lastName: 'Raimundo' },
         email: 'jose@gmail.com',
         age: 30,
         interests: ['node', 'react']
     })*/

    //segunda forma de inserir dados no banco de dados
    /*let newUsernew = new User();
    newUsernew.name = { firstName: 'Denia', lastName: 'Casimiro' };
    newUsernew.email = 'deniacasimiro@hotmail.com';
    newUsernew.age = 21;
    newUsernew.interests.push('Viajar', 'Comer', 'Tecnologia');

    const resultado = await newUsernew.save();*/

    let users = await User.find({}).sort({ "name.firstName": 1 });


    let age: number = 90;
    let showOld: boolean = false;

    if (age > 50) {
        showOld = true;
    }

    let list = Product.getAll();
    let expensiveList = Product.getFromPriceAfter(12);

    res.render('pages/home', {
        name: 'Lucas',
        lastName: 'Araújo',
        showOld,
        products: list,
        expensives: expensiveList,
        frasesDoDia: [],
        users
    });
};