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
 * CalemTrainingFormList
 */
function CalemTrainingFormList(parent, formId, data) {
	if (arguments.length==0) return;
	CalemFormList.call(this, parent, formId, data);
}

CalemTrainingFormList.prototype = new CalemFormList;
CalemTrainingFormList.prototype.constructor = CalemTrainingFormList;

CalemTrainingFormList.prototype.toString = function() { return "CalemTrainingFormList";}

/**
 * Business APIs
 */
CalemTrainingFormList.prototype._getFormNewId =
function(evt) {
    return 'CalemTrainingFormNew';
} 

/**
 * Open a master detailed view with recordlist and current record position.
 */
CalemTrainingFormList.prototype._onOpen =
function(evt) {
	//Get the selection event
    var item=CalemEvent.getItem(evt);
	//Prepare data for master detail view.
	var data = {modelItem: this._modelItem, item: item};
	//pass-through current data model and selection
	this._openForm('CalemTrainingFormMdTab', data);
} 

/**
 * Deletion must be handled specially
 */
CalemTrainingFormList.prototype.onDelete =
function(evt) {
	//If there're detailed records do not allow a deletion.
	var rec=CalemEvent.getItem(evt);
	CalemTrainingBo.getInstance().canDelete(rec, new AjxCallback(this, this.onDeleteBoCallback, {evt: evt}));
}

