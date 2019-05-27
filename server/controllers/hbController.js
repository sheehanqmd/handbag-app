const hb = [
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8ebhtiiLpREf9ejXihhqIOBdsLTTrIVoN7IxrK8tjNfszgeuzwA",
    price: "$500",
    description: "Chanel Excellent condition!",
    contact: "(214)555-5555"
  },
  {
      image: "https://images.neimanmarcus.com/ca/5/product_assets/V/3/Z/G/S/NMV3ZGS_mz.jpg",
      price: "$300",
      description:"Ferragamo",
      contact: "(214)555-5555"
  },
  {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHlUFhQjxC_3YTdm2Dd_ynNMAmqS2oIIyBT2D1J3CiFkTcA0Tr",
      price: "$250",
      description: "Louis Vuitton",
      contact: "(214)555-5555"
  }
];
 
const getHb = (req, res) => {
    res.json(hb);
};

const postHb = (req, res) => {
   hb.push(req.body);
   res.json(hb);
};

const deleteHb = (req, res) => {
  const index = hb.findIndex(hbs => hbs.description === req.params.description);
  hb.splice(index, 1);
  res.json(hb);
};

const putHb = (req, res) => {
  hbs.update(req.body);
  res.json(Hbs)
};


module.exports = {
    getHb,
    postHb,
    deleteHb,
    putHb
};