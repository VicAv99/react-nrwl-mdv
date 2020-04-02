/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';
import { TasksService } from '../tasks/tasks.service';

export const useTasksApi = (method: string, ...params: any[])  => {
  const [ data, setData ] = useState<any[]>([]);
  const [ isLoading, setIsLoading ] = useState<boolean>(false);
  const [ error, setError ] = useState<any>(null);

  const fetchData = async () => {
    setError(null);
    try {
      setIsLoading(true);
      setData(await (TasksService as any)[ method ](...params));
    } catch (e) {
      setError(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [ data, isLoading, error, fetchData ];
}
