import { Task } from '@serenity-js/core';
import { Navigate } from '@serenity-js/web';

export class NavegarA {
    static laPaginaDeInicio = () =>
        Task.where('#actor navega a la página de inicio',
            Navigate.to(process.env.BASE_URL_UI || 'https://www.saucedemo.com')
        );

    static laPaginaDeOrangeHRM = () =>
        Task.where('#actor navega a la página de inicio de sesión de OrangeHRM',
            Navigate.to(process.env.BASE_URL_ORANGEHRM ? `${process.env.BASE_URL_ORANGEHRM}/web/index.php/auth/login` : 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        );

    static laUrl = (url: string) =>
        Task.where(`#actor navega a la url ${url}`,
            Navigate.to(url)
        );
}

