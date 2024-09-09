<?php
/** @global CMain $APPLICATION */

/** @global $USER */

use Bitrix\Main\Loader;
Loader::includeModule("sale");
$delaydBasketItems = CSaleBasket::GetList(
    array(),
    array(
        "FUSER_ID" => CSaleBasket::GetBasketUserID(),
        "LID" => SITE_ID,
        "ORDER_ID" => "NULL",
        "DELAY" => "Y"
    ),
    array()
);
?>


<header class="header js-header-element d-none d-lg-block" id="header">
    <div class="header__top">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-8">
                    <div class="row align-items-center">
                        <div class="col-12">
                            <?php
                            // Верхнее меню
                            $APPLICATION->IncludeComponent(
                                "bitrix:menu",
                                "menu.header-top",
                                [
                                    "ALLOW_MULTI_SELECT" => "N",
                                    "DELAY" => "N",
                                    "MAX_LEVEL" => "1",
                                    "MENU_CACHE_TIME" => "3600",
                                    "MENU_CACHE_TYPE" => "A",
                                    "MENU_CACHE_USE_GROUPS" => "Y",
                                    "ROOT_MENU_TYPE" => "top",
                                    "CHILD_MENU_TYPE" => "top",
                                    "USE_EXT" => "N",
                                    "CACHE_SELECTED_ITEMS" => "N"
                                ],
                                false
                            );
                            ?>
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <div class="d-flex justify-content-end">
                        <button type="button"
                                class="me-2 ps-3 pe-3 header__button button button_secondary btn btn-primary"
                                data-bs-toggle="modal" data-bs-target="#priceModal">
                            <svg class="" width="21" height="21">
                                <use xlink:href="#iconDownload"></use>
                            </svg>
                            Скачать прайс
                        </button>
                        <? if ($USER->IsAuthorized()): ?>
                            <a href="#"
                               class="ps-3 pe-3 header__button button button_secondary btn btn-primary btn-complite"
                               title="Открыть личный кабинет" data-bs-toggle="modal"
                               data-bs-target="#personalModal"><?= $USER->GetFullName(); ?></a>
                        <? else: ?>
                            <? $APPLICATION->IncludeFile('components/customs/personalAccount/index.php'); ?>
                        <? endif; ?>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="header__main js-fixed-header">
        <div class="container">
            <div class="row">
                <div class="col-2 d-flex position-static">
                    <div class="logo">
                        <a href="/"
                           class="logo__link"
                           title="Перейти на главную страницу">
                            <img src="<?= SITE_TEMPLATE_PATH ?>/images/logo.png"
                                 class="logo__image"
                                 alt="Логотип «Профнастил»"
                                 loading="lazy"
                                 width="125" height="45">
                        </a>
                    </div>
                    <div class="catalog-menu js-catalog-dropdown-wrapper">
                        <button class="catalog-menu__button btn button button_with-icon hamburger__wrap"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                                id="dropdownMenuButton"
                                aria-label="Открыть меню категорий каталога"
                                type="button">
                            <span class="hamburger__box" aria-hidden="true">
                                <span class="hamburger__inner"></span>
                            </span>
                            <span><b>Каталог</b></span>
                        </button>
                        <div class="catalog-menu__dropdown dropdown-menu js-catalog-dropdown"
                             aria-labelledby="dropdownMenuButton">
                            <?  $APPLICATION->IncludeComponent(
                                "bitrix:menu",
                                "menu.catalog",
                                array(
                                    "MENU_CACHE_TYPE" => "A",
                                    "MENU_CACHE_TIME" => "36000000",
                                    "MENU_CACHE_USE_GROUPS" => "N",
                                    "MENU_THEME" => "site",
                                    "CACHE_SELECTED_ITEMS" => "N",
                                    "MAX_LEVEL" => "3",
                                    "CHILD_MENU_TYPE" => "left",
                                    "USE_EXT" => "Y",
                                    "DELAY" => "N",
                                    "ALLOW_MULTI_SELECT" => "N",
                                    "ROOT_MENU_TYPE" => "left",
                                ),
                                false
                            );
                            ?>
                        </div>
                    </div>
                </div>
                <div class="col-4 col-xxl-5">
                    <? $APPLICATION->IncludeComponent(
                        "bitrix:search.title",
                        "profnastil",
                        array(
                            "CATEGORY_0" => array(0 => "iblock_catalog1Cv83",),
                            "CATEGORY_0_TITLE" => "Товары",
                            "CATEGORY_0_iblock_catalog1Cv83" => array(0 => "113",),
                            "CHECK_DATES" => "Y",
                            "COMPONENT_TEMPLATE" => "profnastil",
                            "CONTAINER_ID" => "title-search",
                            "CONVERT_CURRENCY" => "Y",
                            "CURRENCY_ID" => "RUB",
                            "INPUT_ID" => "title-search-input",
                            "NUM_CATEGORIES" => "1",
                            "ORDER" => "date",
                            "PAGE" => "#SITE_DIR#search/index.php",
                            "PREVIEW_HEIGHT" => "100",
                            "PREVIEW_TRUNCATE_LEN" => "150",
                            "PREVIEW_WIDTH" => "100",
                            "PRICE_CODE" => array(0 => "Розничная",),
                            "PRICE_VAT_INCLUDE" => "N",
                            "SHOW_INPUT" => "Y",
                            "SHOW_OTHERS" => "Y",
                            "SHOW_PREVIEW" => "Y",
                            "TOP_COUNT" => "6",
                            "USE_LANGUAGE_GUESS" => "N"
                        )
                    );
                    ?>
                </div>
                <div class="col-6 col-xxl-5">
                    <div class="row align-items-center">
                        <div class="col-4">
                            <div class="header-phone">
                                <a href="tel:+74242777566"
                                   title="Позвонить нам"
                                   class="header-phone__link">
                                    +7 (4242) 777-566
                                </a>
                                <a href="https://api.whatsapp.com/send/?phone=79248871500&text=Здравствуйте.."
                                   title="Написать на Whatsapp"
                                   class="header-mail__link"
                                   target="_blank">
                                    Написать на Whatsapp
                                </a>
                                <a href="mailto:op1@tdprofnastil.ru"
                                   class="header-mail__link"
                                   title="Написать нам">
                                    op1@tdprofnastil.ru
                                </a>
                            </div>
                        </div>
                        <div class="col-8 col-xxl-8 ms-auto d-flex justify-content-end">
                            <? include __DIR__ . '/nav.php'; ?>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="header__bottom">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-2"></div>
                <div class="col">
                    <div class="menu__shop__wrapper">
                        <?php
                        // Главное меню
                        $APPLICATION->IncludeComponent(
                            "bitrix:menu",
                            "menu.main",
                            [
                                "ALLOW_MULTI_SELECT" => "N",
                                "DELAY" => "N",
                                "MAX_LEVEL" => "1",
                                "MENU_CACHE_TIME" => "3600",
                                "MENU_CACHE_TYPE" => "A",
                                "MENU_CACHE_USE_GROUPS" => "Y",
                                "ROOT_MENU_TYPE" => "shop_main",
                                "CHILD_MENU_TYPE" => "shop_main",
                                "USE_EXT" => "N",
                            ],
                            false
                        );
                        ?>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>