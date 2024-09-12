<?php

use \Bitrix\Main\EventManager;
use Bitrix\Main\Mail\Event;

$EVENT_MANAGER = \Bitrix\Main\EventManager::getInstance();

CModule::AddAutoloadClasses(
    '',
    [
        "Redirects" => "/local/php_interface/classes/Redirects.php",
        "Site" => "/local/php_interface/classes/Site.php",
        "CatalogClass" => "/local/php_interface/classes/CatalogClass.php",
        "GeoIp" => "/local/php_interface/classes/GeoIp.php",
        "User" => "/local/php_interface/classes/User.php",
        'CUtilCustom' => "/local/php_interface/classes/CUtilCustom.php",
        "OrderClass" => "/local/php_interface/classes/OrderClass.php",
        "ElementStringDescription" => "/local/php_interface/classes/ElementStringDescription.php",
        "Agents" => "/local/php_interface/classes/agents.php",
        "CHelper" => "/local/php_interface/classes/CHelper.php",
        "CReserve" => "/local/php_interface/soap/CReserve.php",
        "CSoapClient" => "/local/php_interface/soap/CSoapClient.php",
    ]
);
//define("BX_CATALOG_IMPORT_1C_PRESERVE", true);

// Jquery
CJSCore::Init(['jquery3']);


AddEventHandler('main', 'OnEpilog', 'Check404ErrorPage', 1);
function Check404ErrorPage()
{

    if (defined('ERROR_404') && ERROR_404 == 'Y') {
        global $APPLICATION;
        $APPLICATION->RestartBuffer();
        include $_SERVER['DOCUMENT_ROOT'] . SITE_TEMPLATE_PATH . '/header.php';
        include $_SERVER['DOCUMENT_ROOT'] . '/404.php';
        include $_SERVER['DOCUMENT_ROOT'] . SITE_TEMPLATE_PATH . '/footer.php';
    }
}

$EVENT_MANAGER->addEventHandler("iblock", "OnAfterIBlockElementUpdate", ['ForActioIblockUpdate', 'OnAfterIBlockElementUpdateHandler']);

class ForActioIblockUpdate
{

    function OnAfterIBlockElementUpdateHandler(&$arFields)
    {

        if (isset ($arFields['IBLOCK_ID']) && ((int)$arFields['IBLOCK_ID'] === Site::IBLOCK_ACTION_ID)) {

            $IBLOCK_ID = (int)$arFields['IBLOCK_ID'];
            $ID = (int)$arFields['ID'];

            $PROP_CHECKED = 'CHECKED_INFO';
            $PROP_FLAG_EMAIL = 'EMAIL_SEND';
            $RAND_NUMBER = 'PERSONAL_CODE';
            $USER_EMAIL = 'EMAIL';


            $PROP_LIST = CIBlockElement::GetProperty($IBLOCK_ID, $ID, [], []);

            $EMAIL_SEND = $PROP_CHECKED_VALUE = $RAND_NUMBER_VALUE = $USER_EMAIL_VALUE = false;

            while ($RES = $PROP_LIST->Fetch()) {

                if ($RES['CODE'] == $PROP_FLAG_EMAIL) {

                    $EMAIL_SEND = ($RES['VALUE'] == 1);

                } else if ($RES['CODE'] == $PROP_CHECKED) $PROP_CHECKED_VALUE = ($RES['VALUE'] == 1);
                    else if ($RES['CODE'] == $RAND_NUMBER) $RAND_NUMBER_VALUE = $RES['VALUE'];
                        else if ($RES['CODE'] == $USER_EMAIL) $USER_EMAIL_VALUE = $RES['VALUE'];

            }


            if ($PROP_CHECKED_VALUE === true && $EMAIL_SEND === false
            && $USER_EMAIL_VALUE !== false) {

                if (!((int)$RAND_NUMBER_VALUE > 0)) {

                    $RAND_NUMBER_VALUE = rand(1000, 9999);

                    $FILTER = ['IBLOCK_ID' => $IBLOCK_ID, 'IBLOCK_SECTION_ID' => $arFields['IBLOCK_SECTION']];

                    $SELECT = ['PROPERTY_' . $RAND_NUMBER];

                    $RES_DB = CIBlockElement::GetList([], $FILTER, false, false, $SELECT);

                    $ARR_CHECK_RAND = [];

                    while ($RES = $RES_DB->Fetch()) {

                        $ARR_CHECK_RAND[] = $RES['PROPERTY_' . $RAND_NUMBER . '_VALUE'];

                    }

                    while (in_array($RAND_NUMBER_VALUE, $ARR_CHECK_RAND)) {

                        $RAND_NUMBER_VALUE = rand(1000, 9999);

                    }

                    CIBlockElement::SetPropertyValuesEx($ID, $IBLOCK_ID, [$RAND_NUMBER => $RAND_NUMBER_VALUE]);


                }

                $EVENT_NAME = 'USER_PROMOTION_CHECKED';

                $FIELDS_SEND = ['EMAIL' => $USER_EMAIL_VALUE, 'CODE_VALUE' => $RAND_NUMBER_VALUE];

                Event::send(array(
                    'EVENT_NAME' => $EVENT_NAME,
                    'LID' => 's1',
                    'C_FIELDS' => $FIELDS_SEND
                ));

                CIBlockElement::SetPropertyValuesEx($ID, $IBLOCK_ID, [$PROP_FLAG_EMAIL => true]);


            }


        }


    }
}


//AddEventHandler("currency", "CurrencyFormat", "customFormat");
//
//function customFormat($fSum, $strCurrency)
//{
//    return number_format($fSum, 0, '', ' ') . ' ₽';
//}
//
//\Bitrix\Main\EventManager::getInstance()->addEventHandler(
//    "iblock",
//    "OnIBlockPropertyBuildList",
//    [
//        'ElementStringDescription',
//        'GetUserTypeDescription',
//    ]
//);
//
//\Bitrix\Main\EventManager::getInstance()->addEventHandler(
//    "iblock",
//    "OnAfterIBlockElementUpdate",
//    [
//        'Site',
//        'getJsonDates',
//    ]
//);
//
//\Bitrix\Main\EventManager::getInstance()->addEventHandler(
//    "iblock",
//    "OnAfterIBlockElementAdd",
//    [
//        'Site',
//        'getJsonDates',
//    ]
//);
//
//\Bitrix\Main\EventManager::getInstance()->addEventHandler(
//    "iblock",
//    "OnAfterIBlockElementDelete",
//    [
//        'Site',
//        'getJsonDates',
//    ]
//);
//
AddEventHandler("sale", "OnSalePayOrder", "UpdateDiscountGroup");

function GetGroupByCode($code)
{
    $rsGroups = CGroup::GetList($by = "c_sort", $order = "asc", array("STRING_ID" => $code));
    while ($tmp = $rsGroups->Fetch()) {
        $return_ar[] = $tmp["ID"];
    }

    return $return_ar;
}

function UpdateDiscountGroup($ID, $val)
{

    CModule::IncludeModule("catalog");

    // Ïîëó÷àåì èíôîðìàöè ïî çàêàçó
    $arOrder = CSaleOrder::GetByID($ID);

    // Ïîëó÷àåì íîìåð ãðóïïû áîíóñîâ
    $bonusSystemGroup = GetGroupByCode("BONUS_SYSTEM");

    // Ïîëó÷àåì âñå áîíóñíûå ãðóïïû
    $allBonusGroups = GetGroupByCode("BONUS_SYSTEM|BONUS_SYSTEM_1|BONUS_SYSTEM_2|BONUS_SYSTEM_3|BONUS_SYSTEM_4|BONUS_SYSTEM_5|BONUS_SYSTEM_6|BONUS_SYSTEM_7");

    // Ïîëó÷àåì ãðóïïû â êîòîðûõ ñîñòîèò ïîëüçîâàòåëü
    $userGroups = CUser::GetUserGroup($arOrder["USER_ID"]);


    //Î÷èùàåì îò óæå óñòàíîâëåííûõ áîíóñíûõ ãðóïï
    foreach ($allBonusGroups as $bonusGroup) {
        foreach ($userGroups as $key => $userGroup) {
            if ($bonusGroup == $userGroup) {
                unset($userGroups[$key]);
            }
        }
    }

    // Îïðåäåëÿåì íàëè÷èå íàêîïèòåëüíîé ñêèäêè

    $accumulativeDiscAr = CCatalogDiscountSave::GetDiscount(array("USER_ID" => $arOrder["USER_ID"], "SITE_ID" => "s1"));

    if ((int)$accumulativeDiscAr[0]["VALUE"] > 0) {
        // Ïîëó÷àåì íîìåð ãðóïïû áîíóñîâ c %
        $bonusSystemGroupPerc = GetGroupByCode("BONUS_SYSTEM_" . (int)$accumulativeDiscAr[0]["VALUE"]);

        // Åñòü íàêîïèòåëüíàÿ ñêèäêà
        CUser::SetUserGroup($arOrder["USER_ID"], array_merge($userGroups, $bonusSystemGroup, $bonusSystemGroupPerc));
    } else {

        CUser::SetUserGroup($arOrder["USER_ID"], $userGroups);
    }

}

