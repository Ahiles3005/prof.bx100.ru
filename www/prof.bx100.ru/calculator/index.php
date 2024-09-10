<? require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/header.php");

use Bitrix\Main\Context;

$APPLICATION->SetTitle("Калькулятор расчета краски");
$APPLICATION->AddHeadScript("/calculator/script.js");
$APPLICATION->AddHeadScript("/calculator/src/js/sessionStorage.js");
$APPLICATION->AddHeadScript("/calculator/plugins/select2.min.js");
$APPLICATION->AddHeadScript("/calculator/plugins/readmore.min.js");
$APPLICATION->SetAdditionalCSS("/calculator/plugins/select2.min.css");
$APPLICATION->SetAdditionalCSS("/calculator/styles.css");
$APPLICATION->SetAdditionalCSS("/calculator/dist/css/bundle.css");
$vidPocraski = [];
$vidRaboti = [];
$property_enums = CIBlockPropertyEnum::GetList(array("DEF" => "DESC", "VALUE" => "ASC"), array("IBLOCK_ID" => 113, "CODE" => "VID_RABOTY"));
while ($enum_fields = $property_enums->GetNext()) {
    $vidRaboti[] = $enum_fields['VALUE'];
}

$property_enums = CIBlockPropertyEnum::GetList(array("DEF" => "DESC", "VALUE" => "ASC"), array("IBLOCK_ID" => 113, "CODE" => "VID_POKRASKI"));
while ($enum_fields = $property_enums->GetNext()) {
    $vidPocraski[] = $enum_fields['VALUE'];
}
?>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css">
<?php
\Bitrix\Main\EventManager::getInstance()->addEventHandler("main", "OnEndBufferContent", "deleteKernelCss");
function deleteKernelCss(&$content)
{
    global $USER, $APPLICATION;
    if (strpos($APPLICATION->GetCurDir(), "/bitrix/") !== false) return;
    if ($APPLICATION->GetProperty("save_kernel") == "Y") return;
    $arPatternsToRemove = array(
        '/<link.+?href=".+?bitrix\/css\/main\/bootstrap.min.css[^"]+"[^>]+>/',
        '/<link.+?href=".+?bitrix\/templates\/tdprofnastil_main\/css\/wi2-up.css">/',
    );
    $content = preg_replace($arPatternsToRemove, "", $content);
    $content = preg_replace("/\n{2,}/", "\n\n", $content);
}

?>
<? use Bitrix\Main\UI\Extension;

Extension::load('ui.bootstrap4'); ?>
    <!--<script type="text/javascript">-->
    <!--jQuery(document).keyup('.calc', function(a) {-->
    <!--var price = jQuery('.height_wall').val();-->
    <!--var item = jQuery('.width_wall').val();-->
    <!--var total = price * item;-->
    <!--jQuery(".area_wall").val(total);-->
    <!--});-->
    <!--</script>-->
