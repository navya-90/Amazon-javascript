import {renderOrderSummary} from '../../scripts/checkout/orderSummary.js';
import { loadFromStorage } from "../../data/cart.js";
import { loadProducts } from '../../data/products.js';


describe('test suite: renderOrderSummary', () => {
    const productId1 = "e43638ce-6aa0-4b85-b27f-e1d07eb678c6";
    const productId2 = "15b6fc6f-327a-4ec4-896f-486349e85a3d";

    beforeAll((done) => {
        loadProducts(() => {
            done();
        });
    });

    beforeEach(() => {
        spyOn(localStorage, 'setItem');

        document.querySelector('.js-test-container').innerHTML = `
            <div class="js-order-summary"></div>
            <div class="js-payment-summary"></div>
        `;

        spyOn(localStorage, 'getItem').and.callFake(() => {
            return JSON.stringify([{
                productId: productId1,
                quantity: 2,
                deliveryOptionsId: '1'
            }, {
                productId: productId2,
                quantity: 1,
                deliveryOptionsId: '2'
            }]);
        });

        loadFromStorage();
        renderOrderSummary();
    });

    it('displays the cart', () => {
        const product1Element = document.querySelector(`.js-product-quantity-${productId1}`);
        const product2Element = document.querySelector(`.js-product-quantity-${productId2}`);

        expect(product1Element.innerText).toContain('Quantity: 2');
        expect(product2Element.innerText).toContain('Quantity: 1');
    });
});
