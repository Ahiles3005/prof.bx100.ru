<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();
  $this->setFrameMode(true);
?>
<div class="container catalog-body">
  <?
    // Bread Crumbs
    $APPLICATION->IncludeComponent(
      "bitrix:breadcrumb",
      "shop",
      [
        "START_FROM" => "0",
      ]
    );
    $ElementID = $APPLICATION->IncludeComponent(
      "bitrix:catalog.element",
      "",
      array(
        "IBLOCK_TYPE" => $arParams["IBLOCK_TYPE"],
        "IBLOCK_ID" => $arParams["IBLOCK_ID"],
        "PROPERTY_CODE" => $arParams["DETAIL_PROPERTY_CODE"],
        "META_KEYWORDS" => $arParams["DETAIL_META_KEYWORDS"],
        "META_DESCRIPTION" => $arParams["DETAIL_META_DESCRIPTION"],
        "BROWSER_TITLE" => $arParams["DETAIL_BROWSER_TITLE"],
        "BASKET_URL" => $arParams["BASKET_URL"],
        "ACTION_VARIABLE" => $arParams["ACTION_VARIABLE"],
        "PRODUCT_ID_VARIABLE" => $arParams["PRODUCT_ID_VARIABLE"],
        "SECTION_ID_VARIABLE" => $arParams["SECTION_ID_VARIABLE"],
        "DISPLAY_PANEL" => $arParams["DISPLAY_PANEL"],
        "CACHE_TYPE" => $arParams["CACHE_TYPE"],
        "CACHE_TIME" => $arParams["CACHE_TIME"],
        "CACHE_GROUPS" => $arParams["CACHE_GROUPS"],
        "SET_TITLE" => $arParams["SET_TITLE"],
        "SET_STATUS_404" => $arParams["SET_STATUS_404"],
        "PRICE_CODE" => $arParams["PRICE_CODE"],
        "USE_PRICE_COUNT" => $arParams["USE_PRICE_COUNT"],
        "SHOW_PRICE_COUNT" => $arParams["SHOW_PRICE_COUNT"],
        "PRICE_VAT_INCLUDE" => $arParams["PRICE_VAT_INCLUDE"],
        "PRICE_VAT_SHOW_VALUE" => $arParams["PRICE_VAT_SHOW_VALUE"],
        "LINK_IBLOCK_TYPE" => $arParams["LINK_IBLOCK_TYPE"],
        "LINK_IBLOCK_ID" => $arParams["LINK_IBLOCK_ID"],
        "LINK_PROPERTY_SID" => $arParams["LINK_PROPERTY_SID"],
        "LINK_ELEMENTS_URL" => $arParams["LINK_ELEMENTS_URL"],
        'ADD_SECTIONS_CHAIN' => 'Y',
        "OFFERS_CART_PROPERTIES" => $arParams["OFFERS_CART_PROPERTIES"],
        "OFFERS_FIELD_CODE" => $arParams["DETAIL_OFFERS_FIELD_CODE"],
        "OFFERS_PROPERTY_CODE" => $arParams["DETAIL_OFFERS_PROPERTY_CODE"],
        "OFFERS_SORT_FIELD" => $arParams["OFFERS_SORT_FIELD"],
        "OFFERS_SORT_ORDER" => $arParams["OFFERS_SORT_ORDER"],

        "ELEMENT_ID" => $arResult["VARIABLES"]["ELEMENT_ID"],
        "ELEMENT_CODE" => $arResult["VARIABLES"]["ELEMENT_CODE"],
        "SECTION_ID" => $arResult["VARIABLES"]["SECTION_ID"],
        "SECTION_CODE" => $arResult["VARIABLES"]["SECTION_CODE"],
        "SECTION_URL" => $arResult["FOLDER"] . $arResult["URL_TEMPLATES"]["section"],
        "DETAIL_URL" => $arResult["FOLDER"] . $arResult["URL_TEMPLATES"]["element"],
        'SHOW_DEACTIVATED' => $arParams['SHOW_DEACTIVATED'],
      ),
      $component
    );

  ?>

</div>

