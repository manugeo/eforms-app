import useAuthStorage from "./useAuthStorage";

const useSignIn = () => {
  const authStorage = useAuthStorage();
  // Todo: After a successful sign-in, store access token to authStorage.
  const signIn = async ({username, password}) => {
    // Todo: Handle fetch method correctly.
    // See: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#checking_that_the_fetch_was_successful
    const response = await fetch('http://66.45.252.83:8080/efscore/authenticate', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username, password})
    });
    return await response.json();
  };

  return [signIn];
};

export default useSignIn;