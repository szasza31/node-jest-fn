module.exports.reorder = (arr) => {
  
	const result = new Array();
    const length = arr.length;
	const arr2D = new Array(length);
	
	for (let i = 0; i < arr2D.length; i++) {
		arr2D[i] = new Array();
    }
    
    for (const category of arr) {
        if (!category.hasOwnProperty("parent") || category.parent === null) {
            category.mainCategory = true;
            delete category.parent;
        }
        for (const [key, value] of Object.entries(category)) {      
            if (key === "parent" && value > 0 ) {
                delete category.parent;
				arr2D[value - 1].push(category);                       
            }      
        }
    }   

	for (const [index, array] of arr2D.entries()) {
		if (!arr[index].hasOwnProperty("children")) {
			arr[index].children = array;
		}
		if (arr[index].hasOwnProperty("mainCategory")){
            delete arr[index].mainCategory;
			result.push(arr[index]);
		}
	}
	
    return result;
};