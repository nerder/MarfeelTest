
const templateResult = ({ avatar_url, bio, name, login, repos  }) => {
  cleaner();
  const template = document.getElementById('results-template').innerHTML;
  const el = document.createElement('div');
  el.className = 'result-element';
  el.innerHTML = template;
  el.getElementsByClassName('user-avatar')[0].src = avatar_url ? avatar_url : '';
  el.getElementsByClassName('username')[0].innerHTML += login ? login : 'unknown';
  el.getElementsByClassName('full-name')[0].innerHTML = name ? name : 'Unknown';
  el.getElementsByClassName('bio')[0].innerHTML = bio ? bio : 'Nothing to say';
  if(repos.length) {
    repos.map(({ forks, stargazers_count, name }) => {
      const resultTemplate = el.getElementsByClassName('result-template')[0].innerHTML;
      const result = document.createElement('div');
      result.className = 'result';
      result.innerHTML = resultTemplate;
      result.getElementsByClassName('repo-name')[0].innerHTML += name ? name : 'No Name';
      result.getElementsByClassName('stars')[0].innerHTML += stargazers_count ? stargazers_count : 0;
      result.getElementsByClassName('forks')[0].innerHTML += forks ? forks : 0;
      el.getElementsByClassName('results-list')[0].appendChild(result);
    });
  } else {
    el.getElementsByClassName('result')[0].style.display = 'none';
    el.getElementsByClassName('no-result')[0].style.display = 'block';

  }
  document.getElementById('results').appendChild(el);
};

const templateError = () => {
  cleaner();
  console.log('yo!');
  const template = document.getElementById('error-template').innerHTML;
  const el = document.createElement('div');
  el.innerHTML = template;
  document.getElementById('results').appendChild(el);
}

const cleaner = () => {
  if(document.getElementsByClassName('result-element').length) {
    removeResult();
  }
  if(document.getElementsByClassName('error-template').length) {
    removeError();
  }
}

const removeResult = () => {
  document.getElementsByClassName('result-element')[0].remove();
};

const removeError = () => {
  document.getElementsByClassName('error-template')[0].remove();
};
