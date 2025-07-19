export interface UserApiResponse {
  status: 'success' | 'error';
  data?: {
    id: number;
    name: string;
  };
  error?: string;
}

export function successUserResponse(data: { id: number; name: string }): UserApiResponse {
  return {
    status: 'success',
    data,
  };
}


export function errorUserResponse(message: string): UserApiResponse {
  return {
    status: 'error',
    error: message,
  };
}

import express from 'express';

const router = express.Router();

type User = {
  id: number;
  name: string;
};

function getUserById(id: string): User | null {
  return { id: 1, name: "selva" };
}

router.get('/user/:id', async (req, res) => {
  const user = await getUserById(req.params.id);

  if (user) {
    res.json(successUserResponse(user));
  } else {
    res.status(404).json(errorUserResponse('User not found'));
  }
});

export default router;
