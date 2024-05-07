# antd-forms-tutorial

Это проект-обучалка по использованию antd форм.

Чтобы нормально работать с проектом на вашем рабочем компе должны быть установлены:

1. git ^2.36.1
2. node.js ^18.20.2
3. npm ^10.5.0

Если всё вышеперечисленное у вас уже установлено, то сделайте fork данного репозитория или работайте с ним же, но создайте себе отдельную ветку из ветки main с названием, включающим ваш логин / фио. После клонирования репозитория на свой комп установите библиотеки при помощи команды:

npm install

После установки библиотек проверьте, что все скрипты из package.json корректно работают. Для этого выполните следующие команды:

1. npm run dev
2. npm run build
3. npm run lint
4. npm run preview

Если всё работает хорошо, то можно приступать к выполнению заданий.

Перед тем как вы начнёте писать код мы введём несколько ограничений на то, как вы будете его писать:

1. Нарушать правила хуков React строго запрещено. Указывайте в хуках все необходимые зависимости / используйте их только там, где их можно использовать.
2. Использование хуков useState, useEffect, useLayoutEffect, useRef, useId запрещено. Конкретно для этих задач использование этих хуков скорее означает, что вы делаете что-то неправильно. Единственное место, в котором можно использовать useEffect и useState - кастомный хук, иммитирующий загрузку данных с бэка.
3. Установка каких-либо дополнительных библиотек так же запрещена. Для этих задач никаких дополнительных библиотек вам не понадобится. Того, что есть в antd, хватит с головой.
4. Компоненты храните в src/components, константы в src/constants, хуки в src/hooks, утилиты в src/utils, типы в src/types. index файлы уже созданы. Так же в проекте есть алиасы @components, @constants, @hooks, @utils, @types для удобства импортов.
5. Для каждого задания делайте отдельный коммит.

"макеты" для форм лежат в корне проекта в папке layouts

<br>
Первое задание.
<br>
Нужно сделать форму регистрации пользователя в простейшем виде. В форме дожны присутствовать следующие поля:
<br>
<br>

1. Инпут для ввода логина
2. Инпут для ввода пароля
3. Инпут для повторного ввода пароля
4. Инпут для ввода email
5. Инпут для ввода номера телефона
6. Селект для выбора страны
7. Кнопка с текстом "Регстрация"
8. Кнопка с текстом "Очистить"

На данный момент не нужно добавлять никакой логики для валидации / отправки / очистки формы. Просто сверстайте её по макету 1 из layouts. В значения для селекта захардкодьте и вынесите в @constants.
<br>
Подсказка: вам понадобятся компоненты Form, Form.Item, Input, Select, Button, Row, Col.

<br>
<br>

Второе задание.
<br>
Теперь добавим плейсхолдеры для каждого поля формы. Что именно написать в плейсхолдере - не имеет особого значения, но можно сделать так же, как и в макете 2.
<br>
Подсказка: только не position: absolute, я вас умоляю. Свойство placeholder поможет.

<br>
<br>

Третье задание.
<br>
Теперь нужно сделать так, чтобы при наведении на лейбл поля формы оно подсвечивалось (кроме селекта), а при клике на лейбл поля формы само поле бралось в фокус. Как оно должно выглядеть можно посмотреть на макете 3.
<br>
Подсказка: никаких обработчиков onClick и hover эффектов здесь самому писать не нужно (name).

<br>
<br>

Четвёртое задание.
<br>
Нужно пометить 3 поля как обязательные: Логин, Пароль, Повторите пароль. Внешне обязательные поля должны выглядеть, как на макете 4.
<br>
Подсказка: никаких звёздочек самому вставлять и красить не нужно (required).

<br>
<br>

