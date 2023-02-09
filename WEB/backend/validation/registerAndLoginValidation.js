const {body} = require('express-validator');

const registerAndLoginValidation = [
    body('pseudo')
        .exists({ checkFalsy : true})
        .withMessage('Un pseudo est nécessaire')
        .isString({ checkFalsy : true})
        .withMessage('Le pseudo doit être une chaine de caractère')
        .isLength({ min : 8, max : 20})
        .withMessage('Le pseudo doit contenir 8 à 20 caractères'),

    body('password')
        .exists({ checkFalsy : true})
        .withMessage('Mot de passe nécessaire!')
        .isString({ checkFalsy : true})
        .withMessage('Le mot de passe doit être une chaine de caractère')
        .isLength({ min : 8, max : 128})
        .withMessage('Le mot de passe doit faire minimum 8 caractères!'),

    body('mail')
        .exists({ checkFalsy : true})
        .withMessage('Une adresse mail est nécessaire!')
        .isString({ checkFalsy : true})
        .withMessage('L\'adresse mail doit être une chaine de caractère!')
        .isLength({ min : 4, max : 128})
];

module.exports = {
    registerAndLoginValidation
}