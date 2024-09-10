<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();

use \Bitrix\Catalog\CatalogViewedProductTable as CatalogViewedProductTable;

CatalogViewedProductTable::refresh($arResult['ID'], CSaleBasket::GetBasketUserID());
?>
<script>

    setDelayCompare('<?= $arResult['ID'] ?>');

</script>
<?php
//    if($arResult['ACTIVE'] == 'N' and end($arResult['SECTION']['PATH'])){
//        LocalRedirect(end($arResult['SECTION']['PATH'])['SECTION_PAGE_URL'], false, '301');
//    }
//?>