export const setAlert = (payload, setData) => {
    setData((e) => ({ ...e, globalState: { ...e.globalState, message: payload.message, status: payload.status } }))
};

export const disableAlert = (setData) => {
    setData((e) => ({ ...e, globalState: { ...e.globalState, message: '', status: '' } }))
};