<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();
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
$this->setFrameMode(true);

$templateData = array(
    'TEMPLATE_THEME' => $this->GetFolder() . '/themes/' . $arParams['TEMPLATE_THEME'] . '/colors.css',
    'TEMPLATE_CLASS' => 'bx_' . $arParams['TEMPLATE_THEME']
);
?>

<? $this->SetViewTarget('filter_result'); ?>
<? if ($arResult["CHECKED_PROPERTIES"]): ?>

<? $filterCount = 0; ?>
    <div class="catalog-controls__applied-filters applied-filters">
        <!--  Reset all filters button-->
        <button class="applied-filters__item remove-filter-item js-reset-filters button-toggle remove_all mb-1" type="button"
                aria-label="Удалить фильтр">
                        <span class="remove-filter-item__value button-toggle__label">
                            Очистить всё
                            <span class="remove-filter-item__icon">×</span>
                        </span>
        </button>
        <? foreach ($arResult["CHECKED_PROPERTIES"] as $key => $property): ?>
            <? foreach ($property as $control_id => $value): ?>

                 <? $filterCount++ ;?>
                <!--                        <span class="label">--><? //=$key?><!--:</span>-->
                <? if ($control_id != "range"): ?>

                    <button class="applied-filters__item remove-filter-item js-reset-filters button-toggle  btn-remove mb-1"
                            data-control="<?= $control_id ?>" type="button" aria-label="Удалить фильтр">
                                <span class="remove-filter-item__value button-toggle__label">
                                    <?= $key ?>: <?= $value ?>
                                    <span class="remove-filter-item__icon">×</span>
                                </span>
                    </button>
                <? else: ?>
                    <button class="applied-filters__item remove-filter-item js-reset-filters button-toggle mb-1"
                            type="button" aria-label="Удалить фильтр"  data-control="<?= $value['VALUE'] ?>">
                                <span class="remove-filter-item__value button-toggle__label remove_all">
                                    <?= (trim($key) === "Розничная" ? "Цена" : $key) . ': ' . $value["MIN"] . " - " . $value["MAX"] ?>
                                    <span class="remove-filter-item__icon">×</span>
                                </span>
                    </button>
                <? endif; ?>
            <? endforeach; ?>
        <? endforeach; ?>
    </div>

<script>
  $('button[data-bs-target="#filter-mobile"] span').html ('<?= $filterCount?>');
</script>
<?php else: ?>
    <div class="empty"></div>
<? endif; ?>

<? $this->EndViewTarget(); ?>
<div class="clear"></div>

