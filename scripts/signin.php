<?php
    require 'connectiondb.php';
    if (!$link) {
        mysqli_connection_error();
    }

    $login = trim($_REQUEST['login']);
    $password = trim($_REQUEST['password']);

    $sql = "SELECT login, password FROM users WHERE login='$login'";
    
    $query = mysqli_query($link, $sql);
    $array = mysqli_fetch_array($query);
    if (password_verify($password, $array['password'])) {
        echo "Вы успешно залогинены";
        setcookie("authorizedAs", $login, time()+3600, '/');
    } else {
        echo "Что-то пошло не так";
    }