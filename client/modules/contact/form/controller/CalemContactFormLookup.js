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
 * CalemContactFormLookup
 */
function CalemContactFormLookup(parent, formId, data) {
	if (arguments.length==0) return;
	CalemFormLookup.call(this, parent, formId, data);
}

CalemContactFormLookup.prototype = new CalemFormLookup;
CalemContactFormLookup.prototype.constructor = CalemContactFormLookup;

CalemContactFormLookup.prototype.toString = function() { return "CalemContactFormLookup";}

/**
 * Business APIs
 */
CalemContactFormLookup.prototype._getFormNewId =
function() {
   return 'CalemContactFormNew';
} 

/**
 * Open a master detailed view with recordlist and current record position.
 */
CalemContactFormLookup.prototype._getFormReadId =
function(evt) {
	return 'CalemContactFormRead';
} 