<div class="bx_filter <?= $templateData["TEMPLATE_CLASS"] ?> <? if ($arParams["FILTER_VIEW_MODE"] == "HORIZONTAL") echo "bx-filter-horizontal" ?>" id="bxSmartFilter">
    <div class="bx_filter_section">
        <form name="<? echo $arResult["FILTER_NAME"] . "_form" ?>"
              action="<? echo $arResult["FORM_ACTION"] ?>"
              method="get"
              class="smartfilter">
            <? foreach ($arResult["HIDDEN"] as $arItem): ?>
                <input type="hidden" name="<? echo $arItem["CONTROL_NAME"] ?>" id="<? echo $arItem["CONTROL_ID"] ?>"
                       value="<? echo $arItem["HTML_VALUE"] ?>"/>
            <?endforeach;
            //prices
            foreach ($arResult["ITEMS"] as $key => $arItem) {
                $key = $arItem["ENCODED_ID"];
                if (isset($arItem["PRICE"])):

                    if (isset ($arItem['VALUES']['MIN']['FILTERED_VALUE'])) $arItem["VALUES"]["MIN"]["VALUE"] = $arItem['VALUES']['MIN']['FILTERED_VALUE'];

                    if (isset ($arItem['VALUES']['MAX']['FILTERED_VALUE'])) $arItem["VALUES"]["MAX"]["VALUE"] = $arItem['VALUES']['MAX']['FILTERED_VALUE'];

                    if ($arItem["VALUES"]["MAX"]["VALUE"] - $arItem["VALUES"]["MIN"]["VALUE"] <= 0)
                        continue;
                    ?>
                    <div class="bx_filter_parameters_box active">
                        <span class="bx_filter_container_modef"></span>
                        <!--						<div class="bx_filter_parameters_box_title" onclick="smartFilter.hideFilterProps(this)">-->
                        <?//=$arItem["NAME"]
                        ?><!--</div>-->

                        <details class="main-filter__accordion" open>
                            <summary class="accordion__title">Цена</summary>

                            <div class="accordion__content">
                                <fieldset class="filter-fieldset">
                                    <div class="filter-fieldset__inner">
                                        <div class="range-filter">
                                            <div class="range-filter js-range-filter<?= !empty($arParams["IS_MOBILE"]) ? "-mobile" : "" ?>">
                                                <div class="d-flex justify-content-between align-items-center mb-3">
                                                    <?
                                                    $precision = $arItem["DECIMALS"] ? $arItem["DECIMALS"]: 2;
                                                    $step = ($arItem["VALUES"]["MAX"]["VALUE"] - $arItem["VALUES"]["MIN"]["VALUE"]) / 4;
                                                    $value1 = number_format($arItem["VALUES"]["MIN"]["VALUE"], $precision, ".", "");
                                                    $value2 = number_format($arItem["VALUES"]["MAX"]["VALUE"], $precision, ".", "");
                                                    ?>
                                                    <input
                                                            class="min-price form-control js-range-min me-1"
                                                            type="text"
                                                            name="<? echo $arItem["VALUES"]["MIN"]["CONTROL_NAME"] ?>"
                                                            id="<? echo $arItem["VALUES"]["MIN"]["CONTROL_ID"] ?>"
                                                            value="<?= $arItem["VALUES"]["MIN"]["HTML_VALUE"] ?>"
                                                            placeholder="<?= $value1 ?>"
                                                            size="5"
                                                            onkeyup="smartFilter.keyup(this)"
                                                    />
                                                    –
                                                    <input
                                                            class="max-price form-control js-range-max ms-1"
                                                            type="text"
                                                            name="<? echo $arItem["VALUES"]["MAX"]["CONTROL_NAME"] ?>"
                                                            id="<? echo $arItem["VALUES"]["MAX"]["CONTROL_ID"] ?>"
                                                            value="<?= $arItem["VALUES"]["MAX"]["HTML_VALUE"] ?>"
                                                            placeholder="<?= $value2 ?>"
                                                            size="5"
                                                            onkeyup="smartFilter.keyup(this)"
                                                    />
                                                </div>


                                                <div class="col-xs-10 col-xs-offset-1 bx-ui-slider-track-container">
                                                    <div class="bx-ui-slider-track" id="drag_track_<?=$key?>">

                                                        <div class="bx-ui-slider-pricebar-vd" style="left: 0;right: 0;" id="colorUnavailableActive_<?=$key?>"></div>
                                                        <div class="bx-ui-slider-pricebar-vn" style="left: 0;right: 0;" id="colorAvailableInactive_<?=$key?>"></div>
                                                        <div class="bx-ui-slider-pricebar-v"  style="left: 0;right: 0;" id="colorAvailableActive_<?=$key?>"></div>
                                                        <div class="bx-ui-slider-range" id="drag_tracker_<?=$key?>"  style="left: 0%; right: 0%;">
                                                            <a class="bx-ui-slider-handle left"  style="left:0;" href="javascript:void(0)" id="left_slider_<?=$key?>"></a>
                                                            <a class="bx-ui-slider-handle right" style="right:0;" href="javascript:void(0)" id="right_slider_<?=$key?>"></a>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                    </div>


                                </fieldset>
                            </div>
                        </details>
                        <div style="clear: both;"></div>
                        <div style="opacity: 0;height: 1px;"></div>

                    </div>
                <?

                $arJsParams = array(
                    "leftSlider" => 'left_slider_' . $key,
                    "rightSlider" => 'right_slider_' . $key,
                    "tracker" => "drag_tracker_" . $key,
                    "trackerWrap" => "drag_track_" . $key,
                    "minInputId" => $arItem["VALUES"]["MIN"]["CONTROL_ID"],
                    "maxInputId" => $arItem["VALUES"]["MAX"]["CONTROL_ID"],
                    "minPrice" => $arItem["VALUES"]["MIN"]["VALUE"],
                    "maxPrice" => $arItem["VALUES"]["MAX"]["VALUE"],
                    "curMinPrice" => $arItem["VALUES"]["MIN"]["HTML_VALUE"],
                    "curMaxPrice" => $arItem["VALUES"]["MAX"]["HTML_VALUE"],
                    "fltMinPrice" => intval($arItem["VALUES"]["MIN"]["FILTERED_VALUE"]) ? $arItem["VALUES"]["MIN"]["FILTERED_VALUE"] : $arItem["VALUES"]["MIN"]["VALUE"],
                    "fltMaxPrice" => intval($arItem["VALUES"]["MAX"]["FILTERED_VALUE"]) ? $arItem["VALUES"]["MAX"]["FILTERED_VALUE"] : $arItem["VALUES"]["MAX"]["VALUE"],
                    "precision" => $precision,
                    "colorUnavailableActive" => 'colorUnavailableActive_' . $key,
                    "colorAvailableActive" => 'colorAvailableActive_' . $key,
                    "colorAvailableInactive" => 'colorAvailableInactive_' . $key,
                );
                ?>
                    <script type="text/javascript">
                        BX.ready(function () {
                            window['trackBar<?=$key?>'] = new BX.Iblock.SmartFilter(<?=CUtil::PhpToJSObject($arJsParams)?>);
                        });
                    </script>
                <?endif;
            }

            //not prices
            foreach ($arResult["ITEMS"] as $key => $arItem) {
                if (
                    empty($arItem["VALUES"])
                    || isset($arItem["PRICE"])
                )
                    continue;

                if (
                    $arItem["DISPLAY_TYPE"] == "A"
                    && (
                        $arItem["VALUES"]["MAX"]["VALUE"] - $arItem["VALUES"]["MIN"]["VALUE"] <= 0
                    )
                )
                    continue;
                ?>
                <div class="bx_filter_parameters_box <? if ($arItem["DISPLAY_EXPANDED"] == "Y"):?>active<?endif ?>">
                    <span class="bx_filter_container_modef"></span>
                    <!--					<div class="bx_filter_parameters_box_title" onclick="smartFilter.hideFilterProps(this)">-->
                    <?//=$arItem["NAME"]
                    ?><!--</div>-->
                    <details
                            class="bx_filter_block main-filter__accordion" <?= $arItem['DISPLAY_EXPANDED'] == 'Y' ? 'open' : '' ?>>
                        <summary
                                class="bx_filter_parameters_box_title accordion__title"><?= $arItem["NAME"] ?></summary>

                        <div class="bx_filter_parameters_box_container accordion__content">
                            <fieldset class="main-filter__fieldset filter-fieldset">
                                <legend class="visually-hidden"><?= $arItem["NAME"] ?></legend>
                                <div class="filter-fieldset__inner">
                                    <?
                                    $arCur = current($arItem["VALUES"]);
                                    switch ($arItem["DISPLAY_TYPE"]) {
                                    case "A"://NUMBERS_WITH_SLIDER
                                        ?>
                                        <div class="range-filter">
                                            <div class="range-filter js-range-filter<?= !empty($arParams["IS_MOBILE"]) ? "-mobile" : "" ?>">
                                                <div class="d-flex justify-content-between align-items-center mb-3">
                                                    <?php   $precision = $arItem["DECIMALS"] ? $arItem["DECIMALS"]: 2;
                                                    $step = ($arItem["VALUES"]["MAX"]["VALUE"] - $arItem["VALUES"]["MIN"]["VALUE"]) / 4;
                                                    $value1 = number_format($arItem["VALUES"]["MIN"]["VALUE"], $precision, ".", "");
                                                    $value2 = number_format($arItem["VALUES"]["MAX"]["VALUE"], $precision, ".", "");
                                                    ?>
                                                    <input
                                                            class="min-price form-control js-range-min me-1"
                                                            type="text"
                                                            name="<? echo $arItem["VALUES"]["MIN"]["CONTROL_NAME"] ?>"
                                                            id="<? echo $arItem["VALUES"]["MIN"]["CONTROL_ID"] ?>"
                                                            value="<?= $arItem["VALUES"]["MIN"]["HTML_VALUE"] ?>"
                                                            placeholder="<?= $value1 ?>"
                                                            size="5"
                                                            onkeyup="smartFilter.keyup(this)"
                                                    />
                                                    –
                                                    <input
                                                            class="max-price form-control js-range-max ms-1"
                                                            type="text"
                                                            name="<? echo $arItem["VALUES"]["MAX"]["CONTROL_NAME"] ?>"
                                                            id="<? echo $arItem["VALUES"]["MAX"]["CONTROL_ID"] ?>"
                                                            value="<?= $arItem["VALUES"]["MAX"]["HTML_VALUE"] ?>"
                                                            placeholder="<?= $value2 ?>"
                                                            size="5"
                                                            onkeyup="smartFilter.keyup(this)"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xs-10 col-xs-offset-1 bx-ui-slider-track-container">
                                            <div class="bx-ui-slider-track" id="drag_track_<?=$key?>">

                                                <div class="bx-ui-slider-pricebar-vd" style="left: 0;right: 0;" id="colorUnavailableActive_<?=$key?>"></div>
                                                <div class="bx-ui-slider-pricebar-vn" style="left: 0;right: 0;" id="colorAvailableInactive_<?=$key?>"></div>
                                                <div class="bx-ui-slider-pricebar-v"  style="left: 0;right: 0;" id="colorAvailableActive_<?=$key?>"></div>
                                                <div class="bx-ui-slider-range" id="drag_tracker_<?=$key?>"  style="left: 0%; right: 0%;">
                                                    <a class="bx-ui-slider-handle left"  style="left:0;" href="javascript:void(0)" id="left_slider_<?=$key?>"></a>
                                                    <a class="bx-ui-slider-handle right" style="right:0;" href="javascript:void(0)" id="right_slider_<?=$key?>"></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div style="clear: both;"></div>
                                    <?php      $arJsParams = array(
                                        "leftSlider" => 'left_slider_' . $key,
                                        "rightSlider" => 'right_slider_' . $key,
                                        "tracker" => "drag_tracker_" . $key,
                                        "trackerWrap" => "drag_track_" . $key,
                                        "minInputId" => $arItem["VALUES"]["MIN"]["CONTROL_ID"],
                                        "maxInputId" => $arItem["VALUES"]["MAX"]["CONTROL_ID"],
                                        "minPrice" => $arItem["VALUES"]["MIN"]["VALUE"],
                                        "maxPrice" => $arItem["VALUES"]["MAX"]["VALUE"],
                                        "curMinPrice" => $arItem["VALUES"]["MIN"]["HTML_VALUE"],
                                        "curMaxPrice" => $arItem["VALUES"]["MAX"]["HTML_VALUE"],
                                        "fltMinPrice" => intval($arItem["VALUES"]["MIN"]["FILTERED_VALUE"]) ? $arItem["VALUES"]["MIN"]["FILTERED_VALUE"] : $arItem["VALUES"]["MIN"]["VALUE"],
                                        "fltMaxPrice" => intval($arItem["VALUES"]["MAX"]["FILTERED_VALUE"]) ? $arItem["VALUES"]["MAX"]["FILTERED_VALUE"] : $arItem["VALUES"]["MAX"]["VALUE"],
                                        "precision" => $precision,
                                        "colorUnavailableActive" => 'colorUnavailableActive_' . $key,
                                        "colorAvailableActive" => 'colorAvailableActive_' . $key,
                                        "colorAvailableInactive" => 'colorAvailableInactive_' . $key,
                                    );
                                    ?>
                                        <script type="text/javascript">
                                            BX.ready(function () {
                                                window['trackBar<?=$key?>'] = new BX.Iblock.SmartFilter(<?=CUtil::PhpToJSObject($arJsParams)?>);
                                            });
                                        </script>
                                    <?
                                    break;
                                    case "B"://NUMBERS
                                    ?>
                                        <div class="bx_filter_parameters_box_container_block">
                                            <div class="bx_filter_input_container">
                                                <input
                                                        class="min-price"
                                                        type="text"
                                                        name="<? echo $arItem["VALUES"]["MIN"]["CONTROL_NAME"] ?>"
                                                        id="<? echo $arItem["VALUES"]["MIN"]["CONTROL_ID"] ?>"
                                                        value="<? echo $arItem["VALUES"]["MIN"]["HTML_VALUE"] ?>"
                                                        size="5"
                                                        onkeyup="smartFilter.keyup(this)"
                                                />
                                            </div>
                                        </div>
                                        <div class="bx_filter_parameters_box_container_block">
                                            <div class="bx_filter_input_container">
                                                <input
                                                        class="max-price"
                                                        type="text"
                                                        name="<? echo $arItem["VALUES"]["MAX"]["CONTROL_NAME"] ?>"
                                                        id="<? echo $arItem["VALUES"]["MAX"]["CONTROL_ID"] ?>"
                                                        value="<? echo $arItem["VALUES"]["MAX"]["HTML_VALUE"] ?>"
                                                        size="5"
                                                        onkeyup="smartFilter.keyup(this)"
                                                />
                                            </div>
                                        </div>
                                    <?
                                    break;
                                    case "G"://CHECKBOXES_WITH_PICTURES
                                    ?>
                                    <? foreach ($arItem["VALUES"] as $val => $ar):?>
                                    <input
                                            style="display: none"
                                            type="checkbox"
                                            name="<?= $ar["CONTROL_NAME"] ?>"
                                            id="<?= $ar["CONTROL_ID"] ?>"
                                            value="<?= $ar["HTML_VALUE"] ?>"
                                        <? echo $ar["CHECKED"] ? 'checked="checked"' : '' ?>
                                    />
                                        <?
                                        $class = "";
                                        if ($ar["CHECKED"])
                                            $class .= " active";
                                        if ($ar["DISABLED"])
                                            $class .= " disabled";
                                        ?>
                                        <label for="<?= $ar["CONTROL_ID"] ?>"
                                               data-role="label_<?= $ar["CONTROL_ID"] ?>"
                                               class="bx_filter_param_label dib<?= $class ?>"
                                               onclick="smartFilter.keyup(BX('<?= CUtil::JSEscape($ar["CONTROL_ID"]) ?>')); BX.toggleClass(this, 'active');">
										<span class="bx_filter_param_btn bx_color_sl">
											<? if (isset($ar["FILE"]) && !empty($ar["FILE"]["SRC"])):?>
                                                <span class="bx_filter_btn_color_icon"
                                                      style="background-image:url('<?= $ar["FILE"]["SRC"] ?>');"></span>
                                            <?endif ?>
										</span>
                                        </label>
                                    <?endforeach ?>
                                    <?
                                    break;
                                    case "H"://CHECKBOXES_WITH_PICTURES_AND_LABELS
                                    ?>
                                    <? foreach ($arItem["VALUES"] as $val => $ar):?>
                                    <input
                                            style="display: none"
                                            type="checkbox"
                                            name="<?= $ar["CONTROL_NAME"] ?>"
                                            id="<?= $ar["CONTROL_ID"] ?>"
                                            value="<?= $ar["HTML_VALUE"] ?>"
                                        <? echo $ar["CHECKED"] ? 'checked="checked"' : '' ?>
                                    />
                                        <?
                                        $class = "";
                                        if ($ar["CHECKED"])
                                            $class .= " active";
                                        if ($ar["DISABLED"])
                                            $class .= " disabled";
                                        ?>
                                        <label for="<?= $ar["CONTROL_ID"] ?>"
                                               data-role="label_<?= $ar["CONTROL_ID"] ?>"
                                               class="bx_filter_param_label<?= $class ?>"
                                               onclick="smartFilter.keyup(BX('<?= CUtil::JSEscape($ar["CONTROL_ID"]) ?>')); BX.toggleClass(this, 'active');">
										<span class="bx_filter_param_btn bx_color_sl">
											<? if (isset($ar["FILE"]) && !empty($ar["FILE"]["SRC"])):?>
                                                <span class="bx_filter_btn_color_icon"
                                                      style="background-image:url('<?= $ar["FILE"]["SRC"] ?>');"></span>
                                            <?endif ?>
										</span>
                                            <span class="bx_filter_param_text"
                                                  title="<?= $ar["VALUE"]; ?>"><?= $ar["VALUE"]; ?><?
                                                if ($arParams["DISPLAY_ELEMENT_COUNT"] !== "N" && isset($ar["ELEMENT_COUNT"])):
                                                    ?> <span data-role="count_<?= $ar["CONTROL_ID"] ?>"
                                                             class="main-filter__counter"><?= $ar["ELEMENT_COUNT"]; ?></span><?
                                                endif; ?></span>
                                        </label>
                                    <?endforeach ?>
                                    <?
                                    break;
                                    case "P"://DROPDOWN
                                    $checkedItemExist = false;
                                    ?>
                                        <div class="bx_filter_select_container">
                                            <div class="bx_filter_select_block"
                                                 onclick="smartFilter.showDropDownPopup(this, '<?= CUtil::JSEscape($key) ?>')">
                                                <div class="bx_filter_select_text" data-role="currentOption">
                                                    <?
                                                    foreach ($arItem["VALUES"] as $val => $ar) {
                                                        if ($ar["CHECKED"]) {
                                                            echo $ar["VALUE"];
                                                            $checkedItemExist = true;
                                                        }
                                                    }
                                                    if (!$checkedItemExist) {
                                                        echo GetMessage("CT_BCSF_FILTER_ALL");
                                                    }
                                                    ?>
                                                </div>
                                                <div class="bx_filter_select_arrow"></div>
                                                <input
                                                        style="display: none"
                                                        type="radio"
                                                        name="<?= $arCur["CONTROL_NAME_ALT"] ?>"
                                                        id="<? echo "all_" . $arCur["CONTROL_ID"] ?>"
                                                        value=""
                                                />
                                                <? foreach ($arItem["VALUES"] as $val => $ar):?>
                                                    <input
                                                            style="display: none"
                                                            type="radio"
                                                            name="<?= $ar["CONTROL_NAME_ALT"] ?>"
                                                            id="<?= $ar["CONTROL_ID"] ?>"
                                                            value="<? echo $ar["HTML_VALUE_ALT"] ?>"
                                                        <? echo $ar["CHECKED"] ? 'checked="checked"' : '' ?>
                                                    />
                                                <?endforeach ?>
                                                <div class="bx_filter_select_popup" data-role="dropdownContent"
                                                     style="display: none;">
                                                    <ul>
                                                        <li>
                                                            <label for="<?= "all_" . $arCur["CONTROL_ID"] ?>"
                                                                   class="bx_filter_param_label"
                                                                   data-role="label_<?= "all_" . $arCur["CONTROL_ID"] ?>"
                                                                   onclick="smartFilter.selectDropDownItem(this, '<?= CUtil::JSEscape("all_" . $arCur["CONTROL_ID"]) ?>')">
                                                                <? echo GetMessage("CT_BCSF_FILTER_ALL"); ?>
                                                            </label>
                                                        </li>
                                                        <?
                                                        foreach ($arItem["VALUES"] as $val => $ar):
                                                            $class = "";
                                                            if ($ar["CHECKED"])
                                                                $class .= " selected";
                                                            if ($ar["DISABLED"])
                                                                $class .= " disabled";
                                                            ?>
                                                            <li>
                                                                <label for="<?= $ar["CONTROL_ID"] ?>"
                                                                       class="bx_filter_param_label<?= $class ?>"
                                                                       data-role="label_<?= $ar["CONTROL_ID"] ?>"
                                                                       onclick="smartFilter.selectDropDownItem(this, '<?= CUtil::JSEscape($ar["CONTROL_ID"]) ?>')"><?= $ar["VALUE"] ?></label>
                                                            </li>
                                                        <?endforeach ?>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    <?
                                    break;
                                    case "R"://DROPDOWN_WITH_PICTURES_AND_LABELS
                                    ?>
                                        <div class="bx_filter_select_container">
                                            <div class="bx_filter_select_block"
                                                 onclick="smartFilter.showDropDownPopup(this, '<?= CUtil::JSEscape($key) ?>')">
                                                <div class="bx_filter_select_text" data-role="currentOption">
                                                    <?
                                                    $checkedItemExist = false;
                                                    foreach ($arItem["VALUES"] as $val => $ar):
                                                        if ($ar["CHECKED"]) {
                                                            ?>
                                                            <? if (isset($ar["FILE"]) && !empty($ar["FILE"]["SRC"])):?>
                                                                <span class="bx_filter_btn_color_icon"
                                                                      style="background-image:url('<?= $ar["FILE"]["SRC"] ?>');"></span>
                                                            <?endif ?>
                                                            <span class="bx_filter_param_text">
														<?= $ar["VALUE"] ?>
													</span>
                                                            <?
                                                            $checkedItemExist = true;
                                                        }
                                                    endforeach;
                                                    if (!$checkedItemExist) {
                                                        ?><span class="bx_filter_btn_color_icon all"></span> <?
                                                        echo GetMessage("CT_BCSF_FILTER_ALL");
                                                    }
                                                    ?>
                                                </div>
                                                <div class="bx_filter_select_arrow"></div>
                                                <input
                                                        style="display: none"
                                                        type="radio"
                                                        name="<?= $arCur["CONTROL_NAME_ALT"] ?>"
                                                        id="<? echo "all_" . $arCur["CONTROL_ID"] ?>"
                                                        value=""
                                                />
                                                <? foreach ($arItem["VALUES"] as $val => $ar):?>
                                                    <input
                                                            style="display: none"
                                                            type="radio"
                                                            name="<?= $ar["CONTROL_NAME_ALT"] ?>"
                                                            id="<?= $ar["CONTROL_ID"] ?>"
                                                            value="<?= $ar["HTML_VALUE_ALT"] ?>"
                                                        <? echo $ar["CHECKED"] ? 'checked="checked"' : '' ?>
                                                    />
                                                <?endforeach ?>
                                                <div class="bx_filter_select_popup" data-role="dropdownContent"
                                                     style="display: none">
                                                    <ul>
                                                        <li style="border-bottom: 1px solid #e5e5e5;padding-bottom: 5px;margin-bottom: 5px;">
                                                            <label for="<?= "all_" . $arCur["CONTROL_ID"] ?>"
                                                                   class="bx_filter_param_label"
                                                                   data-role="label_<?= "all_" . $arCur["CONTROL_ID"] ?>"
                                                                   onclick="smartFilter.selectDropDownItem(this, '<?= CUtil::JSEscape("all_" . $arCur["CONTROL_ID"]) ?>')">
                                                                <span class="bx_filter_btn_color_icon all"></span>
                                                                <? echo GetMessage("CT_BCSF_FILTER_ALL"); ?>
                                                            </label>
                                                        </li>
                                                        <?
                                                        foreach ($arItem["VALUES"] as $val => $ar):
                                                            $class = "";
                                                            if ($ar["CHECKED"])
                                                                $class .= " selected";
                                                            if ($ar["DISABLED"])
                                                                $class .= " disabled";
                                                            ?>
                                                            <li>
                                                                <label for="<?= $ar["CONTROL_ID"] ?>"
                                                                       data-role="label_<?= $ar["CONTROL_ID"] ?>"
                                                                       class="bx_filter_param_label<?= $class ?>"
                                                                       onclick="smartFilter.selectDropDownItem(this, '<?= CUtil::JSEscape($ar["CONTROL_ID"]) ?>')">
                                                                    <? if (isset($ar["FILE"]) && !empty($ar["FILE"]["SRC"])):?>
                                                                        <span class="bx_filter_btn_color_icon"
                                                                              style="background-image:url('<?= $ar["FILE"]["SRC"] ?>');"></span>
                                                                    <?endif ?>
                                                                    <span class="bx_filter_param_text">
															<?= $ar["VALUE"] ?>
														</span>
                                                                </label>
                                                            </li>
                                                        <?endforeach ?>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    <?
                                    break;
                                    case "K"://RADIO_BUTTONS
                                    ?>
                                        <div class="form-check">
                                            <input
                                                    type="radio"
                                                    value=""
                                                    class="form-check-input"
                                                    name="<? echo $arCur["CONTROL_NAME_ALT"] ?>"
                                                    id="<? echo "all_" . $arCur["CONTROL_ID"] ?>"
                                                    onclick="smartFilter.click(this)"
                                            />
                                            <label class="form-check-label bx_filter_param_label"
                                                   for="<? echo "all_" . $arCur["CONTROL_ID"] ?>">
                                                <span class="main-filter__counter"></span>
                                                <span class="bx_filter_param_text"><? echo GetMessage("CT_BCSF_FILTER_ALL"); ?></span>
                                            </label>
                                        </div>

                                        <? foreach ($arItem["VALUES"] as $val => $ar):?>

                                        <div class="form-check">
                                            <input
                                                    type="radio"
                                                    class="form-check-input"
                                                    value="<? echo $ar["HTML_VALUE_ALT"] ?>"
                                                    name="<? echo $ar["CONTROL_NAME_ALT"] ?>"
                                                    id="<? echo $ar["CONTROL_ID"] ?>"
                                                <? echo $ar["CHECKED"] ? 'checked="checked"' : '' ?>
                                                    onclick="smartFilter.click(this)"
                                            />

                                            <label data-role="label_<?= $ar["CONTROL_ID"] ?>"
                                                   class="form-check-label bx_filter_param_label"
                                                   for="<? echo $ar["CONTROL_ID"] ?>">
                                    <span class="bx_filter_param_text" title="<?= $ar["VALUE"]; ?>">
                                        <?= $ar["VALUE"]; ?>
                                    </span>
                                                <span class="main-filter__counter"></span>
                                                <? if ($arParams["DISPLAY_ELEMENT_COUNT"] !== "N" && isset($ar["ELEMENT_COUNT"])):
                                                    ?> <span data-role="count_<?= $ar["CONTROL_ID"] ?>"
                                                             class="main-filter__counter"><? echo $ar["ELEMENT_COUNT"]; ?></span><?
                                                endif; ?>
                                            </label>
                                        </div>

                                    <?endforeach; ?>
                                    <?
                                    break;
                                    case "U"://CALENDAR
                                    ?>
                                        <div class="bx_filter_parameters_box_container_block">
                                            <div class="bx_filter_input_container bx_filter_calendar_container">
                                                <? $APPLICATION->IncludeComponent(
                                                    'bitrix:main.calendar',
                                                    '',
                                                    array(
                                                        'FORM_NAME' => $arResult["FILTER_NAME"] . "_form",
                                                        'SHOW_INPUT' => 'Y',
                                                        'INPUT_ADDITIONAL_ATTR' => 'class="calendar" placeholder="' . FormatDate("SHORT", $arItem["VALUES"]["MIN"]["VALUE"]) . '" onkeyup="smartFilter.keyup(this)" onchange="smartFilter.keyup(this)"',
                                                        'INPUT_NAME' => $arItem["VALUES"]["MIN"]["CONTROL_NAME"],
                                                        'INPUT_VALUE' => $arItem["VALUES"]["MIN"]["HTML_VALUE"],
                                                        'SHOW_TIME' => 'N',
                                                        'HIDE_TIMEBAR' => 'Y',
                                                    ),
                                                    null,
                                                    array('HIDE_ICONS' => 'Y')
                                                ); ?>
                                            </div>
                                        </div>
                                        <div class="bx_filter_parameters_box_container_block">
                                            <div class="bx_filter_input_container bx_filter_calendar_container">
                                                <? $APPLICATION->IncludeComponent(
                                                    'bitrix:main.calendar',
                                                    '',
                                                    array(
                                                        'FORM_NAME' => $arResult["FILTER_NAME"] . "_form",
                                                        'SHOW_INPUT' => 'Y',
                                                        'INPUT_ADDITIONAL_ATTR' => 'class="calendar" placeholder="' . FormatDate("SHORT", $arItem["VALUES"]["MAX"]["VALUE"]) . '" onkeyup="smartFilter.keyup(this)" onchange="smartFilter.keyup(this)"',
                                                        'INPUT_NAME' => $arItem["VALUES"]["MAX"]["CONTROL_NAME"],
                                                        'INPUT_VALUE' => $arItem["VALUES"]["MAX"]["HTML_VALUE"],
                                                        'SHOW_TIME' => 'N',
                                                        'HIDE_TIMEBAR' => 'Y',
                                                    ),
                                                    null,
                                                    array('HIDE_ICONS' => 'Y')
                                                ); ?>
                                            </div>
                                        </div>
                                    <?
                                    break;
                                    default://CHECKBOXES
                                    ?>
                                    <!--
                                    <? var_dump(count ($arItem["VALUES"])); ?>
                                    -->
                                    <? foreach ($arItem["VALUES"] as $val => $ar):?>

                                        <? $showMore =  count ($arItem["VALUES"]) > 5 ? true : false; ?>
                                        <div class="form-check">
                                            <label data-role="label_<?= $ar["CONTROL_ID"] ?>"
                                                   class="bx_filter_param_label <? echo $ar["DISABLED"] ? 'disabled' : '' ?>"
                                                   for="<? echo $ar["CONTROL_ID"] ?>">
                                                    <span class="bx_filter_input_checkbox">
                                                        <input
                                                                type="checkbox"
                                                                value="<? echo $ar["HTML_VALUE"] ?>"
                                                                name="<? echo $ar["CONTROL_NAME"] ?>"
                                                                class="form-check-input"
                                                                id="<? echo $ar["CONTROL_ID"] ?>"
                                                            <? echo $ar["CHECKED"] ? 'checked="checked"' : '' ?>
                                                        />
                                                        <span class="bx_filter_param_text"
                                                              title="<?= $ar["VALUE"]; ?>"><?= $ar["VALUE"]; ?><?
                                                            if ($arParams["DISPLAY_ELEMENT_COUNT"] !== "N" && isset($ar["ELEMENT_COUNT"])):
                                                                ?> <span data-role="count_<?= $ar["CONTROL_ID"] ?>"
                                                                         class="main-filter__counter"><? echo $ar["ELEMENT_COUNT"]; ?></span><?
                                                            endif; ?></span>
                                                    </span>
                                            </label>
                                        </div>
                                    <?endforeach; ?>
                                        <? if ($showMore === true) : ?>
                                        <span class="show-more"><?= GetMessage('CT_BCSF_FILTER_SHOW_MORE') ?></span>
                                        <? endif;?>
                                    <?
                                    }
                                    ?>
                                </div>
                            </fieldset>
                        </div>

                        <div class="clb"></div>
                    </details>
                </div>
                <?
            }
            ?>
            <div class="clb"></div>
            <div class="bx_filter_button_box active">
                <div class="bx_filter_block">
                    <div class="bx_filter_parameters_box_container">

                        <!--						<input class="bx_filter_search_button" type="submit" id="set_filter" name="set_filter" value="-->
                        <? //=GetMessage("CT_BCSF_SET_FILTER")?><!--" />-->
                        <!--						<input class="bx_filter_search_reset" type="submit" id="del_filter" name="del_filter" value="-->
                        <? //=GetMessage("CT_BCSF_DEL_FILTER")?><!--" />-->


                        <button class="button w-100 bx_filter_search_button" type="submit" id="set_filter"
                                name="set_filter"
                                value="<?= GetMessage("CT_BCSF_SET_FILTER") ?>" disabled><?= GetMessage("CT_BCSF_SET_FILTER") ?></button>
                        <br>
                        <br>
                        <?
                        $disReset = (isset ($arResult['JS_FILTER_PARAMS']['APPLY_FILTER']) && $arResult['JS_FILTER_PARAMS']['APPLY_FILTER'] === true)
                            ? '' : ' disabled';
                        ?>
                        <button class="button w-100 bx_filter_search_reset" type="reset" id="del_filter"
                                name="del_filter" value="<?= GetMessage("CT_BCSF_DEL_FILTER") ?>"<?= $disReset ?>><?= GetMessage("CT_BCSF_DEL_FILTER") ?></button>


                        <div class="bx_filter_popup_result <?= $arParams["POPUP_POSITION"] ?>" style="display:none" id="modef">
                            <? echo GetMessage("CT_BCSF_FILTER_COUNT", array("#ELEMENT_COUNT#" => '<span id="modef_num">' . intval($arResult["ELEMENT_COUNT"]) . '</span>')); ?>
                            <span class="arrow"></span>
                            <a href="<? echo $arResult["FILTER_URL"] ?>" target="_top" id="modef_filter_link"><?= GetMessage("CT_BCSF_FILTER_SHOW") ?></a>
                            <div class="cover-html-spinner"><span class="html-spinner"></span></div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
        <div style="clear: both;"></div>
    </div>
</div>

<script type="text/javascript">
    var smartFilter = new JCSmartFilter('<?echo CUtil::JSEscape($arResult["FORM_ACTION"])?>', '<?=CUtil::JSEscape($arParams["FILTER_VIEW_MODE"])?>', <?=CUtil::PhpToJSObject($arResult["JS_FILTER_PARAMS"])?>);
</script>