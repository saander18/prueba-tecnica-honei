# Prueba-tecnica-honei
# 🎲 Servicio de Suma Aleatoria

Este proyecto crea un servicio en Node.js que genera un conjunto de números aleatorios y los suma de manera eficiente utilizando procesamiento paralelo.

## 📋 Tabla de Contenidos

- [Instalación](#instalación)
- [Uso](#uso)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Licencia](#licencia)

## ⚙️ Instalación

1. **Clona el repositorio:**
    ```sh
    git clone https://github.com/saander18/prueba-tecnica-honei.git

    cd prueba-tecnica-honei
    ```

2. **Instala las dependencias:**
    ```sh
    pnpm install 
    ```
    o
    ```sh
    npm install 
    ```
    Es recomendable usar `pnpm` ya que reutiliza las dependencias que ya tienes en tu máquina en lugar de instalarlas nuevamente y consumir más espacio en tu disco.

## 🚀 Uso

1. **Inicia el servidor:**
    ```sh
    pnpm run dev
    ```
    o
    ```sh
    npm run dev
    ```
    Depende del gestor de paquetes que hayas usado para instalar las dependencias. Esto iniciará un servidor en el puerto especificado, en este caso usé el puerto 3000.

2. **Envía una solicitud POST para generar y sumar números aleatorios:**
    - **Endpoint:** `http://localhost:3000/generate-and-sum`
    - **Método:** POST
    - **Cuerpo:** JSON que contiene el parámetro `count`

    Ejemplo de cuerpo de solicitud:
    ```json
    {
      "count": 10000
    }
    ```

    Puedes usar herramientas como Postman o, en mi caso, usé Thunder Client (como Postman pero es una extensión de Visual Studio Code) para enviar la solicitud.

## 📂 Estructura del Proyecto

### 1. Carpeta /utils 📂
- `generateRandomArray.js` Contiene la función para generar el arreglo de números aleatorios.
- `sumArray.js` Contiene la función para sumar el arreglo de números en el lote/batch, esta funcion es usada por cada Worker
- `sumArrayParallel.js` Contiene la función para inicializar diferentes workers con el arreglo de numeros de cada lote/batch en paralelo.

    ```js
        const worker = new Worker('./worker.js', {
                    workerData: { batch }
                });
    ```
    La función recibe el arreglo de numeros aleatorios generados y el tamaño de cada lote/batch por parametro para que pueda procesarlos.

    Calcula y divide el número de lotes necesarios, luego los recorre y va añadidendo el resultado al total de la suma en el instante que recibe el evento de mensaje de un Worker : 
    ```js
    worker.on('message')
    ```
    Hasta que el numero de lotes restantes finalize y resuelve la promesa final con suma del total de cada lote/batch



### 2. Server.js
- Configura el servidor Express con un endpoint POST `/generate-and-sum`.
- Valida el parámetro `count` del cuerpo de la solicitud.
- Genera un arreglo de números aleatorios.
- Divide el arreglo en lotes más pequeños y usa hilos de trabajo para sumar cada lote.
- Combina los resultados de todos los lotes y envía la suma final como respuesta como JSON.

### 3. Worker.js
- Recibe un lote de números del hilo principal.
- Suma los números en el lote y envía el resultado de vuelta al hilo principal.




## 📜 Licencia

Este proyecto está licenciado bajo la Licencia MIT.
