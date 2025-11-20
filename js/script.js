const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

let card = '';

for (let i = 0; i < teamMembers.length; i++) {
  const teamMember = teamMembers[i];
  
  const {name, role, email, img} = teamMember;

  card += generateCard(name, role, email, img)
  
}

cardDetail = document.getElementById('cardContainer');
cardDetail.innerHTML = card;

function generateCard(name, role, email, img){

  return `<div class="col-lg-4">
  <div id="card" class="bg-black d-flex">
      <img id="cardImg" src="${img}" alt="${name}">
      <div class="card-body p-3">
          <h4 id="name">${name}</h4>
          <p id="role">${role}</p>
          <a id="email" class="text-decoration-none" href="mailto:${email}">${email}</a>
      </div>
  </div>
</div>`

}