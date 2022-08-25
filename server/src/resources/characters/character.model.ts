import Joi from "joi";

export interface Character {
    id: string,
    name: string,
    status: string,
    species: string,
    type: string,
    gender: string,
    image?: string
};

export const characterSchema = Joi.object<Character, false>({
    id: Joi.string().required(),
    name: Joi.string().required(),
    status: Joi.string().required(),
    species: Joi.string().required(),
    type: Joi.string().required(),
    gender: Joi.string().required()
});



