<!DOCTYPE html>
<html lang="sv">
    <head>
        <meta charset="utf-8">
        <title>PHP F8</title>
    </head>
    <body>
        <main>
        
        <?php
            $dataSourceName = "mysql:" . "host=localhost;" . "dbname=car;" . "charset=utf8";
            $userName = "isgb22";
            $passWord = "isgb22";
            $dbhsOptions = array(
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
            );
            
            $dbh = new PDO($dataSourceName, $userName, $passWord, $dbhsOptions);

            
        ?>
        
        </main>
    </body>
</html>