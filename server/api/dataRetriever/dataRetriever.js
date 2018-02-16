const data2017 = require('../../../data/nvdcve-1.0-2017.json');

const max = data2017.CVE_data_numberOfCVEs;

exports.retrieve = (from,to) => {
    if(from >= max){ //cap the retrieval to the max number of entries
        from = max; 
    }
    if(to >= max){ //cap the retrieval to the max number of entries
        to = max; 
    }
    return data2017["CVE_Items"].slice(from,to);
}

exports.max = () => {
    return max;
}