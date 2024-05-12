class Helper {
    static isLogin(){
        let token=sessionStorage.getItem('token')
        if (token===null){
            return false
        }else {
            return true
        }

    }

    static isEmpty(value){
        if (value.length===0){
            return true
        }else {
            return false
        }
    }
    static tokenHeader(){
        return{
            headers: {
                'token': sessionStorage.getItem('token')
            }
        }
    }
    static Unauthorized(code){
        if(code===401){
            sessionStorage.clear();
            window.location.href="/login"
        }
    }
    static API_BASE="https://cart-api.teamrabbil.com/api"


}
export default Helper