<div class="container catalog-body">

  <?

    // Получить ID текущего  раздела
    $arSelect = ['ID', 'IBLOCK_SECTION_ID'];
    $arFilter = ['IBLOCK_ID' => $arParams['IBLOCK_ID'], 'CODE' => $arResult['VARIABLES']['ELEMENT_CODE']];
    $res = CIBlockElement::GetList([], $arFilter, false, false, $arSelect);
    if ($ob = $res->GetNextElement()) {
      $arElement = $ob->GetFields();
    }

    # Похожие товары

    // Получить список ID товаров из текущего раздела
    global $arSimilarFilter;

    $arSelect = ['ID'];
    $arFilter = [
      'IBLOCK_ID' => $arParams['IBLOCK_ID'],
      'SECTION_ID' => $arElement['IBLOCK_SECTION_ID'],
      'ACTIVE' => 'Y',
      'CATALOG_AVAILABLE' => 'Y',
      '!PREVIEW_PICTURE' => false,
    ];
    $res = CIBlockElement::GetList(['ID' => 'ASC'], $arFilter, false, ['nPageSize' => 16], $arSelect);
    while ($ob = $res->GetNextElement()) {
      $arElements = $ob->GetFields();
      $arSimilarFilter['ID'][] = $arElements['ID'];
    }

    \Bitrix\Main\Page\Asset::getInstance()->addCss(SITE_TEMPLATE_PATH . '/css/carousel.css');


    $APPLICATION->IncludeComponent(
      "bitrix:catalog.top",
      "products-carousel--without-tabs",
      array(
        "TITLE" => "Похожие товары",
        "ELEMENT_COUNT" => "16",
        "IBLOCK_ID" => "113",
        "CAROUSEL_ID" => "news-carousel-1",
        "ACTION_VARIABLE" => "action",
        "ADD_PICT_PROP" => "-",
        "ADD_PROPERTIES_TO_BASKET" => "Y",
        "ADD_TO_BASKET_ACTION" => "ADD",
        "BASKET_URL" => "/personal/basket.php",
        "CACHE_FILTER" => "N",
        "CACHE_GROUPS" => "Y",
        "CACHE_TIME" => "36000000",
        "CACHE_TYPE" => "A",
        "COMPARE_NAME" => "CATALOG_COMPARE_LIST",
        "COMPATIBLE_MODE" => "Y",
        "CONVERT_CURRENCY" => "N",
        "DETAIL_URL" => "/product/#ELEMENT_CODE#/",
        "DISPLAY_COMPARE" => "N",
        "ELEMENT_SORT_FIELD" => "RAND",
        "ELEMENT_SORT_FIELD2" => "sort",
        "ELEMENT_SORT_ORDER" => "asc",
        "ELEMENT_SORT_ORDER2" => "desc",
        "ENLARGE_PRODUCT" => "STRICT",
        "FILTER_NAME" => "arSimilarFilter",
        "HIDE_NOT_AVAILABLE" => "N",
        "HIDE_NOT_AVAILABLE_OFFERS" => "N",
        "LABEL_PROP" => "",
        "OFFERS_FIELD_CODE" => array(
          0 => "",
          1 => "",
        ),
        "OFFERS_LIMIT" => "0",
        "OFFERS_PROPERTY_CODE" => array(
          0 => "",
          1 => "",
        ),
        "PRICE_CODE" => array(
          0 => "Розничная",
        ),
        "PRICE_VAT_INCLUDE" => "Y",
        "PRODUCT_BLOCKS_ORDER" => "",
        "PRODUCT_DISPLAY_MODE" => "Y",
        "PRODUCT_ID_VARIABLE" => "id",
        "PRODUCT_PROPERTIES" => array(),
        "PRODUCT_PROPS_VARIABLE" => "prop",
        "PRODUCT_QUANTITY_VARIABLE" => "quantity",
        "PRODUCT_ROW_VARIANTS" => "",
        "PRODUCT_SUBSCRIPTION" => "Y",
        "PROPERTY_CODE" => array(
          0 => "CML2_TRAITS",
          1 => "KATEGORIYA_TOVARA",
          2 => "",
        ),
        "COMPONENT_TEMPLATE" => "products-carousel--without-tabs",
        "OFFERS_SORT_FIELD" => "sort",
        "OFFERS_SORT_ORDER" => "asc",
        "OFFERS_SORT_FIELD2" => "id",
        "OFFERS_SORT_ORDER2" => "desc",
        "LINE_ELEMENT_COUNT" => "3",
        "SECTION_URL" => "",
        "SEF_MODE" => "N",
        "USE_PRICE_COUNT" => "N",
        "SHOW_PRICE_COUNT" => "1",
        "USE_PRODUCT_QUANTITY" => "Y",
        "PARTIAL_PRODUCT_PROPERTIES" => "Y",
        "OFFERS_CART_PROPERTIES" => array(),
        "IBLOCK_TYPE" => "catalog1Cv83",
        "CUSTOM_FILTER" => "{\"CLASS_ID\":\"CondGroup\",\"DATA\":{\"All\":\"AND\",\"True\":\"True\"},\"CHILDREN\":[]}"
      ),
      false
    );

    # Сопутствующие товары
    $list = CIBlockSection::GetNavChain(113, $arElement['IBLOCK_SECTION_ID'], [], true);

    global $arRelatedFilter;

    $arSelect = ['ID'];
    $arFilter = [
      'IBLOCK_ID' => $arParams['IBLOCK_ID'],
      'SECTION_ID' => $list[0]['ID'],
      'ACTIVE' => 'Y',
      'CATALOG_AVAILABLE' => 'Y',
      '!PREVIEW_PICTURE' => false,
      'INCLUDE_SUBSECTIONS' => 'Y'
    ];
    $res = CIBlockElement::GetList(['ID' => 'ASC'], $arFilter, false, ['nPageSize' => 16], $arSelect);
    while ($ob = $res->GetNextElement()) {
      $arElements = $ob->GetFields();
      $arRelatedFilter['ID'][] = $arElements['ID'];
    }

    $APPLICATION->IncludeComponent(
      "bitrix:catalog.top",
      "products-carousel--without-tabs",
      array(
        "TITLE" => "Сопутствующие товары",
        "ELEMENT_COUNT" => "16",
        "IBLOCK_ID" => "113",
        "CAROUSEL_ID" => "news-carousel-2",
        "ACTION_VARIABLE" => "action",
        "ADD_PICT_PROP" => "-",
        "ADD_PROPERTIES_TO_BASKET" => "Y",
        "ADD_TO_BASKET_ACTION" => "ADD",
        "BASKET_URL" => "/personal/basket.php",
        "CACHE_FILTER" => "N",
        "CACHE_GROUPS" => "Y",
        "CACHE_TIME" => "36000000",
        "CACHE_TYPE" => "A",
        "COMPARE_NAME" => "CATALOG_COMPARE_LIST",
        "COMPATIBLE_MODE" => "Y",
        "CONVERT_CURRENCY" => "N",
        "DETAIL_URL" => "/product/#ELEMENT_CODE#/",
        "DISPLAY_COMPARE" => "N",
        "ELEMENT_SORT_FIELD" => "RAND",
        "ELEMENT_SORT_FIELD2" => "sort",
        "ELEMENT_SORT_ORDER" => "asc",
        "ELEMENT_SORT_ORDER2" => "desc",
        "ENLARGE_PRODUCT" => "STRICT",
        "FILTER_NAME" => "arRelatedFilter",
        "HIDE_NOT_AVAILABLE" => "N",
        "HIDE_NOT_AVAILABLE_OFFERS" => "N",
        "LABEL_PROP" => "",
        "OFFERS_FIELD_CODE" => array(
          0 => "",
          1 => "",
        ),
        "OFFERS_LIMIT" => "0",
        "OFFERS_PROPERTY_CODE" => array(
          0 => "",
          1 => "",
        ),
        "PRICE_CODE" => array(
          0 => "Розничная",
        ),
        "PRICE_VAT_INCLUDE" => "Y",
        "PRODUCT_BLOCKS_ORDER" => "",
        "PRODUCT_DISPLAY_MODE" => "Y",
        "PRODUCT_ID_VARIABLE" => "id",
        "PRODUCT_PROPERTIES" => array(),
        "PRODUCT_PROPS_VARIABLE" => "prop",
        "PRODUCT_QUANTITY_VARIABLE" => "quantity",
        "PRODUCT_ROW_VARIANTS" => "",
        "PRODUCT_SUBSCRIPTION" => "Y",
        "PROPERTY_CODE" => array(
          0 => "CML2_TRAITS",
          1 => "KATEGORIYA_TOVARA",
          2 => "",
        ),
        "COMPONENT_TEMPLATE" => "products-carousel--without-tabs",
        "OFFERS_SORT_FIELD" => "sort",
        "OFFERS_SORT_ORDER" => "asc",
        "OFFERS_SORT_FIELD2" => "id",
        "OFFERS_SORT_ORDER2" => "desc",
        "LINE_ELEMENT_COUNT" => "3",
        "SECTION_URL" => "",
        "SEF_MODE" => "N",
        "USE_PRICE_COUNT" => "N",
        "SHOW_PRICE_COUNT" => "1",
        "USE_PRODUCT_QUANTITY" => "Y",
        "PARTIAL_PRODUCT_PROPERTIES" => "Y",
        "OFFERS_CART_PROPERTIES" => array(),
        "IBLOCK_TYPE" => "catalog1Cv83",
        "CUSTOM_FILTER" => "{\"CLASS_ID\":\"CondGroup\",\"DATA\":{\"All\":\"AND\",\"True\":\"True\"},\"CHILDREN\":[]}"
      ),
      false
    );
  ?>
