const useSignIn = () => {
  const signIn = async ({username, password}) => {
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