/**
 * @param {HTMLTableElement} tb
 * @param {object} settings
 */
 function jatatable(tb, settings){
	tb.classList.add("jatatable");
	tb.jatatableSettings = settings;
	let colHeaders = tb.querySelectorAll("th");
	for(let i = 0; i < colHeaders.length; i++){
		let colHeader = colHeaders[i];
		colHeader.classList.add("jatatable-th");
		if(settings.autoColumnWidth){
			autoColumnWidth(colHeader);
		}
		let resizer = document.createElement("div");
		resizer.classList.add("resizer");
		if(i == colHeaders.length - 1){
			resizer.classList.add("resizer-last");
		}
		resizer.addEventListener("mousedown", function(e){
			resizerMouseDown(tb, resizer, e);
		});
		resizer.addEventListener("touchstart", function(e){
			resizerTouchStart(tb, resizer, e);
		});
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
 * @param {HTMLTableCellElement} th
 */
function autoColumnWidth(th){
	let textWidth = calcTextWidth(th.innerText, th.parentElement);
	th.style.width = (textWidth) + "px";
}
/**
 * @param {String} text
 * @param {HTMLTableCellElement} parentElement
 * @returns {Number}
 */
function calcTextWidth(text, parentElement){
	let span = document.createElement("span");
	span.innerHTML = text;
	span.style.position = "absolute";
	span.style.visibility = "hidden";
	span.style.height = "auto";
	span.style.width = "auto";
	span.style.whiteSpace = "nowrap";
	parentElement.append(span);
	let textWidth = span.clientWidth;
	span.remove();
	return textWidth;
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
/** 
 * @param {HTMLTableElement} s
 * @param {String} header
 * @returns {[HTMLTableRowElement]}
 */
function jatatableInsertColumn(s, header){
	let thRow = s.querySelector("thead tr");
	let th = document.createElement("th");
	th.classList.add("jatatable-th");
	th.innerText = header;
	if(s.jatatableSettings.autoColumnWidth){
		let textWidth = calcTextWidth(header, thRow);
		th.style.width = (textWidth) + "px";
	}
	thRow.append(th);
	document.querySelector(".resizer-last")?.classList.remove("resizer-last");
	let resizer = document.createElement("div");
	resizer.classList.add("resizer");
	resizer.classList.add("resizer-last");
	resizer.addEventListener("mousedown", function(e){
		resizerMouseDown(s, resizer, e);
	});
	resizer.addEventListener("touchstart", function(e){
		resizerTouchStart(s, resizer, e);
	});
	th.append(resizer);
	let rows = s.querySelectorAll("tbody tr");
	rows.forEach(function(row){
		let td = document.createElement("td");
		row.append(td);
	});
	return rows;
}


