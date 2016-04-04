var buttonSearch = document.getElementById('search');
var buttonRemove = document.getElementById('remove');

buttonSearch.addEventListener('submit', e => {
    e.preventDefault();
    getUserInfos(document.getElementById('username').value).then( response => {
      //I do not have to handle different cases so check if there is a status is enough
      //200 ok response have the alrady destructured object
      if (!response.status) {
        templateResult(response);
      } else {
        templateError();
      }
    });
}, false);
