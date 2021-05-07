import { useState } from 'react';

const useRegister = () => {
  const [loading, setLoading] = useState(false);
  
  const register = async ({ firstName, lastName, email, password, userType }) => {
    const data = {
      userName: email,
      password,
      emailId: email,
      firstName,
      middleName: '',
      lastName,
      userType: {
        id: userType
      }
    };
    setLoading(true);
    // Todo: Handle fetch method correctly.
    // See: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#checking_that_the_fetch_was_successful
    const response = await fetch('https://qa.eformsolutions.com/efscore/register', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-TenantID': 'qa/scholarships'
      },
      body: JSON.stringify(data)
    });
    const json = await response.json();
    setLoading(false);
    return json;
  };

  return { register, loading };
};

export default useRegister;