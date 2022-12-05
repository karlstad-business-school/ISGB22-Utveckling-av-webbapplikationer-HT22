<!DOCTYPE html>
<html lang="sv">
    <head>
        <meta charset="utf-8">
        <title>PHP W6</title>

        <!-- 9. -->
        <style>
            img { height: 100px; width: 100px; }
        </style>
    </head>

    <body>

        <main>    
            <?php

                /*
                    Bilder på tärningar (1-6):
                    <img src="https://openclipart.org/download/282132/Die6.svg" />
                    <img src="https://openclipart.org/download/282131/Die5.svg" />
                    <img src="https://openclipart.org/download/282130/Die4.svg" />
                    <img src="https://openclipart.org/download/282129/Die3.svg" />
                    <img src="https://openclipart.org/download/282128/Die2.svg" />
                    <img src="https://openclipart.org/download/282127/Die1.svg" />
                    
                    1. Slumpa ett tal mellan 1 och 6 och skriv ut resultatet.
                        se rand() funktionen på https://www.php.net/manual/en/function.rand.php
                    2. Skriv ut resultatet från punkt 1 i ett p-element.

                    */

                    echo("<p>");
                        echo(rand());
                    echo("</p>");

                    echo("<p>" . rand(1, 6) . "</p>");


                    /*



                   
                    3. Med iteration (for) slumpa 6 tal mellan 1 och 6 och skriv ut resultatet.
                    4. Skriv ut resultatet från punkt 3 i ett div-element och varje framslumpat tal i ett eget p-element.
                    */

                    
                    echo("<div class='dice-container'>");
                    for($i = 1; $i < 7; $i++){
                        $rand = rand(1, 6);
                        echo("<p>");
                        echo($rand);
                        echo("</p>");
                    }
                    echo("</div>");
                    

                    $printStr = "";
                    $printStr .= "<div class='dice-container'>";

                    for($i = 1; $i < 7; $i++){
                        $printStr .= "<p>";
                        $printStr .= rand(1, 6);
                        $printStr .= "</p>";
                    }

                    $printStr .= "</div>";

                    echo($printStr);

                    /*

                    
                    5. Summera alla framslumpade tal och skriv ut summan i ett eget p-element.
                    */

                    $total = 0;
                    $rand = 0;
                    $i = 1;

                    echo("<p>");
                    while($i < 7){
                        $rand = rand(1, 6);
                        $total += $rand;
                        echo($rand . " ");

                        $i++;
                    }
                    echo("</p>");
                    echo("<p>Total: " . $total . "</p>");




                    /*
                    6. För varje framslupat tal mellan 1 och 6 skriv ut ett img-element som pekar
                        (använd src-attributet) på en bild som matchar en tärning (se ovan).
                    */
                    //<img src=\"https://openclipart.org/download/282127/Die + slumpat tal + .svg>
                    for($i = 1; $i < 7; $i++){
                        $imgDefaultString = "<img src=\"https://openclipart.org/download/2821";
                        $rand = rand(1, 6);
                        $imgDefaultString .= (26 + $rand) . "/Die";
                        echo($imgDefaultString . $rand . ".svg\" />");
                    }

                    //Övning: Använd if- eller switch-satser för att skriva ut rätt bild på skärmen istället för att räkna ut vilken bild som ska visas


                    /*



                    7. Skapa använd instruktionerna ovan för img-element och skapa en vektor där varje img-element
                        finns i ett eget index. Revidera sedan punkt 6 och använd vektorn och ett framslupat värde (=vektorindex)
                        för att skriva ut img-element instruktionerna.
                    8. Lägg till alt-attributet för bilderna och validera sedan er kod.
                    */
                    
//<img src=\"https://openclipart.org/download/282127/Die + slumpat tal + .svg>

                    define("IMG", "https://openclipart.org/download/2821");
                    $vektor = [];

                    for($i = 1; $i < 7; $i++){
                        //$rand = rand(1, 6);
                        $vektor["test" . $i] = IMG . (26 + $i) . "/Die" . $i . ".svg";
                    }

                    echo("<p>Vektor[0]: " . $vektor[0] . "</p>");
                    echo("<pre>");
                    print_r($vektor);
                    echo("</pre>");

                    for($i = 1; $i < 7; $i++){
                        $rand = rand(1, 6);
                        echo("<img alt='Bild på tärnning med värdet: " . $rand . "' src='" . $vektor["test" . $rand] . "' />");
                    }

                    /*
                    
                    9. Skapa ett "spel"
                        Lägg till en knapp som "slumpar" fram 6st tal
                        Räkna ut det totala värdet  
                        Kontrollera om värdet är mer än 20
                            Skriv ut "Du vann!"
                            Annars
                            Skriv ut "Du förlorade!" 

                    9. Övning: Lägg till all logik i en funktion som körs när man trycker på knappen 
                */
            ?>
                


            <?php
                if(isset($_POST["kasta"])){
                    echo("<h3>Du kastade en tärning</h3>"); 
                    $total = 0;
                    $totalStr = "";
                    $diceStr = "";
                    for($i = 1; $i < 7; $i++){
                        $rand = rand(1, 6);
                        $total += $rand;
                        //echo("<img src='" . IMG . (26 + $rand) . "/Die" . $rand . ".svg' />");
                        $diceStr .= ("<img src='" . IMG . (26 + $rand) . "/Die" . $rand . ".svg' />");
                    }
                    //echo("<h4>Total: " . $total . "</h4>");
                    $totalStr = ("<h4>Total: " . $total . "</h4>");

                    echo($totalStr);
                    echo($diceStr);
                }

                if(isset($_GET['id'])){
                    $param = $_GET['id'];
                    echo($param);
                }
               
            ?>
               
            <form method="POST">
                <input type="submit" name="kasta" value="Kasta!" />
            </form>
        </main>
        

    </body>

</html>