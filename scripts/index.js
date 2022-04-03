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

// // создадим из массива объектов массив элементов
// const oneCard = [];
// for (let i = 0; i < initialCards.length; i++) {
//   const listItem = document.createElement('li');
//   listItem.textContent = initialCards[i];
//     taskElements[i] = listItem;
// }

//сохраняем каждый попап в свою переменную:
let popupEditProfile = document.querySelector(".popup_type_edit-profile");
let popupAddCard = document.querySelector(".popup_type_add-card");
let popupViewGallery = document.querySelector(".popup_type_view-gallery");

// находим попап, находим форму ред-ия профиля:
let popup = document.querySelector(".popup");
let editForm = document.querySelector(".edit-form");

// находим кнопку ред-ия, кнопку добавл.карточки, кнопку лайка, кнопку просмотра галереи:
let profileEditBtn = document.querySelector(".profile__edit-btn");
let cardAddBtn = document.querySelector(".profile__add-btn");
let cardLikeBtn = document.querySelector(".element__like-btn");

// дописать

// находим кнопки закрытия попапов:
let popupEditCloseBtn = document.querySelector(".popup__close-btn_type_edit-profile");
let popupAddCloseBtn = document.querySelector(".popup__close-btn_type_add-card");
let popupViewCloseBtn = document.querySelector(".popup__close-btn_type_view-gallery");

//находим в попапе поля, которые будем заполнять:
let editFormInputFio = editForm.querySelector(".edit-form__item_name_fio");
let editFormInputJob = editForm.querySelector(".edit-form__item_name_job");

//новые значения value из полей попапа, которые заполнит польз-ль:
let newFio = document.querySelector(".profile__title");
let newJob = document.querySelector(".profile__subtitle");

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

//меняем вид лайка после клика:
function likeCard() {
  let cardUnlikeBtn = cardLikeBtn.classList.add("element__like-btn_active");
  console.log(cardLikeBtn);
  console.log(cardUnlikeBtn);
}

//меняем вид лайка после второго клика, или заменяем одну екнопку на другую??:
// function unlikeCard() {
//   cardLikeBtn = cardUnlikeBtn.classList.remove("element__like-btn_active");
// }


//ловим клик по кнопке открытия попапа - "редактировать профиль" и заодно заполняем инпуты:
profileEditBtn.addEventListener("click", function () {
  editInputsFirst();
  openPopup(popupEditProfile);
});

//ловим клик по кнопке открытия попапа - "добавить карточку":
cardAddBtn.addEventListener("click", function () {
  openPopup(popupAddCard);
});

//ловим клик по кнопке открытия попапа - "открыть галерею":
// написать

//ловим клик по кнопке лайка (первый раз):
cardLikeBtn.addEventListener("click", function () {
  likeCard();
});

// cardUnlikeBtn.addEventListener("click", function () {
//   unlikeCard();
// });


//сохраняем на странице данные профайла, кот.ввели в форме и закрываем попап:
function saveNewProfileData(evt) {
  evt.preventDefault();
  newFio.textContent = editFormInputFio.value;
  newJob.textContent = editFormInputJob.value;
  closePopup(popup);
}

// //сохраняем на странице данные карточки, кот.ввели в форме и закрываем попап:
// function saveNewCardData(evt) {
//   evt.preventDefault();
//   // newFio.textContent = editFormInputFio.value;
//   // newJob.textContent = editFormInputJob.value;
//   closePopup(popup);
// }

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

//ловим клик по кнопке "сохранить", в результате:
//1. отправляем на сервер данные формы ("editForm" теперь является именно формой)
//2. обновляем данные на странице данными формы
//3. закрываем попап
editForm.addEventListener("submit", saveNewProfileData);
