<?
CModule::IncludeModule('pecom.ecomm');

if(file_exists($_SERVER['DOCUMENT_ROOT'].'/bitrix/modules/'.IPOLH_PECOM.'/classes/general/deliveryHandler.php')){
    AddEventHandler("sale", "onSaleDeliveryHandlersBuildList", array('\Ipolh\Pecom\deliveryHandler', 'Init'));
}
?>