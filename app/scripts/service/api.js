const API = 'https://api.github.com';

const getUserInfos = username => {
  return axios.get(`${API}/users/${username}`)
    .then(function (response) {
      const {
        avatar_url,
        bio,
        name,
        login,
        repos_url
      } = response.data;
      return getRepos(repos_url).then( response => {
        return {
          avatar_url,
          bio,
          name,
          login,
          repos: response
        };
      });
    })
    .catch(function (err) {
      return err;
    });
};

const getRepos = repos_url => {
  return axios.get(repos_url)
    .then( response => {
      return response.data;
    })
    .catch( err => {
      return err;
    });
};
