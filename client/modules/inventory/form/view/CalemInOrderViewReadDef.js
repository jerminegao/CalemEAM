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
 

CalemViewDef['CalemInOrderViewRead']={
	CalemViewInfo: {
		id: 'CalemInOrderViewRead',
		type: 'CalemView',
		layout: {
		 CalemLayoutInfo: {
			tableLayout: {CalemTableLayoutInfo: {}},
			colLayout: {CalemColLayoutInfo: {colCount: 4}}, //Potentially col width definition.
			rows: [
					{CalemTrInfo: {cols: ['lb_caption']}},
					{CalemTrInfo: {cols: ['toolbar']}},
               {CalemTrInfo: {cols: ['err']}},						             

					{CalemTrInfo: {cols: ['lb_reorder']}},
					{CalemTrInfo: {cols: ['lb_stock']}},
					//Last changes
					{CalemTrInfo: {cols: ['lb_last_changes']}}                                                                                                               				                               				                               
				   ]
			}
		},
		itemMap : {
			CalemItemMap: {
			toolbar: {
				CalemToolBarInfo: {
					type: 'CalemToolBar',
					layout: ['CalemTbPrev', 'CalemTbNext', 'sep', 'CalemTbCancel', 'sep2', 'CalemTbCustomize'],
					list: [
					
					{CalemButtonInfo: {id: 'CalemTbDataRefresh'}},
					
					{CalemSeparator: {id: 'sep', className: 'CalemToolBarSeparator'}},
					
					{ CalemButtonInfo: {
						  id: 'CalemTbPrev',
						  customInfo: {
						  	  CalemMenuCustomInfo: {
						  	  	 events: [
						  	   		{CalemEventInfo: {id: CalemEvent.RECORD_POS_LAST, func: '_enableIt'}},
						  	   		{CalemEventInfo: {id: CalemEvent.RECORD_POS_MID, func: '_enableIt'}},
						  	   		{CalemEventInfo: {id: CalemEvent.RECORD_POS_FIRST_LAST, func: '_disableIt'}},
						  	   		{CalemEventInfo: {id: CalemEvent.RECORD_POS_FIRST, func: '_disableIt'}},
						  	   		{CalemEventInfo: {id: CalemEvent.RECORD_POS_INVALID, func: '_disableIt'}}
						  	   	]
						  	  }
						  }  
					  }		
					},
					{ CalemButtonInfo: {
						  id: 'CalemTbNext',
						  customInfo: {
						  	  CalemMenuCustomInfo: {
						  	  	 events: [
						  	  	 		{CalemEventInfo: {id: CalemEvent.RECORD_POS_FIRST, func: '_enableIt'}},
						  	  	 		{CalemEventInfo: {id: CalemEvent.RECORD_POS_MID, func: '_enableIt'}},
						  	   		{CalemEventInfo: {id: CalemEvent.RECORD_POS_LAST, func: '_disableIt'}},	
						  	   		{CalemEventInfo: {id: CalemEvent.RECORD_POS_FIRST_LAST, func: '_disableIt'}},		  	   		
						  	   		{CalemEventInfo: {id: CalemEvent.RECORD_POS_INVALID, func: '_disableIt'}}
						  	   	]
						  	  }
						  }  
					  }		
					},
					
					{CalemSeparator: {id: 'sep2', className: 'CalemToolBarSeparator'}},
					
					{ CalemButtonInfo: {id: 'CalemTbCancel'}},
					
					{ CalemButtonInfo: {
						  id: 'CalemTbInGenOrderReq',
						  customInfo: {
						  	  CalemMenuCustomInfo: {
						  	  	 enabled: false,
						  	  	 events: [
						  	   		{CalemEventInfo: {id: CalemEvent.RECORD_POS_VALID, func: '_enableIt'}},
						  	   		{CalemEventInfo: {id: CalemEvent.RECORD_POS_INVALID, func: '_disableIt'}}
						  	   	]
						  	  }
						  }  
					  }		
					},
					
					{ CalemButtonInfo: {id: 'CalemTbCustomize'}}
				]
			} },
			'lb_caption': {
				CalemLabelInfo: {id: 'in_order_list', className: 'CalemEditCaption'}
			},
			'err': {
				CalemFormErrorInfo: {id: 'form_error'}
			},
			'lb_reorder': {
				CalemLabelInfo: {id: 'lb_reorder', className: 'CalemEditSection'}
			},
			'lb_stock': {
				CalemLabelInfo: {id: 'in_stock_level', className: 'CalemEditSection'}
			},
			'lb_last_changes': {
				CalemLabelInfo: {id: 'last_changes', className: 'CalemEditSection'}
			}
	}
 } //ItemMap	
}
};

