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
 * CalemRcmActionPartFormList
 */
function CalemRcmActionPartFormList(parent, formId, data) {
	if (arguments.length==0) return;
	CalemFormListDetNoMd.call(this, parent, formId, data);
}

CalemRcmActionPartFormList.prototype = new CalemFormListDetNoMd;
CalemRcmActionPartFormList.prototype.constructor = CalemRcmActionPartFormList;

CalemRcmActionPartFormList.prototype.toString = function() { return "CalemRcmActionPartFormList";}

/**
 * Business APIs
 */
CalemRcmActionPartFormList.prototype._getFormNewId =
function(evt) {
    return 'CalemRcmActionPartFormNew';
} 

/**
 * Open a master detailed view with recordlist and current record position.
 */
CalemRcmActionPartFormList.prototype._getFormReadId =
function(evt) {
	return 'CalemRcmActionPartFormRead';
} 

//D not cache this form
CalemRcmActionPartFormList.prototype.getCacheEmbedOnClose =
function() {
	return false; //close down upon close.
}
