// массив объектов карточек при открытии страницы
const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

//находим все карточки и шаблон для них:
const cardsList = document.querySelector(".elements");
const cardTemplate = document.querySelector(".element-template").content;

//находим каждый попап, фото и подпись к нему, форму ред-ия профиля, форму ред-ия карточки:
const popupEditProfile = document.querySelector(".popup_type_edit-profile");
const popupAddCard = document.querySelector(".popup_type_add-card");
const popupViewGallery = document.querySelector(".popup_type_view-gallery");
const popupImg = document.querySelector(".popup__image");
const popupImgName = document.querySelector(".popup__figcaption");
const profileForm = popupEditProfile.querySelector(".form");
const cardForm = popupAddCard.querySelector(".form");

//находим кнопку ред-ия, кнопку добавл.карточки, кнопку лайка, кнопку удал:
const profileEditBtn = document.querySelector(".profile__edit-btn");
const cardAddBtn = document.querySelector(".profile__add-btn");
const cardLikeBtn = document.querySelector(".element__like-btn");
const cardDelBtn = document.querySelector(".element__del-btn");

//находим кнопки закрытия попапов:
const popupEditCloseBtn = document.querySelector(".popup__close-btn_type_edit-profile");
const popupAddCloseBtn = document.querySelector(".popup__close-btn_type_add-card");
const popupViewCloseBtn = document.querySelector(".popup__close-btn_type_view-gallery");

//находим в попапе профиля поля, которые будем заполнять:
const profileFormInputFio = profileForm.querySelector(".form__input_name_fio");
const profileFormInputJob = profileForm.querySelector(".form__input_name_job");

//новые значения value из полей попапа, которые заполнит польз-ль:
const newFio = document.querySelector(".profile__title");
const newJob = document.querySelector(".profile__subtitle");

//находим в попапе карточки поля, которые будем заполнять:
const cardFormInputObjName = cardForm.querySelector(".form__input_name_objname");
const cardFormInputObjSrc = cardForm.querySelector(".form__input_name_objsrc");

//новые значения value из полей попапа, которые заполнит польз-ль:
const newNameObj = document.querySelector(".element__title");

//выводим на страницу карточки из коробки:
initialCards.forEach(function (card) {
  const cardElement = cardTemplate.cloneNode(true);
  cardElement.querySelector(".element__title").textContent = card.name;
  cardElement.querySelector(".element__mask-group").alt = card.name;
  cardElement.querySelector(".element__mask-group").src = card.link;
  cardElement.querySelector(".element__link").addEventListener("click", function () {
    openPopup(popupViewGallery);
    popupImg.src = card.link;
    popupImgName.textContent = card.name;
  });

  popupViewCloseBtn.addEventListener("click", function () {
    closePopup(popupViewGallery);
  });
  cardElement.querySelector(".element__like-btn").addEventListener("click", likeCard);
  cardElement.querySelector(".element__del-btn").addEventListener("click", delCard);
  cardsList.append(cardElement);
});

//создаем новую карточку объекта
function createNewCard() {
  const cardElement = cardTemplate.querySelector(".element").cloneNode(true);
  console.log(cardElement)
  cardElement.querySelector(".element__link").addEventListener("click", function () {
    openPopup(popupViewGallery);
    popupImg.src = cardElement.querySelector(".element__mask-group").src;
    popupImgName.textContent = cardElement.querySelector(".element__title").textContent;
  });
  popupViewCloseBtn.addEventListener("click", function () {
    closePopup(popupViewGallery);
  });
  cardElement.querySelector(".element__like-btn").addEventListener("click", likeCard);
  cardElement.querySelector(".element__del-btn").addEventListener("click", delCard);
  return cardElement;
}

//добавляем карточку на страницу
function addCard() {
  const card = createNewCard();
  cardsList.prepend(card);
  return card;
}

//сохраняем на странице данные карточки, кот.ввели в форме и закрываем попап:
function saveNewCardData(evt) {
  evt.preventDefault();
  const card = addCard();
  card.querySelector(".element__title").textContent = cardFormInputObjName.value;
  card.querySelector(".element__mask-group").src = cardFormInputObjSrc.value;
  card.querySelector(".element__mask-group").alt = cardFormInputObjName.value;
  closePopup(popupAddCard);
}

//ставим лайк и анлайк по клику:
function likeCard(evt) {
  const eventTarget = evt.target;
  eventTarget.classList.toggle("element__like-btn_active");
}

//удаляем карточку по клику:
function delCard(evt) {
  const cardsList = evt.target.closest(".element");
  cardsList.remove();
}

//открываем любой попап:
function openPopup(popup) {
  popup.classList.add("popup_opened");
}

//закрываем любой попап:
function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

//заполняем инпуты текущими значениями профайла:
function editInputsFirst() {
  profileFormInputFio.value = newFio.textContent;
  profileFormInputJob.value = newJob.textContent;
}

//очищаем инпуты карточки объекта:
function cleanInputsFirst() {
  cardFormInputObjSrc.value = '';
  cardFormInputObjName.value = '';
}

//сохраняем на странице данные профайла, кот.ввели в форме и закрываем попап:
function saveNewProfileData(evt) {
  evt.preventDefault();
  newFio.textContent = profileFormInputFio.value;
  newJob.textContent = profileFormInputJob.value;
  closePopup(popupEditProfile);
}

//ловим клик по кнопке открытия попапа "редактировать профиль" и заодно заполняем инпуты:
profileEditBtn.addEventListener("click", function () {
  editInputsFirst();
  openPopup(popupEditProfile);
});

//ловим клик по кнопке открытия попапа "добавить карточку":
cardAddBtn.addEventListener("click", function () {
  cleanInputsFirst();
  openPopup(popupAddCard);
});

//ловим клик по кнопке "закрыть" первого, второго, третьего попапа:
popupEditCloseBtn.addEventListener("click", function () {
  closePopup(popupEditProfile);
});

popupAddCloseBtn.addEventListener("click", function () {
  closePopup(popupAddCard);
});

//ловим клик по кнопке "сохранить профайл" и "сохранить карточку", в результате:
//1. отправляем на сервер данные формы
//2. обновляем данные на странице данными формы
//3. закрываем попап
profileForm.addEventListener("submit", saveNewProfileData);
cardForm.addEventListener("submit", saveNewCardData);
