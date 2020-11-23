module.exports = {
    success : (res, data) => {
        const resObject = {
            status : 200,
            data
        };
        res.json(resObject)
    },
    error: (res, err) => {
        const  error = {
            msg : 'Data Tidak Ditemukan',
            err
        }
        res.status(500).json(error)
    }
}