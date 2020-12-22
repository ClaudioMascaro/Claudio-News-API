import * as Joi from 'joi'

export const emailSchema = Joi.object().keys({ 
  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'br' ] } })
}); 