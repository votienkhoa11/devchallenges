const serviceRequest = async ({
    options = {},
    dispatch,
    serviceMethod,
    payload = {},
}) => {
    try {
        if(!options.skipLoader()) {

        }

        const serviceRequestResponse = await serviceMethod(payload);
        return serviceRequestResponse;
    } catch (err) {
        console.log(err)
    } finally {
        if (!options.skipLoader) {
            
        }
    }
}

export default serviceRequest