<div class="container">
    <section class="calc section section_padding">
        <h1 class="calc__title page-header h1">
            Расчет водоэмульсионной краски
        </h1>
        <form method="post"
              class="calc__form form_calc"
              action="result_calculete/"
              autocomplete="off">
            <div class="row">
                <div class="col-xs-12 col-sm-4 col-lg-4">
                    <div class="form-group">
                        <select id="type_of_painting"
                                class="select_style custom-select"
                                name="type_of_painting">
                            <option disabled selected>Вид покраски</option>
                            <? foreach ($vidPocraski as $value): ?>
                                <option value="<?= $value ?>"><?= $value ?></option>
                            <? endforeach; ?>
                        </select>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-4 col-lg-4">
                    <div class="form-group">
                        <select id="type_of_work"
                                class="select_style custom-select"
                                name="type_of_work">
                            <option disabled selected>Вид работ</option>
                            <? foreach ($vidRaboti as $value): ?>
                                <option value="<?= $value ?>"><?= $value ?></option>
                            <? endforeach; ?>
                        </select>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-6 col-lg-12 mb-4">
                    <div class="custom-control custom-switch">
                        <input type="checkbox"
                               name="kolerovka"
                               class="custom-control-input"
                               id="kolerovka">
                        <label class="custom-control-label calc__label"
                               for="kolerovka">
                            Колеровка
                        </label>
                    </div>

                    <div class="calc__color" id="new_color" style="display: none;">
                    </div>

                </div>
                <div class="col-xs-12 col-sm-6 col-lg-12 mb-4">
                    <div class="custom-control custom-switch">
                        <input type="checkbox"
                               name="gruntovka"
                               class="custom-control-input"
                               id="gruntovka">
                        <label class="custom-control-label calc__label"
                               for="gruntovka">
                            Грунтовка
                        </label>
                    </div>
                </div>
            </div>
            <div id="ploshad_steni" class="mr-botom square">
                <div class="row square__row">
                    <h3 class="square__title">Стена&nbsp;<span class="square__counter"></span>
                        <div class="calc__tooltip">
                            <i class="fa fa-question" aria-hidden="true"></i>
                            <span class="tooltiptext">
                            Достаточно вести длину и ширину,
                            <br>
                            либо только площадь.
                            </span>
                        </div>
                    </h3>
                    <div class="col-sm-12 col-lg-3">
                        <div class="form-group">
                            <label class="calc__label" for="height_wall">
                                Длина стены (м)
                            </label>
                            <input name="height_wall[]"
                                   onfocus="this.select()"
                                   class="form-control height_wall js-calc-square"
                                   id="height_wall"
                                   placeholder="">
                        </div>
                    </div>
                    <div class="col-sm-12 col-lg-3">
                        <div class="form-group">
                            <label class="calc__label" for="width_wall">
                                Ширина стены (м)
                            </label>
                            <input name="width_wall[]"
                                   onfocus="this.select()"
                                   class="form-control width_wall js-calc-square"
                                   id="width_wall"
                                   placeholder="">
                        </div>
                    </div>
                    <div class="col-sm-12 col-lg-3">
                        <div class="form-group">
                            <label class="calc__label" for="area_wall">
                                Площадь стены (м<sup><small>2</small></sup>)
                            </label>
                            <input name="area_wall[]"
                                   onfocus="this.select()"
                                   class="form-control area_wall js-square-result"
                                   id="area_wall"
                                   placeholder="">
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-4 col-lg-3">
                        <div class="form-group">
                            <label class="calc__label"
                                   for="number_of_paint_layers">
                                Количество слоев краски
                            </label>
                            <select id="number_of_paint_layers"
                                    class="select_style custom-select"
                                    name="number_of_paint_layers">
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </select>
                        </div>
                    </div>

                </div>

                <?/* if ($USER->IsAdmin()): ?>

                <? else: ?>
                    <fieldset class="calc__color calc-colors js-colors-fieldset"
                              id="color" hidden>
                        <div class="alert alert-info d-flex rounded p-0" role="alert">
                            <div class="alert-icon d-flex justify-content-center align-items-center text-white flex-grow-0 flex-shrink-0">
                                <i class="fa fa-bullhorn"></i>
                            </div>
                            <div class="alert-message d-flex align-items-center py-2 pl-4 pr-3">
                                При выборе цвета нельзя полагаться исключительно на те цвета, которые Вы видите на Вашем
                                мониторе.<br>
                                Цвета на мониторе могут отличаться от реальных цветов.<br>
                                Мы приложили усилия, чтобы цвета наших товаров, максимум соответствовали
                                действительности.
                            </div>
                            <a href="#" class="close d-flex ml-auto justify-content-center align-items-center px-3"
                               data-dismiss="alert">
                                <i class="fa fa-times"></i>
                            </a>
                        </div>
                        <legend class="calc-colors__title">Выберите цвет или несколько цветов колера</legend>
                        <div class="calc-colors__inner js-colors-container"></div>
                    </fieldset>
                    <br>
                <? endif;*/ ?>
            </div>
            <button class="add_stena calc__new-line shadow-sm mb-5 bg-white rounded"
                    type="button">
                + Добавить стену
            </button>
            <input type="submit"
                   class="button_submit btn btn-warning"
                   value="Рассчитать смету">

        </form>
    </section>
</div>
    <!-- <template class="js-color-field-template">
        <div class="custom-control custom-radio color-field">
            <input type="radio" id="" name="color" class="custom-control-input">
            <label class="custom-control-label color-field__label" for="">
                <span class="color-field__value js-color-field-value"></span>
                <span class="color-field__title js-color-field-title"></span>
            </label>
        </div>
    </template> -->
<? require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/footer.php"); ?>