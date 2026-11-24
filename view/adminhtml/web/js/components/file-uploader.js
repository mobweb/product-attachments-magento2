/**
 * File: file-uploader.js
 *
 * @author Bartosz Kubicki bartosz.kubicki@lizardmedia.pl>
 * @copyright Copyright (C) 2019 Lizard Media (http://lizardmedia.pl)
 */

'use strict';

define([
    'jquery',
    'underscore',
    'Magento_Downloadable/js/components/file-uploader'
], function ($, _, Component) {
    // Since Magento 2.4.7, the parent uploader is based on Uppy (jQuery File Upload was removed),
    // so the custom initUploader() calling $(fileInput).fileupload() was removed
    return Component.extend({});
});
