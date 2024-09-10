<?
if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();
?>
<?php
$catalogItems = [];
if (isset ($_GET['deb'])) {

    return;
}
foreach ($arResult["MENU_STRUCTURE"] as $itemID => $arColumns) {
    $currentSection = $arResult["ALL_ITEMS"][$itemID];
    $subMenuItems = [];

    // Подменю
    if (is_array($arColumns) && count($arColumns) > 0) {
        foreach ($arColumns as $key => $arRow) {
            foreach ($arRow as $itemIdLevel_2 => $arLevel_3) {
                $current2Section = $arResult["ALL_ITEMS"][$itemIdLevel_2];
                $subMenu2Items = [];

                if (is_array($arLevel_3) && count($arLevel_3) > 0) {
                    foreach ($arLevel_3 as $itemIdLevel_3) {
                        $current3Section = $arResult["ALL_ITEMS"][$itemIdLevel_3];
                        $subMenu2Items[] = [
                            "label" => $current3Section["TEXT"],
                            "url" => $current3Section["LINK"],
                        ];
                    }
                }

                $subMenuItems[] = [
                    "label" => $current2Section["TEXT"],
                    "url" => $current2Section["LINK"],
                    "items" => $subMenu2Items
                ];
            }
        }
    }

    $catalogItems[] = [
        "label" => $currentSection["TEXT"],
        "url" => $currentSection["LINK"],
        "items" => $subMenuItems
    ];
}

$menuItems = [
    [
        "label" => "Каталог",
        "items" => $catalogItems
    ],
    [
        "label" => "Избранное",
        "url" => "#"
    ],
    [
        "label" => "Сравнение",
        "url" => "#"
    ],
    [
        "label" => "Корзина",
        "url" => "#"
    ],
];
?>
<script>
    window.menuItems = <?php echo json_encode($menuItems); ?>;
</script>
<div id="vue-navigation"></div>
