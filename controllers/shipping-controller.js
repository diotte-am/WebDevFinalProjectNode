const Easypost = require('@easypost/api');
const api = new Easypost('EZTK9d1ca956fb6a49b69313aab55b3cc4d9K4sCsKJ1l2QliXb3jea56w');
const rates = []

const searchByAddress = async (req, res) => {

    const newAddress = req.body;

    const fromAddress = await new api.Address({
        company: 'Comprint',
        street1: '216 Newton St',
        street2: 'R',
        city: 'Waltham',
        state: 'MA',
        zip: '02453',
        phone: '999-999-9999'
    });

    const toAddress = await new api.Address({
        company: 'EasyPost',
        street1: '154 walnut Street',
        street2: '5th Floor',
        city: 'Somerville',
        state: 'MA',
        zip: '02145',
        phone: '415-528-7555'
    });

    const parcel = await new api.Parcel({
        length: 20.2,
        width: 10.9,
        height: 5,
        weight: 65.9
    });

    const newShipment = await new api.Shipment({
        to_address: toAddress,
        from_address: newAddress,
        parcel: parcel
    });

    const info = await newShipment.save();

    res.json(info)


}

const shipping = (app) => {

    app.post('/api/shipping/search', searchByAddress);

}
module.exports = shipping;
