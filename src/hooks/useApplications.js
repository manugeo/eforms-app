import { useState, useEffect } from 'react';

const bearerToken = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtYW51Z2VvIiwiZXhwIjoxNjE3ODkxNjc2LCJpYXQiOjE2MTc4ODQ0NzZ9.Can5tS-iAHUwHLm9D1iqOkQwo2A1Y5K-G-PY9DkwRobneHiaVm_1DG046knw49tOb47JEcgLrPdo0LsWUPUIfQ';

const useApplications = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchApplications = async () => {
    setLoading(true);
    console.log("Fetching applications...");
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

    console.log("Applications :", json);

    setLoading(false);
    setApplications(json);
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  return { applications, loading, refetch: fetchApplications };
};

export default useApplications;