//
////define("LOG_FILENAME", $_SERVER["DOCUMENT_ROOT"]."/smtp-log.txt");
///*Version 0.3 2011-04-25*/
//AddEventHandler("iblock", "OnAfterIBlockElementUpdate", "DoIBlockAfterSave");
//AddEventHandler("iblock", "OnAfterIBlockElementAdd", "DoIBlockAfterSave");
//AddEventHandler("catalog", "OnPriceAdd", "DoIBlockAfterSave");
//AddEventHandler("catalog", "OnPriceUpdate", "DoIBlockAfterSave");
//function DoIBlockAfterSave($arg1, $arg2 = false)
//{
//    $ELEMENT_ID = false;
//    $IBLOCK_ID = false;
//    $OFFERS_IBLOCK_ID = false;
//    $OFFERS_PROPERTY_ID = false;
//    if (CModule::IncludeModule('currency'))
//        $strDefaultCurrency = CCurrency::GetBaseCurrency();
//
//    //Check for catalog event
//    if(is_array($arg2) && $arg2["PRODUCT_ID"] > 0)
//    {
//        //Get iblock element
//        $rsPriceElement = CIBlockElement::GetList(
//            array(),
//            array(
//                "ID" => $arg2["PRODUCT_ID"],
//            ),
//            false,
//            false,
//            array("ID", "IBLOCK_ID")
//        );
//        if($arPriceElement = $rsPriceElement->Fetch())
//        {
//            $arCatalog = CCatalog::GetByID($arPriceElement["IBLOCK_ID"]);
//            if(is_array($arCatalog))
//            {
//                //Check if it is offers iblock
//                if($arCatalog["OFFERS"] == "Y")
//                {
//                    //Find product element
//                    $rsElement = CIBlockElement::GetProperty(
//                        $arPriceElement["IBLOCK_ID"],
//                        $arPriceElement["ID"],
//                        "sort",
//                        "asc",
//                        array("ID" => $arCatalog["SKU_PROPERTY_ID"])
//                    );
//                    $arElement = $rsElement->Fetch();
//                    if($arElement && $arElement["VALUE"] > 0)
//                    {
//                        $ELEMENT_ID = $arElement["VALUE"];
//                        $IBLOCK_ID = $arCatalog["PRODUCT_IBLOCK_ID"];
//                        $OFFERS_IBLOCK_ID = $arCatalog["IBLOCK_ID"];
//                        $OFFERS_PROPERTY_ID = $arCatalog["SKU_PROPERTY_ID"];
//                    }
//                }
//                //or iblock which has offers
//                elseif($arCatalog["OFFERS_IBLOCK_ID"] > 0)
//                {
//                    $ELEMENT_ID = $arPriceElement["ID"];
//                    $IBLOCK_ID = $arPriceElement["IBLOCK_ID"];
//                    $OFFERS_IBLOCK_ID = $arCatalog["OFFERS_IBLOCK_ID"];
//                    $OFFERS_PROPERTY_ID = $arCatalog["OFFERS_PROPERTY_ID"];
//                }
//                //or it's regular catalog
//                else
//                {
//                    $ELEMENT_ID = $arPriceElement["ID"];
//                    $IBLOCK_ID = $arPriceElement["IBLOCK_ID"];
//                    $OFFERS_IBLOCK_ID = false;
//                    $OFFERS_PROPERTY_ID = false;
//                }
//            }
//        }
//    }
//    //Check for iblock event
//    elseif(is_array($arg1) && $arg1["ID"] > 0 && $arg1["IBLOCK_ID"] > 0)
//    {
//        //Check if iblock has offers
//        $arOffers = CIBlockPriceTools::GetOffersIBlock($arg1["IBLOCK_ID"]);
//        if(is_array($arOffers))
//        {
//            $ELEMENT_ID = $arg1["ID"];
//            $IBLOCK_ID = $arg1["IBLOCK_ID"];
//            $OFFERS_IBLOCK_ID = $arOffers["OFFERS_IBLOCK_ID"];
//            $OFFERS_PROPERTY_ID = $arOffers["OFFERS_PROPERTY_ID"];
//        }
//    }
//
//    if($ELEMENT_ID)
//    {
//        static $arPropCache = array();
//        if(!array_key_exists($IBLOCK_ID, $arPropCache))
//        {
//            //Check for MINIMAL_PRICE property
//            $rsProperty = CIBlockProperty::GetByID("MINIMUM_PRICE", $IBLOCK_ID);
//            $arProperty = $rsProperty->Fetch();
//            if($arProperty)
//                $arPropCache[$IBLOCK_ID] = $arProperty["ID"];
//            else
//                $arPropCache[$IBLOCK_ID] = false;
//        }
//
//        if($arPropCache[$IBLOCK_ID])
//        {
//            //Compose elements filter
//            if($OFFERS_IBLOCK_ID)
//            {
//                $rsOffers = CIBlockElement::GetList(
//                    array(),
//                    array(
//                        "IBLOCK_ID" => $OFFERS_IBLOCK_ID,
//                        "PROPERTY_".$OFFERS_PROPERTY_ID => $ELEMENT_ID,
//                    ),
//                    false,
//                    false,
//                    array("ID")
//                );
//                while($arOffer = $rsOffers->Fetch())
//                    $arProductID[] = $arOffer["ID"];
//
//                if (!is_array($arProductID))
//                    $arProductID = array($ELEMENT_ID);
//            }
//            else
//                $arProductID = array($ELEMENT_ID);
//
//            $minPrice = false;
//            $maxPrice = false;
//            //Get prices
//            $rsPrices = CPrice::GetList(
//                array(),
//                array(
//                    "PRODUCT_ID" => $arProductID,
//                )
//            );
//            while($arPrice = $rsPrices->Fetch())
//            {
//                if (CModule::IncludeModule('currency') && $strDefaultCurrency != $arPrice['CURRENCY'])
//                    $arPrice["PRICE"] = CCurrencyRates::ConvertCurrency($arPrice["PRICE"], $arPrice["CURRENCY"], $strDefaultCurrency);
//
//                $PRICE = $arPrice["PRICE"];
//
//                if($minPrice === false || $minPrice > $PRICE)
//                    $minPrice = $PRICE;
//
//                if($maxPrice === false || $maxPrice < $PRICE)
//                    $maxPrice = $PRICE;
//            }
//
//            //Save found minimal price into property
//            if($minPrice !== false)
//            {
//                CIBlockElement::SetPropertyValuesEx(
//                    $ELEMENT_ID,
//                    $IBLOCK_ID,
//                    array(
//                        "MINIMUM_PRICE" => $minPrice,
//                        "MAXIMUM_PRICE" => $maxPrice,
//                    )
//                );
//            }
//        }
//    }
//}
////отправка письма
//
//AddEventHandler('sale', 'OnOrderNewSendEmail', array('CSendOrderTable', 'OnOrderNewSendEmailHandler'));
//class CSendOrderTable {
//    public static function OnOrderNewSendEmailHandler($ID, &$eventName, &$arFields) {
//        if ($ID>0 && CModule::IncludeModule('iblock')) {
//            $arFields['ORDER_LIST'] = '<table cellpadding="5" cellspacing="5">';
//            $rsBasket = CSaleBasket::GetList(array(), array('ORDER_ID' => $ID));
//            while ($arBasket = $rsBasket->GetNext()) {
//                $arPicture = false;
//                //мы берем картинку только если это товар из инфоблока
//                if ($arBasket['MODULE'] == 'catalog') {
//                    if ($arProduct = CIBlockElement::GetByID($arBasket['PRODUCT_ID'])->Fetch()) {
//                        if ($arProduct['PREVIEW_PICTURE'] > 0) {
//                            $fileID = $arProduct['PREVIEW_PICTURE'];
//                        } elseif ($arProduct['DETAIL_PICTURE'] > 0) {
//                            $fileID = $arProduct['DETAIL_PICTURE'];
//                        } else {
//                            $fileID = 0;
//                        }
//                        $arPicture = CFile::ResizeImageGet($fileID, array('width' => 130, 'height' => 130));
//                        $arPicture['SIZE'] = getimagesize($_SERVER['DOCUMENT_ROOT'].$arPicture['src']);
//                    }
//                }
//                $arFields['ORDER_LIST'] .= '<tr valign="center">'
//                    . '<td>'.($arPicture ? '<img src="http://'.$GLOBALS['SERVER_NAME'].(str_replace(array('+', ' '), '%20', $arPicture['src'])).'" width="'.$arPicture['SIZE'][0].'" height="'.$arPicture['SIZE'][1].'" alt="">' : '').'</td>'
//                    . '<td>'.$arBasket['NAME'].'</td>'
//                    . '<td style="white-space: nowrap">'.(int)$arBasket['QUANTITY'].' шт.</td>'
//                    . '<td style="white-space: nowrap">'.SaleFormatCurrency($arBasket['PRICE'], $arBasket['CURRENCY']).'</td>'
//                    . '</tr>';
//            }
//            $arFields['ORDER_LIST'] .= '</table>';
//        }
//    }
//}
//
//AddEventHandler("sale", "OnOrderNewSendEmail", "modifySendingSaleData");
//function modifySendingSaleData($orderID, &$eventName, &$arFields) {
//    // инициализируем переменные
//    $name = '';
//    $lastName = '';
//    $fullName = '';
//    $phone = '';
//    $phone2 = '';
//    $zip = '';
//    $countryName = '';
//    $obl = '';
//    $cityName = '';
//    $address = '';
//    $deliveryName = '';
//    $paySystemName = '';
//    $price = '';
//    $personTypeName = '';
//
//    // получаем параметры заказа по ID
//    $arOrder = CSaleOrder::GetByID($orderID);
//
//    // получаем свойства заказа
//    $orderProps = CSaleOrderPropsValue::GetOrderProps($orderID);
//
//    // проходим циклом по всем свойствам и вытаскиваем нужные нам
//    while ($arProps = $orderProps->Fetch()) {
//        // телефон
//        if ($arProps['CODE'] == 'PHONE') {
//            $phone = htmlspecialchars($arProps['VALUE']);
//        }
//        // телефон_2
//        if ($arProps['CODE'] == 'PHONE2') {
//            $phone2 = htmlspecialchars($arProps['VALUE']);
//        }
//        // страну, область, город,
//        // if ($arProps['CODE'] == 'LOCATION') {
//        //     // если не перешли на местоположения 2.0
//        //     $arLocs = CSaleLocation::GetByID($arProps['VALUE']);
//        //     // если перешли на местоположения 2.0 раскомментируйте следующую строку
//        //     //  и закомментируйте строчку выше
//        //     //$arLocs = CSaleLocation::GetByID(CSaleLocation::getLocationIDbyCODE($arProps['VALUE']));
//        //     $countryName = $arLocs['COUNTRY_NAME_LANG'];
//        //     $obl = $arLocs['REGION_NAME_LANG'];
//        //     $cityName = $arLocs['CITY_NAME_LANG'];
//        // }
//        // индекс
//        // if ($arProps['CODE'] == 'ZIP'){
//        //     $zip = $arProps['VALUE'];
//        // }
//        // адрес
//        if ($arProps['CODE'] == 'CITY') {
//            $address = $arProps['VALUE'];
//        }
//        // имя
//        if ($arProps['CODE'] == 'FIRSTNAME') {
//            $name = $arProps['VALUE'];
//        }
//        // фамилия
//        if ($arProps['CODE'] == 'LASTNAME') {
//            $lastName = $arProps['VALUE'];
//        }
//    }
//
//    $fullName = $lastName .' ' . $name;
//    $fullAddress = $address;
//    // получаем название службы доставки
//    $arDeliv = CSaleDelivery::GetByID($arOrder['DELIVERY_ID']);
//    if ($arDeliv['NAME'] == "Доставка фургоном") {
//        $deliveryName = "Фургон";
//    }
//    if ($arDeliv['NAME'] == "Кран-Балка"){
//        $deliveryName = "Кран-балка";
//    }
//    // $arPersonType =  CSalePersonType::GetByID($arOrder['PERSON_TYPE_ID']);
//    // if ($arPersonType['NAME']=="Доставка фургоном"){
//    //          $personTypeName = "Фургон";
//    //     }
//    //       if ($arPersonType['NAME']=="Кран-Балка"){
//    //          $personTypeName = "Кран-балкой";
//    //     }
//
//    // получаем название платежной системы
//    $arPaySystem = CSalePaySystem::GetByID($arOrder['PAY_SYSTEM_ID']);
//    if ($arPaySystem['NAME']=="Оплата наличными") {
//        $paySystemName = "Наличный расчет";
//    }
//    if ($arPaySystem['NAME']=="Оплата по терминалу"){
//        $paySystemName = "По терминалу";
//    }
//    if ($arPaySystem['NAME']=="Онлайн оплата"){
//        $paySystemName = "Онлайн";
//    }
//    // добавляем полученные значения в результирующий массив
//    $arFields['ORDER_DESCRIPTION'] = $arOrder['USER_DESCRIPTION'];
//    $arFields['USER_FULL_NAME'] = $fullName;
//    $arFields['PHONE'] = $phone;
//    $arFields['PHONE2'] = $phone2;
//    $arFields['DELIVERY_NAME'] = $deliveryName;
//    $arFields["DELIVERY_PRICE"] =  $arOrder["PRICE_DELIVERY"];
//    $arFields['PAY_SYSTEM_NAME'] = $paySystemName;
//    $arFields['FULL_ADDRESS'] = $fullAddress;
//    $arFields['PERSON_TYPE'] = $personTypeName;
//}
////Удаление брошенных корзин пользователей
//function deleteOldBaskets($nDays)
//{
//    global $DB;
//
//    $nDays = IntVal($nDays);
//    $strSql =
//        "SELECT ID ".
//        "FROM b_sale_fuser ".
//        //от даты обновления корзины
//        //"WHERE TO_DAYS(DATE_UPDATE)<(TO_DAYS(NOW())-".$nDays.") LIMIT 300";
//        //от даты создания корзины
//        "WHERE TO_DAYS(DATE_INSERT)<(TO_DAYS(NOW())-".$nDays.") LIMIT 300";
//    $db_res = $DB->Query($strSql, false, "File: ".__FILE__."<br>Line: ".__LINE__);
//    if (!CModule::IncludeModule("sale")) return;
//    while ($ar_res = $db_res->Fetch())
//    {
//
//        CSaleBasket::DeleteAll($ar_res["ID"], false);
//        CSaleUser::Delete($ar_res["ID"]);
//    }
//    return true;
//}
//
////deleteOldBaskets(60);
////удаление мусора в товарах
//function deleteProductSt(){
//    if(CModule::IncludeModule('iblock')) {
//        $arSort= Array("TIMESTAMP_X"=>"ASC");
//        $arSelect = Array("ID","NAME", "PROPERTY_CML2_TRAITS", "TIMESTAMP_X","DETAIL_PAGE_URL","CATALOG_QUANTITY");
//        $arFilter = Array("IBLOCK_ID" =>86, "ACTIVE"=>"Y");
//        $objDateTime = new DateTime();
//        $arFilter['>=TIMESTAMP_X'] = '01.01.2020 00:00:00';
//        $arFilter['<TIMESTAMP_X'] = $objDateTime->format("d.m.Y");
//        $res =  CIBlockElement::GetList($arSort, $arFilter, false, false, $arSelect);
//        while($ob = $res->GetNextElement()){
//            $arFields = $ob->GetFields();
//            if ($arFields['CATALOG_QUANTITY']<=250) {
//                $el = new CIBlockElement;
//                $ElementArray = Array("ACTIVE" => "N",);
//                $el->Update($arFields['ID'], $ElementArray);
//            }
//        }
//    }
//    return "deleteProductSt();";
//}
//function deleteProductEl(){
//    if(CModule::IncludeModule('iblock')) {
//        $arSort= Array("TIMESTAMP_X"=>"ASC");
//        $arSelect = Array("ID","NAME", "PROPERTY_CML2_TRAITS", "TIMESTAMP_X","DETAIL_PAGE_URL","CATALOG_QUANTITY");
//        $arFilter = Array("IBLOCK_ID" =>87, "ACTIVE"=>"Y");
//        $objDateTime = new DateTime();
//        $arFilter['>=TIMESTAMP_X'] = '01.01.2020 00:00:00';
//        $arFilter['<TIMESTAMP_X'] = $objDateTime->format("d.m.Y");
//        $res =  CIBlockElement::GetList($arSort, $arFilter, false, false, $arSelect);
//        while($ob = $res->GetNextElement()){
//            $arFields = $ob->GetFields();
//            if ($arFields['CATALOG_QUANTITY']<=250) {
//                $el = new CIBlockElement;
//                $ElementArray = Array("ACTIVE" => "N",);
//                $el->Update($arFields['ID'], $ElementArray);
//            }
//        }
//    }
//    return "deleteProductEl();";
//}
//function deleteProductDc(){
//    if(CModule::IncludeModule('iblock')) {
//        $arSort= Array("TIMESTAMP_X"=>"ASC");
//        $arSelect = Array("ID","NAME", "PROPERTY_CML2_TRAITS", "TIMESTAMP_X","DETAIL_PAGE_URL","CATALOG_QUANTITY");
//        $arFilter = Array("IBLOCK_ID" =>88, "ACTIVE"=>"Y");
//        $objDateTime = new DateTime();
//        $arFilter['>=TIMESTAMP_X'] = '01.01.2020 00:00:00';
//        $arFilter['<TIMESTAMP_X'] = $objDateTime->format("d.m.Y");
//        $res =  CIBlockElement::GetList($arSort, $arFilter, false, false, $arSelect);
//        while($ob = $res->GetNextElement()){
//            $arFields = $ob->GetFields();
//            if ($arFields['CATALOG_QUANTITY']<=250) {
//                $el = new CIBlockElement;
//                $ElementArray = Array("ACTIVE" => "N",);
//                $el->Update($arFields['ID'], $ElementArray);
//            }
//        }
//    }
//    return "deleteProductDc();";
//}
//function deleteProductSeas(){
//    if(CModule::IncludeModule('iblock')) {
//        $arSort= Array("TIMESTAMP_X"=>"ASC");
//        $arSelect = Array("ID","NAME", "PROPERTY_CML2_TRAITS", "TIMESTAMP_X","DETAIL_PAGE_URL","CATALOG_QUANTITY");
//        $arFilter = Array("IBLOCK_ID" =>111, "ACTIVE"=>"Y");
//        $objDateTime = new DateTime();
//        $arFilter['>=TIMESTAMP_X'] = '01.01.2020 00:00:00';
//        $arFilter['<TIMESTAMP_X'] = $objDateTime->format("d.m.Y");
//        $res =  CIBlockElement::GetList($arSort, $arFilter, false, false, $arSelect);
//        while($ob = $res->GetNextElement()){
//            $arFields = $ob->GetFields();
//            if ($arFields['CATALOG_QUANTITY']<=250) {
//                $el = new CIBlockElement;
//                $ElementArray = Array("ACTIVE" => "N",);
//                $el->Update($arFields['ID'], $ElementArray);
//            }
//        }
//    }
//    return "deleteProductSeas();";
//}
//
//AddEventHandler('catalog', 'OnCompleteCatalogImport1C', "setPropertyColor");
//function setPropertyColor(){
//    if (\Bitrix\Main\Loader::includeModule('iblock')) {
//        $PROPERTY_CODE = "COLOR";
//        $IBLOCK_ID = IntVal(86);
//        $ibpenum = new \CIBlockPropertyEnum();
//        $arSelect = array("ID", "NAME", "DETAIL_PAGE_URL", "PROPERTY_COLOR", "PROPERTY_CML2_TRAITS");
//        $arFilter = array("IBLOCK_ID" => $IBLOCK_ID, "ACTIVE" => "Y", '=AVAILABLE' => 'Y', "PROPERTY_COLOR_VALUE" => false,);
//        $res = \CIBlockElement::GetList(array(), $arFilter, false, false, $arSelect);
//        while ($ob = $res->GetNext()) {
//            $colorCode = '';
//            $colorName = '';
//            foreach ($ob["PROPERTY_CML2_TRAITS_DESCRIPTION"] as $key => $val) {
//                if ($val == "ЦветКод") {
//                    $colorCode = str_replace("#", "", $ob["PROPERTY_CML2_TRAITS_VALUE"][$key]);
//                }
//
//                if ($val == "ЦветНаименование") {
//                    $colorName = $ob["PROPERTY_CML2_TRAITS_VALUE"][$key];
//                }
//            }
//
//            if (!empty($colorCode) && $colorName) {
//                $property = CIBlockProperty::GetByID($PROPERTY_CODE, $IBLOCK_ID)->GetNext();
//                $PROPERTY_ID = $property['ID'];
//                $property_enums = CIBlockPropertyEnum::GetList(Array("DEF" => "DESC", "SORT" => "ASC"), Array("IBLOCK_ID" => $IBLOCK_ID, "CODE" => "COLOR", "VALUE" => $colorName, "EXTERNAL_ID" => $colorCode));
//                if ($enum_fields = $property_enums->GetNext()) {
//                    CIBlockElement::SetPropertyValuesEx($ob["ID"], false, array($PROPERTY_CODE => $enum_fields["ID"]));
//                }else{
//                    $valueId = $ibpenum->Add([
//                        'PROPERTY_ID' => $PROPERTY_ID,
//                        'VALUE' => $colorName,
//                        'XML_ID' => $colorCode,
//                    ]);
//                    CIBlockElement::SetPropertyValuesEx($ob["ID"], false, array($PROPERTY_CODE => $valueId));
//                }
//            }
//        }
//    }
//}
//
//function setPropertyColorAgent(){
//    if (\Bitrix\Main\Loader::includeModule('iblock')) {
//        $PROPERTY_CODE = "COLOR";
//        $IBLOCK_ID = IntVal(86);
//        $ibpenum = new \CIBlockPropertyEnum();
//        $arSelect = array("ID", "NAME", "DETAIL_PAGE_URL", "PROPERTY_COLOR", "PROPERTY_CML2_TRAITS");
//        $arFilter = array("IBLOCK_ID" => $IBLOCK_ID, "ACTIVE" => "Y", '=AVAILABLE' => 'Y',);
//        $res = \CIBlockElement::GetList(array(), $arFilter, false, false, $arSelect);
//        while ($ob = $res->GetNext()) {
//            $colorCode = '';
//            $colorName = '';
//            foreach ($ob["PROPERTY_CML2_TRAITS_DESCRIPTION"] as $key => $val) {
//                if ($val == "ЦветКод") {
//                    $colorCode = str_replace("#", "", $ob["PROPERTY_CML2_TRAITS_VALUE"][$key]);
//                }
//
//                if ($val == "ЦветНаименование") {
//                    $colorName = $ob["PROPERTY_CML2_TRAITS_VALUE"][$key];
//                }
//            }
//
//            if (!empty($colorCode) && $colorName) {
//                $property = CIBlockProperty::GetByID($PROPERTY_CODE, $IBLOCK_ID)->GetNext();
//                $PROPERTY_ID = $property['ID'];
//                $property_enums = CIBlockPropertyEnum::GetList(Array("DEF" => "DESC", "SORT" => "ASC"), Array("IBLOCK_ID" => $IBLOCK_ID, "CODE" => "COLOR", "VALUE" => $colorName, "EXTERNAL_ID" => $colorCode));
//                if ($enum_fields = $property_enums->GetNext()) {
//                    CIBlockElement::SetPropertyValuesEx($ob["ID"], false, array($PROPERTY_CODE => $enum_fields["ID"]));
//                }else{
//                    $valueId = $ibpenum->Add([
//                        'PROPERTY_ID' => $PROPERTY_ID,
//                        'VALUE' => $colorName,
//                        'XML_ID' => $colorCode,
//                    ]);
//                    CIBlockElement::SetPropertyValuesEx($ob["ID"], false, array($PROPERTY_CODE => $valueId));
//                }
//            }
//        }
//    }
//    return "setPropertyColorAgent();";
//}

