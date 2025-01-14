describe('Тестирование login.qa.studio', function () {

    it('search something', function () {
       cy.visit('https://login.qa.studio/');   // зашли на сайте
       cy.get('#mail').type('german@dolnikov.ru');  // верный логин
       cy.get('#pass').type('iLoveqastudio1');  // верный пароль
       cy.get('#loginButton').click(); // нажать кнопку войти
       cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверка видимости текта после авторизации
       cy.get('#messageHeader').should('be.visible');     //текст виден пользователю 
       cy.get('#exitMessageButton > .exitIcon').should('be.visible');  // Есть крестик и он виден 
       })

       it('Проверка восстановления пароля', function () {
        cy.visit('https://login.qa.studio/');   // зашли на сайте
        cy.get('#forgotEmailButton').click();    // нажал кнопку Забыли пароль?
        
        cy.get('#mailForgot').type('andrei-pyrlik@yandex.ru');    // ввел почту для восстановления 
        
        cy.get('#restoreEmailButton').click();    // нажал кнопку отправить код

        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');   // Прверка на совпадающий текст
        cy.get('#messageHeader').should('be.visible');  // текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');  // Есть крестик и он виден 
        })

        it('Правильный логин НЕ правильный пароль', function () {
            cy.visit('https://login.qa.studio/');   // зашли на сайте
            cy.get('#mail').type('german@dolnikov.ru');  // верный логин
            cy.get('#pass').type('123456');  // НЕ верный пароль
            cy.get('#loginButton').click(); // нажать кнопку войти
            cy.get('#messageHeader').contains('Такого логина или пароля нет');   // Прверка на совпадающий текст
            cy.get('#messageHeader').should('be.visible');  // текст виден пользователю
            cy.get('#exitMessageButton > .exitIcon').should('be.visible');  // Есть крестик и он виден
        })



            it('НЕ правильный логин  правильный пароль', function () {
                cy.visit('https://login.qa.studio/');   // зашли на сайте
                cy.get('#mail').type('Andrei-pyrlik@yandex.ru');  // НЕверный логин
                cy.get('#pass').type('iLoveqastudio1');  // верный пароль
                cy.get('#loginButton').click(); // нажать кнопку войти
                cy.get('#messageHeader').contains('Такого логина или пароля нет');   // Прверка на совпадающий текст
                cy.get('#messageHeader').should('be.visible');  // текст виден пользователю
                cy.get('#exitMessageButton > .exitIcon').should('be.visible');  // Есть крестик и он виден                               
            })

            it('Проверка валидации @', function () {
                cy.visit('https://login.qa.studio/');   // зашли на сайте
                cy.get('#mail').type('germandolnikov.ru');  //  Логин без @
                cy.get('#pass').type('iLoveqastudio1');  // верный пароль
                cy.get('#loginButton').click(); // нажать кнопку войти
                cy.get('#messageHeader').contains('Нужно исправить проблему валидации');   // Прверка на совпадающий текст
                cy.get('#messageHeader').should('be.visible');  // текст виден пользователю
                cy.get('#exitMessageButton > .exitIcon').should('be.visible');  // Есть крестик и он виден 
            })

            it('Ввод GerMan@Dolnikov.ru ', function () {
                cy.visit('https://login.qa.studio/');   // зашли на сайте
                cy.get('#mail').type('GerMan@Dolnikov.ru');  //  Ввод логина GerMan@Dolnikov.ru
                cy.get('#pass').type('  1');  // верный пароль
                cy.get('#loginButton').click(); // нажать кнопку войти
                cy.get('#messageHeader').contains('Такого логина или пароля нет');   // Прверка на совпадающий текст
                cy.get('#messageHeader').should('be.visible');  // текст виден пользователю
                cy.get('#exitMessageButton > .exitIcon').should('be.visible');  // Есть крестик и он виден 
            })

})
 
 
 // запуск через теринал: npx cypress run --spec cypress/e2e/poke.cy.js --browser chrome
 


 //а. Ввести логин GerMan@Dolnikov.ru
 //б. Ввести правильный пароль
 //в. Нажать войти
 //г.  Проверить, что авторизация успешна (текст именно «Авторизация прошла успешно» и наличие кнопки крестик)