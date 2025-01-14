/*
 * The contents of this file are subject to the CalemEAM Public License Version
 * 1.0 ("License"); You may not use this file except in compliance with the
 * License. You may obtain a copy of the License at http://www.calemeam.com/license
 *
 * Software distributed under the License is distributed on an "AS IS" basis,
 * WITHOUT WARRANTY OF ANY KIND, either express or implied.  See the License
 * for the specific language governing rights and limitations under the
 * License.
 *
 * The Original Code is: CalemEAM Open Source
 *
 * The Initial Developer of the Original Code is CalemEAM Inc.
 * Portions created by CalemEAM are Copyright (C) 2007 CalemEAM Inc.;
 * All Rights Reserved.
 
 * Contributor(s): 
 */
 
/**
 * Admin module menu
 */

//Modules Form

// forms
CalemMenuDef['CalemAssetFormList'] = {
	id: 'CalemAssetFormList',
	title: 'asset',
	icon: 'CalemAsset',
	disIcon: null,
	tooltip: null, 
	enabled: true,		   
	onSelect: {CalemMenuSelect: {listener: 'OpenFormListener'}}
};

//Codes
CalemMenuDef['CalemAssetCodes'] = {
	id: 'CalemAssetCodes',
	title: 'asset_codes',
	icon: 'CalemCodes',
	disIcon: null,
	tooltip: null,
	enabled: true,				   
	onSelect: null	
}; 

CalemMenuDef['CalemAssetTypeFormList'] = {
	id: 'CalemAssetTypeFormList',
	title: 'asset_type',
	icon: 'CalemAsset',
	disIcon: null,
	tooltip: null, 
	enabled: true,		   
	onSelect: {CalemMenuSelect: {listener: 'OpenFormListener'}}
};

CalemMenuDef['CalemMeterTypeFormList'] = {
	id: 'CalemMeterTypeFormList',
	title: 'meter_type',
	icon: 'CalemAsset',
	disIcon: null,
	tooltip: null, 
	enabled: true,		   
	onSelect: {CalemMenuSelect: {listener: 'OpenFormListener'}}
};

CalemMenuDef['CalemManufacturerFormList'] = {
	id: 'CalemManufacturerFormList',
	title: 'manufacturer',
	icon: 'CalemAsset',
	disIcon: null,
	tooltip: null, 
	enabled: true,		   
	onSelect: {CalemMenuSelect: {listener: 'OpenFormListener'}}
};

//Meter readings
CalemMenuDef['CalemTbMeterReadingHistory'] = {
	id: 'CalemTbMeterReadingHistory',
	title: 'view_meter_reading_history',
	icon: 'CalemOpen',
	disIcon: null,
	enabled: false,
	tooltip: null, 
	style: (DwtLabel.IMAGE_LEFT | DwtLabel.ALIGN_LEFT), 				   
	radioGroupId: null,
	idx: null,
	className: 'TBButton',
	posStyle: null,
	onSelect: {CalemMenuSelect: {listener: 'OpenMeterReadingHistory'}}	
};

CalemMenuDef['CalemTbAddMeterReading'] = {
	id: 'CalemTbAddMeterReading',
	title: 'add_meter_reading',
	icon: 'CalemNew',
	disIcon: null,
	enabled: false,
	tooltip: null, 
	style: (DwtLabel.IMAGE_LEFT | DwtLabel.ALIGN_LEFT), 				   
	radioGroupId: null,
	idx: null,
	className: 'TBButton',
	posStyle: null,
	onSelect: {CalemMenuSelect: {listener: 'OpenAddMeterReading'}}	
};

//Service log
CalemMenuDef['CalemTbAssetServiceLog'] = {
	id: 'CalemTbAssetServiceLog',
	title: 'asset_view_service_log',
	icon: 'CalemOpen',
	disIcon: null,
	enabled: true,
	tooltip: null, 
	className: 'TBButton',
	onSelect: {CalemMenuSelect: {listener: 'AssetServiceLog'}}	
};

//Activity log
CalemMenuDef['CalemTbAssetActivityLog'] = {
	id: 'CalemTbAssetActivityLog',
	title: 'asset_view_activity_log',
	icon: 'CalemOpen',
	disIcon: null,
	enabled: true,
	tooltip: null, 
	className: 'TBButton',
	onSelect: {CalemMenuSelect: {listener: 'AssetActivityLog'}}	
};

//Child
CalemMenuDef['CalemTbAssetChild'] = {
	id: 'CalemTbAssetChild',
	title: 'asset_view_asset_child',
	icon: 'CalemOpen',
	disIcon: null,
	enabled: true,
	tooltip: null, 
	className: 'TBButton',
	onSelect: {CalemMenuSelect: {listener: 'AssetChild'}}	
};

//Child
CalemMenuDef['CalemTbAssetLocChild'] = {
	id: 'CalemTbAssetLocChild',
	title: 'asset_view_asset_location_child',
	icon: 'CalemOpen',
	disIcon: null,
	enabled: true,
	tooltip: null, 
	className: 'TBButton',
	onSelect: {CalemMenuSelect: {listener: 'AssetLocChild'}}	
};

//Asset report list
CalemMenuDef['CalemAssetListFormList'] = {
	id: 'CalemAssetListFormList',
	title: 'asset_report_list',
	icon: 'CalemAsset',
	disIcon: null,
	enabled: true,
	tooltip: null, 
	className: 'TBButton',
	onSelect: {CalemMenuSelect: {listener: 'OpenFormListener'}}	
};
