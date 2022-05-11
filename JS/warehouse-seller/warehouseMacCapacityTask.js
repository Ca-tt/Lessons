// TODO: refactor code to object oriented

let warehouse = {
    iPhonesMaxCapacity: 25,
    macBooksMaxCapacity: 5,

    iPhonesInWarehouse: 20,
    macBooksInWarehouse: 3,
}

let supplier = {
    name: 'Cho Gung',
    iPhonesNumber: 3,
    macBooksNumber: 7,
}

function checkCellsAvailability(bookedInWarehouse, supplyToCome, maxCapacity, productName) {
    let canWeTakeYourOrder = (bookedInWarehouse + supplyToCome) < maxCapacity;
    let howMuchWeCanTake = maxCapacity - (bookedInWarehouse + supplyToCome);

    console.log('can take or not?', canWeTakeYourOrder);

    let supplierResponse;

    if(canWeTakeYourOrder) {
        supplierResponse =
            `
                Now, we can proceed.
                We have ${ howMuchWeCanTake } cells for your ${ productName } in our warehouse.
                Let us know if you have any other questions.
            `
    }
    else {
        supplierResponse = `
        Unfortunately, we can't proceed further.
        There's no place in our warehouse for you ${ productName }.
        `
    }

    console.log(supplierResponse);
    return supplierResponse;
}

function replyToSupplier(supplierName = supplier.name) {

    let newLetter = `
        Dear ${ supplierName }, \n
        Today we keep on our warehouse ${ warehouse.iPhonesInWarehouse} iPhones \n
        and ${ warehouse.macBooksInWarehouse } macBooks. \n
    `
    + checkCellsAvailability(
        warehouse.iPhonesInWarehouse,
        supplier.iPhonesNumber,
        warehouse.iPhonesMaxCapacity,
        'iPhone'
    )
    + checkCellsAvailability(
        warehouse.macBooksInWarehouse,
        supplier.macBooksNumber,
        warehouse.macBooksMaxCapacity,
        'macBook'
    );

    console.log(newLetter);
    return newLetter;
}

replyToSupplier();

