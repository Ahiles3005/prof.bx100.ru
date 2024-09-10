<section class="separate-filter mb-5">
    <!-- Banner -->
    <div class="separate-filter__banner d-none d-lg-block"
         style="background-image: url(<?= $templateFolder ?>/images/banner.jpg);"
         aria-hidden="true"></div>
    <!-- Tab list -->
    <div class="separate-filter__inner">
        <h2 class="separate-filter__title d-lg-none">Выбери свое устройство</h2>
        <div class="separate-filter__tabs">
            <!-- Tab links -->
            <ul class="separate-filter__tablist nav nav_nowrap nav-tabs" role="tablist">
                <li class="nav-item" role="presentation">
                    <a class="nav-link active" id="filter-tab-1" data-bs-toggle="tab"
                       href="#filter-tab-1-content" role="tab" aria-controls="filter-tab-1-content"
                       aria-selected="true">
                        Ноутбуки
                    </a>
                </li>
                <li class="nav-item" role="presentation">
                    <a class="nav-link" id="filter-tab-2" data-bs-toggle="tab" href="#filter-tab-2-content"
                       role="tab" aria-controls="filter-tab-2-content" aria-selected="false">
                        Планшеты
                    </a>
                </li>
                <li class="nav-item" role="presentation">
                    <a class="nav-link" id="filter-tab-3" data-bs-toggle="tab" href="#filter-tab-3-content"
                       role="tab" aria-controls="filter-tab-3-content" aria-selected="false">
                        Компьютеры
                    </a>
                </li>
                <li class="nav-item" role="presentation">
                    <a class="nav-link" id="filter-tab-4" data-bs-toggle="tab" href="#filter-tab-4-content"
                       role="tab" aria-controls="filter-tab-4-content" aria-selected="false">
                        Смартфоны
                    </a>
                </li>
            </ul>
            <!-- Tabs content -->
            <div class="tab-content">
                <div class="tab-pane fade show active" id="filter-tab-1-content" role="tabpanel"
                     aria-labelledby="filter-tab-1">
                    <!-- Form -->
                    <form action="" name="separate-filter" class="separate-filter__form">
                        <div class="row">
                            <!-- Column -->
                            <div class="col-12 col-lg-4">
                                <!-- Checkboxes set -->
                                <fieldset class="custom-fieldset mb-4">
                                    <legend class="custom-fieldset__legend">
                                        Диагональ
                                    </legend>
                                    <div class="custom-fieldset__inner">
                                        <!-- Checkbox -->
                                        <div class="custom-fieldset__field button-toggle">
                                            <input class="button-toggle__input btn-check"
                                                   name="diagonal"
                                                   id="field-diagonal-0"
                                                   type="checkbox"
                                                   value="">
                                            <label class="button-toggle__label"
                                                   for="field-diagonal-0">
                                                7”
                                            </label>
                                        </div>
                                        <!-- Checkbox -->
                                        <div class="custom-fieldset__field button-toggle">
                                            <input class="button-toggle__input btn-check"
                                                   name="diagonal"
                                                   id="field-diagonal-1"
                                                   type="checkbox"
                                                   value="">
                                            <label class="button-toggle__label"
                                                   for="field-diagonal-1">
                                                8”
                                            </label>
                                        </div>
                                        <!-- Checkbox -->
                                        <div class="custom-fieldset__field button-toggle">
                                            <input class="button-toggle__input btn-check"
                                                   name="diagonal"
                                                   id="field-diagonal-2"
                                                   type="checkbox"
                                                   value="">
                                            <label class="button-toggle__label"
                                                   for="field-diagonal-2">
                                                10,1”
                                            </label>
                                        </div>
                                        <!-- Checkbox -->
                                        <div class="custom-fieldset__field button-toggle">
                                            <input class="button-toggle__input btn-check"
                                                   name="diagonal"
                                                   id="field-diagonal-3"
                                                   type="checkbox"
                                                   value="">
                                            <label class="button-toggle__label"
                                                   for="field-diagonal-3">
                                                10,3”
                                            </label>
                                        </div>
                                        <!-- Checkbox -->
                                        <div class="custom-fieldset__field button-toggle">
                                            <input class="button-toggle__input btn-check"
                                                   name="diagonal"
                                                   id="field-diagonal-4"
                                                   type="checkbox"
                                                   value="">
                                            <label class="button-toggle__label"
                                                   for="field-diagonal-4">
                                                13”
                                            </label>
                                        </div>
                                    </div>
                                </fieldset>
                                <!-- Checkboxes set -->
                                <fieldset class="custom-fieldset mb-4">
                                    <legend class="custom-fieldset__legend">
                                        Операционная система
                                    </legend>
                                    <div class="custom-fieldset__inner">
                                        <!-- Checkbox -->
                                        <div class="custom-fieldset__field button-toggle">
                                            <input class="button-toggle__input btn-check"
                                                   name="os"
                                                   id="field-os-0"
                                                   type="checkbox"
                                                   value="">
                                            <label class="button-toggle__label"
                                                   for="field-os-0">
                                                Windows Pro
                                            </label>
                                        </div>
                                        <!-- Checkbox -->
                                        <div class="custom-fieldset__field button-toggle">
                                            <input class="button-toggle__input btn-check"
                                                   name="os"
                                                   id="field-os-1"
                                                   type="checkbox"
                                                   value="">
                                            <label class="button-toggle__label"
                                                   for="field-os-1">
                                                iOS
                                            </label>
                                        </div>
                                        <!-- Checkbox -->
                                        <div class="custom-fieldset__field button-toggle">
                                            <input class="button-toggle__input btn-check"
                                                   name="os"
                                                   id="field-os-2"
                                                   type="checkbox"
                                                   value="">
                                            <label class="button-toggle__label"
                                                   for="field-os-2">
                                                Android
                                            </label>
                                        </div>
                                    </div>
                                </fieldset>
                            </div>
                            <!-- Column -->
                            <div class="col-12 col-lg-4">
                                <!-- Checkboxes set -->
                                <fieldset class="custom-fieldset mb-4">
                                    <legend class="custom-fieldset__legend">
                                        Серия процессор
                                    </legend>
                                    <div class="custom-fieldset__inner">
                                        <!-- Checkbox -->
                                        <div class="custom-fieldset__field button-toggle">
                                            <input class="button-toggle__input btn-check"
                                                   name="proc"
                                                   id="field-proc-0"
                                                   type="checkbox"
                                                   value="">
                                            <label class="button-toggle__label"
                                                   for="field-proc-0">
                                                Core i7
                                            </label>
                                        </div>
                                        <!-- Checkbox -->
                                        <div class="custom-fieldset__field button-toggle">
                                            <input class="button-toggle__input btn-check"
                                                   name="proc"
                                                   id="field-proc-1"
                                                   type="checkbox"
                                                   value="">
                                            <label class="button-toggle__label"
                                                   for="field-proc-1">
                                                Core i5
                                            </label>
                                        </div>
                                        <!-- Checkbox -->
                                        <div class="custom-fieldset__field button-toggle">
                                            <input class="button-toggle__input btn-check"
                                                   name="proc"
                                                   id="field-proc-2"
                                                   type="checkbox"
                                                   value="">
                                            <label class="button-toggle__label"
                                                   for="field-proc-2">
                                                Celeron
                                            </label>
                                        </div>
                                        <!-- Checkbox -->
                                        <div class="custom-fieldset__field button-toggle">
                                            <input class="button-toggle__input btn-check"
                                                   name="proc"
                                                   id="field-proc-3"
                                                   type="checkbox"
                                                   value="">
                                            <label class="button-toggle__label"
                                                   for="field-proc-3">
                                                Snapdragen
                                            </label>
                                        </div>
                                        <!-- Checkbox -->
                                        <div class="custom-fieldset__field button-toggle">
                                            <input class="button-toggle__input btn-check"
                                                   name="proc"
                                                   id="field-proc-4"
                                                   type="checkbox"
                                                   value="">
                                            <label class="button-toggle__label"
                                                   for="field-proc-4">
                                                Helio
                                            </label>
                                        </div>
                                    </div>
                                </fieldset>
                            </div>
                            <!-- Column -->
                            <div class="col-12 col-lg-4">
                                <!-- Checkboxes set -->
                                <fieldset class="custom-fieldset mb-4">
                                    <legend class="custom-fieldset__legend">
                                        Оперативная память
                                    </legend>
                                    <div class="custom-fieldset__inner">
                                        <!-- Checkbox -->
                                        <div class="custom-fieldset__field button-toggle">
                                            <input class="button-toggle__input btn-check"
                                                   name="ram"
                                                   id="field-ram-0"
                                                   type="checkbox"
                                                   value="">
                                            <label class="button-toggle__label"
                                                   for="field-ram-0">
                                                16 Гб
                                            </label>
                                        </div>
                                        <!-- Checkbox -->
                                        <div class="custom-fieldset__field button-toggle">
                                            <input class="button-toggle__input btn-check"
                                                   name="ram"
                                                   id="field-ram-1"
                                                   type="checkbox"
                                                   value="">
                                            <label class="button-toggle__label"
                                                   for="field-ram-1">
                                                8 Гб
                                            </label>
                                        </div>
                                        <!-- Checkbox -->
                                        <div class="custom-fieldset__field button-toggle">
                                            <input class="button-toggle__input btn-check"
                                                   name="ram"
                                                   id="field-ram-2"
                                                   type="checkbox"
                                                   value="">
                                            <label class="button-toggle__label"
                                                   for="field-ram-2">
                                                4 Гб
                                            </label>
                                        </div>
                                        <!-- Checkbox -->
                                        <div class="custom-fieldset__field button-toggle">
                                            <input class="button-toggle__input btn-check"
                                                   name="ram"
                                                   id="field-ram-3"
                                                   type="checkbox"
                                                   value="">
                                            <label class="button-toggle__label"
                                                   for="field-ram-3">
                                                2 Гб
                                            </label>
                                        </div>
                                    </div>
                                </fieldset>
                                <!-- Checkboxes set -->
                                <fieldset class="custom-fieldset mb-4">
                                    <legend class="custom-fieldset__legend">
                                        Встроенная память
                                    </legend>
                                    <div class="custom-fieldset__inner">
                                        <!-- Checkbox -->
                                        <div class="custom-fieldset__field button-toggle">
                                            <input class="button-toggle__input btn-check"
                                                   name="disk"
                                                   id="field-disk-0"
                                                   type="checkbox"
                                                   value="">
                                            <label class="button-toggle__label"
                                                   for="field-disk-0">
                                                512 Гб
                                            </label>
                                        </div>
                                        <!-- Checkbox -->
                                        <div class="custom-fieldset__field button-toggle">
                                            <input class="button-toggle__input btn-check"
                                                   name="disk"
                                                   id="field-disk-1"
                                                   type="checkbox"
                                                   value="">
                                            <label class="button-toggle__label"
                                                   for="field-disk-1">
                                                256 Гб
                                            </label>
                                        </div>
                                        <!-- Checkbox -->
                                        <div class="custom-fieldset__field button-toggle">
                                            <input class="button-toggle__input btn-check"
                                                   name="disk"
                                                   id="field-disk-2"
                                                   type="checkbox"
                                                   value="">
                                            <label class="button-toggle__label"
                                                   for="field-disk-2">
                                                128 Гб
                                            </label>
                                        </div>
                                        <!-- Checkbox -->
                                        <div class="custom-fieldset__field button-toggle">
                                            <input class="button-toggle__input btn-check"
                                                   name="disk"
                                                   id="field-disk-3"
                                                   type="checkbox"
                                                   value="">
                                            <label class="button-toggle__label"
                                                   for="field-disk-3">
                                                64 Гб
                                            </label>
                                        </div>
                                        <!-- Checkbox -->
                                        <div class="custom-fieldset__field button-toggle">
                                            <input class="button-toggle__input btn-check"
                                                   name="disk"
                                                   id="field-disk-4"
                                                   type="checkbox"
                                                   value="">
                                            <label class="button-toggle__label"
                                                   for="field-disk-4">
                                                32 Гб
                                            </label>
                                        </div>
                                        <!-- Checkbox -->
                                        <div class="custom-fieldset__field button-toggle">
                                            <input class="button-toggle__input btn-check"
                                                   name="disk"
                                                   id="field-disk-5"
                                                   type="checkbox"
                                                   value="">
                                            <label class="button-toggle__label"
                                                   for="field-disk-5">
                                                16 Гб
                                            </label>
                                        </div>
                                    </div>
                                </fieldset>
                            </div>
                        </div>
                        <div class="text-center">
                            <button class="button ms-auto me-auto"
                                    aria-label="Показать товары, подходящие под выбранные характеристики"
                                    type="submit">
                                Подобрать
                            </button>
                        </div>
                    </form>
                </div>
                <div class="tab-pane fade" id="filter-tab-2-content" role="tabpanel"
                     aria-labelledby="filter-tab-2">
                    2
                </div>
                <div class="tab-pane fade" id="filter-tab-3-content" role="tabpanel"
                     aria-labelledby="filter-tab-3">
                    3
                </div>
                <div class="tab-pane fade" id="filter-tab-4-content" role="tabpanel"
                     aria-labelledby="filter-tab-4">
                    4
                </div>
            </div>
        </div>
    </div>
</section>
