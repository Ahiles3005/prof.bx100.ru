<?

if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) {
    die();
}
/** @var array $arParams */
/** @var array $arResult */
/** @global CMain $APPLICATION */
/** @global CUser $USER */
/** @global CDatabase $DB */
/** @var CBitrixComponentTemplate $this */
/** @var string $templateName */
/** @var string $templateFile */
/** @var string $templateFolder */
/** @var string $componentPath */

/** @var CBitrixComponent $component */

use Bitrix\Main\Loader;
use Bitrix\Main\ModuleManager;


if (isset ($arResult['VARIABLES']['SECTION_CODE_PATH'])) :

    $elemCheckCode = explode('/', $arResult['VARIABLES']['SECTION_CODE_PATH']);

    $elemCheckCode = array_pop($elemCheckCode);

    if (!empty ($elemCheckCode)) :

        $iblockId = (int)$arParams["IBLOCK_ID"];

        $filter = ['IBLOCK_ID' => $iblockId, 'CODE' => $elemCheckCode, 'ACTIVE' => 'Y'];

        $res = CIBlockElement::GetList([], $filter, false, false, ['ID']);

        if ($res->GetNextElement()) {
            LocalRedirect('/product/' . $elemCheckCode . '/', false, '301 Moved permanently');
            return;
        }


    endif;
endif;


if (isset ($_GET['list-type'])) {
    $arrTypeList = ['list', 'tile'];

    if (in_array($_GET['list-type'], $arrTypeList)) {
        $templateElem = $_SESSION['list-type'] = $_GET['list-type'];
    } else {
        $templateElem = 'tile';
    }
} elseif (isset ($_SESSION['list-type'])) {
    $arrTypeList = ['list', 'tile'];

    $templateElem = in_array($_SESSION['list-type'], $arrTypeList) ? $_SESSION['list-type'] : 'tile';
} else {
    $templateElem = 'tile';
}


$this->setFrameMode(true);

if (!isset($arParams['FILTER_VIEW_MODE']) || (string)$arParams['FILTER_VIEW_MODE'] == '') {
    $arParams['FILTER_VIEW_MODE'] = 'VERTICAL';
}
$arParams['USE_FILTER'] = (isset($arParams['USE_FILTER']) && $arParams['USE_FILTER'] == 'Y' ? 'Y' : 'N');

