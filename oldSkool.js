(function (window) {
	'use strict';
	function defineOldSkool() {
		var oldSkool = function(input) {
			var _errMsg = {
				wrongType: 'Wrong type. Expected type: ',
				existingVar: 'Variable already defined',
			};	
			var _types = {
				'=': 'number',
				'#': 'string',
				'?': 'boolean'
			};
			var _numIndex = (input.indexOf('=')!=-1)?input.indexOf('='):Infinity
			 ,  _strIndex = (input.indexOf('#')!=-1)?input.indexOf('#'):Infinity
			 ,  _boolIndex = (input.indexOf('?')!=-1)?input.indexOf('?'):Infinity
			 ,  _typeIndex = Math.min(_numIndex,_strIndex,_boolIndex)
			 ,  _type = _types[input.charAt(_typeIndex)]  
			 ,  _name = input.substring(0,_typeIndex)
			 ,  _value = input.substring(_typeIndex+1)
			 ,  _castedValue = undefined
			 ,  _valueType = (_type!='string')?eval('_castedValue='+_value+';typeof _castedValue;'):'string';
			if (_type == _valueType) o$cope[_name] = (_type!='string')?_castedValue:_value;
			else throw _errMsg.wrongType + _type;
			try {
				Object.defineProperty(window, _name, {
					configurable: true,
					get: function() {
						return o$cope[_name];
					},
					set: function(newValue) {
						if (typeof newValue == _type) o$cope[_name] = newValue;
						else throw _errMsg.wrongType + _type;
					}
				});
			} 
			catch(err) { 
				throw _errMsg.existingVar;
			} 
			return window[_name];
		};
		return oldSkool;
	};
	if ((typeof o$ == 'undefined') && (typeof o$cope == 'undefined')){
		window.o$cope = {};
		window.o$ = defineOldSkool();
		console.log('oldSkool is alive!');
	} else 
		throw "OldSkool library already defined";
})(window);