AddEventHandler('catalog', 'OnCompleteCatalogImport1C', "setPropertySkidkaKategoriya");
function setPropertySkidkaKategoriya($bAgent = false)
{
    if (\Bitrix\Main\Loader::includeModule('iblock')) {

        $IBLOCK_ID = IntVal(113);
        $ibpenum = new \CIBlockPropertyEnum();
        $arSelect = array("ID", "NAME", "DETAIL_PAGE_URL", "IBLOCK_ID");

        $lastElementID = COption::GetOptionInt("iblock", "LAST_ELEMENT_UPDATE_ID");

        $arFilter = array("IBLOCK_ID" => $IBLOCK_ID, ">ID" => $lastElementID);
        $res = \CIBlockElement::GetList(array("ID" => 'asc'), $arFilter, false, array('nTopCount' => 3000), $arSelect);
        $elCount = 0;
        while ($ob = $res->GetNextElement()) {
            $elCount++;
            $el = $ob->GetFields();
            $el["PROPERTIES"] = $ob->GetProperties();

            foreach ($el["PROPERTIES"]["CML2_TRAITS"]["DESCRIPTION"] as $key => $val) {

                if ($val == "МаксСкидка") {

                    if ($el["PROPERTIES"]["CML2_TRAITS"]["VALUE"][$key] !== $el["PROPERTIES"]["MAKSIMALNAYA_SKIDKA_PROTSENT"]["VALUE"]) {
                        CIBlockElement::SetPropertyValuesEx($el["ID"], false, array("MAKSIMALNAYA_SKIDKA_PROTSENT" => $el["PROPERTIES"]["CML2_TRAITS"]["VALUE"][$key]));
                    }
                }

                if ($val == "Код") {

                    if ($el["PROPERTIES"]["CML2_TRAITS"]["VALUE"][$key] !== $el["PROPERTIES"]["GCODE"]["VALUE"]) {
                        CIBlockElement::SetPropertyValuesEx($el["ID"], false, array("GCODE" => $el["PROPERTIES"]["CML2_TRAITS"]["VALUE"][$key]));
                    }
                }

                if ($val == "Категория") {


                    if ($el["PROPERTIES"]["CML2_TRAITS"]["VALUE"][$key] != $el["PROPERTIES"]["KATEGORIYA_TOVARA"]["VALUE"]) {

                        $PROPERTY_CODE = "KATEGORIYA_TOVARA";

                        $property = CIBlockProperty::GetByID($PROPERTY_CODE, $IBLOCK_ID)->GetNext();

                        $PROPERTY_ID = $property['ID'];
                        $property_enums = CIBlockPropertyEnum::GetList(array(), array("IBLOCK_ID" => $IBLOCK_ID, "CODE" => $PROPERTY_CODE, "VALUE" => $el["PROPERTIES"]["CML2_TRAITS"]["VALUE"][$key]));

                        if ($enum_fields = $property_enums->GetNext()) {
                            CIBlockElement::SetPropertyValuesEx($el["ID"], false, array($PROPERTY_CODE => $enum_fields["ID"]));
                        } else {
                            $valueId = $ibpenum->Add([
                                'PROPERTY_ID' => $PROPERTY_ID,
                                'VALUE' => $el["PROPERTIES"]["CML2_TRAITS"]["VALUE"][$key],
                                'XML_ID' => $PROPERTY_ID . '-' . Cutil::translit($el["PROPERTIES"]["CML2_TRAITS"]["VALUE"][$key], "ru", array("replace_space" => "-", "replace_other" => "-"))
                            ]);
                            CIBlockElement::SetPropertyValuesEx($el["ID"], false, array($PROPERTY_CODE => $valueId));
                        }
                    }
                }

                if ($val == "НовыйТовар") {

                    $PROPERTY_CODE = "NOVYY_TOVAR";

                    $property_enums = CIBlockPropertyEnum::GetList(array(), array("IBLOCK_ID" => $IBLOCK_ID, "CODE" => $PROPERTY_CODE, "XML_ID" => $el["PROPERTIES"]["CML2_TRAITS"]["VALUE"][$key]));
                    if ($el["PROPERTIES"]["CML2_TRAITS"]["VALUE"][$key] != $el["PROPERTIES"]["NOVYY_TOVAR"]["VALUE_XML_ID"]) {
                        if ($enum_fields = $property_enums->GetNext()) {
                            CIBlockElement::SetPropertyValuesEx($el["ID"], false, array($PROPERTY_CODE => $enum_fields["ID"]));
                        }
                    }
                }

                if ($val == "ОпятьВПродаже") {

                    $PROPERTY_CODE = "OPYAT_V_PRODAZHE";

                    $property_enums = CIBlockPropertyEnum::GetList(array(), array("IBLOCK_ID" => $IBLOCK_ID, "CODE" => $PROPERTY_CODE, "XML_ID" => $el["PROPERTIES"]["CML2_TRAITS"]["VALUE"][$key]));
                    if ($el["PROPERTIES"]["CML2_TRAITS"]["VALUE"][$key] != $el["PROPERTIES"][$PROPERTY_CODE]["VALUE_XML_ID"]) {
                        if ($enum_fields = $property_enums->GetNext()) {
                            CIBlockElement::SetPropertyValuesEx($el["ID"], false, array($PROPERTY_CODE => $enum_fields["ID"]));
                        }
                    }
                }

                if ($val == "СниженаЦена") {

                    $PROPERTY_CODE = "SNIZHENA_TSENA";

                    $property_enums = CIBlockPropertyEnum::GetList(array(), array("IBLOCK_ID" => $IBLOCK_ID, "CODE" => $PROPERTY_CODE, "XML_ID" => $el["PROPERTIES"]["CML2_TRAITS"]["VALUE"][$key]));
                    if ($el["PROPERTIES"]["CML2_TRAITS"]["VALUE"][$key] != $el["PROPERTIES"][$PROPERTY_CODE]["VALUE_XML_ID"]) {
                        if ($enum_fields = $property_enums->GetNext()) {
                            CIBlockElement::SetPropertyValuesEx($el["ID"], false, array($PROPERTY_CODE => $enum_fields["ID"]));
                        }
                    }
                }

            }
        }
        if ($elCount < 998) {
            COption::SetOptionInt("iblock", "LAST_ELEMENT_UPDATE_ID", 0);
        } else {
            COption::SetOptionInt("iblock", "LAST_ELEMENT_UPDATE_ID", $el["ID"]);
        }
    }

    if ($bAgent) {
        return "setPropertySkidkaKategoriya(true);";
    }
}

