import { Request, Response } from "express";
import { getRepository } from 'typeorm';

import Orphanage from '../models/Orphanage';

export default {
  async index(request: Request, response: Response) {
    const orphanagesRepossitory = getRepository(Orphanage);

    const orphanages = await orphanagesRepossitory.find();

    return response.json(orphanages);
  },

  async show(request: Request, response: Response) {
    const { id } = request.params;

    const orphanagesRepossitory = getRepository(Orphanage);

    const orphanage = await orphanagesRepossitory.findOneOrFail(id);

    return response.json(orphanage);
  },


  async create(request: Request, response: Response) {
    const {
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
    } = request.body;
  
    const orphanagesRepository = getRepository(Orphanage);
  
    const orphanage = orphanagesRepository.create({
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
    });
  
    await orphanagesRepository.save(orphanage);
    
    return response.status(201).json(orphanage);
  }
};