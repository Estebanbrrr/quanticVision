var imageIndex = 1;

function slideEquipe() {

    imageIndex++;

    if (imageIndex == 4)
      imageIndex = 1

    equipe1.style.display = 'none';
    equipe2.style.display = 'none';
    equipe3.style.display = 'none';

    prenomsEquipe1.style.display = 'none';
    prenomsEquipe2.style.display = 'none';
    prenomsEquipe3.style.display = 'none';

   switch (imageIndex) {

    case 1:
      equipe1.style.display = 'block';
      prenomsEquipe1.style.display = 'block';
      break;

    case 2:
      equipe2.style.display = 'block';
      prenomsEquipe2.style.display = 'block';
      break;

    case 3:
      equipe3.style.display = 'block';
      prenomsEquipe3.style.display = 'block';
      break;

   }

}

setInterval(slideEquipe, 5000);