function parsePropToParts()
{
    //Получение списка свойств из админки
    $basePropList = [];
    $propListRaw = CIBlockElement::GetList([], ['IBLOCK_ID' => 117, 'CODE' => 'property_list'], false, false, ['ID', 'NAME', 'PROPERTY_PROP_CODE']);
    if ($propListData = $propListRaw->GetNextElement()) {
        $arFieldsProp = $propListData->GetFields();
        foreach ($arFieldsProp['PROPERTY_PROP_CODE_VALUE'] as $key => $value) {
            $basePropList[$value] = $arFieldsProp['PROPERTY_PROP_CODE_DESCRIPTION'][$key];
        }
    }
    $propListFilter = [];
    $propListFilterSelect = [];
    $propPair = [];
    foreach ($basePropList as $prop => $pair) {
        $propListFilter[] = 'PROPERTY_' . $prop;
        $propListFilterSelect[] = 'PROPERTY_' . $pair;
        $propPair['PROPERTY_' . $prop . '_VALUE'] = 'PROPERTY_' . $pair . '_VALUE';
    }

    foreach ($propListFilter as $item) {
        $propListFilterValue[] = $item . '_VALUE';
    }
    foreach ($propListFilterSelect as $item) {
        $propListFilterSelectValue[] = $item . '_VALUE';
    }

    // CONSTANT BLOCK
    $IBLOCK_ID = 113;
    $itemsRaw = [];
    $baseFilter = ["IBLOCK_ID" => $IBLOCK_ID, "ACTIVE" => "Y"];
    $baseSelect = ["ID", "NAME"];
    $separator = ';';
    // END CONSTANT BLOCK


    if (count($propListFilter) >= 1) {
        if (count($propListFilter) == 1) {
            foreach ($propListFilter as $item) {
                $propFilter['!' . $item] = false;
            }
            $fullFilter = array_merge($baseFilter, $propFilter);

        } else {
            foreach ($propListFilter as $item) {
                $propFilterRaw['!' . $item] = false;
            }
            $propFilter = [
                "LOGIC" => "OR",
            ];
            $propFilter = array_merge($propFilter, $propFilterRaw);
            $fullFilter = array_merge($baseFilter, [0 => $propFilter]);

        }
        $fullSelect = array_merge($baseSelect, $propListFilter);
    } else {
        $fullSelect = array_merge($baseSelect, $propListFilter);

        $fullFilter = $baseFilter;
    }

    if (count($propListFilterSelect) >= 1) {
        $fullSelect = array_merge($fullSelect, $propListFilterSelect);
    }
    // Выборка элементов
    $res = CIBlockElement::GetList([], $fullFilter, false, false, $fullSelect);
    while ($ob = $res->GetNextElement()) {
        $arFields = $ob->GetFields();
        $itemsRaw[$arFields['ID']]['ID'] = $arFields['ID'];

        foreach ($arFields as $key => $value) {
            if (in_array($key, $propListFilterSelectValue)) {
                // Избавляется от дублирования значения
                if (!in_array($value, $itemsRaw[$arFields['ID']][$key])) {
                    $itemsRaw[$arFields['ID']][$key][] = $value;
                }
            }
            if (in_array($key, $propListFilterValue)) {
                if (!in_array($value, $itemsRaw[$arFields['ID']][$key])) {
                    $itemsRaw[$arFields['ID']][$key] = $value;
                }
            }
        }
    }
    // Проверка и назначение значений
    foreach ($itemsRaw as $item) {
        //просматриваем каждое свойство элемента
        foreach ($item as $propName => $propValue) {
            if (in_array($propName, $propListFilterValue)) {
                if (!$propValue) continue;

                $rawValue = trim($propValue);
                $lastSymbol = substr($rawValue, -1);

                if ($lastSymbol == $separator) {
                    $saveLast = true;
                } else {
                    $saveLast = false;
                }

                // разделяем свойство по разделителю
                $letDataProp = explode($separator, $propValue);

                // убираем пробелы в начале и в конце строки
                foreach ($letDataProp as &$value) {
                    $value = trim($value);
                }
                if (!$saveLast) {
                    array_pop($letDataProp);
                }

                // получаем значения свойства пары
                $diffArrays = array_diff($letDataProp, $item[$propPair[$propName]]);
                // Сверяем количество и состав свойств
                if (!(!$diffArrays and count($letDataProp) == count($item[$propPair[$propName]]))) {
                    $propChangeCode = str_replace('PROPERTY_', '', $propPair[$propName]);
                    $propChangeCode = str_replace('_VALUE', '', $propChangeCode);

                    CIBlockElement::SetPropertyValuesEx($item['ID'], false, array($propChangeCode => $letDataProp));

                }
            }
            unset($propChangeCode);
        }

    }
    return "parsePropToParts();";
}


