const runWithCheck = async <T>(parameter: any | any[] , throwError: string, errorMessage: string, fn: () => Promise<T> ) => {
    const params = Array.isArray(parameter) ? parameter : [parameter];

    if(params.some(p => !p)) {
        throw new Error(throwError);
    }
    
    try {
        const data = await fn();
        return { data };
    } catch(err: any) {
        return { error: errorMessage || err.message || 'Unexpected Error' };
    }
}

export default runWithCheck;