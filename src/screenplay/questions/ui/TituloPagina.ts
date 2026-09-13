import { Text } from '@serenity-js/web';
import { InventarioUI } from '../../ui/InventarioUI';

export class TituloPagina {
    static deProductos = () =>
        Text.of(InventarioUI.tituloPagina())
            .describedAs('título de la página de productos');
}
