<!DOCTYPE html>
<html lang="sv">
    <head>
        <meta charset="utf-8">
        <title>PHP F7</title>
    </head>
    <body>
        <main>
            <?php 
            
                //Kodexempel med utskrift och variabler
                $hej = "Hej";
                echo("<p>Hej</p>");
                echo("<p>" . $hej . "</p>");
                echo "Testar";

                $num = 123;
                $str = "String";

                echo("<p>" . gettype($num) . " | " . gettype($str) . "</p>");

                $int = 234;
                $boolean = true;
                $str = "512";
                $str2 = "abc123";
                settype($int, "string");
                settype($boolean, "string");
                settype($str, "integer");
                settype($str2, "integer");

                echo("<p>" . $int . "</p>");
                echo("<p>" . $boolean . "</p>");
                echo("<p>" . $str . "</p>");
                echo("<p>" . $str2 . "</p>");

                //Kodexempel med selektion

                $klienthp = 3.5;
                $serverhp = 3.5;
                $helkurs = 7.0;

                if($klienthp + $serverhp === $helkurs){
                    echo("Du är klar med kursen");
                }else{
                    echo("Du har nog något kvar!");
                }


                //Kodexempel med iteration

                for($i = 1; $i < 7; $i++){
                    echo(
                        "<h" . $i . "> 
                        Header: ". $i . "
                        </h" . $i . ">");
                }


                echo("<script>alert('hej hej');</script>");

                echo("<p style=\"background-color: red; \">Hej hej</p>");




                $array = array(
                    "ett" => 1,
                    "två" => 2,
                    "tre" => 3
                );

                printR($array);
                
                function printR($vektor){
                    echo("<pre>");
                    print_r($vektor);
                    echo("</pre>");
                }
            ?>
        </main>
    </body>
</html>