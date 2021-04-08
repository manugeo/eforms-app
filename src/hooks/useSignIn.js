import { useState } from 'react';
import useAuthStorage from "./useAuthStorage";

const useSignIn = () => {
  const [loading, setLoading] = useState(false);
  const authStorage = useAuthStorage();
  const signIn = async ({ username, password }) => {
    setLoading(true);
    // Todo: Handle fetch method correctly.
    // See: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#checking_that_the_fetch_was_successful
    const response = await fetch('https://qa.eformsolutions.com/efscore/authenticate', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    });
    const json = await response.json();
    if (json.token) await authStorage.setAccessToken(json.token);
    setLoading(false);
    return json;
  };

  return { signIn, loading };
};

export default useSignIn;