class createHTMLtemplates {
	constructor(
		HTMLWrapper,
		CSSClass,
		insertIntoTagName,
		insertIntoCSSClasses,
		HTMLtemplate,
		data
	) {
		this.HTMLWrapper = HTMLWrapper;
		this.CSSClass = CSSClass;
		this.insertIntoTagName = insertIntoTagName;
		this.insertIntoCSSClasses = insertIntoCSSClasses;
		this.HTMLtemplate = HTMLtemplate;
		this.data = data;
	}

	// create wrapper with CSS Class and insert it
	createHTMLTemplate() {
		let HTMLTemplate = document.createElement(this.HTMLWrapper);
		for (let className of this.CSSClass) {
			HTMLTemplate.classList.add(className);
		}
		HTMLTemplate.innerHTML = this.HTMLtemplate;

		return HTMLTemplate;
	}

	get HTMLTemplate() {
		return this.createHTMLTemplate();
	}

	// fill template with data
	fillTemplates() {
		let templatesWrapper = document.createElement(this.insertIntoTagName);
		let data = this.data;

		for (let className of this.insertIntoCSSClasses) {
			templatesWrapper.classList.add(className);
		}

		for (let item of data) {
			let template = this.createHTMLTemplate();

			let templateImage = template.querySelector(".template-image");
			let templatePrice = template.querySelector(".template-price");
			let templateTitle = template.querySelector(".template-title");
			let templateProductData = template.querySelector(
				".template-product-data"
			);

			templateTitle.innerHTML = item.title;
			templatePrice.innerHTML = item.price;
			templateImage.setAttribute("src", item.image);

			templateProductData.setAttribute("data-product-id", item.id);
			templateProductData.setAttribute("data-product-count", item.count);
			templateProductData.setAttribute("data-product-title", item.title);
			templateProductData.setAttribute("data-product-price", item.price);
			templateProductData.setAttribute("data-product-image", item.image);

			templatesWrapper.appendChild(template);
		}
		return templatesWrapper;
	}

	get getFilledTemplates() {
		return this.fillTemplates();
	}

}

// enableTemplateFunctions(element, function)
// enableTemplateFunctions()
// на шаблоны можно вешать функции, но позже
// после вставки их в шаблон перебирать дату, 
// и если id совпадают, вешать определённые функции
// passFunction(element, functionName)
// попробую затестить это дерьмо на вишлисте
// либо я гений, либо я всё пиздец переусложнил


let products = new createHTMLtemplates(
	"figure",
	["col", "sm-4"],
	"section",
	["templates", "row", "g-4", "my-3"],
	productTemplate,
	productsData,
);

let productsSection = document.querySelector(".products");
productsSection.appendChild(products.getFilledTemplates);

// generate HTML templates when click on add-to-cart-button
// test template generator
// нужно разбивать функционал генератора
// 1. Генерация шаблона или шаблоново
// 2. Наполнение данными (могут передать объект или массив)
// 3. Наполнение функциями -- включение (могут передать, могут не передать)