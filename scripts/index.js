// находим попап, находим форму, кнопку редактирования, кнопку закрытия попапа:
let popup = document.querySelector(".popup");
let editForm = document.querySelector(".edit-form");
let profileEditBtn = document.querySelector(".profile__edit-btn");
let popupCloseBtn = document.querySelector(".popup__close-btn");

//находим в попапе поля, которые будем заполнять:
let editFormInputFio = editForm.querySelector(".edit-form__item_name_fio");
let editFormInputJob = editForm.querySelector(".edit-form__item_name_job");

//новые значения value из полей попапа, которые заполнит польз-ль:
let newFio = document.querySelector(".profile__title");
let newJob = document.querySelector(".profile__subtitle");

//открываем попап, заполняем инпуты текущими значениями профайла:
function editBtnClick() {
  popup.classList.add("popup_opened");
  editFormInputFio.value = newFio.textContent;
  editFormInputJob.value = newJob.textContent;
}

//закрываем попап:
function closeBtnClick() {
  popup.classList.remove("popup_opened");
}

//обновляем данные на странице данными формы и закрываем попап:
function saveNewText(evt) {
  evt.preventDefault();
  newFio.textContent = editFormInputFio.value;
  newJob.textContent = editFormInputJob.value;
  closeBtnClick();
}

//ловим клик по кнопке "редактировать":
profileEditBtn.addEventListener("click", editBtnClick);

//ловим клик по кнопке "закрыть":
popupCloseBtn.addEventListener("click", closeBtnClick);

//ловим клик по кнопке "сохранить", в результате:
//1. отправляем на сервер данные формы ("editForm" теперь является именно формой)
//2. обновляем данные на странице данными формы
//3. закрываем попап
editForm.addEventListener("submit", saveNewText);
