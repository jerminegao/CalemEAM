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
 * CalemEditInCheckoutToRender
 * Render Schedule edit field.
 *  
 */
function CalemEditInCheckoutToRender(parent, id, fldInfo, controller) {
	if (arguments.length==0) return;
	CalemEditRender.call(this, parent, id, fldInfo, controller);
}

CalemEditInCheckoutToRender.prototype=new CalemEditRender;
CalemEditInCheckoutToRender.prototype.constructor=CalemEditInCheckoutToRender;

CalemEditInCheckoutToRender.prototype.toString = function() { return "CalemEditInCheckoutToRender"; }

CalemEditInCheckoutToRender.prototype.render =
function(parentEl, yOff) {	
	this._control=new CalemEditInCheckoutTo({parent: this._parent, controller: this._controller});
	if (this._tableDd.isRequired(this._field)) {
		this._control.setRequired(true);
	}
	this._control.reparentHtmlElement(parentEl);
	//Need to set up validation here.
	this.setupValidation();
	
	var val= this._getFieldEditValueByRec();
	this._control.setValue(val, true);           
}