///AddEventHandler("iblock", "OnBeforeIBlockElementUpdate", Array("MyClass", "OnBeforeIBlockUpdateHandler"));

class MyClass
{
    // создаем обработчик события "OnBeforeIBlockUpdate"
    function OnBeforeIBlockUpdateHandler(&$arFields)
    {
        $fp = fopen($_SERVER['DOCUMENT_ROOT'] . '/test/fields.txt', 'a+');
        fwrite($fp, "Update Element: \r\n");
        foreach ($arFields as $k => $v) {

            if ($k == 'PROPERTY_VALUES') {
                fwrite($fp, $k . "\r\n");
                foreach ($v as $p => $d) {

                    fwrite($fp, $p . ' :-: ' . $d . "\r\n");
                }


                //   PROPERTY_VALUES
            } else {
                fwrite($fp, $k . ' - ' . $v . "\r\n");
            }


        }

        fclose($fp);

    }
}

AddEventHandler("search", "BeforeIndex", "BeforeIndexHandler");
function BeforeIndexHandler($arFields)
{
    if (!CModule::IncludeModule("iblock"))
        return $arFields;
    if ($arFields["MODULE_ID"] == "iblock" && $arFields["PARAM2"] == Site::IBLOCK_ID_CATALOG) {
        $db_props = CIBlockElement::GetProperty(
            $arFields["PARAM2"],
            $arFields["ITEM_ID"],
            array("sort" => "asc"),
            array("ID" => [13817]));
        while ($ar_props = $db_props->Fetch()) {
            $arFields["TITLE"] .= " " . $ar_props["VALUE"];
        }
    }

    return $arFields;
}

// Заполнение свойства Похожие статьи
AddEventHandler("iblock", "OnAfterIBlockElementAdd", "OnAfterIBlockElementAddHandler");

function OnAfterIBlockElementAddHandler(&$arFields)
{
    if ($arFields['IBLOCK_ID'] == 95 && $arFields['ID'] > 0) {

        $arSelect = ['ID', 'NAME'];
        $arFilter = ['IBLOCK_ID' => 95];
        $res = CIBlockElement::GetList([], $arFilter, false, false, $arSelect);
        while ($ob = $res->GetNextElement()) {
            $arElements = $ob->GetFields();
            $arIds[] = $arElements['ID'];
        }

        $countIds = count($arIds);

        $result = [];

        get3Id($result, $countIds, $arIds);

        $iCount = 0;
        $arSelect = ['ID'];
        $arFilter = ['IBLOCK_ID' => 95];
        $res = CIBlockElement::GetList([], $arFilter, false, false, $arSelect);
        while ($ob = $res->GetNextElement()) {
            $arFields = $ob->GetFields();

            CIBlockElement::SetPropertyValuesEx($arFields['ID'], 95, ['SIMILAR' => unserialize($result[$iCount])]);

            $iCount++;
        }

    }
}

function get3Id(&$result, $countIds, $arIds) {

    if(count($result) == $countIds)
        return false;

    $array = serialize([
        $arIds[rand(0, $countIds-1)],
        $arIds[rand(0, $countIds-1)],
        $arIds[rand(0, $countIds-1)]
    ]);

    if(!in_array($array, $result))
        $result[] = $array;

    get3Id($result, $countIds, $arIds);

    return false;

}

$subject = $_SERVER["REQUEST_URI"];
$pattern = '/\/\/+/';
$countReplace = 0;
$replaced_url = preg_replace($pattern, '/', $subject, -1, $countReplace);
if ($countReplace > 0)
    LocalRedirect($replaced_url, false, '301 Moved Permanently');

$arRequest = Bitrix\Main\Context::getCurrent()->getRequest()->toArray();