Пятое задание.
<br>
Время поработать с данными, которые заполнил пользователь. Нужно сделать так, чтобы при нажатии на кнопку "Регистрация", а так же при нажатии на клавишу Enter на клавиатуре при фокусе на любом поле, в консоль выводилось всё, что заполнил пользователь в следующем формате:
<br>
<br>
{
<br>
&nbsp;&nbsp;&nbsp;&nbsp;login: "логин пользователя",
<br>
&nbsp;&nbsp;&nbsp;&nbsp;password: "пароль пользователя",
<br>
&nbsp;&nbsp;&nbsp;&nbsp;passwordRepeat: "пароль пользователя",
<br>
&nbsp;&nbsp;&nbsp;&nbsp;email: "email пользователя",
<br>
&nbsp;&nbsp;&nbsp;&nbsp;phoneNumber: "номер телефона пользователя",
<br>
&nbsp;&nbsp;&nbsp;&nbsp;country: "страна пользователя"
<br>
}
<br>
<br>
При этом значение полей, которые пользователь не заполнил должны быть равны null. Особое внимание уделите ситуации, когда пользователь ввёл что-то, а потом полностью стёр (в качестве значения такого поля должен остаться null, а не пустая строка). Пример можете увидеть на макете 5.
<br>
Подсказка: htmlType, Form.useForm, onFinish, initialValues, form.

<br>
<br>

Шестое задание.
<br>
Наша кнопка "Очистить" до сих пор ничего не делает. Время это исправить. Нужно, чтобы она сбрасывала значения всех полей в форме. При этом нужно, чтобы после сброса значения всех полей были равны initialValues. На макете 6 можно найти пример данных после сброса формы.
<br>
Подсказка: не нужно пытаться установить значения полей вручную (resetFields).

<br>
<br>

Седьмое задание.
<br>
Добавим немного валидации для вязкости. У нас есть 3 обязательных поля: Логин, Пароль и Повторите пароль. Но при нажатии на кнопку "Регистрация" пользователю не подсвечивается, что он не заполнил какое-то обязательное поле. Да и было бы неплохо во время работы с формой, если пользователь удалит значение обязательного поля, вывести ему ошибку. А при нажатии на кнопку "Очистить" и, если пользователь всё заполнит правильно, ошибки должны пропасть. Как должна выглядеть ошибка можете посмотреть на макете 7.
<br>
Подсказка: не надо пытаться вкорячить ошибку вёрсткой (особенно с position: absolute) (rules, message, required).

<br>
<br>

Восьмое задание.
<br>
Наша форма становится похожа на нормальную, но валидация пока что оставляет желать лучшего. Начнём это исправлять с самого простого поля - Логин. Нам нужно добавить ограничение на длину логина. Пусть она будет не меньше 3 и не больше 1024 символов. При этом для разных ситуаций пользователю должны выводиться разные ошибки валидации, причём для данного поля только одна за раз. Пример можете найти на макете 8.
<br>
Подсказка: rules, message, required, validator

<br>
<br>

Девятое задание.
<br>
Теперь добавим валидацию на поля Пароль и Повторите пароль. Очевидно, что она должна быть одинаковой. Правила валидации для пароля следующие:

1. Пароль должен быть обязателен
2. Длина пароля должена быть не менее 9 символов
3. Длина пароля должна быть не более 20 символов
4. Пароль должен содержать хотя бы одну цифру
5. Пароль должен содержать хотя бы одну прописную латинскую букву
6. Пароль должен содержать хотя бы одну строчную латинскую букву
7. Пароль должен содержать хотя бы один спецсимвол. К таким символам относятся следующие:
   !"№;%:?\*()\_+@#$^&- ="'/|\\{}`~<>[]

Для каждого из этих правил должна быть отдельная ошибка. Ошибки могут выводиться по несколько штук сразу. Если пользователь ввёл что-то в поле пароля, а затем удалил, то нужно показывать только ошибку, связанную с обязательностью пароля. Примеры можете посмотреть в макете 9.
<br>
Подсказка: ничего нового, кроме регулярных выражений, использовать не придётся.
