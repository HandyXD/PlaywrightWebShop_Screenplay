# 🛒 Automatización de Pruebas – Demo Web Shop (Tricentis)

Suite de pruebas automatizadas E2E para la aplicación **Demo Web Shop** (`https://demowebshop.tricentis.com/`), construida sobre **Serenity/JS** con **Playwright** y **TypeScript**, usando **Cucumber (Gherkin)** para la definición de escenarios BDD, el patrón **Screenplay** para el modelado de las interacciones, y ejecutada con **tsx**. Los reportes de ejecución se generan con el **Serenity/JS HTML Reporter**.

## 📋 Historias de Usuario Cubiertas

### HU-01: Registro de usuario

```gherkin
DADO QUE ingreso a la aplicación ubicada en la URL https://demowebshop.tricentis.com/
CUANDO doy clic en la opción "Register"
Y/E ingreso los datos de registro
ENTONCES el sistema debe mostrar el mensaje "Your registration completed"
```

### HU-02: Proceso de compra

```gherkin
DADO QUE ingreso a la aplicación ubicada en la URL https://demowebshop.tricentis.com/
CUANDO me autentico con credenciales válidas (usuario registrado en la HU-01)
Y doy clic en una Categoría y, en caso de existir, en su Subcategoría
Y selecciono un producto y lo agrego al carrito
Y/E ingreso al carrito y doy clic en "Checkout"
Y/E ingreso los datos solicitados para la entrega
    (First name, Last name, Email, Country, State/Province, City, Address1,
    Zip/Postal code, Phone) y dejo los demás datos que cargan por defecto
Y selecciono "Credit Card" como método de pago
Y completo la información de pago:
    - Select credit card: Visa
    - Cardholder name: Barbara Gordon
    - Card number: 4485564059489345
    - Expiration date: 04/2039
    - Card Code: 123
Y confirmo la orden
ENTONCES el sistema debe mostrar el mensaje "Your order has been successfully processed!"
```

## 🧰 Tecnologías y Herramientas

| Herramienta | Uso |
|---|---|
| **Serenity/JS** | Framework de pruebas BDD sobre Playwright (actor, tareas, interacciones, screenplay) |
| **Playwright** | Automatización E2E del navegador |
| **TypeScript** | Lenguaje de programación |
| **Cucumber (Gherkin)** | Definición de escenarios BDD |
| **Screenplay** | Patrón de diseño para pruebas legibles, mantenibles y reutilizables |
| **tsx** | Ejecución de TypeScript directamente en Node.js |
| **Serenity/JS HTML Reporter** | Reportes de ejecución con evidencias |