#обмен с 1С
function ReplaceFileToExchange()
{
    $arFilePatterns = ['Catalog_*.xml', 'Goods_*.xml', 'Price_*.xml', 'Rest_*.xml', 'Archive_*.xml', 'Properties_*.xml'];
    $arFileNames = ['Catalog.xml', 'Goods.xml', 'Price.xml', 'Rest.xml', 'Archive.xml', 'Properties.xml'];
    $exchangeDir = $_SERVER['DOCUMENT_ROOT'] . '/exchange/';
    $ex2Dir = $_SERVER['DOCUMENT_ROOT'] . '/ex2/';

    foreach($arFilePatterns as $k => $fileNamePattern ){
        $newFileName = $arFileNames[$k];

        // Проверяем, существует ли файл catalog.xml в папке /ex2/
        if (!file_exists($ex2Dir . $newFileName)) {
            // Ищем все файлы, соответствующие шаблону catalog_*.xml в папке /exchange/
            $files = glob($exchangeDir . $fileNamePattern);

            if (!empty($files)) {
                // Сортируем полученные файлы по дате создания в порядке возрастания
                usort($files, function($a, $b) {
                    return filectime($a) - filectime($b);
                });

                // Копируем самый старый файл в папку /ex2/ под именем catalog.xml
                copy($files[0], $ex2Dir . $newFileName);

                // Удаляем исходный файл из папки /exchange/
                unlink($files[0]);

            }
        }
    }

    return 'ReplaceFileToExchange();';

}

AddEventHandler("esol.importxml", "OnEndImport", "OnEndImportRemoveFile");

function OnEndImportRemoveFile($ID, $arEventData)
{
    switch($arEventData["PROFILE_NAME"]){
        case 'Импорт разделов каталога':{
            $file = 'Catalog.xml';
        }break;

        case 'Импорт товаров':{
            $file = 'Goods.xml';
        }break;

        case 'Обновление цен':{
            $file = 'Price.xml';
        }break;

        case 'Обновление остатков':{
            $file = 'Rest.xml';
        }break;

        case 'Архивация':{
            $file = 'Archive.xml';
        }break;

        case 'Свойства':{
            $file = 'Properties.xml';
        }break;
    }

    unlink( $_SERVER['DOCUMENT_ROOT'] . '/ex2/' . $file );
}

// На странице оформления заказа нужно проверить наличие товаров в корзине
// Если количество в корзине отличается от количества в базе - сдлелать изменения и вывести сообщение

if ($_SERVER['SCRIPT_URL'] == '/personal/order/make/' && empty($_GET["ORDER_ID"])) {

    session_start();

    \Bitrix\Main\Loader::includeModule('sale');
    \Bitrix\Main\Loader::includeModule('highloadblock');

    $basket = Bitrix\Sale\Basket::loadItemsForFUser(
        Bitrix\Sale\Fuser::getId(),
        Bitrix\Main\Context::getCurrent()->getSite()
    );

    // Получить массив со списком продуктов в корзине
    $basketItems = $basket->getBasketItems();

    /**
    * @var $basketItem Bitrix\Sale\BasketItem;
    */
    foreach ($basketItems as $basketItem) {

        $arProducts[$basketItem->getField('PRODUCT_XML_ID')] = [
            'NAME' => $basketItem->getField('NAME'),
            'XML_ID' => $basketItem->getField('PRODUCT_XML_ID'),
            'QUANTITY' => $basketItem->getQuantity(),
            'PRICE' => $basketItem->getPrice(),
            'ID' => $basketItem->getId()
        ];

        $BasketId = $basketItem->getField('ID');

    }

    global $USER;

    fp(["arProducts ".date("Y-m-d H:i:s") => $arProducts]);
    fp(["arUser ".date("Y-m-d H:i:s") => CUser::GetID()]);
    fp(["Fuser ".date("Y-m-d H:i:s") => Bitrix\Sale\Fuser::getId()]);

    if (isset($arProducts)) {

        // 1. Проверить есть ли запись о корзине с данным F_USER_ID в HL
        $hl = CHelper::getEntityHLClass(CReserve::reserve_hl_id);
        $result = $hl::getList([
            'filter' => [
                'UF_F_USER_ID' => Bitrix\Sale\Fuser::getId() + $BasketId,
            ]
        ])->fetch();

        if (is_array($result)) {

            // todo: обновить состав товаров в HL
            $hl::update($result['ID'], [
                'UF_PRODUCTS' => serialize($arProducts),
            ]);

            // 1.1 Сделать запрос на резервирование заказа с указанием ID заказа
            $reserveGoodsResult = CSoapClient::reservGoods($result['UF_BASKET_ID'], $arProducts, 'productQuantityCheck');

        } else {

            // 1.2 Сделать запрос на резервирование заказа без указания ID заказа
            $reserveGoodsResult = CSoapClient::reservGoods(false, $arProducts, 'productQuantityCheck');

            // 1.2.1 Создать запись о корзине
            if(strlen($reserveGoodsResult['Body']['ReservGoodsResponse']['return']['ID']) > 5 &&
                $reserveGoodsResult['Body']['ReservGoodsResponse']['return']['ErrorCode'] === '0')

                $bId = $reserveGoodsResult['Body']['ReservGoodsResponse']['return']['ID']; // ID заказа из 1С
            else
                $bId = false; // ID заказа из 1С

            fp(["/add/ ".date("Y-m-d H:i:s") => [
                'UF_F_USER_ID' => Bitrix\Sale\Fuser::getId() + $BasketId,
                'UF_PRODUCTS' => serialize($arProducts),
                'UF_DATE_INSERT' => time(),
                'UF_BASKET_ID' => $bId
            ]]); 
            $hl::add([
                'UF_F_USER_ID' => Bitrix\Sale\Fuser::getId() + $BasketId,
                'UF_PRODUCTS' => serialize($arProducts),
                'UF_DATE_INSERT' => time(),
                'UF_BASKET_ID' => $bId
            ]);

        }

        if($bId) {
            $_SESSION["1C_CODE_ORDER"] = $bId;
        }

        // 2. Если в ответе меньше товара чем в корзине либо 0 - изменить корзину и вывести сообщения

        // 2.1 Привести ответ от 1С в порядок
        if (isset($reserveGoodsResult['Body']['ReservGoodsResponse']['return']['tGoods'])) {

            if (isset($reserveGoodsResult['Body']['ReservGoodsResponse']['return']['tGoods']['ID'])) {
                $arResponseProducts = [$reserveGoodsResult['Body']['ReservGoodsResponse']['return']['tGoods']];
            } else {
                $arResponseProducts = $reserveGoodsResult['Body']['ReservGoodsResponse']['return']['tGoods'];
            }

        }

        // 2.2 Изменить корзину
        if (isset($arResponseProducts) && $reserveGoodsResult['Body']['ReservGoodsResponse']['return']['ErrorCode'] === '0' ) {

            $message = "";
            $basketHasBeenChanged = false;

            foreach ($arResponseProducts as $arResponseProduct) {

                if ($arResponseProduct['Count'] == 0) {

                    // Если товара в ответе 0 то удалить из корзины и из $arProducts
                    $basketHasBeenChanged = true;
                    $basketItem = $basket->getItemById($arProducts[$arResponseProduct['ID']]['ID']);
                    $basketItem->delete();

                    $message .= "Товар {$arProducts[$arResponseProduct['ID']]['NAME']} отсутствует на складе и был удалён из корзины.<br/>\n";

                } elseif ($arResponseProduct['Count'] < $arProducts[$arResponseProduct['ID']]['QUANTITY']) {

                    // Если товара в ответе меньше чем в корзине то изменить количество
                    $basketHasBeenChanged = true;
                    $basketItem = $basket->getItemById($arProducts[$arResponseProduct['ID']]['ID']);
                    $basketItem->setField('QUANTITY', $arResponseProduct['Count']);
                    $message .= "У товара {$basketItem->getField('NAME')} установлено максимальное количество: {$arResponseProduct['Count']}<br/>\n";

                }

            }

            if ($message)
                $_SESSION['BASKET_CHANGE_MESSAGE'] = $message;

            if ($basketHasBeenChanged)
                $basket->save();

        }

    }

}
elseif ($_SERVER['SCRIPT_URL'] == '/personal/order/make/') {
    //fp(["/personal/order/make/ ".date("Y-m-d H:i:s") => $_SESSION]);
}

function fp($content)
{
    file_put_contents(
        $_SERVER['DOCUMENT_ROOT'] . '/logMolotok.txt',
        print_r($content, true) . PHP_EOL,
        FILE_APPEND
    );
}

if(strpos($_SERVER["SCRIPT_NAME"], 'order_exchange.php') === false) {
    $EVENT_MANAGER->addEventHandler("sale", "OnOrderSave", "OnOrderSaveHandler");
}
    

