describe('Покупка аватара', function () {

    it('search something', function () {
       cy.visit('https://pokemonbattle.ru/login');   // зашли на сайте
       cy.wait(100);
       cy.get(':nth-child(1) > .auth__input').type('USER_LOGIN');   // вводим логин
       cy.get('#password').type('USER_PASSWORD');               // вводим пароль 
       cy.get('.auth__button').click();                      // нажимаем войти
       cy.wait(100);
       cy.get('.header__id-text_type_profile').click();    // выбираем  своего тренера и кликаем на него
       cy.wait(100);
       cy.get('[href="/shop"] > .history-info').click();     // выбираем "смена аватара"  кликаем
       cy.wait(100);
       cy.get(':nth-child(7) > .shop__button').click();     // выбираем нового автара, кликаем
       cy.wait(100);
       cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2')  // переходим на поле ввода номера карты
       
       cy.get('.credit').type('4620869113632996');       //вводим номер карты
       cy.get('.k_input_ccv').type('125');               // вводип ПИН
       cy.get('.k_input_date').type('1225');             // вводим дату
       cy.get('.k_input_name').type('NAME');             // вводим имя
       cy.get('.pay-btn').click();                       // нажимаем кнопку оплатить
       cy.get('#cardnumber').type('56456');              // вводим код подтверждения
       cy.get('.payment__submit-button').click();        // нажимаем кнопку отправить
       cy.contains('Покупка прошла успешно').should('be.visible');    // проверяем наличие подтверждения об успешной покупке
       

       })

      

     



          

           


})
 
 

///на покупку нового аватара для своего тренера