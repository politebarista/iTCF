<?php
    require 'connectiondb.php';
    if (!$link) {
        mysqli_connection_error();
    }

    $login = trim($_REQUEST['login']);
    $password = password_hash($_REQUEST['password'], PASSWORD_DEFAULT);

    $sql = "INSERT INTO users (login, password) VALUES ('{$login}','{$password}');";

    $result = mysqli_query($link, $sql);
    if (!$result) {
        print("Ошибка при выполнении запроса. Запрос не выполнен.");
    } else {
        print("Вы успешно зарегистрированны!");
    }
?>