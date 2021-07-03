import React from 'react';

const NumberCounter = ({setValue, value, min, max, disabled}) => {
	const handlerInputCountMusic = (val) => {
		if (!disabled) {
			val = Math.max(Number(min), Math.min(Number(max), Number(val)));
			setValue(val);
		}
	}
	return (
		<div className="form-number-container">
			{!disabled&&<div className="form-number-control form-number-control_plus unselectable"
							 onClick={(e)=>{handlerInputCountMusic(value+1)}}>+</div>}
			<input readOnly type="number" disabled={disabled} value={value} className="form-text form-number" />
			{!disabled&&<div className="form-number-control form-number-control_minus unselectable"
				onClick={(e)=>{handlerInputCountMusic(value-1)}}>-</div>}
		</div>
	);
};

export default NumberCounter;
