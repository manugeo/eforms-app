import { useState, useEffect } from 'react';
import useAuthStorage from "./useAuthStorage";

const useApplication = (documentId) => {
  const authStorage = useAuthStorage();
  const [currentApplication, setCurrentApplication] = useState(null);

  const fetchApplication = async () => {
    console.log("Fetching application...");
    
    const token = await authStorage.getAccessToken();
    const bearerToken = `Bearer ${token}`;

    const response = await fetch(`https://qa.eformsolutions.com/efscore/resource/documents/${documentId}`, {
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
    setCurrentApplication(json);
  };

  useEffect(() => {
    fetchApplication();
  }, []);

  return { currentApplication, refetch: fetchApplication };
};

export default useApplication;