const list = document.querySelector('#categories');
const members = document.querySelectorAll('#categories .item');


console.log('Number of categories :', list.children.length);
members.forEach(function(member){
 console.log('Category :', member.firstElementChild.textContent);
 console.log('Elements :', member.lastElementChild.children.length);

});