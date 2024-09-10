<?
$catalogIblockId = '113';
$baseCurrency = \Bitrix\Currency\CurrencyManager::getBaseCurrency();
$wishListCount = 0;
$basketTotal = 0.00;
$arBasketItems = array();
$dbBasketItems = CSaleBasket::GetList(
    array(
        'NAME' => 'ASC',
        'ID' => 'ASC'
    ),
    array(
        'FUSER_ID' => CSaleBasket::GetBasketUserID(),
        'LID' => SITE_ID,
        'ORDER_ID' => 'NULL'
    ),
    false,
    false,
    array('ID', 'PRODUCT_ID', 'DELAY', 'PRICE', 'QUANTITY')
);

while ($arItem = $dbBasketItems->GetNext()) {
    if ($arItem['DELAY'] == 'Y') {
        $wishListCount++;
    } else {
        $basketTotal += ($arItem['PRICE'] * $arItem['QUANTITY']);
    }
}
?>
<nav class="row w-100">
    <div class="col border-start border-2">
        <a href="/catalog/compare.php"
           class="header-link"
           title="Перейти на страницу сравнения"
           aria-label="Сравнение товаров">
            <svg width="38" height="38" aria-hidden="true">
                <use xlink:href="#icon_balance"></use>
            </svg>
            <span class="header-link-count header-link-count-compare js-compare-count"><?= count($_SESSION['CATALOG_COMPARE_LIST'][$catalogIblockId]['ITEMS'] ?? []) ?></span>
        </a>
    </div>
    <div class="col border-start border-2">
        <a href="/favourites"
           class="header-link header-link_favorites"
           title="Перейти к списку избранных товаров"
           aria-label="Избранные товары">
            <svg width="33" height="33" aria-hidden="true">
                <use xlink:href="#icon_heart"></use>
            </svg>
            <span class="header-link-count header-link-count-wishlist js-wishlist-count"><?= $wishListCount ?></span>
        </a>
    </div>
    <div class="col-8 col-xl-6 border-start border-2 d-flex justify-content-end">
        <?
            $APPLICATION->IncludeComponent(
                "bitrix:sale.basket.basket.line",
                "profnastil",
                array(
                    "PATH_TO_BASKET" => SITE_DIR . "personal/cart/",
                    "PATH_TO_PERSONAL" => SITE_DIR . "personal/",
                    "PATH_TO_PROFILE" => SITE_DIR . "personal/",
                    "PATH_TO_REGISTER" => SITE_DIR . "login/",
                    "POSITION_FIXED" => "N",
                    "SHOW_AUTHOR" => "N",
                    "SHOW_EMPTY_VALUES" => "Y",
                    "SHOW_NUM_PRODUCTS" => "Y",
                    "SHOW_PERSONAL_LINK" => "N",
                    "SHOW_PRODUCTS" => "N",
                    "SHOW_TOTAL_PRICE" => "Y",
                    "COMPONENT_TEMPLATE" => "profnastil",
                    "PATH_TO_ORDER" => SITE_DIR . "personal/order/make/",
                    "PATH_TO_AUTHORIZE" => "",
                    "SHOW_REGISTRATION" => "Y",
                    "HIDE_ON_BASKET_PAGES" => "N"
                ),
                false
            );
 ?>
    </div>
</nav>