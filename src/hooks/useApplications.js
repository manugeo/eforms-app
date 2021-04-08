import { useState, useEffect } from 'react';
import useAuthStorage from "./useAuthStorage";

const useApplications = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(false);
  const authStorage = useAuthStorage();

  const fetchApplications = async () => {
    setLoading(true);
    const token = await authStorage.getAccessToken();
    const bearerToken = `Bearer ${token}`;
    const response = await fetch('https://qa.eformsolutions.com/efscore/resource/documents/dashboard', {
      method: 'GET',
      withCredentials: true,
      credentials: 'include',
      headers: {
        'Authorization': bearerToken,
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-TenantID': 'qa/scholarships'
      }
    });
    const json = await response.json();
    setLoading(false);
    setApplications(json);
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  return { applications, loading, refetch: fetchApplications };
};

export default useApplications;