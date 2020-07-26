<?php
    require 'connectiondb.php';
    if (!$link) {
        mysqli_connection_error();
    }

    $login = trim($_REQUEST['login']);
    $password = password_hash($_REQUEST['password'], PASSWORD_DEFAULT);

    $sql = "SELECT login, password FROM users WHERE login='$login'";
    
    $query = mysqli_query($link, $sql);
    // if ($query['password']===введенному паролю)
    $result = password_verify($password, mysqli_result['password']);
    if ($result) {
        print("аториазция успешна");
    } else {
        print("чет пошло не так");
    }
?>