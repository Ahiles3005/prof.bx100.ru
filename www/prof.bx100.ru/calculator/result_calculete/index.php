<? require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/header.php");

use Bitrix\Main\UI\Extension;

Extension::load('ui.bootstrap4');

use Bitrix\Main\Context;

$APPLICATION->AddHeadScript("/calculator/script.js");
$APPLICATION->AddHeadScript("/calculator/dist/js/bundle.js");
$APPLICATION->SetAdditionalCSS("/calculator/dist/css/bundle.css");

$request = Context::getCurrent()->getRequest();
$height_wall = $request->getPost("height_wall");
$width_wall = $request->getPost("width_wall");
$area_wall = $request->getPost("area_wall");
$number_of_paint_layers = $request->getPost("number_of_paint_layers");
$type_of_painting = $request->getPost("type_of_painting");
$type_of_work = $request->getPost("type_of_work");
$kolerovka = $request->getPost("kolerovka");
$color = $request->getPost("color");
$gruntovka = $request->getPost("gruntovka");

$area_walls = 0;
foreach ($area_wall as $key => $value) {
    if (empty($value)) {
        $value = $height_wall[$key] * $width_wall[$key];
    }
    $area_walls += $value;
}

if ($area_walls > 0) {
    function doubleRashod($rashod, $area_walls, $theToleranceRange)
    {
        $needleQuamtity = 0;
        $rashodNaPloshad = ceil($area_walls / $rashod);
        $dubleRashod = $rashod * $rashodNaPloshad;
        if ($dubleRashod == $area_walls) {
            $needleQuamtity = $rashodNaPloshad;
        } else if ($dubleRashod > $area_walls && $dubleRashod <= $theToleranceRange) {
            $needleQuamtity = $rashodNaPloshad;
        }

        return $needleQuamtity;
    }

    function podborCrasci($rashod, $area_walls, $item, $theToleranceRange)
    {
        $res = false;
        if ($rashod == $area_walls) {
            $res = $item;
            $res["NOT_VISIBLE"] = false;
            $res["NEEDLE_QUANTITY"] = 1;
            $res["PLOSHAD_S_1_BANKI"] = $rashod;
        } else if ($rashod > $area_walls && $rashod <= $theToleranceRange) {
            $res = $item;
            $res["NOT_VISIBLE"] = false;
            $res["NEEDLE_QUANTITY"] = 1;
            $res["PLOSHAD_S_1_BANKI"] = $rashod;
        } else if ($rashod < $area_walls) {
            $needleQuamtity = doubleRashod($rashod, $area_walls, $theToleranceRange);
            if ($needleQuamtity > 0 && $item["QUANTITY"] >= $needleQuamtity) {
                $res = $item;
                $res["NOT_VISIBLE"] = false;
                $res["NEEDLE_QUANTITY"] = $needleQuamtity;
                $res["PLOSHAD_S_1_BANKI"] = $rashod;
            } else {
                $res = $item;
                $res["NOT_VISIBLE"] = true;
                $res["NEEDLE_QUANTITY"] = 1;
                $res["PLOSHAD_S_1_BANKI"] = $rashod;
            }
        }

        return $res;
    }

    function getListElement($arFilter, $arSelect)
    {
        $res = \CIBlockElement::GetList(array("PRICE_7" => 'ASC'), $arFilter, false, array("nPageSize" => 500), $arSelect);
        while ($ob = $res->GetNext()) {
            $items[$ob["ID"]] = [
                "ID" => $ob["ID"],
                "NAME" => $ob["NAME"],
                "DETAIL_PAGE_URL" => $ob["DETAIL_PAGE_URL"],
                "PREVIEW_PICTURE" => CFile::GetPath($ob["PREVIEW_PICTURE"]),
                "QUANTITY" => $ob["QUANTITY"],
                "PRICE" => $ob["PRICE_7"],
                "OBLAST_PRIMENENIYA" => $ob["PROPERTY_OBLAST_PRIMENENIYA_VALUE"],
                "OSNOVA_SOSTAVA" => $ob["PROPERTY_OSNOVA_SOSTAVA_VALUE"],
                "MARKA" => $ob["PROPERTY_MARKA_VALUE"],
                "TSVET" => $ob["PROPERTY_TSVET_VALUE"],
                "KOD_TSVETA" => $ob["PROPERTY_KOD_TSVETA_VALUE"],
                "VLAGOSTOYKOST" => $ob["PROPERTY_VLAGOSTOYKOST_VALUE"],
                "VES" => $ob["PROPERTY_VES_KG_VALUE"],
                "RASKHOD_V_ODIN_SLOY" => $ob["PROPERTY_RASKHOD_NA_EDINITSU_1_VALUE"],
                "RASKHOD_V_DVA_SLOYA" => $ob["PROPERTY_RASKHOD_V_DVA_SLOYA_NA_EDINITSU_1_VALUE"],
            ];

            if (in_array('PROPERTY_NABORY_TOVAROV', $arSelect)) {
                $items[$ob["ID"]]['NABORY_TOVAROV'] = $ob['PROPERTY_NABORY_TOVAROV_VALUE'];
            }
            if (in_array('PROPERTY_VID_TOVARA', $arSelect)) {
                $items[$ob["ID"]]['VID_TOVARA'] = $ob['PROPERTY_VID_TOVARA_VALUE'];
            }
        }
        return $items;
    }

    function getVisibleItems($items, $number_of_paint_layers, $area_walls, $theToleranceRange, $grunt = false)
    {
        foreach ($items as $id => $item) {
            if ($number_of_paint_layers == 2) {
                $rashod = $item['VES'] / $item['RASKHOD_V_DVA_SLOYA'];

                $res = podborCrasci($rashod, $area_walls, $item, $theToleranceRange);
                if ($res != false) {
                    if (!$res["NOT_VISIBLE"]) {
                        $arResult['ITEMS_VISIBLE'][$id] = $res;
                        unset($items[$id]);
                    } else {
                        $arResult['ITEMS_NOT_VISIBLE'][$id] = $res;
                    }
                }

            } else {
                $rashod = $item['VES'] / $item['RASKHOD_V_ODIN_SLOY'];
                $res = podborCrasci($rashod, $area_walls, $item, $theToleranceRange);
                if ($res != false) {
                    if (!$res["NOT_VISIBLE"]) {
                        $arResult['ITEMS_VISIBLE'][$id] = $res;
                        unset($items[$id]);
                    } else {
                        $arResult['ITEMS_NOT_VISIBLE'][$id] = $res;
                    }
                }
            }
        }
        sort($arResult['ITEMS_VISIBLE'], function ($a, $b) {
            return number_format(($a["NEEDLE_QUANTITY"] * $a["PRICE"]), 2) - number_format(($b["NEEDLE_QUANTITY"] * $b["PRICE"]), 2);
        });

        $sum = [];
        foreach ($arResult['ITEMS_NOT_VISIBLE'] as $key => $items) {
            foreach ($arResult['ITEMS_NOT_VISIBLE'] as $id => $tovari) {
                if ($key == $id) {
                    continue;
                }
                if ($grunt) {
                    if ($items["OBLAST_PRIMENENIYA"] != $tovari["OBLAST_PRIMENENIYA"]
                        || $items["MARKA"] != $tovari["MARKA"]
                    ) {
                        continue;
                    }
                } else {

                    if ($items["OBLAST_PRIMENENIYA"] != $tovari["OBLAST_PRIMENENIYA"]
                        || $items["OSNOVA_SOSTAVA"] != $tovari["OSNOVA_SOSTAVA"]
                        || $items["MARKA"] != $tovari["MARKA"]
                        || $items["TSVET"] != $tovari["TSVET"]
                        || $items["VLAGOSTOYKOST"] != $tovari["VLAGOSTOYKOST"]
                    ) {
                        continue;
                    }
                }

                if (($items['PLOSHAD_S_1_BANKI'] + $tovari['PLOSHAD_S_1_BANKI']) > $area_walls && ($items['PLOSHAD_S_1_BANKI'] + $tovari['PLOSHAD_S_1_BANKI']) <= $theToleranceRange) {
                    $arResult['ITEMS_VISIBLE']["COMPLECT"]["COMPLECT_" . $key][$key] = $items;
                    $arResult['ITEMS_VISIBLE']["COMPLECT"]["COMPLECT_" . $key][$id] = $tovari;
                    $arResult['ITEMS_VISIBLE']["COMPLECT"]["COMPLECT_" . $key]["SUM"] = $items["PRICE"] + $tovari["PRICE"];
                    $sum["COMPLECT_" . $key] = $items["PRICE"] + $tovari["PRICE"];
                }

            }
            unset($arResult['ITEMS_NOT_VISIBLE'][$key]);
        }

        if (empty($arResult['ITEMS_VISIBLE']["COMPLECT"])) {
            unset($arResult['ITEMS_VISIBLE']["COMPLECT"]);
        } else {
            array_multisort($sum, SORT_ASC, $arResult['ITEMS_VISIBLE']["COMPLECT"]);
        }

        return $arResult;
    }


    if ($gruntovka == "on") {
        // коффициент излишка грунтовки
        if ($area_walls <= 5) {
            $cofSurplusPrimer = 3;
        } else if ($area_walls <= 10) {
            $cofSurplusPrimer = 2;
        } else if ($area_walls <= 25) {
            $cofSurplusPrimer = 1.7;
        } else if ($area_walls <= 100) {
            $cofSurplusPrimer = 1.4;
        } else {
            $cofSurplusPrimer = 1.2;
        }

        $theToleranceRangeGrunt = $area_walls * $cofSurplusPrimer;
    }

    // коффициент излишка краски
    if ($area_walls <= 5) {
        $cofSurplusPaint = 2;
    } else if ($area_walls <= 10) {
        $cofSurplusPaint = 1.5;
    } else if ($area_walls <= 25) {
        $cofSurplusPaint = 1.2;
    } else if ($area_walls <= 100) {
        $cofSurplusPaint = 1.1;
    } else {
        $cofSurplusPaint = 1.05;
    }

    $theToleranceRangeColor = $area_walls * $cofSurplusPaint;

    $arSelect = array("ID", "NAME", "DETAIL_PAGE_URL", "DATE_ACTIVE_FROM", "PROPERTY_VES_KG", "PROPERTY_RASKHOD_NA_EDINITSU_1", "PROPERTY_RASKHOD_V_DVA_SLOYA_NA_EDINITSU_1", "QUANTITY", "PROPERTY_OBLAST_PRIMENENIYA", "PROPERTY_OSNOVA_SOSTAVA", "PROPERTY_MARKA", "PROPERTY_TSVET", "PROPERTY_VLAGOSTOYKOST", "PRICE_7", "PREVIEW_PICTURE");

    $arFilter = [];
    $items = [];
    $arFilter = array("IBLOCK_ID" => IntVal(86), "ACTIVE" => "Y", '=AVAILABLE' => 'Y', "PROPERTY_KALKULYATOR_V_E_KRASKI_VALUE" => 'Да', '!PROPERTY_VES_KG' => false);
    //если 2 слоя
    if ($number_of_paint_layers == 2) {
        $arFilter['!PROPERTY_RASKHOD_V_DVA_SLOYA_NA_EDINITSU_1'] = false;
    } else {
        $arFilter['!PROPERTY_RASKHOD_NA_EDINITSU_1'] = false;
    }

    if (!empty($type_of_painting)) {
        $arFilter['=PROPERTY_VID_POKRASKI_VALUE'] = $type_of_painting;
    }

    if (!empty($type_of_work)) {
        $arFilter['PROPERTY_VID_RABOTY_VALUE'] = $type_of_work;
    }

    $arFilter['=PROPERTY_VID_TOVARA_VALUE'] = false;

    $items = getListElement($arFilter, $arSelect);
    $arResult["COLOR"] = getVisibleItems($items, $number_of_paint_layers, $area_walls, $theToleranceRangeColor);

    //если грукнтовка
    if ($gruntovka == "on") {
        $arFilter = [];
        $gruntovkaItems = [];

        $arFilter = array("IBLOCK_ID" => IntVal(86), "ACTIVE" => "Y", '=AVAILABLE' => 'Y', "PROPERTY_KALKULYATOR_V_E_KRASKI_VALUE" => 'Да');
        $arFilter['!PROPERTY_RASKHOD_NA_EDINITSU_1'] = false;
        $arFilter['=PROPERTY_VID_TOVARA_VALUE'] = 'грунтовка';

        $gruntovkaItems = getListElement($arFilter, $arSelect);
        $arResult["GRUNTOVKA"] = getVisibleItems($gruntovkaItems, 1, $area_walls, $theToleranceRangeGrunt, true);
    }

    //колеровка для получения колеров
    if ($kolerovka == "on") {
        $arFilter = [];
        $arFilter = array("IBLOCK_ID" => IntVal(86), "ACTIVE" => "Y", '=AVAILABLE' => 'Y', "PROPERTY_KALKULYATOR_V_E_KRASKI_VALUE" => 'Да', "PROPERTY_TSVET_VALUE" => $color);
        $arFilter['=PROPERTY_VID_TOVARA_VALUE'] = 'колер';
        $arResult["COLERI"] = getListElement($arFilter, $arSelect);
    }

    //сопутствующие товары
    $soputstvuyushie = [];
    $arFilter = [];
    $arFilter = array("IBLOCK_ID" => IntVal(86), "ACTIVE" => "Y", '=AVAILABLE' => 'Y', "PROPERTY_KALKULYATOR_V_E_KRASKI_VALUE" => 'Да');
    $arFilter['!PROPERTY_VID_TOVARA_VALUE'] = array('колер', 'грунтовка', false);
    $arSelect[] = 'PROPERTY_NABORY_TOVAROV';
    $arSelect[] = 'PROPERTY_VID_TOVARA';
    $soputstvuyushie = getListElement($arFilter, $arSelect);
    $item = [];
    foreach ($soputstvuyushie as $item) {
        if (!empty($item['NABORY_TOVAROV'])) {
            $arResult['SOPUTST'][$item['NABORY_TOVAROV']][] = $item;
        } else {
            $arResult['SOPUTST'][$item['VID_TOVARA']][] = $item;
        }
    }
}

