<?php
/**
 * @var CAllMain $APPLICATION
 */
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
  );
$APPLICATION->AddChainItem('Каталог', false, false);

  ?>

<h1 class="catalog-title">Каталог</h1>

<?$APPLICATION->IncludeComponent(
	"bitrix:catalog.section.list",
	"catalogMainPage",
	Array(
		"IBLOCK_ID" => $arParams["IBLOCK_ID"],
        "TOP_DEPTH" => 2,
		"DISPLAY_PANEL" => "N",
		"CACHE_TYPE" => $arParams["CACHE_TYPE"],
		"CACHE_TIME" => $arParams["CACHE_TIME"],
		"CACHE_GROUPS" => $arParams["CACHE_GROUPS"]),
	$component
);?>

    </div>