function OnOrderSaveHandler($orderId, $fields, $arFields, $isNew)
{

    $basket = Bitrix\Sale\Order::load($orderId)->getBasket();
    $fUserId = $basket->getFUserId();

    $order = \Bitrix\Sale\Order::load($arFields['ID']);
    $deliveryId = current($order->getDeliveryIdList());

    $basketItems = $basket->getBasketItems();

    // Если заказ новый и в составе есть заказ со свойством "Требуется консультация" со значением "Да"
    // то изменить статус заказа на "Требуется консультация"
    
    if($isNew) {

        /**
        * @var $basketItem Bitrix\Sale\BasketItem;
        */
        foreach ($basketItems as $basketItem) {

            $obProps = CIBlockElement::GetProperty(
                113, $basketItem->getProductId(), [], ['CODE' => 'CONS_REQ']
            );
            if ($array = $obProps->Fetch()) {

                if($array['VALUE'] == "Да") {

                    $order->setField('STATUS_ID', "C");
                    $order->save();

                }

            }

        }

    }

    //достанем айди корзины
    foreach ($basketItems as $basketItem) {

        $BasketId = $basketItem->getField('ID');

    }

    // Сделать запрос на резервирование товаров с передачей ФИО пользователя
    if($isNew) {
        $arFilter = [
            'UF_F_USER_ID' => $fUserId + $BasketId,
            'UF_ORDER_ID' => false
        ];
    } else {
        $arFilter = [
            'UF_F_USER_ID' => $fUserId + $BasketId,
            'UF_ORDER_ID' => $order->getId()
        ];
    }

    $arFilter = [
        'UF_F_USER_ID' => $fUserId + $BasketId
    ];

    //если заказ уже был выгружен в 1С, будем привязываться к внешнему коду
    $propertyCollection = $order->getPropertyCollection();
    foreach($propertyCollection as $popertyObject)
    {
        if($popertyObject->getField('CODE') == "1C_CODE") {
            $codeValue = $popertyObject->getValue();
            if(strlen($codeValue) > 1)
            {
                $arFilter = [
                    'UF_BASKET_ID' => $codeValue
                ];
            }
        }

    }

    $hl = CHelper::getEntityHLClass(CReserve::reserve_hl_id);
    $result = $hl::getList([
        "filter" => $arFilter,
        "order" => array("ID" => "DESC"),
    ])->fetch();

    if (is_array($result)) {

        // Если заказ не новый - то изменить состав товаров $result['UF_PRODUCTS']
        // потому что он может быть изменен в админке
        if(!$isNew) {

            /**
            * @var $basketItem Bitrix\Sale\BasketItem;
            */
            foreach ($basketItems as $basketItem) {

                $arProducts[$basketItem->getField('PRODUCT_XML_ID')] = [
                    'NAME' => $basketItem->getField('NAME'),
                    'XML_ID' => $basketItem->getField('PRODUCT_XML_ID'),
                    'QUANTITY' => $basketItem->getQuantity(),
                    'PRICE' => $basketItem->getPrice(),
                    'ID' => $basketItem->getId()
                ];

            }

            if(isset($arProducts)) {
                $hl::update($result['ID'], [
                    'UF_PRODUCTS' => serialize($arProducts)
                ]);
                $result['UF_PRODUCTS'] = serialize($arProducts);

            }

        }

        $arOrderProps = [];

        // Доставка
        switch ($deliveryId) {
            case 1:
                $deliveryName = "Доставка фургоном";
                break;
            case 2:
                $deliveryName = "Самовывоз";
                break;
            case 22:
                $deliveryName = "Кран-балка";
                break;
            case 30:
                $deliveryName = "Счёт на доставку";
                break;
        }

        if (isset($deliveryName))
            $arOrderProps[] = [
                'NAME' => 'Способ доставки',
                'VALUE' => $deliveryName
            ];

        // Номер телефона (Физическое)
        if (isset($arFields['ORDER_PROP'][3]))
            $arOrderProps[] = ['NAME' => 'Номер телефона', 'VALUE' => $arFields['ORDER_PROP'][3]];

        // Номер телефона (Юридическое)
        if (isset($arFields['ORDER_PROP'][15]))
            $arOrderProps[] = ['NAME' => 'Номер телефона', 'VALUE' => $arFields['ORDER_PROP'][15]];

        // E-mail (Физическое)
        if (isset($arFields['ORDER_PROP'][2]))
            $arOrderProps[] = ['NAME' => 'E-mail', 'VALUE' => $arFields['ORDER_PROP'][2]];

        // E-mail (Юридическое)
        if (isset($arFields['ORDER_PROP'][23]))
            $arOrderProps[] = ['NAME' => 'E-mail', 'VALUE' => $arFields['ORDER_PROP'][23]];

        // Дополнительный телефон (Физическое)
        if (isset($arFields['ORDER_PROP'][8]))
            $arOrderProps[] = ['NAME' => 'Дополнительный телефон', 'VALUE' => $arFields['ORDER_PROP'][8]];

        // Дополнительный телефон (Юридическое)
        if (isset($arFields['ORDER_PROP'][25]))
            $arOrderProps[] = ['NAME' => 'Дополнительный телефон', 'VALUE' => $arFields['ORDER_PROP'][25]];

        $deliveryComment = "";

        // Адрес доставки (Физическое)
        if (isset($arFields['ORDER_PROP'][6])) {
            $arOrderProps[] = ['NAME' => 'Адрес доставки', 'VALUE' => $arFields['ORDER_PROP'][6]];
            $deliveryComment = $arFields['ORDER_PROP'][6];
        }

        // Адрес доставки (Юридическое)
        if (isset($arFields['ORDER_PROP'][24])) {
            $arOrderProps[] = ['NAME' => 'Адрес доставки', 'VALUE' => $arFields['ORDER_PROP'][24]];
            $deliveryComment = $arFields['ORDER_PROP'][24];
        }

        // Название организации
        if (isset($arFields['ORDER_PROP'][12]))
            $arOrderProps[] = ['NAME' => 'Название организации', 'VALUE' => $arFields['ORDER_PROP'][12]];

        // Инн
        if (isset($arFields['ORDER_PROP'][13]))
            $inn = $arFields['ORDER_PROP'][13];
        else
            $inn = "";

        //проверка ИНН на валидность
        if (!preg_match('/([0-9]{12})|([0-9]{10})/', $inn)) {
            $inn = "";
        }

        // ID заказа
        $arOrderProps[] = ['NAME' => 'ID заказа в Битрикс', 'VALUE' => $orderId];

        // Платёжная система
        $paymentCollection = $order->getPaymentCollection();
        $paymentId = current($order->getPaySystemIdList());

        $paySystemName = \Bitrix\Sale\Internals\PaymentTable::getList([
            'filter' => [
                'PAY_SYSTEM_ID' => $paymentId
            ]
        ])->fetch()['PAY_SYSTEM_NAME'];
        
        $bOrderPaid = $order->isPaid();
        $iOrderPaid = 0;
        if($bOrderPaid) {
            $iOrderPaid = $order->getSumPaid();    
        }
        

        $arOrderProps[] = ['NAME' => 'Платёжная система', 'VALUE' => $paySystemName];

        // Статус
        $statusId = $order->getField('STATUS_ID');
        $statusName = \Bitrix\Sale\Internals\StatusLangTable::getList(array(
            'filter' => array('STATUS.ID'=>$statusId,'LID'=>LANGUAGE_ID),
            'select' => array('STATUS_ID','NAME','DESCRIPTION'),
        ))->fetch()['NAME'];

        if(empty($result['UF_BASKET_ID'])) {
            //$statusName = false;
        }

        // Стоимость доставки
        $deliveryPrice = $order->getDeliveryPrice();

        $reserveGoodsResult = CSoapClient::reservGoods(
            $result['UF_BASKET_ID'],
            unserialize($result['UF_PRODUCTS']),
            $arFields['PAYER_NAME'],
            $arFields['USER_DESCRIPTION'],
            $deliveryComment,
            $inn,
            $arOrderProps,
            $iOrderPaid,
            $statusName,
            $deliveryPrice
        );

        fp([
            '$reserveGoodsResult '. $order->getId() . ' ' .date("Y-m-d H:i:s") => $reserveGoodsResult
        ]); 

        $arUpdate = [
            'UF_ORDER_ID' => $order->getId()
        ];

        if(empty($result['UF_BASKET_ID']) && $reserveGoodsResult['Body']['ReservGoodsResponse']['return']['ErrorCode'] === '0')
            $arUpdate["UF_BASKET_ID"] = $reserveGoodsResult['Body']['ReservGoodsResponse']['return']['ID'];


        $hl::update($result['ID'], $arUpdate);

        if($reserveGoodsResult['Body']['ReservGoodsResponse']['return']['ErrorCode'] !== '0' && $isNew)
        {
            fp([
                'ErrorCode '.date("Y-m-d H:i:s") => $reserveGoodsResult['Body']['ReservGoodsResponse']['return']['ErrorCode']
            ]);
            CSaleOrder::StatusOrder($order->getId(), "B"); // Ошибка 1С
        }

    }


    //сохраним в заказ айди товара, если он есть
    $propertyCollection = $order->getPropertyCollection();
    foreach($propertyCollection as $popertyObj)
    {
        if($popertyObj->getField('CODE') == "1C_CODE") {
            
            $curValue = $popertyObj->getValue();
            
            if(isset($_SESSION["1C_CODE_ORDER"]) && empty($curValue) && strpos($_SERVER["SCRIPT_NAME"], '/bitrix/admin/') === false)
            {    
                fp(['Save 1C_CODE'.date("Y-m-d H:i:s") => $_SERVER]);       
                fp(['Save 1C_CODE VALUE'.date("Y-m-d H:i:s") => $curValue]);       
                fp(['Save 1C_CODE $orderId'.date("Y-m-d H:i:s") => $orderId]);       
                $popertyObj->setValue($_SESSION["1C_CODE_ORDER"]);
                $order->save();
            }
        }

    }

}

