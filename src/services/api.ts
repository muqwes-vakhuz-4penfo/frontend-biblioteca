import axios from 'axios';
import { Autor, Libro } from '../types';

const BASE_URL = 'https://moises-api-biblioteca.vercel.app/api';

export const getAutores = async (): Promise<Autor[]> => {
  const { data } = await axios.get(`${BASE_URL}/autores`);
  return data;
};

export const getLibros = async (): Promise<Libro[]> => {
  const { data } = await axios.get(`${BASE_URL}/libros`);
  return data;
};

export const getLibrosDisponibles = async (): Promise<Libro[]> => {
  const { data } = await axios.get(`${BASE_URL}/libros/disponibles`);
  return data;
};

export const getLibrosNoDisponibles = async (): Promise<Libro[]> => {
  const { data } = await axios.get(`${BASE_URL}/libros/nodisponibles`);
  return data;
};