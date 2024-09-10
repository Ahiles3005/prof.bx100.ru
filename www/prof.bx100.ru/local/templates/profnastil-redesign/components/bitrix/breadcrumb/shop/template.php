<?php
if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) {
    die();
}

global $APPLICATION;
$strReturn = '';


$strReturn = '<nav class="11bread-crumbs mb-4" aria-label="Breadcrumb">';
$strReturn .= '<ul class="bread-crumbs__list list-reset d-flex flex-wrap">';


foreach ($arResult as $key => $path) {
    $strReturn .= '<li class="bread-crumbs__item">';
    if (!empty($path['LINK']) && !Site::isCurrentPage($path['LINK'])) {
        $strReturn .= '<a class="bread-crumbs__link" href="' . $path["LINK"] . '">' . $path["TITLE"] . '</a>';
    } else {
        $spanClass = Site::isCurrentPage($path['LINK']) ? 'aria-current="page"' : '';
        $strReturn .= '<span class="bread-crumbs__last-crumb ' . $spanClass . '" >' . $path["TITLE"] . '</span>';
    }

    $strReturn .= '</li>';
}

$strReturn .= '</ul>';
$strReturn .= '</nav>';
return $strReturn;
?>



