import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { startGameService } from './services/startGameService';

dotenv.config();

startGameService();