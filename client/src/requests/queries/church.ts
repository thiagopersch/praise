import createApi from '@/services/api';
import { Session } from 'next-auth';
import { useEffect, useState } from 'react';

export default function useFetchPrimaryColor(): string {
  const [primaryColor, setPrimaryColor] = useState<string>('#097e51');

  useEffect(() => {
    const fetchColor = async (session?: Session | null) => {
      try {
        const api = createApi(session);

        const response = await api.get('/admin/churches');
        const color = response.data.color || primaryColor;
        setPrimaryColor(color);
      } catch (error) {
        console.error(error || 'Deu erro em buscar a cor primária');
      }
    };

    fetchColor();
  }, [primaryColor]);

  return primaryColor;
}