?>
<?php
\Bitrix\Main\EventManager::getInstance()->addEventHandler("main", "OnEndBufferContent", "deleteKernelCss");
function deleteKernelCss(&$content)
{
    global $USER, $APPLICATION;
    if (strpos($APPLICATION->GetCurDir(), "/bitrix/") !== false) return;
    if ($APPLICATION->GetProperty("save_kernel") == "Y") return;
    $arPatternsToRemove = array(
        '/<link.+?href=".+?bitrix\/css\/main\/bootstrap.min.css[^"]+"[^>]+>/',
        '/<link.+?href=".+?bitrix\/templates\/tdprofnastil_main\/css\/wi2-up.css[^"]+"[^>]>/',
    );
    $content = preg_replace($arPatternsToRemove, "", $content);
    $content = preg_replace("/\n{2,}/", "\n\n", $content);
}

function getJsonValue($value, $section)
{
    if (empty($value["NEEDLE_QUANTITY"])) $value["NEEDLE_QUANTITY"] = 1;

    return htmlspecialchars(
        json_encode(
            [
                'id' => $value['ID'],
                'section' => $section,
                'price' => number_format(($value["NEEDLE_QUANTITY"] * $value["PRICE"]), 2)
            ]
        ), ENT_QUOTES, 'UTF-8');
}

