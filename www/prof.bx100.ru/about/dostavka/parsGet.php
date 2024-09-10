<?php
$fo = fopen('pars-page.html', 'w');
fwrite($fo, $content);
$html = file_get_contents('pars-page.html');
$fo2 = fopen('main.html', 'w');

$style = "<style>
.sidebar-panel-header-view, .header-view, .sidebar-toggle-button, .rounded-controls, .user-menu-control, .map-copyrights, .map-geolocation-control, .zoom-control {
    display: none !important;
}
.sidebar-view__panel {
    padding-top: 0px !important;
    background: whitesmoke !important;
}
.user-maps-features-view__feature._active, .user-maps-features-view__feature:hover {
    background: #ffefbf !important;
    border-radius: 5px !important;
    transition: .3s !important;
}
.user-maps-panel-view__subheader {
    position: sticky !important;
    top: 0 !important;
    padding: 20px 15px !important;
}
</style>";
fwrite($fo2, $style);

$doc = phpQuery::newDocument($html);
$elem = $doc->find('head');
$head = $elem->html();
fwrite($fo2, $head);

$elem = $doc->find('body');
fwrite($fo2, $elem);
?>