exports.validateGet = (stringFrom,stringTo,absParsedFrom,absParsedTo) => {
    if(absParsedFrom<absParsedTo && //from < to
        absParsedFrom>=0 && //from > 0
        stringFrom == absParsedFrom && //string == parsed
        stringTo == absParsedTo ){ //string == parsed
        return true;
    }else{
        return false;
    }
}
