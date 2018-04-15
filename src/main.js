import md5 from 'md5';
import marked from 'marked';

const theme = "light";
const robomail = "seminar.robot@supermegadex.cf";

console.log("I'm here...");
const messageList = select('#message-list');
const messages = [
  {
    author: {
      name: "Daniel",
      email: "delpinothedragon1@hotmail.com"
    },
    text: "This is some text"
  },
  {
    author: {
      name: "Ben",
      email: "benwingerter01@gmail.com"
    },
    text: "This is some more text"
  }
];

function select(selector) {
  return document.querySelector(selector);
}

function create(name, props) {
  let el = document.createElement(name);
  const attrs = Object.keys(props);
  for (let attr of attrs) {
    el[attr] = props[attr];
  }
  return el;
}

function makeChannelText(message) {
  let el = create("div", {
    className: "fluent-item"
  });
  if (message.author.email) {
    el.appendChild(create("img", {
      className: "fluent-avatar",
      src: getGravatarImage(message.author.email)
    }));
  }
  let md = `<small class='name'>${message.author.name}</small>` + marked(message.text);
  el.appendChild(create('div', {
    className: "fluent-item-inner padding",
    innerHTML: md
  }));
  return el;
}

function update() {
  const els = [];
  console.log(messageList);
  for (let message of messages) {
    els.push(makeChannelText(message));
  }
  messageList.innerHTML = "";
  for (let el of els) {
    messageList.appendChild(el);
  }
}

update();
  
function getGravatarImage(email) {
  return `https://www.gravatar.com/avatar/${md5(email)}?d=retro`;
}

(function () {
  const tabs = document.querySelectorAll('.fluent-list.tabs');
  
})();