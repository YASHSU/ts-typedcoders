
export interface ApiResponse<T> {
  status: 'success' | 'error';
  data?: T;
  error?: string;
}

export function successResponse<T>(data: T): ApiResponse<T> {
  return { status: 'success', data };
}

export function errorResponse<T>(message: string): ApiResponse<T> {
  return { status: 'error', error: message };
}

import express from 'express';

const router = express.Router();

type User = {
  id: number;
  name: string;
};

function getUserById(id){
    return {
        id: 1,
        name:"selva"
    }
}

router.get('/user/:id', async (req, res) => {
  const user: User | null = await getUserById(req.params.id);
  if (user) {
    res.json(successResponse<User>(user));
  } else {
    res.status(404).json(errorResponse<User>('User not found'));
  }
});

export default router;


