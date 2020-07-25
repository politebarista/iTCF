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
        if (mysqli_error($link)=="Duplicate entry '$login' for key 'login'") {
            print("Пользователь с данным именем уже зарегистрирован, попробуйте другое.");
        } else {
            print("Ошибка при выполнении запроса. Запрос не выполнен.");
        }
    } else {
        print("Вы успешно зарегистрированны!");
        setcookie("authorizedAs", $login, time()+3600, '/'); // пока тут только на час, мб потом изменить надо
    }
?>
<head>
<meta http-equiv="refresh" content="3;URL=../index.html" />
</head>