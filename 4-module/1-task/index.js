function makeFriendsList(friends) {
  const HTML = document.createElement('ul');

  friends.forEach((friend) => {
    HTML.insertAdjacentHTML('beforeend', `<li>${friend.firstName} ${friend.lastName}</li>`);
  });

  return HTML;
}
