exports.search = (query, dataRetriever) => {
    const max = dataRetriever.max();
    const data = dataRetriever.retrieve(0,max);
    let result = [];
    
    for(let i=0;i<max;i++){
        //entry contains the following
        if(data[i]['cve']['CVE_data_meta']['ID'].toLowerCase().includes(query.toLowerCase()) || // check the cve id for the query
            data[i]['cve']['description']['description_data'][0]['value'].toLowerCase().includes(query.toLowerCase())){ //check the description for the query
                result = result.concat(data[i]);//add to result list
        }
        if(result.length>1000){//too many results
            result = ["More than 1000 results, please narrow query"];
            break;
        }
    }

    if(result.length === 0){
        result = ["No results containing: \""+query+"\""];
    }
    
    return result;
}