?>

<svg style="display: none;">
    <symbol id="icon-check" viewBox="0 0 1024 1024">
        <path d="M448 768c-0.11 0.001-0.24 0.001-0.37 0.001-17.581 0-33.507-7.089-45.074-18.565l-191.996-191.996c-11.629-11.629-18.822-27.695-18.822-45.44 0-35.491 28.771-64.262 64.262-64.262 17.745 0 33.811 7.193 45.44 18.822l142.080 142.72 275.2-330.24c11.837-14.17 29.513-23.12 49.28-23.12 35.39 0 64.080 28.69 64.080 64.080 0 15.624-5.591 29.942-14.883 41.062l-319.917 383.898c-11.822 14.122-29.457 23.040-49.176 23.040-0.037 0-0.073 0-0.11 0h0.006z"></path>
    </symbol>
</svg>

<style>

    .popup-window-overlay {
        position: absolute;
        top: 0;
        left: 0;
        background: #333;
        filter: alpha(opacity=50);
        -moz-opacity: .5;
        opacity: .5;
    }

    .popup-window {
        background-color: #fff;
        box-shadow: 0 7px 21px rgba(83, 92, 105, .12), 0 -1px 6px 0 rgba(83, 92, 105, .06);
        padding: 10px;
        font: 13px "Helvetica Neue", Helvetica, Arial, sans-serif;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: stretch;
    }

    .popup-window[style*="block"] {
        display: flex !important;
        padding: 0 10px 10px;
    }


    .popup-window-titlebar {
        height: 49px;
    }

    .popup-window-close-icon {
        cursor: pointer;
        height: 27px;
        outline: 0;
        opacity: .5;
        position: absolute;
        right: 0;
        top: 0;
        width: 27px;
        -webkit-transition: opacity .2s linear;
        transition: opacity .2s linear;
    }

    .popup-window-close-icon:after {
        display: block;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate3d(-50%, -50%, 0);
        width: 10px;
        height: 10px;
        background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHZpZXdCb3g9IjAgMCAxMCAxMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNy43ODcgMUw1IDMuNzg3IDIuMjEzIDEgMSAyLjIxMyAzLjc4NyA1IDEgNy43ODcgMi4yMTMgOSA1IDYuMjEzIDcuNzg3IDkgOSA3Ljc4NyA2LjIxMyA1IDkgMi4yMTMiIGZpbGw9IiM5OTkiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==);
        background-repeat: no-repeat;
        background-size: cover;
        content: "";
    }

    .bx_item_detail .bx_medium.bx_bt_button {
        height: 27px;
        line-height: 27px;
        padding: 0 13px;
        font-weight: bold;
    }

    .bx_item_detail.bx_yellow .bx_bt_button {
        background: rgb(249, 216, 87);
        background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgdmlld0JveD0iMCAwIDEgMSIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+CiAgPGxpbmVhckdyYWRpZW50IGlkPSJncmFkLXVjZ2ctZ2VuZXJhdGVkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIwJSIgeTI9IjEwMCUiPgogICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2Y5ZDg1NyIgc3RvcC1vcGFjaXR5PSIxIi8+CiAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNmNmMwNDIiIHN0b3Atb3BhY2l0eT0iMSIvPgogIDwvbGluZWFyR3JhZGllbnQ+CiAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0idXJsKCNncmFkLXVjZ2ctZ2VuZXJhdGVkKSIgLz4KPC9zdmc+);
        background: -moz-linear-gradient(top, rgba(249, 216, 87, 1) 0%, rgba(246, 192, 66, 1) 100%);
        background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, rgba(249, 216, 87, 1)), color-stop(100%, rgba(246, 192, 66, 1)));
        background: -webkit-linear-gradient(top, rgba(249, 216, 87, 1) 0%, rgba(246, 192, 66, 1) 100%);
        background: -o-linear-gradient(top, rgba(249, 216, 87, 1) 0%, rgba(246, 192, 66, 1) 100%);
        background: -ms-linear-gradient(top, rgba(249, 216, 87, 1) 0%, rgba(246, 192, 66, 1) 100%);
        background: linear-gradient(to bottom, rgba(249, 216, 87, 1) 0%, rgba(246, 192, 66, 1) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#f9d857', endColorstr='#f6c042', GradientType=0);
        color: #4e4e4e;
        text-shadow: none;
        display: inline-block;
        border-radius: 3px;
        text-align: center;
        text-decoration: none;
        font-size: 14px;
        cursor: pointer;
    }

    .popup-window-buttons {
        text-align: center;
        padding: 20px 0 10px;
        position: relative;
        padding: 0 13px;
        height: 25px;
        font-weight: bold;
        line-height: 25px;
    }

    .basket-item-block-amount {
        position: relative;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-pack: end;
        -ms-flex-align: start;
        padding: 0 10px;
        -ms-flex-line-pack: start;
        align-content: flex-start;
        -webkit-box-pack: end;
        justify-content: flex-end;
    }

    .basket-item-amount-btn-plus, .basket-item-amount-btn-minus {
        position: relative;
        width: 28px;
        height: 28px;
        cursor: pointer;
        transition: 300ms all ease;
        -webkit-user-select: none;
    }

    .basket-item-amount-btn-plus:before, .basket-item-amount-btn-plus:after, .basket-item-amount-btn-minus:after {
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -1px;
        margin-left: -5px;
        width: 10px;
        height: 2px;
        background-color: #979797;
        content: "";
        transition: 300ms all ease;
    }

    .basket-item-amount-btn-plus:before {
        margin-top: -5px;
        margin-left: -1px;
        width: 2px;
        height: 10px;
    }

    .basket-item-amount-filed, .basket-item-block-amount.disabled .basket-item-amount-filed:hover {
        padding: 0;
        width: 60px;
        height: 28px;
        outline: 0;
        border: 1px solid #e4e4e4;
        border-radius: 1px;
        vertical-align: middle;
        text-align: center;
        font: bold 18px/27px "Helvetica Neue", Helvetica, Arial, sans-serif;
        transition: 300ms all ease;
    }

    #submit_form,
    .back {
        background: rgb(249, 216, 87);
        color: #4e4e4e;
        text-shadow: none;
        display: inline-block;
        border-radius: 3px;
        text-align: center;
        text-decoration: none;
        font-size: 14px;
        cursor: pointer;
        height: 27px;
        line-height: 27px;
        padding: 0 13px;
        font-weight: bold;
    }

    main > aside {
        display: none;
    }

    main > article {
        width: 100%;
        margin: 0;
    }

    .calc__desc {
        text-align: left;
    }
