<? /** @var CBitrixComponent $component */ ?>
<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();
$this->setFrameMode(true);
?>


<? if ($arParams["DISPLAY_TOP_PAGER"]): ?>
    <?= $arResult["NAV_STRING"] ?>
<? endif; ?>
<!-- Section products list  -->
<section class="catalog__list" id="product-listings">
    <div class="section mb-3 pt-3 pb-3 last section_padding">
        <ul class="row list-reset last" aria-labelledby="section-title">
            <? foreach ($arResult["ITEMS"] as $cell => $arElement): ?>
                <?
                $this->AddEditAction($arElement['ID'], $arElement['EDIT_LINK'], CIBlock::GetArrayByID($arParams["IBLOCK_ID"], "ELEMENT_EDIT"));
                $this->AddDeleteAction($arElement['ID'], $arElement['DELETE_LINK'], CIBlock::GetArrayByID($arParams["IBLOCK_ID"], "ELEMENT_DELETE"), array("CONFIRM" => GetMessage('CT_BCS_ELEMENT_DELETE_CONFIRM')));
                $strMainID = $this->GetEditAreaId($arElement['ID']);

                $arItemIDs = array(
                    'ID' => $strMainID,
                    'PICT' => $strMainID . '_pict',
                    'SECOND_PICT' => $strMainID . '_secondpict',
                    'MAIN_PROPS' => $strMainID . '_main_props',

                    'QUANTITY' => $strMainID . '_quantity',
                    'QUANTITY_DOWN' => $strMainID . '_quant_down',
                    'QUANTITY_UP' => $strMainID . '_quant_up',
                    'QUANTITY_MEASURE' => $strMainID . '_quant_measure',
                    'BUY_LINK' => $strMainID . '_buy_link',
                    'SUBSCRIBE_LINK' => $strMainID . '_subscribe',

                    'PRICE' => $strMainID . '_price',
                    'DSC_PERC' => $strMainID . '_dsc_perc',
                    'SECOND_DSC_PERC' => $strMainID . '_second_dsc_perc',

                    'PROP_DIV' => $strMainID . '_sku_tree',
                    'PROP' => $strMainID . '_prop_',
                    'DISPLAY_PROP_DIV' => $strMainID . '_sku_prop'

                );
                $strObName = 'ob' . preg_replace("/[^a-zA-Z0-9_]/i", "x", $strMainID);

                ?>

                <!-- Catalog item  -->
                <li class="col-6 col-lg-3 p-0" id="<?= $this->GetEditAreaId($arElement['ID']); ?>">
                    <?
                    $template = isset ($arParams['ELEMENT_TEMPLATE']) ? $arParams['ELEMENT_TEMPLATE'] : '';
                         $APPLICATION->IncludeComponent(
                        "bitrix:catalog.item",
                        $template,
                        [
                            "IBLOCK_ID" => "113",
                            "IS_BLACK_FRIDAY" => $arParams["IS_BLACK_FRIDAY"],
                            "ITEM" => $arElement,
                            "CACHE_TYPE" => "A",
                            "CACHE_TIME" => "36000000",
                        ],
                        $component
                    ); ?>
                </li>
            <? endforeach; ?>
        </ul>
    </div>
</section>
<? if ($arParams["DISPLAY_BOTTOM_PAGER"]): ?>
    <?= $arResult["NAV_STRING"] ?>
<? endif; ?>

