const BassUrl = 'http://localhost:3000'
const API={

    LOGIN_API : BassUrl + '/manager/api/login',
    ANALYSIS_USER_TODAY_DATA :  BassUrl + '/manager/api/analysis/user/today',
    ANALYSIS_USER_SELECT_DATA :  BassUrl + '/manager/api/analysis/user/',
    USER_ADDUSER :   BassUrl + '/api/user/adduser',
    USER_FINDUSER :   BassUrl +  '/api/user/findAllUser',
    USER_EDIT_ROLE :   BassUrl +  '/api/user/saveupdateuser'
}

export default API;