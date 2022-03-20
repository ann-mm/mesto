// находим форму(попап), кнопку редактирования попапа, кнопку закрытия попапа
let editForm = document.querySelector(".edit-form");
let profileEditBtn = document.querySelector(".profile__edit-btn");
let editFormCloseBtn = editForm.querySelector(".edit-form__close-btn");

// ловим клик по кнопке редактирования профиля profileEditBtn
// // function EditBtnClick() {
// // }
// // profileEditBtn.addEventListener('click', EditBtnClick);

// по клику на кнопку редактирования открываем попап, т.е. заменяем класс формы с "закрытого состояния" на "открытое"
// // function EditBtnClick() {
// //  editForm.classList.add("edit-form_opened");
// // }
// // profileEditBtn.addEventListener("click", EditBtnClick);

// ловим клик по кнопке закрытия попапа editFormCloseBtn
// // function CloseBtnClick() {
// // }
// // editFormCloseBtn.addEventListener('click', CloseBtnClick);

// по клику на кнопку закрытия попапа удаляем добавленный класс
// // function CloseBtnClick() {
// //  editForm.classList.remove("edit-form_opened");
// // }
// // editFormCloseBtn.addEventListener("click", CloseBtnClick);

//закрываем попап по нажатию на клавитуре "Esc":
function onDocumentKeyDown() {
  if (event.code === "Escape") {
    CloseBtnClick();
  }
}

//объединяем вместе две функции - открываем попап и ловим клики по кнопке "Esc"
function EditBtnClick() {
  editForm.classList.add("edit-form_opened");
  document.addEventListener("keydown", onDocumentKeyDown);
}
profileEditBtn.addEventListener("click", EditBtnClick);

//объединяем вместе две функции - закрываем попап и перестаем ловить клики по кнопке "Esc"
function CloseBtnClick() {
  editForm.classList.remove("edit-form_opened");
  document.removeEventListener("keydown", onDocumentKeyDown);
}
editFormCloseBtn.addEventListener("click", CloseBtnClick);

//находим в попапе поля, которые будем заполнять:
let editFormInputs = editForm.querySelectorAll(".edit-form__item");
// console.log(editFormInputs[0].value);
// console.log(editFormInputs[1].name);

//находим в попапе кнопку "сохранить":
let editFormSubmitBtn = editForm.querySelector(".edit-form__submit-btn");

//по клику на кнопку "сохранить" в попапе запускаем несколько действий:
// editFormSubmitBtn.addEventListener('click', действия);

// 1.находим текущие значения value в полях ввода в попапе:
// // let name = editFormInputs[0].value;
// // console.log(name);
// // let position = editFormInputs[1].value;
// // console.log(position);

// 2.заменяем текст в блоке "профиль" значениями value из полей попапа:
// // let newName = document.querySelector(".profile__title");
// // newName.textContent = editFormInputs[0].value;
// // let newPosition = document.querySelector(".profile__subtitle");
// // newPosition.textContent = editFormInputs[1].value;

// 3.закрываем попап:
// // CloseBtnClick();

function SaveNewText(evt) {
  evt.preventDefault();
  let newName = document.querySelector(".profile__title");
  newName.textContent = editFormInputs[0].value;
  let newPosition = document.querySelector(".profile__subtitle");
  newPosition.textContent = editFormInputs[1].value;
  CloseBtnClick();
}
editFormSubmitBtn.addEventListener("click", SaveNewText);
editForm.addEventListener("submit", SaveNewText);
