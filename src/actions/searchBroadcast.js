const SearchBroadcast=function(product){
    return({
        type:'SEARCH_PRODUCT',
        payload:product
    })
}
export default SearchBroadcast