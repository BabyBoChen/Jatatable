/**
 * @param {HTMLTableElement} tb
 * @param {object} settings
 */
 function jatatable(tb, settings){
	tb.classList.add("jatatable");
	let colHeaders = tb.querySelectorAll("th");
	for(let i = 0; i < colHeaders.length; i++){
		let colHeader = colHeaders[i];
		colHeader.style.position = "relative";
		let resizer = document.createElement("div");
		resizer.classList.add("resizer");
		let isLastCol = false;
		if(i == colHeaders.length - 1){
			isLastCol = true;
			resizer.classList.add("resizer-last");
		}
		if(!isLastCol) {
			resizer.addEventListener("mousedown", function(e){
				resizerMouseDown(tb, resizer, e);
			});
			resizer.addEventListener("touchstart", function(e){
				resizerTouchStart(tb, resizer, e);
			});
		} else {
			resizer.addEventListener("mousedown", function(e){
				lastResizerMouseDown(tb, resizer, e);
			});
			resizer.addEventListener("touchstart", function(e){
				lastResizerTouchStart(tb, resizer, e);
			});
		}
		colHeader.append(resizer);
	}
	tb.addEventListener("mousemove", function(e){
		resizerMouseMove(tb, e);
	});
	tb.addEventListener("touchmove", function(e){
		resizerTouchMove(tb, e);
	});
	tb.addEventListener("mouseup", function(e){
		resizerMouseUp(tb, e);
	});
	tb.addEventListener("touchend", function(e){
		resizerTouchEnd(tb, e);
	});
	tb.addEventListener("mouseleave", function(e){
		resizerMouseLeave(tb,e);
	});
}
/**
 * @param {HTMLTableElement} tb
 * @param {HTMLDivElement} s
 * @param {MouseEvent} e
 */
function resizerMouseDown(tb, s, e){
	tb.resizer = s;
	tb.x0 = e.screenX;
}
/**
 * @param {HTMLTableElement} tb
 * @param {HTMLDivElement} s
 * @param {TouchEvent} e
 */
function resizerTouchStart(tb, s ,e){
	tb.resizer = s;
	tb.x0 = e.touches[0].screenX;
}
/**
 * @param {HTMLTableElement} tb
 * @param {HTMLDivElement} s
 * @param {MouseEvent} e
 */
function lastResizerMouseDown(tb, s, e){
	tb.resizer = s;
	tb.x0 = e.screenX;
}
/**
 * @param {HTMLTableElement} tb
 * @param {HTMLDivElement} s
 * @param {TouchEvent} e
 */
function lastResizerTouchStart(tb, s ,e){
	tb.resizer = s;
	tb.x0 = e.touches[0].screenX;
}
/** 
 * @param {HTMLTableElement} s
 * @param {MouseEvent} e
 */
function resizerMouseMove(s, e){
	if(s.resizer){
		let deltaX = e.screenX - s.x0;
		let col = s.resizer.parentElement;
		let colStyle = getComputedStyle(col);
		let colWidth = parseInt(colStyle.width);
		col.style.width = colWidth + deltaX + "px";
		s.x0 = e.screenX;
		if(deltaX > 0){
			s.parentElement.scrollLeft += deltaX;	
		}
	}
}
/** 
 * @param {HTMLTableElement} s
 * @param {TouchEvent} e
 */
function resizerTouchMove(s, e){
	if(s.resizer){
		e.preventDefault();
		let deltaX = e.touches[0].screenX - s.x0;
		let col = s.resizer.parentElement;
		let colStyle = getComputedStyle(col);
		let colWidth = parseInt(colStyle.width);
		col.style.width = colWidth + deltaX + "px";
		s.x0 = e.touches[0].screenX;
	}
}
/** 
 * @param {HTMLTableElement} s
 * @param {MouseEvent} e
 */
function resizerMouseUp(s, e){
	s.resizer = null;
}
/** 
 * @param {HTMLTableElement} s
 * @param {TouchEvent} e
 */
function resizerTouchEnd(s, e){
	s.resizer = null;
}
/** 
 * @param {HTMLTableElement} s
 * @param {MouseEvent} e
 */
function resizerMouseLeave(s, e){
	s.resizer = null;
}