</style>

<?php
//echo "<pre>";
//print_r($arResult)
//echo "</pre>";
?>

<section class="calc calc_result">

    <div class="calc__inner">
        <div class="calc__settings">
            <h2 class="calc__subtitle">Параметры расчета
                <a href="/calculator/">(Редактировать)</a>
            </h2>

            <table class="table table-striped table-bordered table-sm"
                   style="max-width: 600px; text-align: left;font-size: 14px;">
                <tr>
                    <th>Общая площадь покраски</th>
                    <td>
                        <?= $area_walls ?>
                    </td>
                </tr>
                <? if ($gruntovka == "on"): ?>
                    <tr>
                        <th>Покраска с грунтовкой</th>
                        <td>Да</td>
                    </tr>
                <? else: ?>
                <? endif ?>
                <? if ($kolerovka == "on"): ?>
                    <tr>
                        <th>Колеры</th>
                        <td>
                            <? foreach ($color as $value): ?>
                                <?= $value ?>,
                            <? endforeach; ?>
                        </td>
                    </tr>
                <? endif; ?>
                <tr>
                    <th>Кол-во слоев</th>
                    <td>
                        <?= $number_of_paint_layers ?>
                    </td>
                </tr>
                <? if (!empty($type_of_painting)): ?>
                    <tr>
                        <th>Вид покраски</th>
                        <td>
                            <?= $type_of_painting ?>
                        </td>
                    </tr>
                <? endif; ?>
                <? if (!empty($type_of_work)): ?>
                    <tr>
                        <th>Вид работ</th>
                        <td>
                            <?= $type_of_work ?>
                        </td>
                    </tr>
                <? endif; ?>
            </table>
        </div>
        <? if (!empty($arResult["COLOR"]['ITEMS_VISIBLE'])) { ?>
            <form id="form"
                  class="calc__form form-result"
                  name="calc-result">
                <? foreach ($arResult as $key => $items):
                    $section = $key;
                    if ($section == 'SOPUTST' || $section == 'COLERI') continue; ?>
                    <fieldset class="js-calc-section"
                              id="<?= $section ?>"
                              data-nav-id="<? if ($section == 'COLOR'): ?>color<? elseif ($section == 'GRUNTOVKA'): ?>primer<? endif; ?>">
                        <h2 class="calc__subtitle">
                            <? if ($section == 'COLOR'): ?>
                                Краска
                            <? elseif ($section == 'GRUNTOVKA'): ?>
                                Грунтовка
                            <? endif; ?>
                        </h2>

                        <p class="calc__desc">
                            <? if ($section == 'COLOR'): ?>
                                Ниже представлены варианты, позволяющие покрасить указанную вами площадь помещения. <br>
                                Вы можете выбрать любой
                            <? elseif ($section == 'GRUNTOVKA'): ?>
                                Описание грунтовки Описание грунтовки Описание грунтовки Описание грунтовки Описание грунтовки
                                <br>
                                Описание грунтовки Описание грунтовки Описание
                            <? endif; ?>
                        </p>

                        <table class="table table-striped "
                               style="display: none;">
                            <tr>
                                <th>Площадь</th>
                                <th>Коэффициент</th>
                            </tr>
                            <tr>
                                <td><?= $area_walls ?> м2</td>
                                <td><?= ($section == "GRUNTOVKA") ? $theToleranceRangeGrunt : $theToleranceRangeColor ?>
                                    м2
                                </td>
                            </tr>
                        </table>

                        <table class="table table-striped calc__table">
                            <thead>
                                <tr>
                                    <th scope="col">Выбрать</th>
                                    <th scope="col">Изображение</th>
                                    <th scope="col">Название</th>
                                    <th scope="col">Расход на 1кв</th>
                                    <th scope="col">Всего м2</th>
                                    <th scope="col">Цена за 1шт</th>
                                    <th scope="col" style="text-align: center">Кол-во</th>
                                    <th scope="col">Стоимость</th>
                                </tr>
                            </thead>
                            <tbody>
                            <?
                            foreach ($items['ITEMS_VISIBLE'] as $nameSection => $value):
                                if ($nameSection != 'COMPLECT'):?>
                                    <tr class="test">
                                        <!-- Выбрать -->
                                        <td>
                                            <input class="input_id"
                                                   type="checkbox"
                                                   name="ID"
                                                   value="<?= getJsonValue($value, $section) ?>">
                                        </td>
                                        <!-- Изображение -->
                                        <td>
                                            <? if (!empty($value["PREVIEW_PICTURE"])) : ?>
                                                <div class="preview-img">
                                                    <img width="50"
                                                         height="50"
                                                         src="<?= $value["PREVIEW_PICTURE"] ?>">
                                                    <div class="preview-img__popup">
                                                        <img src="<?= $value["PREVIEW_PICTURE"] ?>">
                                                    </div>
                                                </div>
                                            <? endif; ?>
                                        </td>
                                        <!-- Название -->
                                        <td>
                                            <a target="_blank"
                                               href="<?= $value['DETAIL_PAGE_URL'] ?>">
                                                <?= $value["NAME"] ?>
                                            </a>
                                        </td>
                                        <!-- Расход на 1кв -->
                                        <td><?= number_format($value["PLOSHAD_S_1_BANKI"], 2) ?></td>
                                        <!-- Всего м2 -->
                                        <td><?= number_format(($value["PLOSHAD_S_1_BANKI"] * $value["NEEDLE_QUANTITY"]), 2) ?></td>
                                        <!-- Цена за 1шт -->
                                        <td>
                                            <?= $value["PRICE"] ?> руб.
                                        </td>
                                        <!-- Кол-во -->
                                        <td>
                                            <?= $value["NEEDLE_QUANTITY"] ?>
                                            <input class="input_quantity"
                                                   type="hidden"
                                                   value="<?= $value["NEEDLE_QUANTITY"] ?>"
                                                   name="QUANTITY_<?= $value["ID"] ?>">
                                        </td>
                                        <!-- Стоимость -->
                                        <td><?= number_format(($value["NEEDLE_QUANTITY"] * $value["PRICE"]), 2) ?>
                                            руб.
                                        </td>
                                    </tr>
                                <? else: ?>
                                    <? foreach ($value as $complects):?>
                                        <tr>
                                            <td class="calc__table-title" colspan="8">
                                                Комбинации
                                            </td>
                                        </tr>
                                        <? foreach ($complects as $keys => $complect): ?>
                                            <? if ($keys != "SUM"): ?>
                                                <tr class="block_complect">
                                                    <td><input class="input_id complect"
                                                               type="checkbox"
                                                               name="ID"
                                                               value="<?= getJsonValue($complect, $section) ?>"></td>
                                                    <td>
                                                        <? if (!empty($complect["PREVIEW_PICTURE"])) : ?>
                                                            <div class="preview-img">
                                                                <img width="50"
                                                                     height="50"
                                                                     src="<?= $complect["PREVIEW_PICTURE"] ?>">
                                                                <div class="preview-img__popup">
                                                                    <img src="<?= $complect["PREVIEW_PICTURE"] ?>">
                                                                </div>
                                                            </div>
                                                        <? endif; ?>
                                                    </td>
                                                    <td>
                                                        <a target="_blank"
                                                           href="<?= $complect['DETAIL_PAGE_URL'] ?>"><?= $complect["NAME"] ?></a>
                                                    </td>
                                                    <td><?= number_format($complect["PLOSHAD_S_1_BANKI"], 2) ?></td>
                                                    <td><?= number_format(($complect["PLOSHAD_S_1_BANKI"] * $complect["NEEDLE_QUANTITY"]), 2) ?></td>
                                                    <td><?= $complect["PRICE"] ?> руб.</td>
                                                    <td>
                                                        <?= $complect["NEEDLE_QUANTITY"] ?>
                                                        <input class="input_quantity"
                                                               type="hidden"
                                                               value="<?= $complect["NEEDLE_QUANTITY"] ?>"
                                                               name="QUANTITY_<?= $complect["ID"] ?>">
                                                    </td>
                                                    <td><?= number_format(($complect["NEEDLE_QUANTITY"] * $complect["PRICE"]), 2) ?>
                                                        руб.
                                                    </td>
                                                </tr>
                                            <? else: ?>
                                                <tr>
                                                    <td colspan="6"></td>
                                                    <td>Сумма</td>
                                                    <td><?= $complect ?> руб.</td>
                                                </tr>
                                            <? endif ?>
                                        <? endforeach; ?>
                                        <? break;
                                    endforeach; ?>
                                <? endif; ?>
                            <? endforeach; ?>
                            </tbody>
                        </table>
                    </fieldset>
                <? endforeach; ?>
                <? if (!empty($arResult['COLERI'])): ?>
                    <fieldset class="js-calc-section"
                              id="COLER"
                              data-nav-id="coler">
                        <h2 class="calc__subtitle">Колеры</h2>

                        <p class="calc__desc">
                            Колеры Колеры Колеры Колеры Колеры Колеры Колеры <br>
                            Колеры Колеры Колеры Колеры Колеры
                        </p>

                        <table class="table table-striped calc__table">
                            <thead>
                            <tr>
                                <th scope="col">Выбрать</th>
                                <th scope="col">Картинка</th>
                                <th scope="col">Название</th>
                                <th scope="col">Цена за 1шт</th>
                                <th scope="col" style="text-align: center">Кол-во</th>
                                <th scope="col">Сумма</th>
                            </tr>
                            </thead>
                            <tbody>
                            <? foreach ($arResult['COLERI'] as $key => $items): ?>
                                <?
                                usort($items['ITEMS_VISIBLE'], function ($a, $b) {
                                    return number_format(($a["NEEDLE_QUANTITY"] * $a["PRICE"]), 2) - number_format(($b["NEEDLE_QUANTITY"] * $b["PRICE"]), 2);
                                });
                                ?>
                                <tr>
                                    <td><input class="input_id"
                                               type="checkbox"
                                               name="ID"
                                               value="<?= getJsonValue($items, 'COLER') ?>"></td>
                                    <td>
                                        <div class="preview-img">
                                            <? if (!empty($items["PREVIEW_PICTURE"])) : ?>
                                                <img width="50"
                                                     height="50"
                                                     src="<?= $items["PREVIEW_PICTURE"] ?>">
                                                <div class="preview-img__popup">
                                                    <img src="<?= $items["PREVIEW_PICTURE"] ?>">
                                                </div>
                                            <? endif; ?>
                                        </div>
                                    <td>
                                        <a target="_blank"
                                           href="<?= $items['DETAIL_PAGE_URL'] ?>"><?= $items["NAME"] ?></a>
                                    </td>
                                    <td><?= $items["PRICE"] ?> руб.</td>
                                    <td id="quantyti">
                                        <div class="basket-item-block-amount"
                                             data-entity="basket-item-quantity-block">
                                <span class="basket-item-amount-btn-minus"
                                      data-entity="basket-item-quantity-minus"></span>
                                            <div class="basket-item-amount-filed-block">
                                                <input type="text"
                                                       class="basket-item-amount-filed input_quantity"
                                                       value="1"
                                                       onfocus="this.select()"
                                                       id="COLER-quantity-<?= $items["ID"] ?>"
                                                       data-max-value="<?= $items["QUANTITY"] ?>"
                                                       data-price="<?= $items["PRICE"] ?>"
                                                       name="QUANTITY_<?= $items["ID"] ?>">
                                            </div>
                                            <span class="basket-item-amount-btn-plus"
                                                  data-entity="basket-item-quantity-plus"></span>
                                            <div class="basket-item-amount-field-description">
                                                шт
                                            </div>
                                        </div>
                                    </td>
                                    <td id="price"><?= $items["PRICE"] ?> руб.</td>
                                </tr>
                            <? endforeach; ?>
                            </tbody>
                        </table>
                    </fieldset>
                <? endif; ?>

                <fieldset>
                    <h2 class="calc__subtitle">Сопутствующие товары</h2>

                    <p class="calc__desc">
                        Сопутствующие товары Сопутствующие товары Сопутствующие товары Сопутствующие товары <br>
                        Сопутствующие товары Сопутствующие товары Сопутствующие товары
                    </p>


                    <div id="accordion">
                        <?
                        $counter = 0;
                        foreach ($arResult['SOPUTST'] as $key => $items):
                            $counter++;
                            usort($items['ITEMS_VISIBLE'], function ($a, $b) {
                                return number_format(($a["NEEDLE_QUANTITY"] * $a["PRICE"]), 2) - number_format(($b["NEEDLE_QUANTITY"] * $b["PRICE"]), 2);
                            });
                            ?>
                            <div class="card js-calc-section"
                                 id="SOPUTST-<?= $counter ?>"
                                 data-nav-id="SOPUTST-<?= $counter ?>">
                                <div class="card-header" id="heading-<?= $counter ?>">
                                    <h5 class="mb-0">
                                        <button type="button"
                                                class="btn btn-link"
                                                data-toggle="collapse"
                                                data-target="#collapse-<?= $counter ?>"
                                                aria-expanded="false"
                                                aria-controls="collapse-<?= $counter ?>">
                                            <?= $key ?>
                                        </button>
                                    </h5>
                                </div>

                                <div id="collapse-<?= $counter ?>" class="collapse"
                                     aria-labelledby="heading-<?= $counter ?>"
                                     data-parent="#accordion">
                                    <div class="card-body">
                                        <table class="table table-striped calc__table">
                                            <thead>
                                            <tr>
                                                <th>Выбрать</th>
                                                <th>Картинка</th>
                                                <th>Название</th>
                                                <th>Цена за 1шт</th>
                                                <th style="text-align: center">Кол-во</th>
                                                <th>Сумма</th>
                                            </tr>

                                            </thead>

                                            <tbody>
                                            <? foreach ($items as $value):
                                                if (empty($value)) continue;
                                                ?>
                                                <tr>
                                                    <td><input class="input_id"
                                                               type="checkbox"
                                                               onfocus="this.select()"
                                                               name="ID"
                                                               value="<?= getJsonValue($value, 'SOPUTST-'.$counter) ?>"></td>
                                                    <td>
                                                        <? if (!empty($value["PREVIEW_PICTURE"])) : ?>
                                                            <div class="preview-img">
                                                                <img width="50"
                                                                     height="50"
                                                                     src="<?= $value["PREVIEW_PICTURE"] ?>">
                                                                <div class="preview-img__popup">
                                                                    <img src="<?= $value["PREVIEW_PICTURE"] ?>">
                                                                </div>
                                                            </div>
                                                        <? endif; ?>
                                                    <td>
                                                        <a target="_blank"
                                                           href="<?= $value['DETAIL_PAGE_URL'] ?>"><?= $value["NAME"] ?></a>
                                                    </td>
                                                    <td><?= $value["PRICE"] ?> руб.</td>
                                                    <td id="quantyti">
                                                        <div class="basket-item-block-amount"
                                                             data-entity="basket-item-quantity-block">
                                                            <span class="basket-item-amount-btn-minus"
                                                                  data-entity="basket-item-quantity-minus"></span>
                                                            <div class="basket-item-amount-filed-block">
                                                                <input type="text"
                                                                       onfocus="this.select()"
                                                                       class="basket-item-amount-filed input_quantity"
                                                                       id="SOPUTST-<?= $counter ?>-quantity-<?= $value["ID"] ?>"
                                                                       value="1"
                                                                       data-max-value="<?= $value["QUANTITY"] ?>"
                                                                       data-price="<?= $value["PRICE"] ?>"
                                                                       name="QUANTITY_<?= $value["ID"] ?>">
                                                            </div>
                                                            <span class="basket-item-amount-btn-plus"
                                                                  data-entity="basket-item-quantity-plus"></span>
                                                            <div class="basket-item-amount-field-description">
                                                                шт
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td id="price"><?= $value["PRICE"] ?> руб.</td>
                                                </tr>
                                            <? endforeach; ?>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        <? endforeach; ?>
                    </div>
                </fieldset>

                <!--                <div style="text-align: center">-->
                <!--                    <a href="javascript:void(0)"-->
                <!--                       id="submit_form">Добавить в корзину-->
                <!--                    </a>-->
                <!--                </div>-->

            </form>
        <? } else { ?>
            <h1>Нет товаров по данным условиям</h1>
        <? } ?>
    </div>

    <aside class="left-side-wrapper calc__side js-calc-sidebar">
        <div class="left-side-wrapper-left">
            <div class="calc-nav-list">
                <div class="calc-nav-list__item calc-nav-list__item_ended calc-nav-list__item_forthcoming">
                    <a class="lesson-header js-nav-link"
                       id="COLOR-nav-item"
                       href="#COLOR">
                        <span class="lesson-header__helper">
                            <span>
                                <span class="lesson-header__status-icon">
                                    <svg class="svg-icon icon-check" width="32" height="32"><use
                                                xlink:href="#icon-check"></use></svg>
                                </span>
                                <span class="lesson-header__number">Краска</span>
                            </span>
                        </span>
                    </a>
                </div>

                <?php if ($gruntovka === "on") : ?>
                    <div class="calc-nav-list__item calc-nav-list__item_forthcoming">
                        <a class="lesson-header js-nav-link"
                           id="GRUNTOVKA-nav-item"
                           href="#GRUNTOVKA">
                        <span class="lesson-header__helper">
                            <span>
                                <span class="lesson-header__status-icon">
                                    <svg class="svg-icon icon-check" width="32" height="32"><use
                                                xlink:href="#icon-check"></use></svg>
                                </span>
                                <span class="lesson-header__number">Грунтовка</span>
                            </span>
                        </span>
                        </a>
                    </div>
                <?php endif; ?>

                <?php if ($kolerovka === "on") : ?>
                    <div class="calc-nav-list__item calc-nav-list__item_forthcoming">
                        <a class="lesson-header js-nav-link"
                           id="COLER-nav-item"
                           href="#COLER">
                        <span class="lesson-header__helper">
                            <span>
                                <span class="lesson-header__status-icon">
                                    <svg class="svg-icon icon-check" width="32" height="32"><use
                                                xlink:href="#icon-check"></use></svg>
                                </span>
                                <span class="lesson-header__number">Колеры</span>
                            </span>
                        </span>
                        </a>
                    </div>
                <?php endif; ?>

                <?php
                $counter = 0;
                foreach ($arResult['SOPUTST'] as $key => $items):
                    $counter++;
                    ?>
                    <div class="calc-nav-list__item calc-nav-list__item_forthcoming">
                        <a class="lesson-header js-nav-link"
                           id="SOPUTST-<?= $counter ?>-nav-item"
                           href="#SOPUTST-<?= $counter ?>">
                        <span class="lesson-header__helper">
                            <span>
                                <span class="lesson-header__status-icon">
                                    <svg class="svg-icon icon-check" width="32" height="32"><use
                                                xlink:href="#icon-check"></use></svg>
                                </span>
                                <span class="lesson-header__number"><?= $key ?></span>
                            </span>
                        </span>
                        </a>
                    </div>
                <?php endforeach; ?>
            </div>
            <div class="calc-nav-bottom">
                <h4 class="calc-price">
                    <span class="calc-price__title">Товаров на сумму:</span>
                    <span class="calc-price__inner">
                        <span class="calc-price__value js-price">0.00</span>
                        <span class="calc-price__curr">руб.</span>
                    </span>
                </h4>
                <a href="javascript:void(0)"
                   id="submit_form">Добавить в корзину
                </a>

            </div>
        </div>
        <div class="left-side-wrapper-right"></div>
    </aside>
</section>
<? require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/footer.php"); ?>
