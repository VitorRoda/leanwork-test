import { Product } from '@/types/products';
import axios, { AxiosResponse } from 'axios';

const API_URL = 'https://fakestoreapi.com/products';

export const getAllProducts = async (): Promise<Product[]> => {
  try {
    const response: AxiosResponse<Product[]> = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    throw new Error(`Erro ao buscar produtos: ${error}`);
  }
};

export const getProductById = async (id: number): Promise<Product> => {
  try {
    const response: AxiosResponse<Product> = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(`Erro ao buscar produto com ID ${id}: ${error}`);
  }
};
