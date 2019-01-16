<?php
if($_GET && $_GET['date']) {
    $getDate = $_GET['date'];
    $getDate = substr($getDate, 0, 2).'-'.substr($getDate, 3, 2).'-'.substr($getDate, 6, 4);
    $content = file_get_contents("https://globoesporte.globo.com/placar-ge/$getDate/jogos.ghtml");
} else {
    $content = file_get_contents('https://globoesporte.globo.com/placar-ge/hoje/jogos.ghtml');
}
$rows = explode('<main class="glb-bloco placar-ge row">', $content);
$rows = $rows[1];
$rows = explode('</main>', $rows);
$rows = $rows[0];
$rows = preg_split('@(?=<article)@', $rows);
unset($rows[0]);

$regexGames = array(
    '(?<=<span itemprop="name">)',
    '(?=</span> </span>)',
    '(?<=<time datetime=")',
    '(?=" class="hora)',
    '(?<=nome-abreviado" title=")',
    '(?=" itemprop="alternateName">)',
    '(?<=" itemprop="alternateName">)',
    '(?=</abbr> <span class="nome nome-completo" itemprop="name">)',
    '(?<=</abbr> <span class="nome nome-completo" itemprop="name">)',
    '(?=</span> <img class="escudo" src=")',
    '(?<=</span> <img class="escudo" src=")',
    '(?=" alt=")',
    '(?<=itemtype="http://schema.org/SportsTeam"> <img class="escudo" src=")',
    '(?=</abbr>)'
);
$regexGames = implode('|', $regexGames);

$final = [];
foreach($rows as $key => $row) {
    $arr = preg_split('@('.$regexGames.')@', $row);
    foreach($arr as $key => $value) if($key % 2 == 0 || $key == 5) unset($arr[$key]);
    $date = explode('T', $arr[3]);
    $time = $date[1];
    $timeArr = array(
        'full'  => $time,
        'hour'  => substr($time,0,2),
        'min'   => substr($time,3,2),
        'sec'   => substr($time,6,2),
    );
    $date = $date[0];
    $dateArr = array(
        'full'  => $date,
        'year'  => substr($date,0,4),
        'month' => substr($date,5,2),
        'day'   => substr($date,8,2),
    );
    $GMT = '-02:00';
    $finalArr['name'] = $arr[1];
    $finalArr['startDate'] = array(
        'full'      => $arr[3].$GMT,
        'timestamp' => strtotime($arr[3]),
        'date'      => $dateArr,
        'time'      => $timeArr,
        'GMT'       => $GMT
    );
    $finalArr['teams'] = array(
        'homeTeam' => array(
            'alternateName' => $arr[7],
            'name' => $arr[9],
            'logo' => $arr[11]
        ),
        'awayTeam' => array(
            'alternateName' => $arr[17],
            'name' => $arr[15],
            'logo' => $arr[13]
        )
    );
    $final[] = $finalArr;
}
echo json_encode($final);