</div>

<section class="triggers">
  <div class="container">
    <div class="triggers__inner row">
      <div class="col-12 col-md">
        <div class="triggers__item trigger-footer trigger d-flex flex-row">
          <svg class="trigger__icon"
               width="72" height="72">
            <use xlink:href="#icon_package"></use>
          </svg>
          <div class="trigger__inner">
            <h4 class="trigger__title">Ассортимент</h4>
            <p class="trigger__desc">Всегда в наличии более 10 000 наименований строительных материалов</p>
          </div>
        </div>
      </div>
      <div class="col-12 col-md">
        <div class="triggers__item trigger-footer trigger d-flex flex-row">
          <svg class="trigger__icon"
               width="72" height="72">
            <use xlink:href="#icon_sale"></use>
          </svg>
          <div class="trigger__inner">
            <h4 class="trigger__title">Скидки</h4>
            <p class="trigger__desc">
              Гибкая система накопительных скидок после первой покупки
            </p>
          </div>
        </div>
      </div>
      <div class="col-12 col-md">
        <div class="triggers__item trigger-footer trigger d-flex flex-row">
          <svg class="trigger__icon"
               width="72" height="72">
            <use xlink:href="#icon_delivery-box"></use>
          </svg>
          <div class="trigger__inner">
            <h4 class="trigger__title">Доставка</h4>
            <p class="trigger__desc">В течение дня по предварительному звонку</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
