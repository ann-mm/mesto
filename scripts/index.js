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

//находим каждый попап:
const popupEditProfile = document.querySelector(".popup_type_edit-profile");
const popupAddCard = document.querySelector(".popup_type_add-card");
const popupViewGallery = document.querySelector(".popup_type_view-gallery");

//находим все попапы, находим форму ред-ия профиля, форму ред-ия карточки:
const popup = document.querySelector(".popup");
const editForm = document.querySelector(".edit-form");
const cardForm = document.querySelector(".add-card");

//находим кнопку ред-ия, кнопку добавл.карточки, кнопку лайка, кнопку удал, кнопку просмотра галереи:
const profileEditBtn = document.querySelector(".profile__edit-btn");
const cardAddBtn = document.querySelector(".profile__add-btn");
const cardLikeBtn = document.querySelector(".element__like-btn");
const cardDelBtn = document.querySelector(".element__del-btn");

//находим кнопки закрытия попапов:
const popupEditCloseBtn = document.querySelector(".popup__close-btn_type_edit-profile");
const popupAddCloseBtn = document.querySelector(".popup__close-btn_type_add-card");
const popupViewCloseBtn = document.querySelector(".popup__close-btn_type_view-gallery");

//находим в попапе профиля поля, которые будем заполнять:
const editFormInputFio = editForm.querySelector(".edit-form__item_name_fio");
const editFormInputJob = editForm.querySelector(".edit-form__item_name_job");

//новые значения value из полей попапа, которые заполнит польз-ль:
const newFio = document.querySelector(".profile__title");
const newJob = document.querySelector(".profile__subtitle");

//находим в попапе карточки поля, которые будем заполнять:
const cardFormInputNameObj = cardForm.querySelector(".add-card__item_name_objname");
const cardFormInputSrc = cardForm.querySelector(".add-card__item_name_src");

//новые значения value из полей попапа, которые заполнит польз-ль:
const newNameObj = document.querySelector(".element__title");
// const newSrc = document.querySelector(".element__mask-group");

//выводим на страницу карточки из коробки:
initialCards.forEach(function (card) {
  const cardElement = cardTemplate.cloneNode(true);
  cardElement.querySelector(".element__title").textContent = card.name;
  cardElement.querySelector(".element__mask-group").alt = card.name;
  cardElement.querySelector(".element__mask-group").src = card.link;
  cardElement.querySelector(".element__like-btn").addEventListener("click", likeCard);
  cardElement.querySelector(".element__del-btn").addEventListener("click", delCard);
  cardsList.append(cardElement);
});

//открываем любой попап:
function openPopup(popup) {
  popup.classList.add("popup_opened");
}

//заполняем инпуты текущими значениями профайла:
function editInputsFirst() {
  editFormInputFio.value = newFio.textContent;
  editFormInputJob.value = newJob.textContent;
}

//закрываем любой попап:
function closePopup(popup) {
  popup.classList.remove("popup_opened");
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

//сохраняем на странице данные профайла, кот.ввели в форме и закрываем попап:
function saveNewProfileData(evt) {
  evt.preventDefault();
  newFio.textContent = editFormInputFio.value;
  newJob.textContent = editFormInputJob.value;
  closePopup(popupEditProfile);
}

//создаем новую карточку объекта
function createNewCard() {
  const cardElement = cardTemplate.querySelector(".element").cloneNode(true);
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
  card.querySelector(".element__title").textContent = cardFormInputNameObj.value;
  card.querySelector(".element__mask-group").src = cardFormInputSrc.value;
  card.querySelector(".element__mask-group").alt = cardFormInputNameObj.value;
  closePopup(popupAddCard);
}

//ловим клик по кнопке открытия попапа "редактировать профиль" и заодно заполняем инпуты:
profileEditBtn.addEventListener("click", function () {
  editInputsFirst();
  openPopup(popupEditProfile);
});

//ловим клик по кнопке открытия попапа "добавить карточку":
cardAddBtn.addEventListener("click", function () {
  openPopup(popupAddCard);
});

//ловим клик по кнопке открытия попапа "открыть галерею":
// cardLink.addEventListener("click", function () {
//   openPopup(popupViewGallery);
// });

//ловим клик по кнопке "закрыть" первого, второго, третьего попапа:
popupEditCloseBtn.addEventListener("click", function () {
  closePopup(popupEditProfile);
});

popupAddCloseBtn.addEventListener("click", function () {
  closePopup(popupAddCard);
});

// popupViewCloseBtn.addEventListener("click", function () {
//   closePopup(popupViewGallery);
// });

//ловим клик по кнопке "сохранить профайл" и "сохранить карточку", в результате:
//1. отправляем на сервер данные формы
//2. обновляем данные на странице данными формы
//3. закрываем попап
editForm.addEventListener("submit", saveNewProfileData);
cardForm.addEventListener("submit", saveNewCardData);