$isVerticalFilter = ('Y' == $arParams['USE_FILTER'] && $arParams["FILTER_VIEW_MODE"] == "VERTICAL");
$isSidebar = ($arParams["SIDEBAR_SECTION_SHOW"] == "Y" && isset($arParams["SIDEBAR_PATH"]) && !empty($arParams["SIDEBAR_PATH"]));
$isSidebarLeft = isset($arParams['SIDEBAR_SECTION_POSITION']) && $arParams['SIDEBAR_SECTION_POSITION'] === 'left';
/* $isFilter = ($arParams['USE_FILTER'] == 'Y');

if ($isFilter) {
    $arFilter = array(
        "IBLOCK_ID" => $arParams["IBLOCK_ID"],
        "ACTIVE" => "Y",
        "GLOBAL_ACTIVE" => "Y",
    );
    if (0 < intval($arResult["VARIABLES"]["SECTION_ID"]))
        $arFilter["ID"] = $arResult["VARIABLES"]["SECTION_ID"];
    elseif ('' != $arResult["VARIABLES"]["SECTION_CODE"])
        $arFilter["=CODE"] = $arResult["VARIABLES"]["SECTION_CODE"];

    $obCache = new CPHPCache();
    if ($obCache->InitCache(36000, serialize($arFilter), "/iblock/catalog")) {
        $arCurSection = $obCache->GetVars();
    } elseif ($obCache->StartDataCache()) {
        $arCurSection = array();
        if (Loader::includeModule("iblock")) {
            $dbRes = CIBlockSection::GetList(array(), $arFilter, false, array("ID"));

            if (defined("BX_COMP_MANAGED_CACHE")) {
                global $CACHE_MANAGER;
                $CACHE_MANAGER->StartTagCache("/iblock/catalog");

                if ($arCurSection = $dbRes->Fetch())
                    $CACHE_MANAGER->RegisterTag("iblock_id_" . $arParams["IBLOCK_ID"]);

                $CACHE_MANAGER->EndTagCache();
            } else {
                if (!$arCurSection = $dbRes->Fetch())
                    $arCurSection = array();
            }
        }
        $obCache->EndDataCache($arCurSection);
    }
    if (!isset($arCurSection))
        $arCurSection = array();
} */
?>
<div class="container catalog-body">

    <?php
    // Bread Crumbs
    $APPLICATION->IncludeComponent(
        "bitrix:breadcrumb",
        "shop",
        [
            "START_FROM" => "0",
        ]
    ); ?>

    <section class="catalog">
        <?

        $sectionId = (int)$arResult["VARIABLES"]["SECTION_ID"];

        $arCurrentSection = CIBlockSection::GetList(
            ["SORT" => "ASC"],
            ['IBLOCK_ID' => $arParams['IBLOCK_ID'], 'ID' => $sectionId, 'CNT_ACTIVE' => 'Y'],
            true,
            ['ID', 'NAME', 'CODE', 'DEPTH_LEVEL', 'DESCRIPTION', 'UF_SECTIONS_LINKED']
        )->Fetch();


        $ipropValues = new \Bitrix\Iblock\InheritedProperty\SectionValues($arParams['IBLOCK_ID'], $sectionId);

        $IPROPERTY = $ipropValues->getValues();

        $h1 = isset ($IPROPERTY['SECTION_PAGE_TITLE']) && !empty ($IPROPERTY['SECTION_PAGE_TITLE']) ? $IPROPERTY['SECTION_PAGE_TITLE'] : $arCurrentSection['NAME'];

        $APPLICATION->IncludeComponent(
            "pfn:brush-title",
            "",
            [
                "TITLE" => $h1,
            ]
        );


        global $sectionsFilter;

        if (
        empty ($arCurrentSection['UF_SECTIONS_LINKED'])
        ) :

            $sectionsFilter = ['UF_SECTION_LINK' => false];

            $APPLICATION->IncludeComponent(
                "bitrix:catalog.section.list",
                "subcategories",
                [
                    "IBLOCK_ID" => $arParams['IBLOCK_ID'],
                    "TOP_DEPTH" => 1,
                    "COUNT_ELEMENTS" => 'Y',
                    "COUNT_ELEMENTS_FILTER" => "CNT_ACTIVE",
                    "COMPONENT_TEMPLATE" => "subcategories",
                    "SECTION_ID" => $sectionId,
                    "SECTION_FIELDS" => array(),
                    "SECTION_USER_FIELDS" => array(),
                    "FILTER_NAME" => "sectionsFilter",
                    "SECTION_URL" => "",
                    "CACHE_TYPE" => "A",
                    "CACHE_TIME" => "36000000",
                    "CACHE_GROUPS" => "N",
                    "CACHE_FILTER" => "Y",
                    "ADD_SECTIONS_CHAIN" => "N"
                ],
                $component
            );

        endif;
        ?>


        <!--  Catalog controls form  -->
        <section class="section mb-5 mb-lg-3">

            <?
            if (
                isset ($arCurrentSection['UF_SECTIONS_LINKED']) &&
                !empty ($arCurrentSection['UF_SECTIONS_LINKED'])
            ) :

                $sectionsFilter = [];
                $sectionsFilter = ['ID' => $arCurrentSection['UF_SECTIONS_LINKED']];

                $APPLICATION->IncludeComponent(
                    "bitrix:catalog.section.list",
                    "tags",
                    [
                        "IBLOCK_ID" => $arParams['IBLOCK_ID'],
                        "TOP_DEPTH" => $arCurrentSection['DEPTH_LEVEL'] + 1,
                        "COUNT_ELEMENTS" => $arParams['SECTION_COUNT_ELEMENTS'],
                        "SECTION_CODE" => "",
                        "COUNT_ELEMENTS_FILTER" => "CNT_ACTIVE",
                        "SECTION_FIELDS" => array(
                            0 => "",
                            1 => "",
                        ),
                        "SECTION_USER_FIELDS" => array(
                            0 => "",
                            1 => "",
                        ),
                        "FILTER_NAME" => "sectionsFilter",
                        "SECTION_URL" => "",
                        "CACHE_TYPE" => "A",
                        "CACHE_TIME" => "36000000",
                        "CACHE_GROUPS" => "N",
                        "CACHE_FILTER" => "N",
                        "ADD_SECTIONS_CHAIN" => "N"
                    ],
                    $component
                );

            endif; ?>

            <div class="catalog-controls__bottom">
                <!-- Applied filters -->
                <?
                $APPLICATION->ShowViewContent('filter_result'); ?>

                <!-- Catalog sort -->
                <div class="catalog-controls__sort catalog-sort ms-auto">
                    <div class="goods-count" id="goodsCount">
                        Товаров: <?= $arCurrentSection['ELEMENT_CNT'] ?>
                    </div>
                    <form class="catalog__controls catalog-controls"
                          aria-controls="product-listings"
                          aria-label="Настройки фильтрации и сортировки списка товаров" action="<?
                    $APPLICATION->GetCurPage() ?>"
                          method="get" name="sortData"/>
                    <label class="align-items-center catalog-sort__label d-flex">
                        Сортировать:&nbsp;
                        <span class="catalog-sort__select link">
                            <?
                            $arParams["SORT_BUTTONS"] = array(
                                0 => "SHOWS",
                                1 => "NAME",
                                2 => "PRICE",
                                3 => "PRICE_UP",
                                5 => "PRICE_DOWN",
                            );
                            $arNameOptions = array(
                                'SHOWS' => [
                                    'NAME' => "По популярности",
                                    'SELECT' => 'N',
                                    'SORT' => 'asc',
                                ],
                                'NAME' => [
                                    'NAME' => "По названию",
                                    'SELECT' => 'N',
                                    'SORT' => 'asc',
                                ],
                                'PRICE_UP' => [
                                    'NAME' => "Сначала дешевые",
                                    'SELECT' => 'N',
                                    'SORT' => 'asc',
                                ],
                                'PRICE_DOWN' => [
                                    'NAME' => "Сначала дорогие",
                                    'SELECT' => 'N',
                                    'SORT' => 'desc',
                                ],
                            );
                            $arAvailableSort = array();
                            $arSorts = $arParams["SORT_BUTTONS"];
                            if (in_array("SHOWS", $arSorts)) {
                                $arAvailableSort["SHOWS"] = array("SHOWS", "desc");
                            }
                            if (in_array("NAME", $arSorts)) {
                                $arAvailableSort["NAME"] = array("NAME", "asc");
                            }
                            if (in_array("PRICE_UP", $arSorts)) {
                                $arSortPrices = $arParams["SORT_PRICES"];
                                if ($arSortPrices == "MINIMUM_PRICE" || $arSortPrices == "MAXIMUM_PRICE") {
                                    $arAvailableSort["PRICE_UP"] = array("PROPERTY_" . $arSortPrices, "asc");
                                } else {
                                    $price = CCatalogGroup::GetList(
                                        array(),
                                        array("NAME" => $arParams["SORT_PRICES"]),
                                        false,
                                        false,
                                        array("ID", "NAME")
                                    )->GetNext();
//                $arAvailableSort["PRICE"] = array("CATALOG_PRICE_" . $price["ID"], "desc");
                                    $arAvailableSort["PRICE_UP"] = array("CATALOG_PRICE_7", "asc");
                                }
                            }
                            if (in_array("PRICE_DOWN", $arSorts)) {
                                $arSortPrices = $arParams["SORT_PRICES"];
                                if ($arSortPrices == "MINIMUM_PRICE" || $arSortPrices == "MAXIMUM_PRICE") {
                                    $arAvailableSort["PRICE_DOWN"] = array("PROPERTY_" . $arSortPrices, "desc");
                                } else {
                                    $price = CCatalogGroup::GetList(
                                        array(),
                                        array("NAME" => $arParams["SORT_PRICES"]),
                                        false,
                                        false,
                                        array("ID", "NAME")
                                    )->GetNext();
//                $arAvailableSort["PRICE"] = array("CATALOG_PRICE_" . $price["ID"], "desc");
                                    $arAvailableSort["PRICE_DOWN"] = array("CATALOG_PRICE_7", "desc");
                                }
                            }
                            if (in_array("QUANTITY", $arSorts)) {
                                $arAvailableSort["CATALOG_AVAILABLE"] = array("QUANTITY", "desc");
                            }
                            $sort = "SHOWS";
                            if ((array_key_exists("sort", $_REQUEST) && array_key_exists(
                                        ToUpper($_REQUEST["sort"]),
                                        $arAvailableSort
                                    )) || (array_key_exists("sort", $_SESSION) && array_key_exists(
                                        ToUpper($_SESSION["sort"]),
                                        $arAvailableSort
                                    )) || $arParams["ELEMENT_SORT_FIELD"]) {
                                if ($_REQUEST["sort"]) {
                                    $sort = ToUpper($_REQUEST["sort"]);
                                    $_SESSION["sort"] = ToUpper($_REQUEST["sort"]);
                                } elseif ($_SESSION["sort"]) {
                                    $sort = ToUpper($_SESSION["sort"]);
                                } else {
                                    $sort = ToUpper($arParams["ELEMENT_SORT_FIELD"]);
                                }
                            }

                            $sort_order = $arAvailableSort[$sort][1];
                            if ((array_key_exists("order", $_REQUEST) && in_array(
                                        ToLower($_REQUEST["order"]),
                                        array("asc", "desc")
                                    )) || (array_key_exists("order", $_REQUEST) && in_array(
                                        ToLower($_REQUEST["order"]),
                                        array("asc", "desc")
                                    )) || $arParams["ELEMENT_SORT_ORDER"]) {
                                if ($_REQUEST["order"]) {
                                    $sort_order = $_REQUEST["order"];
                                    $_SESSION["order"] = $_REQUEST["order"];
                                } elseif ($_SESSION["order"]) {
                                    $sort_order = $_SESSION["order"];
                                } else {
                                    $sort_order = ToLower($arParams["ELEMENT_SORT_ORDER"]);
                                }
                            }
                            $arNameOptions[$sort]['SELECT'] = 'Y';
                            if ($sort == 'PRICE_DOWN' or $sort == 'PRICE_UP') {
                                $sort = 'CATALOG_PRICE_7';
                            }
                            ?>
        <select class="js-choice form-select form-select-sm"
                data-toggler-styles-reset="true"
                aria-label="Порядок сортировки товаров"
                name="sort_by"
                onchange="window.location.href = this.options[this.selectedIndex].value">
        <?
        foreach ($arAvailableSort as $key => $val): ?>
            <?
            $newSort = $sort_order == 'desc' ? 'asc' : 'desc'; ?>
            <option class="sort_btn <?= ($sort == $key ? 'current' : '') ?> <?= $sort_order ?> <?= $key ?>"
                    <?= $arNameOptions[$key]['SELECT'] == 'Y' ? 'selected' : '' ?>
                    value="<?= $APPLICATION->GetCurPageParam(
                        'sort=' . $key . '&order=' . $arNameOptions[$key]['SORT'],
                        ['sort', 'order', 'bxajaxid']
                    ) ?>"><?= $arNameOptions[$key]['NAME'] ?></option>
        <?
        endforeach; ?>
        </select>


        <?
        if ($sort == "PRICE") {
            $sort = $arAvailableSort["PRICE"][0];
        }
        if ($sort == "CATALOG_AVAILABLE") {
            $sort = "CATALOG_QUANTITY";
        }
        ?>


                        </span>
                    </label>
                    </form>

                    <div class="change-catalog-list">

                        <?
                        if ($templateElem === 'list'): ?>

                            <a href="<?= $APPLICATION->GetCurPageParam('list-type=tile', ['list-type']) ?>"
                               class="type-tile" title="Выводить товары плиткой"></a>

                            <span class="type-list"></span>

                        <?
                        else: ?>

                            <span class="type-tile"></span>

                            <a href="<?= $APPLICATION->GetCurPageParam('list-type=list', ['list-type']) ?>"
                               title="Выводить товары списком"></a>

                        <?
                        endif; ?>


                    </div>

                </div>
            </div>


            <div class="mobile-filter-toggle d-lg-none">
                <button class="mobile-filter-toggle__button"
                        data-bs-target="#filter-mobile"
                        data-bs-toggle="modal"
                        type="button">
                    <svg width="24" height="24">
                        <use xlink:href="#icon_filter"></use>
                    </svg>
                    Фильтры
                    <span>0</span>
                </button>
            </div>


        </section>


        <div class="sort_filter">

        </div>
        <!--/noindex-->
        <!-- x11-->
        <div class="catalog__main row">
            <div class="col-12 mb-3 mb-lg-0 col-lg-3 " role="complementary">
                <section class=" d-none d-lg-block bx-smart-filter">
                    <span class="popup-window-close-icon"></span>
                    <div class="section section_padding js-sidebar-inner pb-3">
                        <?php
                        $GLOBALS['smartPreFilter']['>CATALOG_QUANTITY'] = 0;
                        $ajaxId = isset($arParams['AJAX_ID']) ? $arParams['AJAX_ID'] : false;
                        $APPLICATION->IncludeComponent(
                            "bitrix:catalog.smart.filter",
                            'profnastil',
                            array(
                                "CACHE_GROUPS" => "Y",
                                "CACHE_TIME" => "36000000",
                                "CACHE_TYPE" => "A",
                                "CONVERT_CURRENCY" => "N",
                                "DISPLAY_ELEMENT_COUNT" => "Y",
                                "FILTER_NAME" => "arrFilter",
                                "FILTER_VIEW_MODE" => "vertical",
                                "HIDE_NOT_AVAILABLE" => "N",
                                "IBLOCK_ID" => "113",
//                            "PAGER_PARAMS_NAME" => "arrPager",
                                "POPUP_POSITION" => "left",
                                "PREFILTER_NAME" => "smartPreFilter",
                                "PRICE_CODE" => array(
                                    0 => "Розничная",
                                ),
                                "SAVE_IN_SESSION" => "N",
                                "SECTION_CODE" => "#SECTION_CODE#",
                                "SECTION_CODE_PATH" => "#SECTION_CODE_PATH#",
                                "SECTION_DESCRIPTION" => "-",
                                "SECTION_ID" => $arResult["VARIABLES"]["SECTION_ID"],
                                "SECTION_TITLE" => "-",
                                "SEF_MODE" => 'Y',
                                "SEF_RULE" => $arResult["FOLDER"] . $arResult["URL_TEMPLATES"]["smart_filter"],
                                "SMART_FILTER_PATH" => $arResult["VARIABLES"]["SMART_FILTER_PATH"],
                                "TEMPLATE_THEME" => "blue",
                                "XML_EXPORT" => "N",
                                "COMPONENT_TEMPLATE" => "visual_vertical",
                                "AJAX_MODE" => "N",
                                'AJAX_ID' => $ajaxId
                            ),
                            $component
                        );
                        //      $component   "INSTANT_RELOAD" => "Y" //Это указываем у фильтра - загрузка результатов при выборе фильтра
                        /*}*/
                        ?>
                    </div>
                </section>
            </div>
            <div class="col-12 col-lg-9 js-main-content <?= $templateElem ?>" role="main">
                <?
                $GLOBALS['arrFilter']['>CATALOG_QUANTITY'] = 0; ?>
                <?
                $APPLICATION->IncludeComponent(
                    "bitrix:catalog.section",
                    '',
                    array(
                        "IBLOCK_TYPE" => $arParams["IBLOCK_TYPE"],
                        "IBLOCK_ID" => $arParams["IBLOCK_ID"],
//						"ELEMENT_SORT_FIELD" => $arParams["ELEMENT_SORT_FIELD"],
                        "ELEMENT_SORT_FIELD" => $sort,
//						"ELEMENT_SORT_ORDER" => $arParams["ELEMENT_SORT_ORDER"],
                        "ELEMENT_SORT_ORDER" => $sort_order,
                        "PROPERTY_CODE" => $arParams["LIST_PROPERTY_CODE"],
                        "META_KEYWORDS" => $arParams["LIST_META_KEYWORDS"],
                        "META_DESCRIPTION" => $arParams["LIST_META_DESCRIPTION"],
                        "BROWSER_TITLE" => $arParams["LIST_BROWSER_TITLE"],
                        "INCLUDE_SUBSECTIONS" => $arParams["INCLUDE_SUBSECTIONS"],
                        "BASKET_URL" => $arParams["BASKET_URL"],
                        "ACTION_VARIABLE" => $arParams["ACTION_VARIABLE"],
                        "PRODUCT_ID_VARIABLE" => $arParams["PRODUCT_ID_VARIABLE"],
                        "SECTION_ID_VARIABLE" => $arParams["SECTION_ID_VARIABLE"],
                        "FILTER_NAME" => $arParams["FILTER_NAME"],
                        "DISPLAY_PANEL" => $arParams["DISPLAY_PANEL"],
                        "CACHE_TYPE" => $arParams["CACHE_TYPE"],
                        "CACHE_TIME" => $arParams["CACHE_TIME"],
                        "SET_VIEWED_IN_COMPONENT" => 'Y',
                        "CACHE_FILTER" => $arParams["CACHE_FILTER"],
                        "CACHE_GROUPS" => $arParams["CACHE_GROUPS"],
                        "SET_TITLE" => $arParams["SET_TITLE"],
                        "SET_STATUS_404" => $arParams["SET_STATUS_404"],
                        "DISPLAY_COMPARE" => $arParams["USE_COMPARE"],
                        "PAGE_ELEMENT_COUNT" => $arParams["PAGE_ELEMENT_COUNT"],
                        "LINE_ELEMENT_COUNT" => $arParams["LINE_ELEMENT_COUNT"],
                        "PRICE_CODE" => $arParams["PRICE_CODE"],
                        "USE_PRICE_COUNT" => $arParams["USE_PRICE_COUNT"],
                        "SHOW_PRICE_COUNT" => $arParams["SHOW_PRICE_COUNT"],

                        "PRICE_VAT_INCLUDE" => $arParams["PRICE_VAT_INCLUDE"],

                        "DISPLAY_TOP_PAGER" => $arParams["DISPLAY_TOP_PAGER"],
                        "DISPLAY_BOTTOM_PAGER" => $arParams["DISPLAY_BOTTOM_PAGER"],
                        "PAGER_TITLE" => $arParams["PAGER_TITLE"],
                        "PAGER_SHOW_ALWAYS" => $arParams["PAGER_SHOW_ALWAYS"],
                        "PAGER_TEMPLATE" => $arParams["PAGER_TEMPLATE"],
                        "PAGER_DESC_NUMBERING" => $arParams["PAGER_DESC_NUMBERING"],
                        "PAGER_DESC_NUMBERING_CACHE_TIME" => $arParams["PAGER_DESC_NUMBERING_CACHE_TIME"],
                        "PAGER_SHOW_ALL" => $arParams["PAGER_SHOW_ALL"],

                        "OFFERS_CART_PROPERTIES" => $arParams["OFFERS_CART_PROPERTIES"],
                        "OFFERS_FIELD_CODE" => $arParams["LIST_OFFERS_FIELD_CODE"],
                        "OFFERS_PROPERTY_CODE" => $arParams["LIST_OFFERS_PROPERTY_CODE"],
                        "OFFERS_SORT_FIELD" => $arParams["OFFERS_SORT_FIELD"],
                        "OFFERS_SORT_ORDER" => $arParams["OFFERS_SORT_ORDER"],
                        "OFFERS_LIMIT" => $arParams["LIST_OFFERS_LIMIT"],

                        "SECTION_ID" => $arResult["VARIABLES"]["SECTION_ID"],
                        "SECTION_CODE" => $arResult["VARIABLES"]["SECTION_CODE"],
                        "SECTION_URL" => $arResult["FOLDER"] . $arResult["URL_TEMPLATES"]["section"],
                        "DETAIL_URL" => $arResult["FOLDER"] . $arResult["URL_TEMPLATES"]["element"],
                        'ELEMENT_TEMPLATE' => $templateElem

                    ),
                    $component
                ); ?>

                <!-- Pagination -->
                <?
                if (!$_GET['PAGEN_1']): ?>
                    <div class="col-12">
                        <div class="spolier-text my-5">
                            <?= $arCurrentSection["DESCRIPTION"]; ?>
                        </div>
                    </div>
                <?
                endif; ?>
            </div>
        </div>
    </section>

    <!-- Recently watched products -->
    <?
    $APPLICATION->IncludeComponent(
        "bitrix:catalog.products.viewed",
        "test",
        array(
            "ACTION_VARIABLE" => "action_cpv",
            "ADDITIONAL_PICT_PROP_101" => "-",
            "ADDITIONAL_PICT_PROP_111" => "-",
            "ADDITIONAL_PICT_PROP_112" => "-",
            "ADDITIONAL_PICT_PROP_113" => "-",
            "ADDITIONAL_PICT_PROP_115" => "-",
            "ADDITIONAL_PICT_PROP_14" => "-",
            "ADDITIONAL_PICT_PROP_86" => "-",
            "ADDITIONAL_PICT_PROP_87" => "-",
            "ADDITIONAL_PICT_PROP_88" => "-",
            "ADDITIONAL_PICT_PROP_93" => "-",
            "ADDITIONAL_PICT_PROP_94" => "-",
            "ADD_PROPERTIES_TO_BASKET" => "Y",
            "ADD_TO_BASKET_ACTION" => "ADD",
            "BASKET_URL" => "/personal/basket.php",
            "CACHE_GROUPS" => "Y",
            "CACHE_TIME" => "3600",
            "CACHE_TYPE" => "A",
            "CART_PROPERTIES_101" => array("", ""),
            "CART_PROPERTIES_111" => array(""),
            "CART_PROPERTIES_112" => array("", ""),
            "CART_PROPERTIES_113" => array(""),
            "CART_PROPERTIES_115" => array("", ""),
            "CART_PROPERTIES_14" => array(""),
            "CART_PROPERTIES_86" => array(""),
            "CART_PROPERTIES_87" => array(""),
            "CART_PROPERTIES_88" => array(""),
            "CART_PROPERTIES_93" => array("", ""),
            "CART_PROPERTIES_94" => array("", ""),
            "CONVERT_CURRENCY" => "N",
            "DEPTH" => "2",
            "DISPLAY_COMPARE" => "N",
            "ENLARGE_PRODUCT" => "STRICT",
            "HIDE_NOT_AVAILABLE" => "N",
            "HIDE_NOT_AVAILABLE_OFFERS" => "N",
            "IBLOCK_ID" => "113",
            "IBLOCK_MODE" => "multi",
            "IBLOCK_TYPE" => "catalog1Cv83",
            "LABEL_PROP_111" => array(""),
            "LABEL_PROP_113" => array(""),
            "LABEL_PROP_14" => array(""),
            "LABEL_PROP_86" => array(""),
            "LABEL_PROP_87" => array(""),
            "LABEL_PROP_88" => array(""),
            "LABEL_PROP_MOBILE_111" => array(),
            "LABEL_PROP_MOBILE_113" => array(),
            "LABEL_PROP_MOBILE_14" => array(),
            "LABEL_PROP_MOBILE_86" => array(),
            "LABEL_PROP_MOBILE_87" => array(),
            "LABEL_PROP_MOBILE_88" => array(),
            "LABEL_PROP_POSITION" => "top-left",
            "LINE_ELEMENT_COUNT" => "3",
            "MESS_BTN_ADD_TO_BASKET" => "В корзину",
            "MESS_BTN_BUY" => "Купить",
            "MESS_BTN_DETAIL" => "Подробнее",
            "MESS_BTN_SUBSCRIBE" => "Подписаться",
            "MESS_NOT_AVAILABLE" => "Нет в наличии",
            "OFFER_TREE_PROPS_101" => array(),
            "OFFER_TREE_PROPS_112" => array(),
            "OFFER_TREE_PROPS_115" => array(),
            "OFFER_TREE_PROPS_93" => array(),
            "OFFER_TREE_PROPS_94" => array(),
            "PAGE_ELEMENT_COUNT" => "5",
            "PARTIAL_PRODUCT_PROPERTIES" => "N",
            "PRICE_CODE" => array("Розничная"),
            "PRICE_VAT_INCLUDE" => "Y",
            "PRODUCT_BLOCKS_ORDER" => "price,props,sku,quantityLimit,quantity,buttons",
            "PRODUCT_ID_VARIABLE" => "id",
            "PRODUCT_PROPS_VARIABLE" => "prop",
            "PRODUCT_QUANTITY_VARIABLE" => "quantity",
            "PRODUCT_ROW_VARIANTS" => "[{'VARIANT':'2','BIG_DATA':false},{'VARIANT':'2','BIG_DATA':false},{'VARIANT':'2','BIG_DATA':false}]",
            "PRODUCT_SUBSCRIPTION" => "Y",
            "PROPERTY_CODE_101" => array("", ""),
            "PROPERTY_CODE_111" => array(""),
            "PROPERTY_CODE_112" => array("", ""),
            "PROPERTY_CODE_113" => array(""),
            "PROPERTY_CODE_115" => array("", ""),
            "PROPERTY_CODE_14" => array(""),
            "PROPERTY_CODE_86" => array(""),
            "PROPERTY_CODE_87" => array(""),
            "PROPERTY_CODE_88" => array(""),
            "PROPERTY_CODE_93" => array("", ""),
            "PROPERTY_CODE_94" => array("", ""),
            "PROPERTY_CODE_MOBILE_111" => array(""),
            "PROPERTY_CODE_MOBILE_113" => array(),
            "PROPERTY_CODE_MOBILE_14" => array(""),
            "PROPERTY_CODE_MOBILE_86" => array(""),
            "PROPERTY_CODE_MOBILE_87" => array(""),
            "PROPERTY_CODE_MOBILE_88" => array(""),
            "SECTION_CODE" => "",
            "SECTION_ELEMENT_CODE" => "",
            "SECTION_ELEMENT_ID" => $GLOBALS["CATALOG_CURRENT_ELEMENT_ID"],
            "SECTION_ID" => $GLOBALS["CATALOG_CURRENT_SECTION_ID"],
            "SHOW_CLOSE_POPUP" => "N",
            "SHOW_DISCOUNT_PERCENT" => "N",
            "SHOW_FROM_SECTION" => "N",
            "SHOW_MAX_QUANTITY" => "N",
            "SHOW_OLD_PRICE" => "N",
            "SHOW_PRICE_COUNT" => "1",
            "SHOW_PRODUCTS_111" => "N",
            "SHOW_PRODUCTS_113" => "N",
            "SHOW_PRODUCTS_14" => "N",
            "SHOW_PRODUCTS_86" => "N",
            "SHOW_PRODUCTS_87" => "N",
            "SHOW_PRODUCTS_88" => "N",
            "SHOW_SLIDER" => "Y",
            "SLIDER_INTERVAL" => "3000",
            "SLIDER_PROGRESS" => "N",
            "TEMPLATE_THEME" => "blue",
            "USE_ENHANCED_ECOMMERCE" => "N",
            "USE_PRICE_COUNT" => "N",
            "USE_PRODUCT_QUANTITY" => "N"
        )
    ); ?>
    <?
    /*$APPLICATION->IncludeComponent(
       "bitrix:catalog.section.list",
       "description",
       array(
           "IBLOCK_TYPE" => $arParams["IBLOCK_TYPE"],
           "IBLOCK_ID" => $arParams["IBLOCK_ID"],
           "SECTION_ID" => $arResult["VARIABLES"]["SECTION_ID"],
           "SECTION_CODE" => $arResult["VARIABLES"]["SECTION_CODE"],
           "DISPLAY_PANEL" => "N",
           "CACHE_TYPE" => $arParams["CACHE_TYPE"],
           "CACHE_TIME" => $arParams["CACHE_TIME"],
           "CACHE_GROUPS" => $arParams["CACHE_GROUPS"],

           "SECTION_URL" => $arResult["FOLDER"] . $arResult["URL_TEMPLATES"]["section"],
       ),
       $component
   ); */

    if ($sectionId > 0) {
        $list = CIBlockSection::GetNavChain(false, $sectionId, [], true);
        $i = 0;
        $patch = '';
        foreach ($list as $arSectionPath) {
            if ($i == 0) {
                $patch .= '/catalog/' . $arSectionPath['CODE'] . '/';
            } else {
                $patch .= $arSectionPath['CODE'] . '/';
            }

            $APPLICATION->AddChainItem($arSectionPath['NAME'], $patch);

            $i++;
        }
    }
    $pageNumber = $_GET['PAGEN_1'];
    if ($pageNumber) {
        $title = $APPLICATION->GetPageProperty('title');
        $description = $APPLICATION->GetPageProperty('description');
        if ($title) {
            $APPLICATION->SetPageProperty('title', $title . ' - страница ' . $pageNumber);
        }

        if ($description) {
            $APPLICATION->SetPageProperty('description', $description . ' - страница ' . $pageNumber);
        }
    }


    ?>
</div>
