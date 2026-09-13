import { By, PageElement } from '@serenity-js/web';

export class InventarioUI {
    static tituloPagina = () =>
        PageElement.located(By.css('.title'))
            .describedAs('título de la página de productos');

    static contenedorProductos = () =>
        PageElement.located(By.id('inventory_container'))
            .describedAs('contenedor de catálogo de productos');
}
