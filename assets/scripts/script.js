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

