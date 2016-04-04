const API = 'https://api.github.com';

const getUserInfos = username => {
  return axios.get(`${API}/users/${username}`)
    .then(function (response) {
//      console.log(response);
      const {
        avatar_url,
        bio,
        name,
        login,
        repos_url
      } = response.data;
      return getRepos(repos_url).then(function(response){
        const repos = response;
        return {
          avatar_url,
          bio,
          name,
          login,
          repos
        };
      });
    })
    .catch(function (err) {
      return err;
    });
};

const getRepos = repos_url => {
  return axios.get(repos_url)
    .then(function (response) {
      // console.log('repos => ', response);
      return response.data;
    })
    .catch(function (err) {
      return err;
    });
};
