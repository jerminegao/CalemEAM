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
 * Doc module menu
 */

CalemMenuDef['CalemDocFormList'] = {
	id: 'CalemDocFormList',
	title: 'document',
	icon: 'CalemDoc',
	disIcon: null,
	tooltip: null, 
	enabled: true,		   
	onSelect: {CalemMenuSelect: {listener: 'OpenFormListener'}}
};

CalemMenuDef['CalemDocTypeFormList'] = {
	id: 'CalemDocTypeFormList',
	title: 'doc_type',
	icon: 'CalemDoc',
	disIcon: null,
	tooltip: null, 
	enabled: true,		   
	onSelect: {CalemMenuSelect: {listener: 'OpenFormListener'}}
};

CalemMenuDef['CalemDocUploadFormList'] = {
	id: 'CalemDocUploadFormList',
	title: 'doc_upload',
	icon: 'CalemUpload',
	disIcon: null,
	tooltip: null, 
	enabled: true,		   
	onSelect: {CalemMenuSelect: {listener: 'OpenFormListener'}}
};

// Upload view
CalemMenuDef['CalemTbUploadView'] = {
	id: 'CalemTbUploadView',
	title: 'menu_upload_view',
	icon: 'CalemUpload',
	disIcon: null,
	enabled: false,
	tooltip: null, 
	style: (DwtLabel.IMAGE_LEFT | DwtLabel.ALIGN_LEFT), 				   
	radioGroupId: null,
	idx: null,
	className: 'TBButton',
	posStyle: null,
	onSelect: {CalemMenuSelect: {listener: 'UploadViewListener'}}
};

// Attachment view
CalemMenuDef['CalemTbAttachmentView'] = {
	id: 'CalemTbAttachmentView',
	title: 'menu_attachment_view',
	icon: 'CalemUpload',
	disIcon: null,
	enabled: false,
	tooltip: null, 
	style: (DwtLabel.IMAGE_LEFT | DwtLabel.ALIGN_LEFT), 				   
	radioGroupId: null,
	idx: null,
	className: 'TBButton',
	posStyle: null,
	onSelect: {CalemMenuSelect: {listener: 'AttachmentViewListener'}}
};