$EVENT_MANAGER->addEventHandler("sale", "OnSalePayOrder", "OnSalePayOrderHandler");
function OnSalePayOrderHandler($orderId, $val)
{
    // Сделать запрос в 1С для передачи информации об оплате
    if ($val == "Y") {

        // Получить ID корзины в HL.
        // Слать запрос в 1С только если такой ID есть
        $order = \Bitrix\Sale\Order::load($orderId);
        $propertyCollection = $order->getPropertyCollection();
        $namePropValue = $propertyCollection->getPayerName()->getValue();

        $basket = \Bitrix\Sale\Order::load($orderId)->getBasket();
        $basketItems = $basket->getBasketItems();
        
        $arProducts = [];
        foreach ($basketItems as $basketItem) {

            $arProducts[$basketItem->getField('PRODUCT_XML_ID')] = [
                'NAME' => $basketItem->getField('NAME'),
                'XML_ID' => $basketItem->getField('PRODUCT_XML_ID'),
                'QUANTITY' => $basketItem->getQuantity(),
                'PRICE' => $basketItem->getPrice(),
                'ID' => $basketItem->getId()
            ];

        }

        $hl = CHelper::getEntityHLClass(CReserve::reserve_hl_id);
        $result = $hl::getList([
            'filter' => [
                'UF_ORDER_ID' => $orderId
            ]
        ])->fetch();
        
        $arFields = $order->getFieldValues();
        
        $collection = $order->getPropertyCollection();
        
        $arOrderProps = [];
        

        $cur_prop = $collection->getItemByOrderPropertyCode('PHONE');
        $val = $cur_prop->getField('VALUE');
        $arOrderProps[] = ['NAME' => 'Номер телефона', 'VALUE' => $val];
        
        $cur_prop = $collection->getItemByOrderPropertyCode('EMAIL');
        $val = $cur_prop->getField('VALUE');
        $arOrderProps[] = ['NAME' => 'E-mail', 'VALUE' => $val];       
        
        $deliveryComment = "";
        $cur_prop = $collection->getItemByOrderPropertyCode('CITY');
        if(!empty($cur_prop)) {
            $val = $cur_prop->getField('VALUE');
                                                            
            $arOrderProps[] = ['NAME' => 'Адрес доставки', 'VALUE' => $val];
            $deliveryComment = $val;
        }
        
        $inn = "";
        $cur_prop = $collection->getItemByOrderPropertyCode('inn');
        if(!empty($cur_prop)) {
            $val = $cur_prop->getField('VALUE');
                                                            
            $inn = $val;
        }
            

        $deliveryId = current($order->getDeliveryIdList());
        // Доставка
        switch ($deliveryId) {
            case 1:
                $deliveryName = "Доставка фургоном";
                break;
            case 2:
                $deliveryName = "Самовывоз";
                break;
            case 22:
                $deliveryName = "Кран-балка";
                break;
            case 30:
                $deliveryName = "Счёт на доставку";
                break;
        }
        
        if (isset($deliveryName))
            $arOrderProps[] = [
                'NAME' => 'Способ доставки',
                'VALUE' => $deliveryName
            ];
        
        $arOrderProps[] = ['NAME' => 'ID заказа в Битрикс', 'VALUE' => $orderId];
        
        $paymentId = current($order->getPaySystemIdList());

        $paySystemName = \Bitrix\Sale\Internals\PaymentTable::getList([
            'filter' => [
                'PAY_SYSTEM_ID' => $paymentId
            ]
        ])->fetch()['PAY_SYSTEM_NAME'];

        $arOrderProps[] = ['NAME' => 'Платёжная система', 'VALUE' => $paySystemName];

        if (is_array($result)) {

            // Получить состав корзины
            $arProducts = unserialize($result['UF_PRODUCTS']);

            $reserveGoodsResult = CSoapClient::reservGoods(
                $result['UF_BASKET_ID'],
                $arProducts,
                $namePropValue,
                '',
                $deliveryComment,
                $inn,
                $arOrderProps,
                $order->getSumPaid(),
                'Оплачен'
            );

        }

    }

}

////обработчик для черной пятницы
//AddEventHandler("catalog", "OnGetOptimalPrice", "MyGetOptimalPrice");
//function MyGetOptimalPrice($productID, $quantity = 1, $arUserGroups = array(), $renewal = "N", $arPrices = array(), $siteID = false, $arDiscountCoupons = false)
//{
//    global $USER;
//
//    // Получаем группы пользователя
//    $userGroups = $USER->GetUserGroupArray();
//
//    // Определяем максимальную скидку из бонусных групп
//    $bonusDiscounts = [
//        'BONUS_SYSTEM_1' => 1,
//        'BONUS_SYSTEM_2' => 2,
//        'BONUS_SYSTEM_3' => 3,
//        'BONUS_SYSTEM_4' => 4,
//        'BONUS_SYSTEM_5' => 5,
//        'BONUS_SYSTEM_6' => 6,
//        'BONUS_SYSTEM_7' => 7
//    ];
//    $maxBonusDiscount = 0;
//    $isInBonusGroup = false;
//    foreach ($bonusDiscounts as $groupStringID => $discount) {
//        $groupFilter = ['STRING_ID' => $groupStringID];
//        $rsGroups = CGroup::GetList($by = "id", $order = "asc", $groupFilter);
//        if ($arGroup = $rsGroups->Fetch()) {
//            if (in_array($arGroup['ID'], $userGroups)) {
//                $isInBonusGroup = true;
//                $maxBonusDiscount = max($maxBonusDiscount, $discount);
//            }
//        }
//    }
//
//    // Если пользователь не состоит ни в одной бонусной группе, устанавливаем скидку 0%
//    if (!$isInBonusGroup) {
//        $maxBonusDiscount = 0;
//    }
//
//    // Получаем процент скидки с товара
//    $discountPercent = false;
//    $db_props = CIBlockElement::GetProperty(113, $productID, array("sort" => "asc"), array("CODE" => "MAKSIMALNAYA_SKIDKA_PROTSENT", 'ACTIVE' => 'Y'));
//    if ($ar_props = $db_props->Fetch()) {
//        $discountPercent = $ar_props["VALUE"];
//    }
//
//    // Если процент скидки не установлен, возвращаем true
//    if ($discountPercent === false) {
//        return true;
//    }
//
//    // Преобразуем процент скидки из строки в число
//    $discountPercent = floatval(str_replace(",", ".", $discountPercent));
//
//    // Применяем правильную скидку
//    $finalDiscountPercent = $discountPercent > $maxBonusDiscount ? $maxBonusDiscount : $discountPercent;
//
//    // Получаем цену товара
//    $dbProductPrice = CPrice::GetListEx(
//        array(),
//        array("PRODUCT_ID" => $productID),
//        false,
//        false,
//        array("*")
//    );
//    $price = [];
//    while ($arProductPrice = $dbProductPrice->GetNext()) {
//        $price[] = $arProductPrice;
//    }
//
//    if (empty($price[0])) {
//        return true;
//    }
//
//    // Высчитываем цену со скидкой
//    $discountPrice = $price[0]['PRICE'] * ($finalDiscountPercent / 100);
//    $priceDiscount = $price[0]['PRICE'] - $discountPrice;
//
//    return array(
//        'PRODUCT_ID' => $productID,
//        'DISCOUNT_PRICE' => $priceDiscount,
//        'RESULT_PRICE' => array(
//            "PRICE_TYPE_ID" => $price[0]['ID'],
//            'BASE_PRICE' => $priceDiscount,
//            'DISCOUNT_PRICE' => $priceDiscount,
//            'DISCOUNT' => $discountPrice,
//            'PERCENT' => $finalDiscountPercent,
//            'CURRENCY' => $price[0]['CURRENCY'],
//            'VAT_INCLUDED' => $price[0]['VAT_INCLUDED'],
//        )
//    );
//}


//удаление онлайн оплаты если есть товар кторый требует консультации
Bitrix\Main\EventManager::getInstance()->addEventHandler('sale', 'OnSaleComponentOrderCreated', 'OnSaleComponentOrderCreatedHandler');
function OnSaleComponentOrderCreatedHandler($order, &$arUserResult, $request, &$arParams, &$arResult, &$arDeliveryServiceAll, &$arPaySystemServiceAll)
{
    $productIds = [];
    $basket = $order->getBasket();
    $basketItems = $basket->getBasketItems();
    foreach ($basketItems as $basketItem) {
        $productIds[] = $basketItem->getField('PRODUCT_ID');
    }

    if(!empty($productIds)){
        $delPaySystemOnline = false;
        $arSelect = Array("ID", "IBLOCK_ID", "PROPERTY_CONS_REQ");//IBLOCK_ID и ID обязательно должны быть указаны, см. описание arSelectFields выше
        $arFilter = Array("IBLOCK_ID"=>IntVal(113), "=ID"=>$productIds);
        $res = CIBlockElement::GetList(Array(), $arFilter, false, false, $arSelect);
        while($ob = $res->fetch()){
            if($ob['PROPERTY_CONS_REQ_VALUE'] == 'Да'){
                $delPaySystemOnline = true;
                break;
            }
        }

        if($delPaySystemOnline){
            foreach ($arPaySystemServiceAll as $key => $payment){
                if($payment['PAY_SYSTEM_ID'] == 15){
                    unset($arPaySystemServiceAll[$key]);
                }
            }
        }
    }
}

//если мы удалили чекнутую платежную систему то ставим чекед первой попавшейся
Bitrix\Main\EventManager::getInstance()->addEventHandler('sale', 'OnSaleComponentOrderShowAjaxAnswer', 'OnSaleComponentOrderShowAjaxAnswerHandler');
function OnSaleComponentOrderShowAjaxAnswerHandler(&$arResult)
{
    $productIds = [];
    foreach ($arResult['order']['GRID']['ROWS'] as $items){
        $productIds[] = $items['data']['PRODUCT_ID'];
    }

    if(!empty($productIds)){
        $delPaySystemOnline = false;
        $arSelect = Array("ID", "IBLOCK_ID", "PROPERTY_CONS_REQ");//IBLOCK_ID и ID обязательно должны быть указаны, см. описание arSelectFields выше
        $arFilter = Array("IBLOCK_ID"=>IntVal(113), "=ID"=>$productIds);
        $res = CIBlockElement::GetList(Array(), $arFilter, false, false, $arSelect);
        while($ob = $res->fetch()){
            if($ob['PROPERTY_CONS_REQ_VALUE'] == 'Да'){
                $delPaySystemOnline = true;
                break;
            }
        }

        if($delPaySystemOnline){
            $emptyChecked = true;
            foreach ($arResult['order']['PAY_SYSTEM'] as $key => $payment){
                if($payment['CHECKED'] == 'Y'){
                    $emptyChecked = false;
                }
            }

            if($emptyChecked){
                $arResult['order']['PAY_SYSTEM'][0]['CHECKED'] = 'Y';
            }
        }
    }
}

