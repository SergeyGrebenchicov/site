## 🚀 Gatsby CLI

1.  **Установка**

    ```shell
    npm install -g gatsby-cli
    ```

1.  **Создать новый сайт**

    ```shell
    gatsby new blob-site
    ```

1.  **Начать разработку сервера**

    ```shell
    cd blob-site
    gatsby clean - чтобы удалить все кэшированные элементы
    gatsby develop - запустить проект на локалке
    gatsby build - cоздать производственную сборку
    ```

1.  **Модуль classnames**

    Для склеивания классов

    ```shell
    npm install classnames --save
    ```

1.  **Модуль surge**

    Выкатка сайта на тестовую ссылку

    ```shell
    surge public/ shiny-government.surge.sh
    ```

1.  **Win 10**

Открываем терминал от админа.
Пишем и запускаем: Set-ExecutionPolicy RemoteSigned
На вопрос отвечаем: A (Да для всех)
PowerShell: npm install -g gatsby-cli
