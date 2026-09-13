# language: es
@ui @autenticacion
Característica: Inicio de sesión en la plataforma SauceDemo

  Como usuario registrado
  Quiero autenticarme con mis credenciales
  Para acceder al catálogo de productos

  Escenario: Inicio de sesión exitoso con credenciales válidas
    Dado que "Dario" navega a la página de inicio de sesión
    Cuando "Dario" ingresa el usuario "standard_user" y la contraseña "secret_sauce"
    Entonces "Dario" debería ver la página de productos con el título "Products"

  Escenario: Inicio de sesión fallido con usuario bloqueado
    Dado que "Dario" navega a la página de inicio de sesión
    Cuando "Dario" ingresa el usuario "locked_out_user" y la contraseña "secret_sauce"
    Entonces "Dario" debería ver un mensaje de error que contiene "Epic sadface: Sorry, this user has been locked out."
