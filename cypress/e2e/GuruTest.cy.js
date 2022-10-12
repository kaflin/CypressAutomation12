describe('Guru99', function() {
    // var txt;
    var url = 'https://demo.guru99.com/insurance/v1/index.php'
    it('Login Faliure', function() {
        cy.visit(url)
        cy.get('#email').type('suraj520876@gmail.com');
        cy.get('#password').type('jfjjmm');
        cy.get('input[name="submit"]').click()
    })

    it('Login Success', function() {
        cy.visit(url)
        cy.get('#email').type('suraj520876@gmail.com');
        cy.get('#password').type('suraj123');
        cy.get('input[name="submit"]').click();
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from failing the test
            return false
        })
    })
    it('Request Quotation', function() {
        cy.get('#ui-id-2').click()
        cy.get('#quotation_incidents').type('2')
        cy.get('#quotation_vehicle_attributes_registration').type('876')
        cy.get('#quotation_vehicle_attributes_mileage').type('80')
        cy.get('#quotation_vehicle_attributes_value').type('305')
        cy.get('select[id = "quotation_vehicle_attributes_parkinglocation"]')
            .select("Garage")
            .invoke("val")
            .should("eq", "Garage")
        cy.get('input[name="submit"]').click();
        // cy.get('b#text').then(($temp) => {
        //     txt = $temp.text()
        // })
        cy.go('back')
    })
    it('Retrieve Quotation', function() {
        cy.get('#ui-id-3').click()
        cy.get('input[name="id"]').type('16268');
        cy.get('#getquote').click()
        cy.go('back')
    })
    it('Profile', function() {
        cy.get('#ui-id-4').click()
    })
    it('Edit Profile', function() {
        cy.get('#ui-id-5').click()
        cy.get('#user_surname').type('Singh');
        cy.get('#user_firstname').type('Shruti');
        cy.get('#user_phone').type('9847369695');
        cy.get('#user_address_attributes_street').type('Nadwa');
        cy.get('#user_address_attributes_city').type('Butwal');
        cy.get('#user_address_attributes_county').type('Nepal');
        cy.get('#user_address_attributes_postcode').type('31000');
        cy.get('input[name="commit"]').click();
        throw new Error("test fails here")
    })
    it('Logout', function() {
        cy.get('input[value="Log out"]').click()
    })
})