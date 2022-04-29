const buttonCreate = document.getElementById('createtopic');
const acessForm = document.getElementById('topic-form');
const creating = document.querySelector('.share-comment');
const sent = document.querySelector('.sent-topic');

buttonCreate.addEventListener('click', createTopic);
function createTopic(){
  acessForm.style.display = ('flex')
  creating.style.display = ('none')
}

const buttonSend = document.querySelector('.sent-topic');
buttonSend.addEventListener('click', sendTopic);

function sendTopic(){
  sent.style.display = ('flex')
  acessForm.style.display = ('none')

}

const menuMobile = document.querySelector('.menu-mobile');
const sidebar = document.querySelector ('.sidebar');
menuMobile.addEventListener ('click', showSidebar);

function showSidebar() {
  if (sidebar.style.display == 'none') {
    sidebar.style.display = ('block')
  } else {
    sidebar.style.display = ('none')
  }
}

const seeMoreBtn = document.querySelector('.see-more');
const abstract = document.querySelector('.abstract');
seeMoreBtn.addEventListener('click', seeMore);

function seeMore() {
  if (abstract.style.display == 'none') {
    abstract.style.display = ('block')
    seeMoreBtn.style.display = 'none'
  } else {
    abstract.style.display = ('none')
  }
}
