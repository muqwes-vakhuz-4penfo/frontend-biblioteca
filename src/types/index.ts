export interface Autor {
  id: number;
  nombre: string;
  nacionalidad: string;
}

export interface Libro {
  id: number;
  titulo: string;
  autor: Autor;
  disponible: boolean;
}