<?php
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

// Checking basic initialization
if (!defined('_CALEM_DIR_')) die("Access denied at ".__FILE__);

/**
 * This is the helper class to convert messages to Php array.
 */
class MessageToPhp {

 	public static function fileToPhp($fullname, $ar) {  
     $handle = @fopen($fullname, "r");
	  if ($handle) {
		while (!feof($handle)) {
			$buffer = fgets($handle);
			if (strpos($buffer, '#')===0) continue;
			$ar= self::parseProperty($buffer, $ar);
		}
     	fclose($handle);
	  }
     return $ar;
 	}
 	/**
 	 * Parse a property and make it JSON element
 	 * - Also converting JS Unicode \uhhhh to &#xhhhh;
 	 */
 	public static function parseProperty($prop, $ar) {
 		$key = strtok($prop, "=");
 		$key=trim($key);
 		if ($key) {
	 		$value=trim(strtok("="));
	 		/**
	 		 * Converting special chars from JS to PHP
	 		 * Do a check to be efficient.
	 		 */
	 		if (strpos($value, '\u') !== false) {
	 			$value=preg_replace('/\\\\u([0-9A-Fa-f]{4})/', '&#x$1;', $value);
	 		}
	 		$ar[$key]=$value;
 		}
 		return $ar;
 	}
}
?>
